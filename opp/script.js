function constructData(name, age, meal) {
    return {
        name: name,
        age: age,
        gender: gender,
        meal: function () {
            console.log(meal);
        }
    }
}

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
function vendingMachine(money, numb) {

let items =[
    {
        name:"Lays",
        price :40
    },
    {
        name:"Dairy Milk",
        price :100
    },
    {
        name:"Cheetos",
        price :10
    },
    {
        name:"Peanuts",
        price :17
    },
    {
        name:"Slanty",
        price :15
    },
]

let requestItem = items[numb];
//console.log (requestItemss);
if (money > requestItem.price) {
    return requestItem;
} else {
return null;
}
}
