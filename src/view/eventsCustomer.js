import {Customer} from "../model/customer";
import { DbManager } from "../model/storage";

export function eventsCustomer() {
    const customerName = document.querySelector("#customer-name");
    const customerLastName = document.querySelector("#customer-lastName");
    const customerPhone = document.querySelector("#customer-phone");
    const customerNewBtn = document.querySelector("[data-btn='newCustomerBtn']");

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
        customerName.value = "";
        customerLastName.value = "";
        customerPhone.value = "";
    })
}