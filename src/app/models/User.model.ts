
export class UserModel {

    public id?: string;
    public name: string;
    public lastname: string;
    public age: number;

    constructor( id: string,
                 name: string,
                 lastname: string,
                 age: number) {

        this.id = id;
        this.name = name;
        this.lastname = lastname
        this.age = age;
    }
}

// export class UserSimpleModel {

//     public name: string;
//     public lastname: string;
//     public age: number;

//     constructor( //id: string,
//                  name: string,
//                  lastname: string,
//                  age: number) {

//         //this.id = id;
//         this.name = name;
//         this.lastname = lastname
//         this.age = age;
//     }
// }