console.log(" WELCOME TO ADDRESS BOOK PROBLEM ");

class Contact{
   
    first_name;
    last_name;
    address;
    city;
    state;
    zip_code;
    phone_number;
    email;

    
    constructor(first_name , last_name , address , city , state , zip_code , phone_number , email){
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.phone_number = phone_number;
        this.email = email;
    }
}


let contact1 = new Contact("janu","sankar","vja","andhra","AP",520013,945165852,"njanujasmine@gmail.com");
let contact2 = new Contact("lavi", "sankar","mtm","pradesh","AP",500001,8135455842,"lavidavi@gmail.com");