function ready(){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1085036034808619008/PHbB1EgtjnSb4LaN0PTw9a7hNdqDk6hAk-dQ5Xj3OJnWuq47SQ3CKN80o_uBXkw1XPid");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Della",
        avatar_url: "",
        content: "I'm ready!"
    }

    request.send(JSON.stringify(params));

    let heart = document.getElementById("heart");

    heart.style = "z-index: -5;"

    localStorage.setItem("ready", 1);
}

let ityText = [
    "the most beautiful",
    "the most amazing",
    "the coolest",
    "the funniest",
    "the most caring",
    "the most genuine",
    "the best"
];
let ityIndex = 0;
function changeITYText(){
    ityIndex++;
    if(ityIndex == ityText.length) ityIndex = 0;
    let ity = document.getElementById("ity");
    ity.innerText = "I think you're " + ityText[ityIndex] + " girl I've ever met!"
}

window.onload = function(){
    if(localStorage.getItem("ready") == 1){
        let heart = document.getElementById("heart");

        heart.style = "z-index: -5;"
    }

    changeITYText();
    setInterval(changeITYText, 3500);
}
