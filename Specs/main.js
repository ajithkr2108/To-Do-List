let personalBtn = document.getElementById("personal-btn");
let workBtn = document.getElementById("work-btn");
let bgStyle = document.getElementById("categories-section");
let styleBtns = document.getElementsByClassName("bg-clr-btn");
let popUpForm = document.getElementById("pop-up-form");
let reminderContainer =document.getElementById("reminder-container");


for(let styleBtn of styleBtns){
    styleBtn.addEventListener("click",(e) => {
        let styleBtnCSS = getComputedStyle(styleBtn);
        let btnBgClr = styleBtnCSS.color;
        bgStyle.style.background = btnBgClr;
    })
};

let arObj = [];
popUpForm.addEventListener("submit",(e) => {

    // form data into Obj

    e.preventDefault();
    let fd = new FormData(popUpForm);
    let obj = Object.fromEntries(fd);
    arObj.push(obj);

    //  list tittle and remove btn


    let listContainer = document.createElement('div');
    listContainer.classList.add('list-container');
    let tittleBtnSection = document.createElement('div');
    tittleBtnSection.classList.add('tittle-btn-section');
    let removeBtnDiv = document.createElement('div');
    removeBtnDiv.classList.add('remove-btn-div');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn','btn-default-style');
    let reminderHeading = document.createElement('p');
    reminderHeading.classList.add("reminder-heading");
    let removeListBtns = document.getElementsByClassName("remove-btn");


    //purpose and time container

   let purposeTimeSection = document.createElement('div');
    purposeTimeSection.classList.add('purpose-time');
    // purposeTimeSection.setAttribute("action","#");

    // day will show here

    let showDayDiv = document.createElement("div");
    showDayDiv.classList.add('show-day-div');
    let date = document.createElement('label');
    date.classList.add('output');
    date.innerText = obj.day;

    // time will show here

    let time = document.createElement('legend');
    time.classList.add('time');
    let TimeInput = document.createElement('input');
    TimeInput.setAttribute("type","time");
    TimeInput.setAttribute("name","time");


    // purpose will show here

    let purpose = document.createElement("div");
    purpose.classList.add('purpose');
    let purposeType = document.createElement('label');
    purposeType.classList.add('output');
    purposeType.innerText = obj.purpose;

    // creating structure for created elements

    reminderContainer.appendChild(listContainer);
    listContainer.appendChild(tittleBtnSection);
    tittleBtnSection.appendChild(removeBtnDiv);
    removeBtnDiv.appendChild(removeBtn);
    tittleBtnSection.appendChild(reminderHeading);
    reminderHeading.innerText = obj.reminder;


    listContainer.appendChild(purposeTimeSection);
    purposeTimeSection.appendChild(showDayDiv);
    showDayDiv.appendChild(date);

    

    purposeTimeSection.appendChild(time);
    time.appendChild(TimeInput);


    purposeTimeSection.appendChild(purpose);
    purpose.appendChild(purposeType);

    // remove List function

    for(let removeListBtn of removeListBtns){

        removeListBtn.addEventListener("click",(e) => {
            console.log(e,'event');
            removeListBtn.parentElement.parentElement.parentElement.remove();
            
        });
    };
    // console.log(arObj);

});


// removing list






