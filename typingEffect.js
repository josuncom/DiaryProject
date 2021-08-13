const text = document.querySelector(".js-about span");
const content = text.innerHTML;

let index = 0;


function type(){
    text.textContent += content[index++];
    
    if(index > content.length)
    {
        text.textContent = "";  
        index = 0;
    }
}

setInterval(type, 300);