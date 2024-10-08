const items=[
    {name:'Bike',price:100},
    {name:'TV',price:200},
    {name:'Album', price:10},
    {name:'Book', price:5},
    {name:'Computer',price:1000},
    {name:'keyboard',price:25}
]


//filter()
const filterItems=items.filter((item)=>{
    return item.price<100
});

console.log(items);
console.log(filterItems);


//map()
const itemPrices=items.map((item)=>{
    return item.price;
})

const itemNames=items.map((item)=>{
    return item.name;
})

console.log(itemNames)


//find()
const itemsFinding= items.find((item)=>{
     return item.name==='Book';
})

console.log(itemsFinding);


//forEach()
items.forEach((item)=>{
         console.log(item.price);   
})




//reduce
const total=items.reduce((currentTotal,item)=>{
    return item.price + currentTotal;
},0);               //reduce takes 2 params->the anonymous fucntion and a start point=0 from wherewe want tostart the sum


console.log(total);

//includes
const numArr=[2,3,4,5,6]
const includestwo= numArr.includes(2);
console.log(includestwo)


//some()
const hasInexpesiveThings=items.some((item)=>{
    return item.price>1000;
});

console.log('inexpesive things: ' + hasInexpesiveThings);

//every()

const person=[
    {
        name:'laksh',
        age:23
    },
    {
        name:'pooja',
        age:24
    },
    {
        name:'madhu',
        age:15
    },

    {
        name:'anuja',
        age:18
    },
    {
        name:'nandu',
        age:24
    },

]

// console.log(person);

const personAGe=person.some((a)=>{
    return (a.age>=18);
})
console.log(personAGe);

//every()

const personAge=person.every((a)=>{
    return (a.age<=18);
})
console.log(personAge);


