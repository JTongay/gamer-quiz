(function () {

  $(function () {

    var numberCorrect = 0;
    var currentQuestion = 0;
    var previousQuestion = currentQuestion - 1;
    var allObjects = [{
      questionNum: 1,
      question: "What popular application is used, on PC exclusively, to buy and play games?",
      correctAnswer: 3,
      answers: ["Gears", "Clinker", "Oblivion", "Steam"],
      buttonCheck: ["#button0", "button1", "button2", "button3"],
      answerInfo: "Steam is well known for their ridiculous sales, twice a year, which gets gamers to be more inclined to try a new game they normally wouldn't."
    }, {
      questionNum: 2,
      question: "The logo below, is the logo for which popular shooter game across all platforms?",
      correctAnswer: 0,
      answers: ["Overwatch", "Team Fortress 2", "DOTA 2", "Destiny"],
      buttonCheck: ["#button0", "button1", "button2", "button3"],
      answerInfo: "Overwatch is a game from the company called Blizzard. It's other poplar games include: World of Warcraft, Diablo, and Starcraft."
    }, {
      questionNum: 3,
      question: "What is the name of this character, made popular in 'The Witcher' franchise?",
      correctAnswer: 1,
      answers: ["Dovahkin", "Geralt", "Artorias", "Garrosh"],
      buttonCheck: ["#button0", "button1", "button2", "button3"],
      answerInfo: "Geralt can use magic, as well as fight with two swords. One is for humans, the other is for monsters. He lives for being a bounty hunter."
    }, {
      questionNum: 4,
      question: "What is the name of this character, made popular in the 'Halo' series, on Xbox only?",
      correctAnswer: 0,
      answers: ["Master Chief", "Rodney", "Mister Guy", "Papa John"],
      buttonCheck: ["#button0", "button1", "button2", "button3"],
      answerInfo: "Master Chief is the main character in the 'Halo' franchise, and is quite possibly the most famous video game character in modern gaming."
    }, {
      questionNum: 5,
      question: "In the popular game 'Dark Souls', this character praises the sun. What is his name?",
      correctAnswer: 2,
      answers: ["Sif", "Onion Knight", "Solaire", "Cloud"],
      buttonCheck: ["#button0", "button1", "button2", "button3"],
      answerInfo: "In the game, you have the option to either save him or kill him. If you save him, he can help you fight the final boss, Gwyn."
    }];

    //EVENT HANDLERS FOR CLICKS
    $(document).on('click', '#start_button', startGame);
    $(document).on('click', '#start-over', overview);
    $('.questions').on('click', '#enter-answer', answerCheck);
    $(document).on('click', '#next', playGame);
    $('.scorescreen').on('click', '#restart-game', function (event) {
      restartGame();
      event.preventDefault();
    });





    function playGame() {
      if (currentQuestion < 4) {
        event.preventDefault();
        currentQuestion++;
        loadQuestion();
        loadAnswers();
        imageChange();

        $('.answer-expl').hide();
      } else {
        $('#next').text('Check Score');
        $('.questions').fadeOut();
        $('.scorescreen').fadeIn();
        checkScore();
      }
      event.preventDefault();
    }


    function startGame(e) {
      $('.intro').hide();
      $('.scorescreen').hide();
      $('.questions').show();
      $('.answer-expl').hide();
      loadQuestion();
      imageChange();
      loadAnswers();
      e.preventDefault;
    };

    function overview() {
      $('.questions').hide();
      $('.intro').show();

    };

    function loadQuestion() {

      var newQuestion = '<div class="question"><h1>' + allObjects[currentQuestion].question + '</h1></div>';
      $('.question').html(newQuestion);

    };

    function loadAnswers() {
      /*var answers = '<li id="button0"><input type="radio" name="answer" value="answer1">' + allObjects[currentQuestion].answers[0] + '</li><li id="button1"><input type="radio" name="answer" value="answer2">' + allObjects[currentQuestion].answers[1] + '</li><li id="button2"><input type="radio" name="answer" value="answer3">' + allObjects[currentQuestion].answers[2] + '</li><li id="button3"><input type="radio" name="answer" value="answer4">' + allObjects[currentQuestion].answers[3];
      $('.answers').html(answers);*/
      $('#answers').empty();
      for (var i = 0; i <= 3; i++) {
        document.getElementById('answers').innerHTML += '<li class="choices"><input type="radio" name="answer" value=' + i + '>' + ' ' + allObjects[currentQuestion].answers[i] + '</li>'
      }
    };

    function loadCorrectInfo() {
      var rightInfo = '<div class="show-expl"><p>' + ' CORRECT! ' + allObjects[currentQuestion].answerInfo + ' ' + '</p><button id="next">Next Question</button></div>';
      $('.show-expl').html(rightInfo);


    };

    function loadIncorrectInfo() {
      var wrongInfo = '<div class="show-expl"><p>' + ' INCORRECT! ' + allObjects[currentQuestion].answerInfo + ' ' + '</p><button id="next">Next Question</button></div>';
      $('.show-expl').html(wrongInfo);
    };

    function imageChange() {
      if (currentQuestion == 0) {
        $('#gameshow').css("backgroundImage", "url(images/steam-logo.jpg)");
      } else if (currentQuestion == 1) {
        $('#gameshow').css("backgroundImage", "url(images/overwatch-logo.png)");
      } else if (currentQuestion == 2) {
        $('#gameshow').css("backgroundImage", "url(images/geralt.jpg)");
      } else if (currentQuestion == 3) {
        $('#gameshow').css("backgroundImage", "url(images/halo-master-chief.jpg)");
      } else if (currentQuestion == 4) {
        $('#gameshow').css("backgroundImage", "url(images/solaire.jpg)");
      }
    };

    function answerCheck() {
      var answer = $("input[type='radio']:checked").val();
      event.preventDefault();
      if (answer == undefined) {
        alert("Please select an answer");
      } else if (answer == allObjects[currentQuestion].correctAnswer) {
        console.log("Correct!");
        $('input[type="radio"]').attr("disabled", true);
        numberCorrect++;
        $('.answer-expl').fadeIn();
        loadCorrectInfo();
        progressBar();


      } else {
        console.log("Wrong");
        $('input[type="radio"]').attr("disabled", true);
        $('.answer-expl').fadeIn();
        loadIncorrectInfo();
        progressBar();

      }
    };

    function progressBar() {
      if (currentQuestion == 0) {
        $('.inner').css("height", "20%");
      } else if (currentQuestion == 1) {
        $('.inner').css("height", "40%");
      } else if (currentQuestion == 2) {
        $('.inner').css("height", "60%");
      } else if (currentQuestion == 3) {
        $('.inner').css("height", "80%");
      } else if (currentQuestion == 4) {
        $('.inner').css("height", "100%");
      }
    };

    function checkScore() {
      var showScore = '<div class="score"><h2>' + 'You scored ' + numberCorrect + ' out of 5 correct! Wanna play again?' + '</h2></div>';
      $('.score').html(showScore);
    };

    function restartGame() {
      var numberCorrect = 0;
      var currentQuestion = 0;
      $('.intro').show();
      $('.scorescreen').hide();


    };
  });
})();
