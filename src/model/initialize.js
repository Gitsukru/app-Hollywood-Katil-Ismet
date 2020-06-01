import {DbManager} from "./storage";
import {Customer} from "./customer";

export class Initialize{
    init(){
        let customer = new Customer();
        let db = new DbManager();
        let people = db.getDb();
        people.forEach(person => {
            customer.addNew(person);
        });
    }
}