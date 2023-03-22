document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let teamResult;
  let q1Score;
  let q2Score;
  let q3Score;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let userQ1 = q1.value.toLowerCase();
    let userQ2 = q2.value.toLowerCase();
    let userQ3 = q3.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userQ1 === "morning") {
      q1Score = 4;
    }
    else if (userQ1 === "afternoon") {
      q1Score = 3;
    }
    else if (userQ1 === "night") {
      q1Score = 2;
    }
    else if (userQ1 === "midnight") {
      q1Score = 1;
    }


    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (userQ2 === "red") {
      q2Score = 3;
    }
    else if (userQ2 === "blue") {
      q2Score = 4;
    }

    else if (userQ2 === "orange") {
      q2Score = 2;
    }

    else if (userQ2 === "green") {
      q2Score = 1;
    }
    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (userQ3 === "silly") {
      q3Score = 3;
    }

    else if (userQ3 === "serious") {
      q3Score = 4;
    }

    else if (userQ3 === "dark") {
      q3Score = 3;
    }

    else if (userQ3 === "caring") {
      q3Score = 4;
    }



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let totalScore = q1Score + q2Score + q3Score;
    console.log(totalScore)

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    let teamResult = document.querySelector("imgSrc");
    teamResult.insertAdjacentHTML('beforeend', imgSrc);
    if (totalScore >= 5 && 6) {
      teamResult = "You are Whipsnakes lacrosse club! 🐍";
      imgSrc = "https://premierlacrosseleague.com/wp-content/uploads/2020/02/500x500_PLL_Teams_square_whipsnakes.png"
    }
    if (totalScore === 7 && 8) {
      teamResult = "You are Beans lacrosse club! 🫘";
      imgSrc = "https://premierlacrosseleague.com/wp-content/uploads/2020/03/beans_twitter.png"
    }
    if (totalScore === 9 && 10) {
      teamResult = "You are Chaos lacrosse club! 🦂";
      imgSrc = "https://flglacrosse.com/wp-content/uploads/2019/09/Chaos-Lgo.jpeg"
    }
    if (totalScore === 11) {
      teamResult = "You are Archers lacrosse club! 🏹";
      imgSrc = "https://premierlacrosseleague.com/wp-content/uploads/2020/02/500x500_PLL_Teams_square_archers.png"
    }
    else if (totalScore === 12) {
      teamResult = "You are Cannons lacrosse club! 💣";
      imgSrc = "https://www.usalaxmagazine.com/sites/default/files/images/articles/cannons-lc-logo.jpg"
    }
    console.log(teamResult)
    console.log(imgSrc)

    displayResult.innerHTML = teamResult

    //innerHTML or insertAdjacentHTML to show the teamResult and imgSrc to the page. imgSrc logs the image address - you'll need to somehow put that image address in an <img> tag. 

  }
}