function printLeftTriangle(n){
    for(let i = 1; i <= n; i++){
        let star = "* ".repeat(i);
        console.log(star)
    }
}

// *************************************************************************

function printInverseLeftTriangle(n){
    for(let i = n; i >= 1; i--){
        let star = "* ".repeat(i);
        console.log(star)
    }
}

// *************************************************************************

function printPyramid(n){
    for (let i = 1; i <= n; i++){
        let space = "  ".repeat(n - i);
        let star = "* ".repeat(2 * i - 1);
        console.log(space + star)
    }
}



function printTree(n){
    for (let i = 1; i <= n; i++){
        let space = "  ".repeat(n - i);
        let star = "* ".repeat(2 * i - 1);
        console.log(space + star)
    }
    for (let i = 1; i <= n; i++){
        let space = "  ".repeat(n - i);
        let star = "* ".repeat(2 * i - 1);
        console.log(space + star)
    }
    for (let i = 1; i <= n; i++){
        let space = "  ".repeat(n - 1);
        let star = "*".repeat(1);
        console.log(space + star)
    }
}

printLeftTriangle(5)
console.log("******************************************************************************")
printInverseLeftTriangle(5)
console.log("******************************************************************************")
printPyramid(8)
console.log("******************************************************************************")
printTree(8)



function printNums(n){
    for(let i = 1; i <= n; i++){
        let star = "";
        for(let j = 1; j <= i; j++){
            star += j + " ";
        }
        console.log(star)
    }
}
function printPyramidNums(n){
    for(let i = 1; i <= n; i++){
        let space = ''
        for(let j = i; j < n; j++){
            space += "  "
        }
        let star = ""
        for(let j = 1; j <= 2 * i - 1; j++){
            star += j + " "
        }
        console.log(space + star)
    }
}
printNums(5)
console.log("******************************************************************************")
printPyramidNums(5)