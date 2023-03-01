let personalBtn = document.getElementById("personal-btn");
let workBtn = document.getElementById("work-btn");
let bgStyle = document.getElementById("categories-section");
let styleBtns = document.getElementsByClassName("bg-clr-btn");
let popUpForm = document.getElementById("pop-up-form");
let reminderContainer =document.getElementById("reminder-container");
let allBtn = document.getElementById("all-btn");
let todayBtn = document.getElementById("today-btn");
let tomorrowElements = document.getElementsByClassName("Tomorrow");
let personalThings = document.getElementsByClassName("Personal");
let workThings = document.getElementsByClassName("Work");
let allLists =document.getElementsByClassName("list-container");
let todayBtnElements =document.getElementsByClassName("Today");
let cancelBtn = document.getElementById("cancel-btn");
let addBtn = document.getElementById("add-btn");
let submitBtn = document.getElementById("submit-btn");


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

submitBtn.addEventListener("click",(e) => {

    // form data into Obj

    e.preventDefault();
    let fd = new FormData(popUpForm);
    let obj = Object.fromEntries(fd);
    arrObj.push(obj);
    popUpForm.style.display="none";


    //  list tittle and remove btn


    let listContainer = document.createElement('div');
    listContainer.classList.add('list-container',obj.purpose,obj.day);
    let tittleBtnSection = document.createElement('div');
    tittleBtnSection.classList.add('tittle-btn-section');
    let removeBtnDiv = document.createElement('div');
    removeBtnDiv.classList.add('remove-btn-div');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn','btn-default-style');
    let reminderHeading = document.createElement('p');
    reminderHeading.classList.add("reminder-heading");
    // let removeListBtns = document.getElementsByClassName("remove-btn");



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

    removeBtn.addEventListener("click",(e) => {
        // console.log(e,'event');
        removeBtn.parentElement.parentElement.parentElement.remove();

        // removing user deleted list from array of obj
        arrObj = arrObj.filter(obj => {
            return obj.id !==removeBtn.id;
        });

        // console.log(arrObj);

    });

});

//filtering List

allBtn.addEventListener("click",(e)=>{
    
    for(let allList of allLists){
        allList.style.display="block";
    }

    todayBtn.style.color="#D8D5D7";
    allBtn.style.color ="#272728";

    personalBtn.style.fontWeight="lighter";
    workBtn.style.fontWeight="lighter";
    
    
})

todayBtn.addEventListener("click", (e) =>{
    for(let tomorrowElement of tomorrowElements){
        tomorrowElement.style.display="none";
    }
    for(let todayBtnElement of todayBtnElements){
        todayBtnElement.style.display="block";
    }
    todayBtn.style.color="#272728"
    allBtn.style.color = "#D8D5D7"

    personalBtn.style.fontWeight="lighter";
    workBtn.style.fontWeight="lighter";

    });

personalBtn.addEventListener("click",(e)=>{
        for(let workthing of workThings){
            workthing.style.display="none";
        };

        for(let personalThing of personalThings){
            personalThing.style.display="block";
        };
        personalBtn.style.fontWeight="bold";
        workBtn.style.fontWeight="lighter";

        todayBtn.style.color="#D8D5D7";
        allBtn.style.color ="#272728";

workBtn.addEventListener("click",(e)=>{
        for(let personalThing of personalThings){
            personalThing.style.display="none";
        }
        for(let workthing of workThings){
            workthing.style.display="block";
        };
        personalBtn.style.fontWeight="lighter";
        workBtn.style.fontWeight="bold";

        todayBtn.style.color="#D8D5D7";
        allBtn.style.color ="#272728";
        
    });

    
    
})


// add btn pop up 
addBtn.addEventListener("click",(e)=>{
    popUpForm.style.display="flex"
})
// cancel btn disapear 

cancelBtn.addEventListener("click",(e)=>{
    popUpForm.style.display="none";
})

