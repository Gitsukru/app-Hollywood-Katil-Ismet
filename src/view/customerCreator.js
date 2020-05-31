import {Customer} from "../model/customer";
export function customerCreator() {
    const customerName = document.querySelector("#customer-name");
    const customerLastName = document.querySelector("#customer-lastName");
    const customerPhone = document.querySelector("#customer-phone");
    const customerNewBtn = document.querySelector("[data-btn='newCustomerBtn']");

    customerNewBtn.addEventListener("click", function () {
        const customer = {
            id: "c-"+new Date().getTime(),
            name:customerName.value,
            lastName: customerLastName.value,
            phone: customerPhone.value
        };
        const newCustomer = new Customer();
        newCustomer.addNew(customer)
        customerName.value = "";
        customerLastName.value = "";
        customerPhone.value = "";
    })
}