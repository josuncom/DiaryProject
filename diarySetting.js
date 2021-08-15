const diaryBox = document.querySelector(".diary-container"),
      dirayInput = document.querySelector(".diary-input"),
      diary_date = document.querySelector(".diary-container .date"),
      submit_btn = document.querySelector(".submit-btn")
      diaryList = document.querySelector(".diaryList");

const date = new Date(),
      years = date.getFullYear(),
      months = date.getMonth(),
      dates = date.getDate();


const DIARY_LS = 'diarys';


function filter(diary){
    return diary.id === 1;
}


let diarys = [];

function getDate(){    
    console.log(`${years}.${months + 1}.${dates}`);
    diary_date.innerText = `${years}.${months + 1}.${dates}`;
}


function saveDiary(){
    localStorage.setItem(DIARY_LS, JSON.stringify(diarys));
}

let idNum;
function paintDiary(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = idNum;
    
    idNum = `${years}.${months + 1}.${dates}`;
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    
    diaryList.appendChild(li);
    const diaryObj = {
        text: text,
        id : newId
    };
    diarys.push(diaryObj);
    saveDiary();
}


function handlesumbit(event){
    event.preventDefault();
    const currentValue = document.querySelector(".diary-input").value;
    paintDiary(currentValue);
    dirayInput.value = "";
    
}


function loadDiary(){
    const loadedDiary = localStorage.getItem(DIARY_LS);

    if(loadedDiary !== null){
        const parsedDiary = JSON.parse(loadedDiary);
        parsedDiary.forEach(function(diary){
            paintDiary(diary.text);
        });
    } else{}
}




function init(){
    getDate();
    loadDiary();
    submit_btn.addEventListener("click", handlesumbit);
}

init();