//global constants
var clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var oldDiff = "tut"; // stores the previous difficulty, its the tutorial by default

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
//SET DIFFICULTY FOR GAME
function setDifficult(btnName) {
  document.getElementById(oldDiff).classList.remove("selected");
  document.getElementById(btnName).classList.add("selected");
  oldDiff = btnName;
  stopGame(); //Just so that we cannot change difficulty mid way
  console.log("selected: " + btnName);
  createPattern(); // once we know the difficulty we need to create a pattern for that
}
//Based on the difficulty we change the pattern
function createPattern() {
  // Need to reset the pattern each time as an edge case
  // Reason: If one were to pick easy it would generate an easy pattern
  // then in the same instance they chose hard then it would add the 
  // hard pattern to the old pattern causing this sort of unnessary predictability
  pattern = [];
  if (oldDiff == "easy") {
    // reasonable clue reveal time
    clueHoldTime = 500;
    //Only shows 4 of the buttons for ease of use
    document.getElementById("button5").classList.add("hidden"); 
    document.getElementById("button6").classList.add("hidden");
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    //Randomly generates a button number and adds it to the pattern
    for (let i = 0; i < 6; i++) {
      pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log("easy difficulty loaded");
  } else if (oldDiff == "hard") {
    // A bit faster when it comes to revealing the pattern clues
    clueHoldTime = 300;
    // Adds two more buttons to create a higher difficulty
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    document.getElementById("button5").classList.remove("hidden");
    document.getElementById("button6").classList.remove("hidden");
    // same logic as before, this time we generate a random number 1-6
    // to account for the two new revealed buttons
    for (let i = 0; i < 8; i++) {
      pattern.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log("hard difficulty loaded");
  } else if (oldDiff == "insane") {
    // This is a really fast blink which should pose a challenge
    clueHoldTime = 150;
    // Shows all the buttons
    document.getElementById("button5").classList.remove("hidden");
    document.getElementById("button6").classList.remove("hidden");
    document.getElementById("button7").classList.remove("hidden");
    document.getElementById("button8").classList.remove("hidden");
    // Generates 10 moves from button 1-8 that the pattern will have
    for (let i = 0; i < 10; i++) {
      pattern.push(Math.floor(Math.random() * 8) + 1);
    }
    console.log("insane difficulty loaded");
  } else {
    // This is the tutorial initialization so simple hard coded pattern
    clueHoldTime = 1000;
    document.getElementById("button5").classList.add("hidden");
    document.getElementById("button6").classList.add("hidden");
    document.getElementById("button7").classList.add("hidden");
    document.getElementById("button8").classList.add("hidden");
    console.log("tutorial loaded");
    pattern = [1, 2, 3, 4];
  }
}
// Just some light hearted messages to keep the game lively when they win or lose
function loseGame() {
  stopGame();
  if (oldDiff == "easy") {
    alert(
      "Game Over. You lost at easy mode 😔 \nDont worry we know it was a misclick."
    );
  } else if (oldDiff == "hard") {
    alert("Game Over. You lost at hard mode 😔 \nYou'll get it the next time.");
  } else if (oldDiff == "insane") {
    alert("Game Over. You lost at insane mode 😔 \nIt is insane for a reason.");
  } else {
    alert(
      "Game Over. You lost 😔 \nRemember to repeat the pattern each round."
    );
  }
}

function winGame() {
  stopGame();
  // When they win I created a new css class to have a visual effect to show they triumphed
  // that specific difficutly hence the DOM.
  if (oldDiff == "easy") {
    alert("Game Over. You Beat Easy Mode!!!! \nWas that even a challenge?");
    document.getElementById("easy").classList.add("wonDifficulty");
  } else if (oldDiff == "hard") {
    alert(
      "Game Over. You Beat Hard Mode!!!! \nNot bad, didnt know you had it in you."
    );
    document.getElementById("hard").classList.add("wonDifficulty");
  } else if (oldDiff == "insane") {
    alert(
      "Game Over. You Beat Insane Mode!!!! \nYou really are insane (in a good way)"
    );
    document.getElementById("insane").classList.add("wonDifficulty");
  } else {
    alert("Game Over. You Beat The Tutorial! \nNow choose something harder");
    document.getElementById("tut").classList.add("wonDifficulty");
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    //console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  //Checks if guess is correct
  if (btn == pattern[guessCounter]) {
    //Checks if the turn is over
    if (guessCounter == progress) {
      //if progress is less than one
      console.log("progress: " + progress);
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 161.6,
  2: 229.6,
  3: 392,
  4: 466.2,
  5: 541.6,
  6: 619.4,
  7: 742,
  8: 866.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
