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

var rN = Math.floor(Math.Random() * wordArr.length)