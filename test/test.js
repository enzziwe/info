function clickCube(){
    var white=getRandomInt(225);
    var purple=getRandomInt(225);
    var grey=getRandomInt(225);
    console.log(white, purple, grey);
    document.getElementById("cube").style.backgroundColor="rgb("+ white +","+ purple +","+ grey + ")"


    "0 0 25px rgba("+ white +","+ purple +","+ grey +", 1), " +
    "0 0 50px rgba("+ white +","+ purple +","+ grey +", 1), " +
    "0 0 100px rgba("+ white +","+ purple +","+ grey +", .75), " +
    "0 0 200px rgba("+ white +","+ purple +","+ grey +", .5), " +
    "0 0 300px rgba("+ white +","+ purple +","+ grey +", .25) "

    var boo=getRandomInt(200);
    var boob=getRandomInt(200);

    var storonaOne= boo + "px" ;
    var storonaTwo= boob + "px" ;

    var goop=getRandomInt(225);

    var bloop=getRandomInt(50);

    
var rad= bloop + "px";
    document.getElementById("cube").style.border=" 5px solid rgb("+ goop +","+ purple +","+ grey + ")"
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.width=storonaTwo;
    document.getElementById("cube").style.borderRadius=rad;
}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

