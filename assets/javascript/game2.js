window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Answer Array
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Empty array to store guessed letters
  var lives ;             // Total lives in game
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var showLives = document.getElementById('GuessRemain');



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('guessedLetters');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  

// decriment user guesses, give them a total amount of guesses
   result = function () {
    wordHolder = document.getElementById('currentWord');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives remaining";
    if (lives < 1) {
      showLives.innerHTML = "Sorry you lose!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win! Well Done";
      }
    }
  }


  // OnClick Function 
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // Play Again button to refresh the game and start over - win or lose
  playGame = function () {
    categories = [
        ["notorius-big", "tupac", "eminem", "snoop-dogg", "grandmaster-flash", "run-dmc", "wu-tang-clan","redman","mc-lyte"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    // console.log(word); // allows you to see the random word for debugging purposes
    buttons();

    guesses = [ ];
    lives = 7;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  playGame();
  

   // Reset

  document.getElementById('newGame').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    playGame();
  }
}


