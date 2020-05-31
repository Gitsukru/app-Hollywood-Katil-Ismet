export class Victims {
    addNew(victim, selectedCustomerId){
        const victimListContainer = document.querySelector(`#${selectedCustomerId}`);
        const victimTemplate = `
        <div id="customer-1-victim_1" class="card-body victim-box my-2 mx-3">
        <div class="d-flex">
            <div class="victim-img-box mr-auto">
                <img src="${victim.img}" width="100" height="100" alt="" data-name="victim-img">
            </div>
            <div class="victim-info-box col ml-3 p-3">
                <div class="row">
                    <div class="col-12 pb-3">
                        <strong class="mr-2">
                            <span data-name="victim-name">${victim.name}</span>
                            <span data-name="victim-lastName">${victim.lastName}</span>
                        </strong>
                        <span class="badge badge-info mr-2" data-name="victim-gender">${victim.gender}</span>
                        <span class="badge badge-warning" data-name="victim-age">${victim.age}</span>
                        <button class="btn btn-outline-success ml-auto btn-sm victim-mission-completed-btn">Mission
                            completed <i class="fas fa-check ml-1"></i></button>
                    </div>
                    <div class="col-12">
                        <div class="border-top py-2" data-name="victim-adress">
                            <strong>Adres 1:</strong> ${victim.adress}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>`;
        victimListContainer.insertAdjacentHTML("afterbegin", victimTemplate);
    }

}