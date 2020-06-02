import {Customer} from "../model/customer";
import { DbManager } from "../model/storage";
import { ResetValue } from "../model/resetValue";

export function eventsCustomer() {
    const customerName = document.querySelector("#customer-name");
    const customerLastName = document.querySelector("#customer-lastName");
    const customerPhone = document.querySelector("#customer-phone");
    const customerNewBtn = document.querySelector("[data-btn='newCustomerBtn']");
    const customerListContainer = document.querySelector("#customer-list-container");

    customerNewBtn.addEventListener("click", function () {
        const customer = {
            id: "c-"+new Date().getTime(),
            name:customerName.value,
            lastName: customerLastName.value,
            phone: customerPhone.value,
            victims: []
        };
        let db = new DbManager();
        db.setDb(customer)
        const newCustomer = new Customer();
        newCustomer.addNew(customer);
        let rest = new ResetValue();
        rest.reset(customerName, customerLastName, customerPhone);
    })

    customerListContainer.addEventListener("click", function(e){
        let targetElement = e.target;
        if(targetElement.classList.contains("customer-remove-btn")){
            let selectedCustomerId = targetElement.parentElement.getAttribute("data-customerId");
            let db = new DbManager();
            db.removeCustomer(selectedCustomerId);
            targetElement.parentElement.remove();
        }
    })
}