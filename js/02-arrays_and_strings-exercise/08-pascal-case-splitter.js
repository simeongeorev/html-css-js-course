function solve(inputStr){
    splittedStr = inputStr.split(/(?=[A-Z])/);
    console.log(splittedStr.join(", "))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')