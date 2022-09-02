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

setInterval( function(){
    nextImage()
}, 1000)

button_lt = document.getElementById('button_lt')
button_gt = document.getElementById('button_gt')
function nextImage(){
    if(count<4) {
        count++
        document.getElementById("radio"+count).checked = true
        if(count === 4){
            button_lt.style.color = '#415691'
            button_gt.style.color = '#415691' 
        } //else if(count === 3){
       //    button_lt.style.color = '#AA2323'
       //    button_gt.style.color = '#AA2323'
       //} else if(count === 2){
       //    button_lt.style.color = '#AA2323'
       //    button_gt.style.color = '#AA2323'
       //} else if(count === 1){
       //    button_lt.style.color = '#AA2323'
       //    button_gt.style.color = '#AA2323'
       //} 
    } else {
        return
    } 
}

var nautic_line = document.getElementById("radio4").checked
button = document.querySelector(".button")
console.log(nautic_line)
console.log(button)
if(nautic_line === true){
    button.style.color = 'blue'
    console.log(nautic_line)
}