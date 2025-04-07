const words = ["abs", "ace", "act", "add", "ado", "ads", "aft", "age", "ago", "aha", "ahi", "ahs", "aid", "ail", "aim", "air", "ale", "all", "alt", "amp", "and", "ant", "any", "ape", "app", "apt", "arc", "are", "ark", "arm", "art", "ash", "ask", "asp", "ass", "ate", "ats", "auk", "awe", "awl", "awn", "axe", "aye", "ays", "bad", "bae", "bag", "bah", "bam", "ban", "bar", "bat", "bay", "bed", "bee", "beg", "bet", "bib", "bid", "big", "bin", "bio", "bit", "boa", "bob", "bod", "bog", "boo", "bop", "bot", "bow", "box", "boy", "bra", "bro", "bub", "bud", "bug", "bum", "bun", "bur", "bus", "but", "buy", "bye", "bys", "cab", "cad", "cam", "can", "cap", "car", "cat", "caw", "cee", "chi", "cig", "cis", "cob", "cod", "cog", "con", "coo", "cop", "cot", "cow", "cox", "coy", "cry", "cub", "cud", "cue", "cum", "cup", "cut", "dab", "dad", "dam", "dan", "dap", "day", "dee", "den", "dew", "dib", "did", "die", "dig", "dim", "din", "dip", "dit", "doc", "doe", "dog", "doh", "don", "dot", "dow", "dox", "dry", "dub", "dud", "due", "dug", "duh", "duo", "dye", "ear", "eat", "ebb", "eco", "eek", "eel", "eff", "efs", "eft", "egg", "ego", "elf", "elk", "elm", "els", "emo", "ems", "emu", "end", "ens", "eon", "era", "ere", "err", "ess", "eta", "eve", "ewe", "eye", "fab", "fad", "fam", "fan", "far", "fat", "fax", "fed", "fee", "few", "fib", "fie", "fig", "fin", "fir", "fit", "fix", "flu", "fly", "fob", "foe", "fog", "foo", "for", "fox", "fro", "fry", "fun", "fur", "gab", "gad", "gag", "gal", "gap", "gar", "gas", "gay", "gee", "gel", "gem", "get", "gif", "gig", "gin", "gob", "god", "goo", "got", "gum", "gun", "gut", "guy", "gym", "had", "hag", "hah", "haj", "ham", "has", "hat", "haw", "hay", "hem", "hen", "her", "hes", "hew", "hex", "hey", "hid", "him", "hip", "his", "hit", "hob", "hoe", "hog", "hop", "hot", "how", "hub", "hue", "hug", "huh", "hum", "hut", "ice", "ick", "icy", "ids", "ifs", "ilk", "ill", "imp", "ink", "inn", "ins", "ion", "ire", "irk", "ism", "its", "ivy", "jab", "jag", "jam", "jar", "jaw", "jay", "jee", "jet", "jib", "jig", "jin", "job", "joe", "jog", "jot", "joy", "jug", "jut", "kay", "keg", "key", "kid", "kin", "kit", "lab", "lad", "lag", "lap", "las", "lat", "law", "lax", "lay", "led", "lee", "leg", "lei", "let", "lib", "lid", "lie", "lip", "lit", "lob", "log", "loo", "lop", "lot", "low", "lox", "lug", "lux", "lye", "mac", "mad", "mag", "man", "map", "mar", "mas", "mat", "maw", "max", "may", "med", "meg", "meh", "men", "met", "mew", "mic", "mid", "mix", "mob", "mod", "mol", "mom", "moo", "mop", "mow", "mud", "mug", "mum", "mut", "nab", "nag", "nah", "nap", "naw", "nay", "net", "new", "nib", "nil", "nip", "nit", "nix", "nod", "nog", "nor", "not", "now", "nub", "nun", "nut", "oaf", "oak", "oar", "oat", "odd", "ode", "off", "oft", "ohm", "ohs", "oil", "old", "ole", "one", "ons", "oof", "ops", "opt", "orb", "orc", "ore", "org", "ors", "our", "out", "ova", "owe", "owl", "own", "pad", "pal", "pan", "pap", "par", "pat", "paw", "pay", "pea", "pec", "pee", "peg", "pen", "pep", "per", "pet", "pew", "phi", "pho", "pic", "pie", "pig", "pin", "pip", "pit", "ply", "pod", "pom", "poo", "pop", "pot", "pow", "pox", "pro", "pry", "psi", "pub", "pug", "pun", "pup", "pur", "pus", "put", "qis", "rad", "rag", "rah", "ram", "ran", "rap", "rat", "raw", "ray", "red", "ref", "rep", "rev", "rho", "rib", "rid", "rig", "rim", "rip", "rob", "rod", "roe", "rot", "row", "rub", "rue", "rug", "rum", "run", "rut", "rye", "sac", "sad", "sag", "sap", "sat", "saw", "sax", "say", "sea", "see", "set", "sew", "sex", "she", "shy", "sic", "sim", "sin", "sip", "sir", "sis", "sit", "six", "ski", "sky", "sly", "sob", "sod", "sol", "son", "sop", "sot", "sow", "sox", "soy", "spa", "spy", "sty", "sub", "sue", "sum", "sun", "sup", "tab", "tad", "tag", "tan", "tap", "tar", "tat", "tau", "tax", "tea", "tee", "ten", "the", "thy", "tic", "tie", "tin", "tip", "tis", "tit", "toe", "tom", "ton", "too", "top", "tot", "tow", "toy", "try", "tub", "tug", "tux", "two", "ugh", "ump", "ums", "ups", "urn", "use", "van", "vat", "vax", "vee", "veg", "vet", "vex", "via", "vie", "vim", "vow", "wad", "wag", "wan", "war", "was", "wax", "way", "web", "wed", "wee", "wen", "wet", "who", "why", "wig", "win", "wit", "wiz", "woe", "wok", "won", "woo", "wow", "wry", "xis", "yah", "yak", "yam", "yap", "yaw", "yay", "yea", "yen", "yep", "yes", "yet", "yew", "yin", "yip", "you", "yow", "yum", "yup", "zag", "zap", "zas", "zee", "zen", "zig", "zip", "zit"];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
initial = [['M','A','G','A','I','R','D','D',''], ['M','A','D','A','E','R','E','F',''], ['M','A','D','O','E','B','E','N',''], ['A','B','C','D','E','F','G','H','']];
end = [['M','A','G','A','I','R','D','D',''], ['M','A','D','A','','E','R','E','F'],['M','A','D','O','','E','B','E','N'], ['A','B','C','D','E','F','G','H','']];
var counting = 0;


