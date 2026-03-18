//const cardName = {name:"", src:"", traits:"", type:""}

const rabbit = {card:"I. THE RABBIT", src:"images/I_RABBIT.mp4", traits:"quickness, smallness, agility", type:"prey"};
const deer = {card:"II. THE DEER", src:"images/II_DEER.mp4",  traits:"beauty, innocence, fear", type:"prey"};
const lamb = {card:"III. THE LAMB", src:"images/III_LAMB.mp4",  traits:"docility, inevitability, affection", type:"prey"};
const rat = {card:"IV. THE RAT", src:"images/IV_RAT.mp4",  traits:"shame, secrecy, illness", type:"prey"};
const fly = {card:"V. THE FLY", src:"images/V_FLY.mp4",  traits:"scavenging, decay, finality", type:"prey"};

const cat = {card:"VI. THE CAT", src:"images/VI_CAT.mp4",  traits:"domesticity, instinct, insignificance", type:"predator"};
const snake = {card:"VII. THE SNAKE", src:"images/VII_SNAKE.mp4",  traits:"duality, deception, venom", type:"predator"};
const spider = {card:"VIII. THE SPIDER", src:"images/VIII_SPIDER.mp4",  traits:"patience, trickery, artistry", type:"predator"};
const wolf = {card:"IX. THE WOLF", src:"images/IX_WOLF.mp4",  traits:"kinship, terror, the night", type:"predator"};
const lion = {card:"X. THE LION", src:"images/X_LION.mp4",  traits:"pride, grandeur, leadership", type:"predator"};

const cardsList = [rabbit,deer,lamb,rat,fly,cat,spider,snake,wolf,lion];
let myArray = [];
let cardsArray = [];

function randomNumbers() {
  for (let i = 0; i < 3; i++) {
    while (!myArray[i]) {
      let newRandomInt = Math.floor(Math.random() * 10);
      if (!myArray.includes(newRandomInt)) {
        myArray.push(newRandomInt)
      }
    }
  }
}

randomNumbers()

for(let i = 0; i < 3; i++) {
    cardsArray.push(cardsList[myArray[i]]);
    console.log(cardsArray[i].card);
}

//assigning cards to video

pastVideo = document.getElementById('pastVideo');
presentVideo = document.getElementById('presentVideo');
futureVideo = document.getElementById('futureVideo');

let pastSrc = cardsArray[0].src;
let presentSrc = cardsArray[1].src;
let futureSrc = cardsArray[2].src;

$("#pastSource").attr("src", pastSrc);
$("#presentSource").attr("src", presentSrc);
$("#futureSource").attr("src", futureSrc);

pastVideo.load();
presentVideo.load();
futureVideo.load();


//recap

pastHead = document.getElementById('pastHead');
presentHead = document.getElementById('presentHead');
futureHead = document.getElementById('futureHead');

pastTraits = document.getElementById('pastTraits');
presentTraits = document.getElementById('presentTraits');
futureTraits = document.getElementById('futureTraits');

pastType = document.getElementById('pastType');
presentType = document.getElementById('presentType');
futureType = document.getElementById('futureType');

pastRecap = document.getElementById('pastRecap');
presentRecap = document.getElementById('presentRecap');
futureRecap = document.getElementById('futureRecap');

pastHead.textContent = cardsArray[0].card;
presentHead.textContent = cardsArray[1].card;
futureHead.textContent = cardsArray[2].card;

pastTraits.textContent = cardsArray[0].traits;
presentTraits.textContent = cardsArray[1].traits;
futureTraits.textContent = cardsArray[2].traits;

pastType.textContent = cardsArray[0].type;
presentType.textContent = cardsArray[1].type;
futureType.textContent = cardsArray[2].type;

$("#pastRecapVideo").attr("src", pastSrc);
$("#presentRecapVideo").attr("src", presentSrc);
$("#futureRecapVideo").attr("src", futureSrc);

pastRecap.load();
presentRecap.load();
futureRecap.load();