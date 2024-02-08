export class Product {
    _id?: number;
    product: string;
    category: string;
    price: number;

    constructor(product: string, category: string, price: number) {
        this.product = product;
        this.category = category;
        this.price = price;
    }
}