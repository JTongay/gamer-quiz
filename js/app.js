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

    //$(document).on('click', '#start_button', startGame);
    //$('.questions').on('click', '#start-over', startOver)
    /*$(document).on('click', '#start_button', function (e) {
      $('.intro').hide();
      $('.questions').show();
      loadQuestion();
      //imageChange();
      loadAnswers();
      e.preventDefault;
    });*/
    $(document).on('click', '#start_button', startGame);
    $(document).on('click', '#start-over', startOver);






    function startGame(e) {
      $('.intro').hide();
      $('.questions').show();
      loadQuestion();
      //imageChange();
      loadAnswers();
      e.preventDefault;
    };

    function startOver() {
      $('.questions').hide();
      $('.intro').show();
    };

    function loadQuestion() {
      var newQuestion = '<span id="question-gen">' + allObjects[currentQuestion].question + '</span>';
      $('.question').html(newQuestion);
    };

    function loadAnswers() {
      var answers = '<li id="button0"><input type="radio" name="answer" value="answer1">' + allObjects[currentQuestion].answers[0] + '</li><li id="button1"><input type="radio" name="answer" value="answer2">' + allObjects[currentQuestion].answers[1] + '</li><li id="button2"><input type="radio" name="answer" value="answer3">' + allObjects[currentQuestion].answers[2] + '</li><li id="button3"><input type="radio" name="answer" value="answer4">' + allObjects[currentQuestion].answers[3];
      $('.answers').html(answers);
    };

  });

})();
