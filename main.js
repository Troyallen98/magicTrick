const p = document.getElementById('paragraph');
const nextBtn = document.getElementById('nextBtn');
const goBtn = document.getElementById('goBtn');
const head = document.getElementById('head');
const resetBtn = document.getElementById('resetBtn')
const list = document.getElementById('list');
var currentPage = 0;

let randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

let pageState = [
    {
        head: "I can read your mind",
        nextBtn: "hidden",
        goBtn: "visable",
        resetBtn: "hidden",
        p: " ",
        list: "hidden",
    },
    {
        head: "Pick a number from 01-99",
        nextBtn: "visable",
        goBtn: "hidden",
        resetBtn: "visable",
        p: "When you have your number \n click next",
        list: "hidden"
    },
    {
        head: "Add both digits together to get a new number",
        nextBtn: "visable",
        goBtn: "hidden",
        resetBtn: "visable",
        p: "Ex: 14 is 1 + 4 = 5 \n click next to proceed",
        list: "hidden"
    },
    {
        head: "Subtract your new number from the original number ",
        nextBtn: "visable",
        goBtn: "hidden",
        resetBtn: "visable",
        p: "Ex: 14 - 5 = 9 \n click next to proceed",
        list: "hidden"
    },
    {
        head: "hidden",
        nextBtn: "visable",
        goBtn: "hidden",
        resetBtn: "visable",
        p: "Find your new number. \n Not the symbol beside the number",
        list: "visable"
    },
    {
        head: "&",
        nextBtn: "hidden",
        goBtn: "hidden",
        resetBtn: "visable",
        p: "Your symbol is: \n &",
        list: "hidden"
    }
];

window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded DOM");
    showPage();
});

function showPage() {
    const currentState = pageState[currentPage];
    head.textContent = currentState.head;
    goBtn.visabilty = currentState.goBtn;
    resetBtn.visabilty = currentState.resetBtn;
    nextBtn.visabilty = currentState.nextBtn;
    p.textContent = currentState.p;
    list.visabilty = currentState.list;
    orderedList(amountOfDigits + " - " + numberResults);
    console.log("updated page", { currentPage });
}
//visable on [1-4]
nextBtn.addEventListener("click", function () {
    console.log("in next button");
    if (pageState[1] == true) {
        currentPage.visability = "hidden";
    }
    currentPage++;
    showPage();

})
goBtn.addEventListener("click", function () {
    console.log("in go button");
    currentPage++;
    showPage();
})
resetBtn.addEventListener("click", function () {
    console.log("in reset button");
    currentPage = 0;
    showPage();
})

function orderedList() {
    let amountOfDigits = 99;
    for (i = 0; i <= amountOfDigits; i++) {
        let numberResults = '';
        let characters = randomSymbol;
        let characterLength = characters.length;
        for (let i = 0; i < characterLength; i++) {
            numberResults += characters.charAt(Math.floor(Math.random() * characterLength));
        }
        return(numberResults);
    }
}

console.log("finish javascript");