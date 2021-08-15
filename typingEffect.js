const text = document.querySelector(".js-about span");
const content = `당신의 하루를 기록해보세요!`;

let index = 0;


function type(){
    while(index != content.length)
      text.textContent += content[index++];
    
    if(index > content.length)
    {
        text.textContent = "";  
        index = 0;
    }
}

type();
//setInterval(type, 300);