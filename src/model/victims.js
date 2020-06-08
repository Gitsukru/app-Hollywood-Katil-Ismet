import {victimTemplate} from "../view/victimTemplate";

export class Victims {
    addNew(victim, selectedCustomerId){
        const victimListContainer = document.querySelector(`#${selectedCustomerId}`);
        const victimTemp = victimTemplate
        .replace(/__ID__/, victim.id)
        .replace(/__NAME__/, victim.name)
        .replace(/__LASTNAME__/, victim.lastName)
        .replace(/__AGE__/, victim.age)
        .replace(/__GENDER__/, victim.gender)
        .replace(/__IMG__/, victim.img)
        .replace(/__ADDRESS__/, victim.address.map(item => {
            return `<div>${item}</div>`
        }).join(''));
        victimListContainer.insertAdjacentHTML("afterbegin", victimTemp);
    }

};