var movesNum = 0; // Number of moves initiated by the user
var startTime; // Start time of the game
var movescell = document.getElementById("movesnum"); // Element to display number of moves
var timerDisplay = document.getElementById("timer"); // Element to display the timer


var tiles = [];
var puzzleSize = 3; // Change puzzle size to 4x4

// Position of the empty tile
var emptyRow = puzzleSize;
var emptyCol = puzzleSize;

var timerStarted = false;
var timerInterval;

// Preload sounds
let bgMusic = new Audio('assets/bg.mp3');
let moveTileSound = new Audio('assets/tile.mp3');
let invalidMoveSound = new Audio('assets/error.mp3');
let congratsSound = new Audio('assets/congrats.mp3');
let buttonPressedSound = new Audio('assets/button.mp3');

// Play background music on loop
bgMusic.loop = true;

// Function to play audio and handle rapid clicks
function playSound(audio) {
    let sound = audio.cloneNode();
    sound.play();
}

// Initialize the puzzle
function initPuzzle() {
    var puzzleElement = document.getElementById("puzzle");
    puzzleElement.innerHTML = "";
    tiles = [];
    lightIndices = [];
    
    solvey = initial[counting%initial.length];
    //solvey = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
   
    for (var i = 0; i <= puzzleSize * puzzleSize - 2; i++) {
        var tile = document.createElement("li");
        tile.className = "Tile Tile" + solvey[i];
        tile.innerHTML = solvey[i];
        puzzleElement.appendChild(tile);
        tiles.push(tile);
    }

    emptyRow = puzzleSize;
    emptyCol = puzzleSize;

    randomizePuzzle();
}

