import {Retailer} from './retailer';
import {Route} from'./route';
import {OrderProduct} from './orderProduct';
import {OfferedProduct} from './offeredProduct';
export class Order{
    constructor (public id :number,public state :string, public exitDate :string, public arrivalDate :string,
                public totalPrice:number, public retailer : Retailer, public route :Route,public orderProducts :OrderProduct[], public comments : any , public offeredProduct : OfferedProduct[]){

    }
}