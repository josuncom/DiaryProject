const diaryBox = document.querySelector(".diary-container"),
      dirayInput = document.querySelector(".diary-input"),
      diary_date = document.querySelector(".diary-container .date"),
      submit_btn = document.querySelector(".submit-btn");


function getDate(){
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const dates = date.getDate();
    
    console.log(`${years}.${months + 1}.${dates}`);
    diary_date.innerText = `${years}.${months + 1}.${dates}`;
}


function sumbit(){
    submit_btn.addEventListener("click", event => {
        event.preventDefault();
        console.log("Button works!");
    })
}


function init(){
    getDate();
    sumbit();
}

init();