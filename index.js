
window.onload = (event) => {
    let player1 = Math.floor((Math.random() * 6) + 1);
    let player2 = Math.floor((Math.random() * 6) + 1);

    $(".img2").attr("src","images/dice" + player2 + ".png");
    $(".img1").attr("src","images/dice" + player1 + ".png");

    if (player1 < player2)
        document.getElementById("h1").innerHTML = "Player2 wins! 🎲";
 
    else if (player1 === player2)
        document.querySelector("h1").innerHTML = "Draw!";
    
    else 
        document.querySelectorAll("h1")[0].innerHTML = "🎲 Player1 wins!";
  };