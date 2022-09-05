let count = 1
document.getElementById("radio1").checked = true

let manual_btn = document.querySelector('.manual-btn')
console.log(manual_btn)

//function label_click(){
//    count = 0
//    setInterval( function(){
//    nextImage()
//}, 1000)
//}

setInterval( function (){
    nextImage()
}, 1000)


button_lt = document.getElementById('button_lt')
button_gt = document.getElementById('button_gt')
e = 0



function nextImage(){
    if(count<4 && count >=1) {
        count++
        document.getElementById("radio"+count).checked = true
        if(count === 4){
            button_lt.style.color = '#415691'
            button_gt.style.color = '#415691' 
        }
       i=4
    } 
    else if(count === 4 && i>1) {
        i--
        document.getElementById("radio"+i).checked = true
        button_lt.style.color = '#AA2323'
        button_gt.style.color = '#AA2323'
    }
}

z = count
function lt(){
    count = 0
    if(z>1){
        z--
        document.getElementById("radio"+z).checked = true
        button_lt.style.color = '#AA2323'
        button_gt.style.color = '#AA2323'
    } else{
        document.getElementById("radio4").checked = true
        z = 4
        button_lt.style.color = '#415691'
        button_gt.style.color = '#415691' 
    }
}

function gt(){
    count = 0
    if(z<4){
        z++
        document.getElementById("radio"+z).checked = true
        if(z == 4){
            button_lt.style.color = '#415691'
            button_gt.style.color = '#415691' 
        }        
    } else{ 
        document.getElementById("radio1").checked = true
        z = 1
        button_lt.style.color = '#AA2323'
        button_gt.style.color = '#AA2323'
    }
}

function radio1(){
    z = 1
}

function radio2(){
    z = 2
}

function radio3(){
    z = 3
}

function radio4(){
    z = 4
}

function red_radio(){
    button_lt.style.color = '#AA2323'
    button_gt.style.color = '#AA2323'
    count = 0
    console.log(red_radio)
}

function blue_radio(){
    button_lt.style.color = '#415691'
    button_gt.style.color = '#415691'
    count = 0
    console.log(blue_radio) 
}

var nautic_line = document.getElementById("radio4").checked
button = document.querySelector(".button")
console.log(nautic_line)
console.log(button)
if(nautic_line === true){
    button.style.color = 'blue'
    console.log(nautic_line)
}