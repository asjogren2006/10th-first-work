function getData() {
    var food = document.getElementById("food").value;
    var place = document.getElementById("place").value;
    var thing = document.getElementById("thing").value;
    var person = document.getElementById("person").value;

    document.getElementById("sentence").innerHTML = sentence(food, place, thing, person)
    
    return [food, place, thing, person]
}

function sentence(food, place, thing, person) {
    sentenceArray = [`Today, I ate ${food} at a ${place} after I went shopping
    and bought a ${thing}. I did this all with my friend ${person}.`, `When I woke up,
    I saw ${person} standing over me with a ${thing} in their hand! I threw a box of
    ${food} on them and realized this was the person I met at ${place}. The creepy
    one.`, `On a very normal day, ${person} was caught hitting people with a ${thing}
    Outside of the local ${place}.The cops got them to stop by bribing them with ${food} `]



    ranN = Math.floor(Math.random() * sentenceArray.length)


    return sentenceArray[ranN];


}



//second game

var a = [1, 2, 4, 9]


var wordArr = [
    {
        word: "monitor",
        hint: "used to display"
    },
    {
        word: "house",
        hint: "something you live in"
    },
    {
        word: "pets",
        hint: "something to keep you company"
    },
    {
        word: "candy",
        hint: "something sweet"
    }
]

var rN = Math.floor(Math.random() * wordArr.length)

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;

document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;

var w = document.getElementById("word");

var splitWord = word.split("");

var emptySplitWord = [];

var correct = []

var counter = word.length + 2   

document.getElementById("Wrong").innerHTML = counter

for (i = 0; i < splitWord.length; i++) {
    emptySplitWord[i] = "-";
    document.getElementById("word").innerHTML = emptySplitWord.join(" ")
}

function enterLetter() {
    var letter = document.getElementById("letter").value;

    for (x = 0; x < splitWord.length; x++){
        if (letter == splitWord[x]) {
            emptySplitWord[x] = letter;
            w.innerHTML = emptySplitWord.join(" ");
            correct.push(1);
        } else {
            document.getElementById("letter").value = "";
        }
    }

    if (correct.length == emptySplitWord.length) {
        alert("You win!")
    } else if (counter > 1) {
        counter -= 1;
        document.getElementById("Wrong").innerHTML = counter;
    } else if (counter == 1) {
        alert("You lost.")
    }

    




}
