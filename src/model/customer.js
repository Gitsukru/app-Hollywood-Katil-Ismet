export class Customer {
    addNew(customer){
        const customerListContainer = document.querySelector("#customer-list-container");
        const cutomerTemplate = `
        <div class="card">
        <div class="d-flex align-items-center card-header" data-toggle="collapse" data-target="#${customer.id}">

            <div class="d-flex align-items-center col mr-5">
                <i class="fas fa-user-secret client-logo mr-2"></i>
                <span class="mr-1">${customer.name}</span>
                <span>${customer.lastName}</span>
            </div>
            <div class="col mr-5">${customer.phone}</div>
            <button class="btn btn-link btn-block text-left w-100px ml-auto text-right pr-0" type="button">
                <i class="fas fa-angle-down"></i>
            </button>
        </div>

        <div id="${customer.id}" class="collapse" data-parent="#customer-list-container">

            <div class="d-flex mt-2 px-3 mb-4">
                <button class="btn btn-danger btn-sm ml-auto add-victim-modal-btn" data-toggle="modal" data-target="#victim-register">Add victim <i class="fas fa-user"></i></button>
            </div>

        </div>
        </div>`;
        customerListContainer.innerHTML += cutomerTemplate;
    }
}