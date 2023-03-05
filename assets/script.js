let app = document.getElementsByClassName('app')

let apps = document.getElementById('social-media-apps')
let hr = document.getElementsByClassName('background')
let borderColors = ['hsl(208, 92%, 53%)', 
'hsl(203, 89%, 53%)', 
'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
'hsl(348, 97%, 39%)']

let logoImgs = ['<img src="./assets/images/icon-facebook.svg" alt="">',
'<img src="./assets/images/icon-twitter.svg" alt="">',
'<img src="./assets/images/icon-instagram.svg" alt="">',
'<img src="./assets/images/icon-youtube.svg" alt=""></img>']
let img = document.getElementsByClassName('img')

let names = ['@nathanf', '@nathanf', '@realnathanf', '@Nathan F.']
let socialName = document.getElementsByClassName('name')

for(let i = 0; i < 3; i++){
    const node = document.getElementById('app-div');
    const clone = node.cloneNode(true);
    document.getElementById("social-media-apps").appendChild(clone);
    clone.removeAttribute("id")
}

let numbers = [1987, 1044, '11k', 8239]
let num = document.getElementsByClassName('number')

let increaseNum = [12, 99, 1099, 144]
let increase = document.getElementsByClassName('increase')

let arrows = document.getElementsByClassName('arrow')
let arrImg = '<img src="./assets/images/icon-down.svg" alt="">'


let followers = document.getElementsByClassName('follower')
followers[3].innerHTML = "subscribers"

for(let i = 0; i <= 3; i++){
    hr[i].style.background = borderColors[i]
    img[i].innerHTML = logoImgs[i]
    socialName[i].innerHTML = names[i]
    num[i].innerHTML = numbers[i]
    if(i == 3){
        increase[i].innerHTML = "  " + increaseNum[i] + ' Today'
        increase[i].style.color = 'hsl(356, 69%, 56%)'
        increase[i].style.color = 'hsl(356, 69%, 56%)'
        arrows[i].innerHTML = arrImg

    }else{
        increase[i].innerHTML = "  " + increaseNum[i] + ' Today'
    }
}

let check = document.getElementById('checkbox')
let mainElem = document.getElementById('main')
let mode = document.getElementById('mode')
let dashboard = document.getElementById('social-media-dashboard')
let lightNum = document.getElementsByClassName('light-num')
let lightBg = document.getElementsByClassName('bg-light')
let overview = document.getElementById('overview')

function changeNumColorToLight(){
    for(let i = 0; i< 12; i++){
        lightNum[i].style.color = 'hsl(230, 17%, 14%)'
    }
}

function changeNumColorToDark(){
    for(let i = 0; i< 12; i++){
        lightNum[i].style.color = 'white'
    }
}

function changeBgToLight(){
    for(let i = 0; i < lightBg.length; i++){
        lightBg[i].style.background = 'hsl(227, 47%, 96%)'
    }
}

function changeBgToDark(){
    for(let i = 0; i < lightBg.length; i++){
        lightBg[i].style.background = 'hsl(228, 28%, 20%)'
    }
}

let flag = true
let slider = document.getElementById('slider')

check.addEventListener('click', () => {
    mode.style.color = flag ? 'hsl(230, 17%, 14%)' : 'hsl(228, 34%, 66%)'
    mode.innerHTML = flag ? 'Light mode' : "Dark mode"
    check.style.color = flag ? 'white' : ''
    dashboard.style.color = flag ? 'hsl(230, 17%, 14%)' : ''
    flag ? changeNumColorToLight() : changeNumColorToDark()
    flag ? changeBgToLight() : changeBgToDark()
    overview.style.color = flag ? 'hsl(228, 12%, 44%)' : ''
    slider.style.background = flag ? 'hsl(230, 22%, 74%)' : ''
    mainElem.style.background = flag ? 'linear-gradient(to bottom, hsl(227, 47%, 96%) 0%, hsl(227, 47%, 96%) 35vh, hsl(225, 100%, 98%) 35vh, hsl(225, 100%, 98%)' : ''
    flag = !flag
})
