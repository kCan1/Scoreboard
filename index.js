let homePoints = 0
let homeScore = document.getElementById("homeScore")

let guestPoints = 0
let guestScore = document.getElementById("guestScore")

function homeAdd1Point(){
    homePoints += 1
    homeScore.innerText = homePoints
    console.log(homeScore.innerText)
}

function homeAdd2Point(){
    homePoints += 2
    homeScore.innerText = homePoints
    console.log(homeScore.innerText)
}


function homeAdd3Point(){
    homePoints += 3
    homeScore.innerText = homePoints
    console.log(homeScore.innerText)
}

function guestAdd1Point(){
    guestPoints += 1
    guestScore.innerText = guestPoints
    console.log(guestScore.innerText)
}

function guestAdd2Point(){
    guestPoints += 2
    guestScore.innerText = guestPoints
    console.log(guestScore.innerText)
}

function guestAdd3Point(){
    guestPoints += 3
    guestScore.innerText = guestPoints
    console.log(guestScore.innerText)
}