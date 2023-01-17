let personalBtn = document.getElementById("personal-btn");
let workBtn = document.getElementById("work-btn");
let bgStyle = document.getElementById("categories-section");
let styleBtns = document.getElementsByClassName("bg-clr-btn");
let popUpForm = document.getElementById("pop-up-form");
let reminderContainer =document.getElementById("reminder-container");


// Themes change

for(let styleBtn of styleBtns){
    styleBtn.addEventListener("click",(e) => {
        let styleBtnCSS = getComputedStyle(styleBtn);
        let btnBgClr = styleBtnCSS.color;
        bgStyle.style.background = btnBgClr;
    })
};

// Themes change End here



// saving list date entered by a user
let arrObj = [];

//This counter is used for dynamically inserting id into Remove Btn

let counter = 0;


// here we creating HTML structure for to do list dynamically , removing list from HTML structure and  ,adding and removing list data from array of OBJ

popUpForm.addEventListener("submit",(e) => {

    // form data into Obj

    e.preventDefault();
    let fd = new FormData(popUpForm);
    let obj = Object.fromEntries(fd);
    arrObj.push(obj);

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



    //dynamically inserting id into Remove Btn


    removeBtn.setAttribute("id", "list_"+counter);

    obj.id = removeBtn.id;

    counter++;

    // console.log(arrObj);


    // creating purpose and time container

   let purposeTimeSection = document.createElement('div');
    purposeTimeSection.classList.add('purpose-time');

    // purposeTimeSection.setAttribute("action","#");

    // creating date for list here

    let showDayDiv = document.createElement("div");
    showDayDiv.classList.add('show-day-div');
    let date = document.createElement('label');
    date.classList.add('output');
    date.innerText = obj.day;

    // creating time for list here

    let time = document.createElement('legend');
    time.classList.add('time');
    let TimeInput = document.createElement('input');
    TimeInput.setAttribute("type","time");
    TimeInput.setAttribute("name","time");


    // creating purpuse of list here

    let purpose = document.createElement("div");
    purpose.classList.add('purpose');
    let purposeType = document.createElement('label');
    purposeType.classList.add('output');
    purposeType.innerText = obj.purpose;

    // creating structure for list 

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
            // console.log(e,'event');
            removeListBtn.parentElement.parentElement.parentElement.remove();

            // removing user deleted list from array of obj
            arrObj = arrObj.filter(obj => {
                return obj.id !==removeListBtn.id;
            });

            // console.log(arrObj);

        });
    };

});








