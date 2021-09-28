var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
    }
    return chocolates;
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let arr = [];
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    } else if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {

        for (let i = 0; i < number; i++) {
            arr[i] = chocolates[i];
            chocolates.unshift();
        }
    }
    return arr;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let arr = [];
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    } else if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (let i = 0; i < number; i++) {
            arr[i] = chocolates.pop();
        }

    }
    return arr;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {

    var a3 = [];
    if (chocolates.length < number) {
        return "Insufficient chocolates in the dispenser";
    } else if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {
        let p = 0;
        for (let i = chocolates.length - 1; i >= 0; i--) {
            if (chocolates[i] == color) {
                a3[p] = color;
                chocolates.splice(i, 1);
                p++;

            }
            if (p >= number) {
                break;
            }

        }

    }
    return a3;
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    if (chocolates.length == 1) {
        return [1];
    } else {
        var a4 = {
            "green": 0,
            "silver": 0,
            "blue": 0,
            "crimson": 0,
            "purple": 0,
            "red": 0,
            "pink": 0

        };
        for (let i = 0; i < chocolates.length; i++) {
            a4[chocolates[i]]++;
        }
        var ct = [];
        var s = 0;
        for (const j in a4) {
            if (a4[j] > 0) {
                ct[s] = a4[j];
                s++;
            }
        }
    }
    return ct;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolate) {
    let arr = []
    let output = []
    let uniquearr = [...new Set(["purple", "silver", "red", "crimson", "blue", "green", "pink"])]
    for (const i of uniquearr) {
        let count = 0
        for (const j of chocolate) {
            if (i === j)
                count += 1
        }
        arr.push([i, count])
    }
    arr.sort(function(a, b) {
        return b[1] - a[1]
    })
    console.log(arr)
    for (const i of arr) {
        let x = 0
        for (let index = 0; index < i[1]; index++) {
            output.push(i[0])
        }
    }
    console.log(output)
    return output
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else if (finalColor === color) {
        return "Can't replace the same chocolates";
    } else {
        let p = 0;
        for (let i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == color) {
                chocolates[i] = finalColor;
                p++;
            }
            if (p >= number) {
                break;
            }
        }
    }
    return chocolates;
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalcolor) {
    let a6 = [...new Set(chocolates)]

    if (chocolates.length === 0)
        return new Array(0, chocolates)
    else if (a6.length === 1) {
        if (a6[0] === finalcolor)
            return "Can't replace the same chocolates"
        else {
            chocolates[0] = finalcolor
            return new Array(1, chocolates)
        }
    } else {
        let ct = 0
        for (let i = 0; i < chocolates.length; i++) {
            const e = chocolates[i]
            if (e === color) {
                chocolates[i] = finalcolor
                ct++
            }
        }
        return new Array(chocolates.length - ct, chocolates)
    }
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed