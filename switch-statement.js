// //Another perspective of switch-case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//Day of week
const dayOfWeek = 3;
if(dayOfWeek==1){
    console.log("Saturday")
}
else if(dayOfWeek==2){
    console.log("Sunday")
}
else if(dayOfWeek==3){
    console.log("Monday")
}
else if(dayOfWeek==4){
    console.log("Tuesday")
}
else if(dayOfWeek==5){
    console.log("Wednesday")
}
else if(dayOfWeek==6){
    console.log("Thursday")
}
else if(dayOfWeek==7){
    console.log("Friday")
}
else{
    console.log("Your entered day is not found");
}

//Swicth case

const day = 8;

switch(day){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Day not found!")
}

const lightCondition=false;

switch(lightCondition){
    case true:
        console.log("Light on!");
        break;
    case false:
        console.log("Light off");
        break;
    default:
        console.log("Your light may crashed")
}

switch(true){
    case lightCondition:
        console.log("light on!");
        break;
    default:
        console.log("Ops!")
}

function calcGrading(score){
    let gradingScore;
    switch(true){
        case (score <= 100 && score >= 90):
            gradingScore="A";
            break;
        case(score <= 89 && score >= 70):
            gradingScore="B";
            break;
        case(score <= 69 && score >= 60):
            gradingScore="C";
            break;
        case(score <= 59 && score >= 0):
            gradingScore="F";
            break;
        default:
            console.log("Invalid score!")
    }
    return `You got ${gradingScore} Grade`;
}

const firstPerson = calcGrading(95);
console.log(firstPerson);
const firstPerson2 = calcGrading(955);
console.log(firstPerson2);
const firstPerson3 = calcGrading(0);
console.log(firstPerson3);


//Food categorizing

function categorizedFruit(name){
    switch (name.toLowerCase()){
        case "apple":
        case "pear":
        case "banana":
            console.log(`${name} is  a common fruit`);
            break;
        case "orange":
        case "grapefruit":
            console.log(`${name} is a Lemon fruit`);
            break;
        default:
            console.log(`${name} is not recognized`);
    }
}
categorizedFruit("APPLE");