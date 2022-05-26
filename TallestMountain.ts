interface Mountain{
    name: string
    height: number
}

let mountains: Mountain[] = [
    {name: "Kilamanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];




function findNameOfTallestMountain(mountians) : string {
    let output : number  = Math.max(mountians[0].height, mountians[1].height, mountians[2].height);
    if (output === 19341){
        return mountians[0].name;
    }
    else if (output === 29029){
        return mountians[1].name;
    }
    else {
        return mountians[2].name;
    }
}


let tallest:Mountain["name"] = findNameOfTallestMountain(mountains);
console.log(tallest);



interface Product{
    name: string
    price: number
}

let products: Product[] = [
    {name: "Baseball", price: 4.99},
    {name: "Jetski", price: 8000},
    {name: "Book", price: 29.95},
    {name: "Shirt", price: 11.99},
    {name: "Fan", price: 25.00},
];

function calcAverageProductPrice(productArray: Product[]): number {
    let averagePrice: number = 0;

    productArray.forEach(product => { // Sums all prices.
        averagePrice += product.price
    });
    averagePrice = averagePrice / productArray.length; 
    averagePrice = Math.round(averagePrice * 100) / 100; 

    return averagePrice;
}

let average: number = calcAverageProductPrice(products);
console.log(average);


interface Inventory{
    product: Product
    quantity: number
}

let inventory: Inventory[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

function calcInventoryValue(inventory: Inventory[]): number{
    let totalValue: number = 0;

    inventory.forEach(item => {
        totalValue += item.product.price * item.quantity;
    });

    return totalValue;
}

let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);




// function findNameOfTallestMountain(mountains: Mountain[]): string {
// for(let i =0: i < mountains.length; i++){
//     if (i .)
// mountains
// }
//     }

// return largest;
// console.log()
// if (mountain.height > largest.height){
//     largest = mountain;

// function findNameOfTallestMountain(mountains: Mountain[]): Mountain["name"]
// {
// 	let tallest = Math.max.apply(Math, array.map(function))
// 	return tallest;
//     console.log(tallest)
// }

// function findNameOfTallestMountain(mountians) : string {
//     let output : number  = Math.max(mountians[0].height, mountians[1].height, mountians[2].height);
//     if (output === 19341){
//         return mountians[0].name;
//     }
//     else if (output === 29029){
//         return mountians[1].name;
//     }
//     else  (output === 20310){
//         return mountians[2].name;
//     }
// }

// function findNameOfTallestMountain(mountains: Mountain[]): string{
//     let tallestMountain = mountains[0]; 

//     mountains.forEach(m => {
//         if (m.height > tallestMountain.height) {
//             tallestMountain = m;
//         }
//     });
    
//     return tallestMountain.name;
// }
