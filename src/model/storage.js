export class DbManager {
    constructor() {
        this.dbName = "katil";
    }

    getDb() {
        let people;
        if (localStorage.getItem(this.dbName) === null) {
            people = [];
            return people;
        }
        //people degiskenine localstorage da ki data dbName
        people = JSON.parse(localStorage.getItem(this.dbName));
        return people;
    }


    //localstorage setDb islemi metodu 1 parametre olarak aliyor ve ne gonderecekse 
    //onu belirtimis oluyoruz
    setDb(person) {
        //local storage datalarini cekmek icin  people degiskene getDb metodu ataniyor
        let people = this.getDb();
        //localstorage dan cektigimiz tum datalara parametre ile gelen data push ediliyor
        people.push(person);
        // localstorage a setItem ile metodu ile guncel data yeniden gönderiliyor
        // localStorage setItem islemi iki parametre aliyor (key, value) people i 
        //json.sringFy formatinda dbName("Katil") key in karsiligina set ediyor
        this.updateItem(people);

    }

    addVictim(victim, selectedCustomerId) {
        let people = this.getDb();
        let cIndex = people.findIndex(item => item.id === selectedCustomerId);
        people[cIndex].victims.push(victim);
        this.updateItem(people);
    }

    updateItem(data) {
        localStorage.setItem(this.dbName, JSON.stringify(data))
    }
}