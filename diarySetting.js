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


let diarys = [];

function getDate(){    
    diary_date.innerText = `${years}.${months + 1}.${dates}`;
}

function saveDiary(){
    localStorage.setItem(idNum, JSON.stringify(diarys));
}


let idNum;
function paintDiary(text){
    const newId = idNum;
    idNum = `${years}.${months + 1}.${dates}`;

    const diaryObj = {
        text
    };

    diarys.push(diaryObj[text]);
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