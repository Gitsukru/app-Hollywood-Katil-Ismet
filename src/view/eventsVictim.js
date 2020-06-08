import {Victims} from "../model/victims";
import {DbManager} from "../model/storage";
import {ResetValue} from "../model/resetValue";

export function eventsVictim() {
    const victimName = document.querySelector("#victim-name");
    const victimLastName = document.querySelector("#victim-lastName");
    const victimAge = document.querySelector("#victim-age");
    const victimGender = document.querySelector("#victim-gender");
    const victimImg = document.querySelector("#victim-img");
    const newVictimBtn = document.querySelector("[data-btn='newVictimBtn']");
    const customerListContainer = document.querySelector("#customer-list-container");
    const btnAddAddress = document.querySelector(".btn-add-address");

    let selectedCustomerId;

    customerListContainer.addEventListener("click", function (e) {
        let targetElement = e.target;

        if (targetElement.classList.contains("add-victim-modal-btn")) {
            selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
        }

        if (targetElement.classList.contains("victim-mission-completed-btn")) {
            let selectedVictimId = targetElement.parentElement.getAttribute("id");
            let selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
            let db = new DbManager();
            db.changeVictimStatus(selectedCustomerId, selectedVictimId);
            targetElement.parentElement.dataset.status = "true";
        }

        if (targetElement.classList.contains("victim-remove-btn")) {
            let selectedVictimId = targetElement.parentElement.getAttribute("id");
            let selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
            let db = new DbManager();
            db.removeVictim(selectedCustomerId, selectedVictimId);
            targetElement.parentElement.remove();
        }
    })

    newVictimBtn.addEventListener("click", function () {
        let addAddress = [];
        
        const victimAddressInput = document.querySelectorAll(".victim-address");

        victimAddressInput.forEach(item => {
            addAddress.push(item.value);
        })

        if (victimName.value === "" || victimLastName.value === "" || victimAge.value === "" ||
            victimGender.value === "" || victimImg.value === "" || addAddress[0].length === 0) {
            alert("Bos alan birakma");
            return
        }

        const victim = {
            id: "v-" + new Date().getTime(),
            name: victimName.value,
            lastName: victimLastName.value,
            age: victimAge.value,
            gender: victimGender.value,
            img: victimImg.value,
            address: addAddress,
            missionStatus: false
        };

        const newVictim = new Victims();
        newVictim.addNew(victim, selectedCustomerId)
        let db = new DbManager();
        db.addVictim(victim, selectedCustomerId);
        let rest = new ResetValue();
        rest.reset(victimName, victimLastName, victimAge, victimGender, victimImg);
        victimAddressInput.forEach(item => {
            item.value = "";
        })
    })

    btnAddAddress.addEventListener("click", function (e) {
        let addressInputTemplate = `<input  type="text" class="form-control mb-2 victim-address" placeholder="Address..">`;
        e.target.parentElement.insertAdjacentHTML("beforeend", addressInputTemplate);
        e.preventDefault();
    })
}