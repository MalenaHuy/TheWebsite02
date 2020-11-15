function myFunction(){
    var text;

    var x = document.getElementById("guessField").value;
    var x = parseInt(x,10);

    var d = 100;

    if(isNaN(x) || x < 1 || x > 100){
        alert("Invalid input, please enter number 1 to 100")
        text="";
        document.getElementById("demo").innerHTML=text;
        document.getElementById("demo1").innerHTML=text;
    }else{
        if (x===d){
            text = "You've Read My Mind!";
            document.getElementById("demo").innerHTML=text;
            document.getElementById("demo").style.fontSize = "15px";
            document.getElementById("demo").style.color= "blue";
            text = "'Shoot for the Moon. Even if you miss, you will land among the Stars.' 😉"
            document.getElementById("demo1").innerHTML=text;
            document.getElementById("demo1").style.fontSize = "15px";
            document.getElementById("demo1").style.color= "green";
        }else{
            text = "Enter Higher Number!!!";
            document.getElementById("demo").innerHTML=text;
            document.getElementById("demo").style.fontSize = "15px";
            document.getElementById("demo").style.color= "blue";
            text = "";
            document.getElementById("demo1").innerHTML=text;
        }
    }
}