// Check if the puzzle is solved
var isPuzzleSolved = function() {
    
    for (var i = 0; i < tiles.length; i++) {
        soln = end[counting%end.length];
        //soln = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
        var tile = tiles[i];
        lightIndices = [];
        //if (soln[i] !== tile.innerHTML){
         //   return false;
        //}

        p1 = '';
        p2 = '';
        p3 = '';
        p4 = '';
        p5 = '';
        p6 = '';
        p7 = '';
        p8 = '';
        p9 = '';
        for (var u = 0; u < tiles.length; u++) {
            if (parseInt(tiles[u].style.gridRow) === 1 && parseInt(tiles[u].style.gridColumn) === 1){
                p1 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 1 && parseInt(tiles[u].style.gridColumn) === 2){
                p2 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 1 && parseInt(tiles[u].style.gridColumn) === 3){
                p3 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 2 && parseInt(tiles[u].style.gridColumn) === 1){
                p4 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 2 && parseInt(tiles[u].style.gridColumn) === 2){
                p5 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 2 && parseInt(tiles[u].style.gridColumn) === 3){
                p6 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 3 && parseInt(tiles[u].style.gridColumn) === 1){
                p7 = tiles[u].innerHTML;
            }
            else if (parseInt(tiles[u].style.gridRow) === 3 && parseInt(tiles[u].style.gridColumn) === 2){
                p8 = tiles[u].innerHTML;
            }
            else {
                p9 = tiles[u].innerHTML;
            }

        }
        
        if (words.includes((p1+p2+p3).toLowerCase())) {
            lightIndices.push(0);
            lightIndices.push(1);
            lightIndices.push(2);
        }
        if (words.includes((p4+p5+p6).toLowerCase())) {
            lightIndices.push(3);
            lightIndices.push(4);
            lightIndices.push(5);
        }
        if (words.includes((p7+p8+p9).toLowerCase())) {
            lightIndices.push(6);
            lightIndices.push(7);
            lightIndices.push(8);
        }
        if (words.includes((p1+p4+p7).toLowerCase())) {
            lightIndices.push(0);
            lightIndices.push(3);
            lightIndices.push(6);
        }
        if (words.includes((p2+p5+p8).toLowerCase())) {
            lightIndices.push(1);
            lightIndices.push(4);
            lightIndices.push(7);
        }
        if (words.includes((p3+p6+p9).toLowerCase())) {
            lightIndices.push(2);
            lightIndices.push(5);
            lightIndices.push(8);
        }
        if (words.includes((p1+p5+p9).toLowerCase())) {
            lightIndices.push(0);
            lightIndices.push(4);
            lightIndices.push(8);
        }
        if (words.includes((p7+p5+p3).toLowerCase())) {
            lightIndices.push(6);
            lightIndices.push(4);
            lightIndices.push(2);
        }

        const uniqueArray = [...new Set(lightIndices)];
        const root = document.documentElement;
        const purpColor = getComputedStyle(root).getPropertyValue('--accent-purple-dark-mute');

        tiles.forEach(tile => {
            const ro = parseInt(tile.style.gridRow);
            const col = parseInt(tile.style.gridColumn);
            var pos = 0;
            if (ro === 1 && col ===1) {
                pos = 0;
            }
            else if (ro === 1 && col === 2) {
                pos = 1;
            }
            else if (ro === 1 && col === 3) {
                pos = 2;
            }
            else if (ro === 2 && col === 1) {
                pos = 3;
            }
            else if (ro === 2 && col === 2) {
                pos = 4;
            }
            else if (ro === 2 && col === 3) {
                pos = 5;
            }
            else if (ro === 3 && col === 1) {
                pos = 6;
            }
            else if (ro === 3 && col === 2) {
                pos = 7;
            }
            else {pos = 8;}
      
            if (uniqueArray.includes(pos)) {
                tile.style.borderColor = 'white';
            } 
            else {
                tile.style.borderColor = purpColor;
            }
          });
        
        const tileIndices = [];
        for (let j = 0; j < soln.length; j++){
            if (soln[j] === tile.innerHTML){
                tileIndices.push(j+1);
            }
        }
        var expectedPosit = [];
        for (let k = 0; k<tileIndices.length;k++){
            expectedRow = Math.ceil(tileIndices[k]/puzzleSize)
            expectedCol = tileIndices[k]%puzzleSize || puzzleSize
            expectedPosit.push([expectedRow, expectedCol]);
        }
        var currentRow = parseInt(tile.style.gridRow);
        var currentCol = parseInt(tile.style.gridColumn);
        var currentPosit = [currentRow, currentCol];

        if (!expectedPosit.some(row => row.length === currentPosit.length && row.every((value, index) => value === currentPosit[index]))){
            return False;
        }

    }
    return true;
};


