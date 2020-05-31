import {Victims} from "../model/victims";
export function victimCreator() {
    const victimName = document.querySelector("#victim-name");
    const victimLastName = document.querySelector("#victim-lastName");
    const victimAge = document.querySelector("#victim-age");
    const victimGender = document.querySelector("#victim-gender");
    const victimImg = document.querySelector("#victim-img");
    const victimAdress = document.querySelector("#victim-adress");
    const newVictimBtn = document.querySelector("[data-btn='newVictimBtn']");
    const customerListContainer = document.querySelector("#customer-list-container");

    let selectedCustomerId;

    newVictimBtn.addEventListener("click", function () {
        const victim = {
            id:"v-"+ new Date().getTime(),
            name: victimName.value,
            lastName: victimLastName.value,
            age: victimAge.value,
            gender: victimGender.value,
            img: victimImg.value,
            adress: victimAdress.value
        };
        const newVictim = new Victims();
        newVictim.addNew(victim, selectedCustomerId)
    })
    customerListContainer.addEventListener("click", function(e){
        let targetElement = e.target;
        
        if(targetElement.classList.contains("add-victim-modal-btn")){
            selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
            console.log(selectedCustomerId);
            
        }

    })
}

