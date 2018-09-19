import axios from 'axios';
import {key,url} from '../config';

export default class Search{
    constructor(query){
        this.query = query;
        // this.result = null;
    }

    async getResult(){

        try{
            const res = await axios(`${url}search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error){
            alert(error);
        }   
    }

}