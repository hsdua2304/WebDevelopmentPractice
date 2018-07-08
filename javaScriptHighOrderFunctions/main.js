const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   forLoop
//   for(let i = 0; i < companies.length; i++){
//       console.log(companies[i]);
//   }
  
// ForEach Loop
// companies.forEach(function(company){
//     console.log(company);
// });

// Filter
// Get 21 and Older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(`Traditional Loop : ${canDrink}`);

// const canDrink1 = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })

// console.log(`Filter condition : ${canDrink1}`);

// const canDrink2 =  ages.filter(age => age >= 21);
// console.log(`ES6 syntax method : ${canDrink2}`);

// Filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// console.log(`Using filter function :`);
// console.log(retailCompanies);

// const retailCompanies2 = companies.filter(company => company.category === 'Retail');
// console.log(`Using ES6 syntax : ${retailCompanies2}`);

// Get 80s companies

// const eightiesCompanies = companies.filter(function(company){
//     if(company.start >= 1980 && company.start < 1990){
//         return true;
//     }
// });

// console.log(`COmpanies established in 80's :`); 
// console.log(eightiesCompanies);

// const eightiesComapnies1 = companies.filter(company => company.start>=1980 && company.start < 1990);
// console.log('Using ES6 filter function : ');
// console.log(eightiesComapnies1);

// Lasted 10 years and more
// const lastedTenYears = companies.filter(function(company){
//     if(company.end - company.start >=10){
//         return true;
//     }
// });

// console.log('Lasted 10 years : ');
// console.log(lastedTenYears);

// const lastedTenYears1 = companies.filter(company => company.end - company.start >= 10);
// console.log('ES6 function lasted for more then 10 years : ');
// console.log(lastedTenYears1);

// Difference between const, let and var
// function getClothing(isCold) {
//     if (isCold) {
//       const freezing = 'Grab a jacket!';
//     } else {
//       const hot = 'It’s a shorts kind of day.';
//       console.log(freezing);
//     }
//   }

//   getClothing(false);

// MAP

// Create array of company names

// const companyNamesMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(companyNamesMap);

// // ES6 Version
// console.log('--------ES6Version----------');
// const companyNamesES6 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNamesES6);


// const ageMap = ages
//     .map(age => age*age)
//     .map(age => Math.sqrt(age));

// console.log(ageMap);

// SORT

// SORT COMPANIES BY START YEAR
// const sortedCompanies = companies.sort(function(c1,c2){
//     // return c1.start > c2.start;

//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// console.log(sortedCompanies);

// // ES6 Version
// console.log('ES6 Version');
// const sortedCompaniesES6 = companies.sort((c1,c2) => c1.start>c2.start ? 1 : -1);
// console.log(sortedCompaniesES6);

// Sort Ages

// const sortAges = ages.sort(function(a,b){
//     // return a>b;
//     if(a>b){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortAges);

// //ES6 Version

// const sortAgesES6 = ages.sort((a,b) => a>b?1:-1);
// console.log(sortAgesES6);

// REDUCE

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0);

// const ageSum = ages.reduce((total,age) => total + age,0);

// console.log(ageSum);

// Get total years for all companies

// const totalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// },0);


// const totalYears = companies.reduce((total,company) => total + (company.end-company.start),0);

// console.log(totalYears);

// Combine Methods

// const combined = ages
//   .map(age => age*2)
//   .filter(age => age >= 40)
//   .sort((a,b) => a-b)
//   .reduce((a,b) => a+b,0)

//   console.log(combined);