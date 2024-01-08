// Code your solution in this file!

let hq = 42;
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return (distance - 42);
    }
    else {
        return (42 - distance);
    }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(distance) {
    return (distanceFromHqInBlocks(distance) * 264);

}

console.log(distanceFromHqInFeet());


function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        return ((num1 - num2) * 264);
    }
    else if (num2 > num1) {
        return ((num2 - num1) * 264);
    }
    
}



function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(start - destination) * 264;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 2) * 0.01;
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}