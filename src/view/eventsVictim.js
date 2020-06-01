import {Victims} from "../model/victims";
import { DbManager } from "../model/storage";
export function eventsVictim() {
    const victimName = document.querySelector("#victim-name");
    const victimLastName = document.querySelector("#victim-lastName");
    const victimAge = document.querySelector("#victim-age");
    const victimGender = document.querySelector("#victim-gender");
    const victimImg = document.querySelector("#victim-img");
    const victimAddress = document.querySelector("#victim-address");
    const newVictimBtn = document.querySelector("[data-btn='newVictimBtn']");
    const customerListContainer = document.querySelector("#customer-list-container");

    let selectedCustomerId;
    customerListContainer.addEventListener("click", function(e){
        let targetElement = e.target;
        console.log(e.target);
        
        if(targetElement.classList.contains("add-victim-modal-btn")){
            selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
            console.log(selectedCustomerId);
            
        }

    })
    newVictimBtn.addEventListener("click", function () {
        const victim = {
            id:"v-"+ new Date().getTime(),
            name: victimName.value,
            lastName: victimLastName.value,
            age: victimAge.value,
            gender: victimGender.value,
            img: victimImg.value,
            address: victimAddress.value
        };
        const newVictim = new Victims();
        newVictim.addNew(victim, selectedCustomerId)
        let db = new DbManager();
        db.addVictim(victim, selectedCustomerId);
       
        
    })
   
}

