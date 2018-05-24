//Global Player Variables & Functions
var player1 = {
    name: "PLAYER 1",
    score: 0,
    scoreBoard: $("#p1Score") 
}
var player2 = {
    name: "PLAYER 2",
    score: 0,
    scoreBoard: $("#p2Score") 
}
var currentPlayer = player1 
function switchTurns() {
    if(currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}
//Global Announcement Variables 
var $announcement=$("#Announcement")
// Global Gameboard Variables
var $gameboard=$(".gameboard") 
var $m1=$(".m1")  
var $button=$("button") 
var $h3=$("h3")    
var $rules=$(".rules")  
var music = new Audio("audio/FrankSinatra-LoveAndMarriage(+lyrics)[HD].mp3") 
// var gameBoard = [
//     { imgPath: "images/anniversary.png", pointValue: 500 }, 
//     { imgPath: "images/badbusiness.png", pointValue: -2 },
//     { imgPath: "images/balenciaga.png", pointValue: -1 },
//     { imgPath: "images/brokenleg.png", pointValue: -2 },
//     { imgPath: "images/burglar.png", pointValue: -2 },
//     { imgPath: "images/cheating.png", pointValue: -500 },
//     { imgPath: "images/doodle.png", pointValue: 3 },
//     { imgPath: "images/fenderbender.png", pointValue: -2 },
//     { imgPath: "images/grandma.png", pointValue: 1 },
//     { imgPath: "images/hacker.png", pointValue: -2 },
//     { imgPath: "images/hybrid.png", pointValue: 2 },
//     { imgPath: "images/inherritance.png", pointValue: 3 },
//     { imgPath: "images/joboffer.png", pointValue: 3 },
//     { imgPath: "images/letgo.png", pointValue: -3 },
//     { imgPath: "images/lotto.png", pointValue: 2 },
//     { imgPath: "images/metermaid.png", pointValue: -1 },
//     { imgPath: "images/movie.png", pointValue: 2 },
//     { imgPath: "images/nigerianprincess.png", pointValue: -1 },
//     { imgPath: "images/raffle.png", pointValue: 1 },
//     { imgPath: "images/raise.png", pointValue: 2 },
//     { imgPath: "images/taxaccountant.png", pointValue: 3 },
//     { imgPath: "images/trump.png", pointValue: -1 },
//     { imgPath: "images/vandal.png", pointValue: -1 },
//     { imgPath: "images/vote.png", pointValue: -1 }, 
//     { imgPath: "images/cheating.png", pointValue: -500 } 
// ]     



//Automatic Settings
$gameboard.slideUp()  
music.loop = true 

//Game Start
function startGame() {
    $announcement.text("Game Announcement")
    music.currentTime = 0   
    music.play()
    $rules.fadeOut()
    $gameboard.slideDown() 
    player1.scoreBoard.text(player1.score) 
    player2.scoreBoard.text(player2.score) 
    rando(); 
    setTimeout(function(){ 
        $(".gameboard img").animate({opacity: 0})
    },4000) 
}

function restartGame() {
    $announcement.text("Game Announcement")
    music.currentTime = 0   
    music.play()
    $rules.fadeIn()
    $gameboard.slideUp()
    player1.score = 0
    player2.score = 0 
    player1.scoreBoard.text(player1.score) 
    player2.scoreBoard.text(player2.score) 
}

$button.on("click", startGame) 

function checkScore() {
    if(player1.score > 399 || player2.score > 399) {
        $announcement.text("Y'all make a good couple, but Player 1 needs to step up")
        setTimeout(function() {
            $('.gameboard img').remove()
            restartGame()
        }, 3000)   
    }
}

function rando(){
    var gameBoard = [
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
    var shuffledDeck=[] 
    for(var i=0;i<25;i++){  
        var randoNum=Math.floor(Math.random() * gameBoard.length) 
        let card = gameBoard.splice(randoNum,1) 
        shuffledDeck.push(card[0]);
        let $img = $('<img>').attr('src', shuffledDeck[i].imgPath)
        $img.data('pointValue', shuffledDeck[i].pointValue)
        $gameboard.append($img)
    }
} 

// Gameplay & Scoring
$gameboard.on("click","img",function(){
    $(this).animate({opacity: 1})   
    currentPlayer.score += $(this).data('pointValue')
    currentPlayer.scoreBoard.text(currentPlayer.score)
    switchTurns()
    checkScore()
})   



