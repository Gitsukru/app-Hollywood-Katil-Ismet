import {Victims} from "../model/victims";
import { DbManager } from "../model/storage";
import { ResetValue } from "../model/resetValue";

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
        }

        if(targetElement.classList.contains("victim-mission-completed-btn")){
            let selectedVictimId = targetElement.parentElement.getAttribute("id");
            let selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
            let db = new DbManager();
            db.changeVictimStatus(selectedCustomerId, selectedVictimId);
            targetElement.parentElement.dataset.status = "true";
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
            address: victimAddress.value,
            missionStatus: false
        };
        const newVictim = new Victims();
        newVictim.addNew(victim, selectedCustomerId)
        let db = new DbManager();
        db.addVictim(victim, selectedCustomerId);
        let rest = new ResetValue();
        rest.reset(victimName, victimLastName, victimAge, victimGender, victimImg,victimAddress);
    })
   
}

