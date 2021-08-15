const LoadedContent = document.querySelector(".js-diaryContent");


const date = new Date(),
      years = date.getFullYear(),
      months = date.getMonth(),
      dates = date.getDate();
      
let todayDate = `${years}.${months + 1}.${dates}`;

function bringDiary(){
    const diaryContent = localStorage.getItem(`${years}.${months + 1}.${dates}`);

    LoadedContent.innerText = diaryContent;    
}


function init(){
    bringDiary();
}

init();