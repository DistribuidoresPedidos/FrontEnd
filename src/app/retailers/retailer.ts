export class Retailer{
    constructor(
        public id : number,
        public provider: string,
        public uid : string,
        public name : string,
        public description : string,
        public email : string,
        public phoneNumber:string,
        public photo : object,
        public latitude : number,
        public longiude :number
        
    ){

    }
}