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
function highScore(){
    if(player1.score>player2.score===true){
        return "Player 1"
    } else if(player2.score>player1.score===true){
        return "Player 2"
    }
}   
function lowScore(){
    if(player1.score<player2.score===true){
        return "Player 1"
    } else if(player2.score<player1.score===true){
        return "Player 2"
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



//Automatic Settings
$gameboard.slideUp()  
music.loop = true 



//Game Start 
$button.on("click", startGame) 
function startGame() {    
    $("header").slideUp() 
    $gameboard.children().prop("disabled",true)
    $button.prop("disabled",true)
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
    },5000)  
}
function rando(){
    var gameBoard = [
        { imgPath: "images/anniversary.png", pointValue: 50 }, 
        { imgPath: "images/badger3.png", pointValue: -2 },
        { imgPath: "images/balenciaga2.png", pointValue: -1 },
        { imgPath: "images/brokenleg3.png", pointValue: -2 },
        { imgPath: "images/burglar2.png", pointValue: -2 },
        { imgPath: "images/cheating.png", pointValue: -500 },
        { imgPath: "images/doodle2.png", pointValue: 3 },
        { imgPath: "images/fenderbender2.png", pointValue: -2 },
        { imgPath: "images/grandma2.png", pointValue: 1 },
        { imgPath: "images/hacked2.png", pointValue: -2 },
        { imgPath: "images/hybrid2.png", pointValue: 2 },
        { imgPath: "images/inherritance2.png", pointValue: 3 },
        { imgPath: "images/joboffer2.png", pointValue: 3 },
        { imgPath: "images/fired.png", pointValue: -3 },
        { imgPath: "images/lotto2.png", pointValue: 2 },
        { imgPath: "images/metermaid2.png", pointValue: -1 },
        { imgPath: "images/movie2.png", pointValue: 2 },
        { imgPath: "images/nigerianprincess2.png", pointValue: -1 },
        { imgPath: "images/raffle2.png", pointValue: 1 },
        { imgPath: "images/raise2.png", pointValue: 2 },
        { imgPath: "images/taxaccountant2.png", pointValue: 3 },
        { imgPath: "images/trump2.png", pointValue: -1 },
        { imgPath: "images/vandal1.png", pointValue: -1 },
        { imgPath: "images/vote1.png", pointValue: -1 }, 
        { imgPath: "images/cheating.png", pointValue: -50 } 
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
function checkScore() {   
    if(player1.score > 49 || player2.score > 49) { 
        $gameboard.children().prop("disabled",true)
        $announcement.text("Y'all make a good couple, but"+" "+lowScore()+" "+"needs to step up")
        setTimeout(function() {
            $('.gameboard img').remove()
            restartGame()
        }, 5000)   
    }else if(player1.score < -49 || player2.score < -49){  
        $gameboard.children().prop("disabled",true)
        $announcement.text("Doomed relationship, but"+" "+highScore()+" "+" will do all right") 
        setTimeout(function() {
            $('.gameboard img').remove()
            restartGame()  
        }, 5000) 
    }   
}
function restartGame() { 
    $("header").slideDown()
    $announcement.text("Game Announcement")
    music.currentTime = 0   
    music.play()
    $rules.fadeIn()
    $gameboard.slideUp()
    player1.score = 0
    player2.score = 0 
    player1.scoreBoard.text(player1.score) 
    player2.scoreBoard.text(player2.score)   
    $button.prop("disabled",false) 
}



