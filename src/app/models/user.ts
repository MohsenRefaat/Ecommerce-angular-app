export interface User {
    fullName:string;
    email:string;
    phoneNo:string;
    address:{
        city:string;
        postalCode:string;
        street:string
    };
    password:string;

}
