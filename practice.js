function findEvenorOdd(num) 
{
    if (num == 0) {
        console.log("The number is zero");
    }
    else if (num % 2 == 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}
findEvenorOdd(0);

console.log("Vishves".charAt(0));

function isSuperHero(name) {
    var firstLetter = name.charAt(0);
    if(firstLetter == "S")
    {
        console.log("Super Hero");
    }
    else{
        console.log("Not a Super Hero");
    }
}
isSuperHero("Rockstar")