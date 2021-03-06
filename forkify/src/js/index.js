//API Key: efba9e8f33d10f17247629c53e5418c2
//API URL: https://www.food2fork.com/api/search

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import {elements, renderLoader,clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likeView';


/*Global state of the app
-Search Object
-Current recipes
-shopping list object
-liked recipes*/
const state = {};
window.state = state;
// 
// SEARCH CONTROLLER
// 
const controlSearch = async () => {
    //1. Get query from the view
    const query = searchView.getInput();
    if(query){
        //2. Create new Search object and save it to state.
        state.search = new Search(query);

        //3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.searchResult);
        
        try{
            //4. Search for recipes
            await state.search.getResult();
            
            //5. Render result in the UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch(error){
            alert('Somethng wrong with the Search... ');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();

});


elements.searchResultPages.addEventListener('click',e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResult();
        searchView.renderResults(state.search.result,goToPage);
    }
    
});

// 
// RECIPE CONTROLLER 
// 

const controlRecipe = async () =>{
    //Getting recipe ID from the URL0
    const id = window.location.hash.replace('#','');
    
    if(id){
        //1. Prepare UI for Recipe
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        
        //2. Create Recipe Object
        state.recipe = new Recipe(id);
        
        //3. Get Recipe
        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
    
            //4. Get Time and Servings
            state.recipe.calculateTime();
            state.recipe.calculateServings();
    
            //5. Render Results
            clearLoader();
            recipeView.renderRecipe(state.recipe,state.likes.isLiked(id));
            }catch (error){
                console.log(error);
                alert('Error processing Recipes :( ');
        }
    }
}
['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));


// 
// LIST CONTROLLER
// 

const controlList = () => {
    //Create a new List if it is not exist
    if(!state.list) state.list = new List();

    // Add each ingredient to the list
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// 
// LIKES CONTROLLER
// 

const controlLikes = () => {
    
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    
    // When user has not liked the current recipe
    if(!state.likes.isLiked(currentID)){
        // Addnew like to the state
        const newLike = state.likes.addLike(currentID, state.recipe.title, state.recipe.author, state.recipe.image);

        // Toggle the like button
        likeView.toggleLikeBtn(true);
        
        //Add Like to the UI List
        likeView.renderLike(newLike);
        
    } else {
        // Remove like from the state
        state.likes.deleteLike(currentID);
        // Toggle the like button
        likeView.toggleLikeBtn(false);
        
        // Remove the like from the UI
        likeView.deleteLike(currentID);
        
    }
    likeView.toggleLikeMenu(state.likes.getNumLikes());

}

window.addEventListener('load' ,() => {
    state.likes = new Likes();

    // Restore Likes Data
    state.likes.readData();

    // Toggle Like's menu button
    likeView.toggleLikeMenu(state.likes.getNumLikes());

    //Render Data to the UI
    state.likes.likes.forEach(like => likeView.renderLike(like));

});


// Handling Shopping list buttons
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // handle delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem(id);

        listView.deleteItem(id);
    }
    // Handle quantity button
    else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value,10);
        state.list.updateCount(id,val);        
    }
});


//Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        //Decrease button is clicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if(e.target.matches('.btn-increase, .btn-increase *')){
        //Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        controlLikes();
    }
});

window.l = new List();