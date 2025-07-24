class Order {
    orderNumber;
    products = [];
    constructor(orderNumber){
        orderNumber = this.orderNumber;
    }
    
    addProduct(product){
        this.products.push(product)
    }

    getTotalPrice(){
        return this.products.reduce((acc, i)=>acc+i.price, 0);
    }
}

class Product{
    name;
    price;
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); 