// Randomize the puzzle ensuring it's solvable
var randomizePuzzle = function() {
    
    var solvableArrangement = generateRandomSolvableArrangement();

    // Apply the solvable arrangement to tiles
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].style.gridRow = solvableArrangement[i][0];
        tiles[i].style.gridColumn = solvableArrangement[i][1];
    }

    emptyRow = puzzleSize;
    emptyCol = puzzleSize;

    // Reassign event listeners after rearranging tiles
    tiles.forEach(function(tile) {
        tile.onclick = moveTile;
    });

    startTime = null; // Reset the start time
    timerDisplay.innerHTML = "0 seconds"; // Reset the timer display
    movesNum = 0; // Reset the moves count
    movescell.innerHTML = movesNum; // Update the moves count display
    clearInterval(timerInterval); // Clear any existing timer intervals
    timerStarted = false; // Reset the timer started flag
};

// Generate a solvable arrangement of tiles randomly
function generateRandomSolvableArrangement() {
    var solvedState = generateSolvedState();
    var solvableArrangement = shuffleArray(solvedState);

    // Ensure the generated arrangement is solvable
    while (!isSolvable(solvableArrangement)) {
        solvableArrangement = shuffleArray(solvedState);
    }

    return solvableArrangement;
}

// Helper function to generate a solved state array
function generateSolvedState() {
    var state = [];
    for (var i = 1; i <= puzzleSize; i++) {
        for (var j = 1; j <= puzzleSize; j++) {
            if (i === puzzleSize && j === puzzleSize) break; // Skip the last position
            state.push([i, j]);
        }
    }
    return state;
}

// Helper function to check if a given arrangement is solvable
function isSolvable(arrangement) {
    let inversions = 0;
    for (let i = 0; i < arrangement.length - 1; i++) {
        for (let j = i + 1; j < arrangement.length; j++) {
            let indexI = (arrangement[i][0] - 1) * puzzleSize + arrangement[i][1];
            let indexJ = (arrangement[j][0] - 1) * puzzleSize + arrangement[j][1];
            if (indexI > indexJ) inversions++;
        }
    }
    return inversions % 2 === 0;
}

// Fisher-Yates shuffle algorithm to shuffle the array
var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Move the tiles
var moveTile = function() {
    var thisRow = parseInt(this.style.gridRow);
    var thisCol = parseInt(this.style.gridColumn);

    if ((emptyRow === thisRow && Math.abs(emptyCol - thisCol) === 1) ||
        (emptyCol === thisCol && Math.abs(emptyRow - thisRow) === 1)) {
        // Move the tile
        this.style.gridRow = emptyRow;
        this.style.gridColumn = emptyCol;
        emptyRow = thisRow;
        emptyCol = thisCol;

        movesNum++;
        movescell.innerHTML = movesNum; // Update # of moves displayed

        playSound(moveTileSound); // Play move tile sound

        if (!timerStarted) {
            startTime = new Date(); // Start the timer
            updateTimer(); // Start updating the timer
            timerStarted = true; // Set the flag to indicate timer has started
        }

        if (isPuzzleSolved()) {
            showCongratsFrame();
            playSound(congratsSound); // Play congratulations sound
        }
    } else {
        playSound(invalidMoveSound); // Play invalid move sound
    }
};

// Show the congratulations frame
var showCongratsFrame = function() {
    if (!isPuzzleSolved()) {
        return; // Exit function if puzzle is not solved
    }
    
    clearInterval(timerInterval); // Stop the timer
    var endTime = new Date();
    var timeDiff = Math.round((endTime - startTime) / 1000); // Time in seconds
    var congratsFrame = document.getElementById("congratsFrame");
    var finalMoves = document.getElementById("finalMoves");
    var finalTime = document.getElementById("finalTime");

    finalMoves.innerHTML = movesNum;
    finalTime.innerHTML = timeDiff + " seconds";

    congratsFrame.style.display = "flex"; // Display the congrats frame
};


// Update the timer every second
var updateTimer = function() {
    timerInterval = setInterval(function() {
        var currentTime = new Date();
        var elapsedTime = Math.round((currentTime - startTime) / 1000); // Time in seconds
        timerDisplay.innerHTML = elapsedTime + " seconds";
    }, 1000);
};

// Assign event listeners
document.getElementById("newgame").onclick = function() {
    counting++;
    initPuzzle();
    playSound(buttonPressedSound);
};

document.getElementById("playAgain").onclick = function() {
    document.getElementById("congratsFrame").style.display = "none";
    randomizePuzzle();
    playSound(buttonPressedSound);
};

// Initialize the puzzle on page load
document.addEventListener("DOMContentLoaded", function() {
    initPuzzle();
    // Play background music on user interaction
    document.addEventListener('click', function() {
        bgMusic.play();
    }, { once: true }); // Ensure it runs only once
});

dragElement(document.getElementById("congratsFrame"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
