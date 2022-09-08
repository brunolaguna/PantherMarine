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
}, 10000)


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

// Mobile
y=1
function logo_mobile(){
    y++
    if(y%2 === 0){
    mobile_logo = document.getElementById('logo_mobile')
    mobile_logo.style.opacity = '0'
    mobile_logo.style.transition = '1s'
    mobile_logo.style.opacity = '1'
    mobile_logo.style.marginTop = '-50px'
    mobile_logo.style.backgroundColor = '#00000000'

    navbar_mobile = document.querySelector('.navbar_mobile')
    navbar_mobile.style.top = '0%'
    navbar_mobile.style.transition = '1s'
    } else{
        navbar_mobile.style.top = '-20%'
        navbar_mobile.style.transition = '1s'
        mobile_logo.style.marginTop = '84px'
        mobile_logo.style.backgroundColor = 'black'
        mobile_logo.style.borderRadius = '30px 30px 30px'
    }
    console.log(y)
}

volante = document.getElementById('volante')
volante.addEventListener('click', function(){
    var products = document.querySelector('.products')
    var account = document.querySelector('.account')
    products.style.opacity = '0'
    account.style.opacity = '0'
    products.style.transition = '.5s'
    account.style.transition = '1.5s'
    products.style.visibility = 'hidden'
    account.style.visibility = 'hidden'

    var type_wheels_mobile_left = document.querySelector('.type_wheels_mobile_left')
    var agricutural = document.getElementById('agricultural')
    type_wheels_mobile_left.style.opacity = '1'
    type_wheels_mobile_left.style.visibility = 'visible'
    agricutural.style.opacity = '1'
    agricutural.style.visibility = 'visible'
    type_wheels_mobile_left.style.transition = '.5s'
    agricutural.style.transition = '1.2s'

    type_wheels_mobile_right = document.querySelector('.type_wheels_mobile_right')
    var back = document.getElementById('back')
    document.getElementById('signup_mobile').href = "#back"
    type_wheels_mobile_right.style.opacity = '1'
    type_wheels_mobile_right.style.visibility = 'visible'
    type_wheels_mobile_right.style.transition = '2s'
    back.style.opacity = '1'
    back.style.visibility = 'visible'
    back.style.transition = '4s'

})

acessorio = document.getElementById('acessorio')
acessorio.addEventListener('click', function(){
    var products = document.querySelector('.products')
    var account = document.querySelector('.account')
    products.style.opacity = '0'
    account.style.opacity = '0'
    products.style.transition = '.5s'
    account.style.transition = '1.5s'
    products.style.visibility = 'hidden'
    account.style.visibility = 'hidden'

    type_wheels_mobile_right = document.querySelector('.type_wheels_mobile_right')
    var automotive = document.getElementById('automotive')
    var back = document.getElementById('back')
    automotive.style.opacity = '1'
    automotive.style.visibility = 'visible'
    automotive.style.transition = '.5s'
    type_wheels_mobile_right.style.opacity = '1'
    type_wheels_mobile_right.style.visibility = 'visible'
    type_wheels_mobile_right.style.transition = '2s'
    back.style.opacity = '1'
    back.style.visibility = 'visible'
    back.style.transition = '4s'
})

function back(){
    var products = document.querySelector('.products')
    var account = document.querySelector('.account')
    products.style.opacity = '1'
    account.style.opacity = '1'
    products.style.transition = '1.5s'
    account.style.transition = '.5s'
    products.style.visibility = 'visible'
    account.style.visibility = 'visible'

    var type_wheels_mobile_left = document.querySelector('.type_wheels_mobile_left')
    var agricutural = document.getElementById('agricultural')
    type_wheels_mobile_left.style.opacity = '0'
    type_wheels_mobile_left.style.visibility = 'hidden'
    agricutural.style.opacity = '0'
    agricutural.style.visibility = 'hidden'
    type_wheels_mobile_left.style.transition = '1s'
    agricutural.style.transition = '2s'

    type_wheels_mobile_right = document.querySelector('.type_wheels_mobile_right')
    var back = document.getElementById('back')
    type_wheels_mobile_right.style.opacity = '0'
    type_wheels_mobile_right.style.visibility = 'hidden'
    type_wheels_mobile_right.style.transition = '1.2s'
    back.style.opacity = '0'
    back.style.visibility = 'hidden'
    back.style.transition = '.5s'
}


