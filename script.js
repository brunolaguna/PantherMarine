let count = 1
document.getElementById("radio1").checked = true
    
setInterval( function(){
    nextImage()
}, 10000)

function nextImage(){
    if(count<4) {
        count++
        document.getElementById("radio"+count).checked = true
    } 
}

