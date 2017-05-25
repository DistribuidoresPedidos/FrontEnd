export class CartProduct {
    constructor(
        public id: number,
        public name: string,
        public category: string,
        public weight: number,
        public photo: object,
        public quantity: number
    ) {

    }
}
