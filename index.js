// function findMatching (array0, string0) {
//     const newArray0 = new Array();

//     for (const d of array0) {
//         if (d === string0 || d === string0.toLowerCase()) {
//             newArray0.push(d);
//         }
//     }
//     return newArray0;
// }

function findMatching(array0, string0) {
    return array0.filter(function (string1) {
        return (string1 === string0 || string1 === string0.toLowerCase());
    })
}
// function fuzzyMatch (array1, string1) {
//     const newArray1 = new Array();

//     for (const d of array1) {
//         let a = Math.round(d.length/3);
//         if (d.slice(0,a) === string1) {
//             newArray1.push(d);
//         }
//     }
//     return newArray1;
// }

function fuzzyMatch(array1,string2) {
    return array1.filter( function (string3) {
        console.log(string3.slice(0,Math.round(string3.length/3)));
        console.log(string3.slice(0,Math.round(string3.length/3)) === string2)
        return string3.slice(0,Math.round(string3.length/3)) === string2;
    })
}

// function matchName (array2, string2) {
//     let answer = new Array();
//     for (let element0  of  array2) {
//         if ((Object.values(element0))[0] === string2){
//             answer.push (element0);
//         }
//     }
//     return answer;
// }

function matchName(array2, string4) {
    return array2.filter(function(string5) {
        return (Object.values(string5))[0] === string4;
    })
}
