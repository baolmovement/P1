var $gameboard=$(".gameboard") 
var $m1=$(".m1")  
var $button=$("button") 
var $p1Score= $("#p1Score") 
var $p2Score=$("#p2Score")   
var $h3=$("h3")   
var boardSpots=$gameboard.children() 
var $rules=$(".rules") 
var $audio=$("audio") 

// $audio.slideUp()

$gameboard.slideUp() 


$button.on("click", function(){  
    $rules.fadeOut()
    $gameboard.slideDown() 
    $p1Score.text(0) 
    $p2Score.text(0) 
    rando();
}) 

$gameboard.on("click","img",function(){
    
})

const gameBoard = [
    { imgPath: "images/anniversary.png", pointValue: 500 }, 
    { imgPath: "images/badbusiness.png", pointValue: -2 },
    { imgPath: "images/balenciaga.png", pointValue: -1 },
    { imgPath: "images/brokenleg.png", pointValue: -2 },
    { imgPath: "images/burglar.png", pointValue: -2 },
    { imgPath: "images/cheating.png", pointValue: -500 },
    { imgPath: "images/doodle.png", pointValue: 3 },
    { imgPath: "images/fenderbender.png", pointValue: -2 },
    { imgPath: "images/grandma.png", pointValue: 1 },
    { imgPath: "images/hacker.png", pointValue: -2 },
    { imgPath: "images/hybrid.png", pointValue: 2 },
    { imgPath: "images/inherritance.png", pointValue: 3 },
    { imgPath: "images/joboffer.png", pointValue: 3 },
    { imgPath: "images/letgo.png", pointValue: -3 },
    { imgPath: "images/lotto.png", pointValue: 2 },
    { imgPath: "images/metermaid.png", pointValue: -1 },
    { imgPath: "images/movie.png", pointValue: 2 },
    { imgPath: "images/nigerianprincess.png", pointValue: -1 },
    { imgPath: "images/raffle.png", pointValue: 1 },
    { imgPath: "images/raise.png", pointValue: 2 },
    { imgPath: "images/taxaccountant.png", pointValue: 3 },
    { imgPath: "images/trump.png", pointValue: -1 },
    { imgPath: "images/vandal.png", pointValue: -1 },
    { imgPath: "images/vote.png", pointValue: -1 }, 
    { imgPath: "images/cheating.png", pointValue: -500 } 
]   

//remove random objects from object array 
//push those random objects into new object array called shuffleddeck  
//create new variable equal to "return shuffleddeck"
//append that variable onto $gameboard
function rando(){   
    var shuffledDeck=[] 
    for(var i=0;i<25;i++){  
        var randoNum=Math.floor(Math.random() * gameBoard.length) 
        let card = gameBoard.splice(randoNum,1) 
        shuffledDeck.push(card[0]);    
        let img=`<img src="${shuffledDeck[i].imgPath}">` 
        $gameboard.append(img)
    }
}
