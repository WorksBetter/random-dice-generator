randomNumber1 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1.toString() + ".png");

randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2.toString() + ".png");

headingTag = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  headingTag.textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
  headingTag.textContent = "🚩Player 2 Wins!";
} else {
  headingTag.textContent = "Its a Draw! 📍";
}
