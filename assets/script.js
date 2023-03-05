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


