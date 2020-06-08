import { victimTemplate } from "../view/victimTemplate";
//Musteri sinifi
export class Customer {
    addNew(customer) {
        //hatml de listelenecek alan
        const customerListContainer = document.querySelector("#customer-list-container");
        // Musteri temlate i 
        const customerTemplate = `
        <div class="card" data-customerId="${customer.id}">
            <button class="btn btn outline-danger btn-sm ml-auto customer-remove-btn"><i class="far fa-trash-alt"></i></button>
            <div class="d-flex align-items-center card-header" data-toggle="collapse" data-target="#${customer.id}">
            <i class="fas fa-angle-down"></i>
            <div class="d-flex align-items-center col mr-5">
                    <i class="fas fa-user-secret client-logo mr-2"></i>
                    <span class="mr-1">${customer.name}</span>
                    <span>${customer.lastName}</span>
                </div>
                <div class="col mr-5">${customer.phone}</div>
            </div>
            <div id="${customer.id}" class="collapse" data-parent="#customer-list-container">
            ${customer.victims.reduce((carry, victim) => {
                    return carry + victimTemplate
                    .replace(/__ID__/, victim.id)
                    .replace(/__STATUS__/, victim.missionStatus)
                    .replace(/__NAME__/, victim.name)
                    .replace(/__LASTNAME__/, victim.lastName)
                    .replace(/__AGE__/, victim.age)
                    .replace(/__GENDER__/, victim.gender)
                    .replace(/__IMG__/, victim.img)
                    .replace(/__ADDRESS__/, victim.address.map(item => {
                        return `<div>${item}</div>`
                    }).join(''));
                }, '')
            }
                <div class="d-flex mt-2 px-3 mb-4">
                    <button class="btn btn-danger btn-sm ml-auto add-victim-modal-btn" data-toggle="modal" data-target="#victim-register">Add victim <i class="fas fa-user"></i></button>
                </div>
            </div>
        </div>`;
        customerListContainer.innerHTML += customerTemplate;
    }
}