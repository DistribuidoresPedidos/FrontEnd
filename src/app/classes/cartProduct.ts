export class CartProduct {
    constructor(
        public offeredProduct: number,
        public name: string,
        public category: string,
        public weight: number,
        public photo: object,
        public route: number,
        public quantity: number,
        public price: number,
    ) {
    }
}
