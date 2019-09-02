// function constructData(name, age, meal) {
//     return {
//         name: name,
//         age: age,
//         gender: gender,
//         meal: function () {
//             console.log(meal);
//         }
//     }
// }
// function vendingMachine(money, numb) {

//     let items = [
//         {
//             name: "Lays",
//             price: 40
//         },
//         {
//             name: "Dairy Milk",
//             price: 100
//         },
//         {
//             name: "Cheetos",
//             price: 10
//         },
//         {
//             name: "Peanuts",
//             price: 17
//         },
//         {
//             name: "Slanty",
//             price: 15
//         },
//     ]

//     let requestItem = items[numb];
//     //console.log (requestItemss);
//     if (money > requestItem.price) {
//         return requestItem;
//     } else {
//         return null;
//     }
// }


// let human =  console.log("uzma",20 ,"femla","bargar");

// let idCard1 ={

//     name: "maria",
//     genger:"femlae",
//     bio:function(){
//         console.log(`${idCard1.name}`);
//     }
// } we will not use this for multiple id/cards 

function constructIdCard(stdName, stdGender, stdAge) {
    let obj = {

        name: stdName,
        gender: stdGender,
        stdIntrst: function () {
            console.log(`${this.name} is a student of Tech Karo`);
        }
    }
    return obj;
}
function constructCar(carName, carModel, carColor, carSize, carnumberPlate, carMaxSpeed, manufactoredDate) {

    let obj = {
        name: carName,
        model: carModel,
        color: carColor,
        size: carSize,
        number: carnumberPlate,
        speed: carMaxSpeed,
        Manufactored: manufactoredDate
    }
    return obj;
}

function constructColdDrink(coldDrnikName, coldDrinkPrice, coldDrinkBrand) {
    let coldDrink = {
        name: coldDrnikName,
        price: coldDrinkPrice,
        brand: coldDrinkBrand,
        vitamin: function () {
            console.log(`You will burn Vitamin after drink this ${this.name}`);
        }
    }
    return coldDrink;
}
let getDrink = constructColdDrink("Coca kola", 85, "PepsiCo");

function constructOilFactory(oilName, oilPrice, oilBrand,oilLiter,oilColor) {
    let oilFactory = {
        name: oilName,
        price: oilPrice,
        brand: oilBrand,
        litter: oilLiter,
        color:oilColor,
        havingVitamin: function () {
            console.log(`Having Omega 3 & 6. Havinganti-oxidants and Having Vitamins A,D & E ${this.name}`);
        }
    }
    return oilFactory;
}
let getOil = constructOilFactory("Afia Sunflower oil", 590, "Afia","1.8ltr","Light in Color");


function constructAirCooler(airCoolerName, airCoolerPrice, airCoolerBrand,airCoolerWarranty ,airCoolerCapacity) {
    let airCooler = {
        name: airCoolerName,
        price: airCoolerPrice,
        brand: airCoolerBrand,
        warranty:airCoolerWarranty,
        capacity:airCoolerCapacity,
        reviews: function () {
            console.log(`This is amazing may be lifetime air cooler ${this.name}`);
        }
    }
    return airCooler;
}
let getAirCooler = constructAirCooler("Ditron White Star Air Cooler", 10,800.00, "Miscellaneous","1 year","0.75 ton");