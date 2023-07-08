class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error("El código del producto ya está en uso.");
        }

        const product = new Product(title, description, price, thumbnail, code, stock);
        this.products.push(product);
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado.");
        }
        return product;
    }
}

const manager = new ProductManager();

console.log(manager.getProducts());


try {
    manager.addProduct(
        "producto prueba",
        "Este es un producto prueba",
        200,
        "Sin imagen",
        "abc123",
        25
    );
    console.log("Producto agregado satisfactoriamente.");
} catch (error) {
    console.log("Error al agregar el producto:", error.message);
}


console.log(manager.getProducts());


try {
    manager.addProduct(
        "producto prueba",
        "Este es un producto prueba",
        200,
        "Sin imagen",
        "abc123",
        25
    );
    console.log("Producto agregado satisfactoriamente.");
} catch (error) {
    console.log("Error al agregar el producto:", error.message);
}


try {
    const product = manager.getProductById(999);
    console.log("Producto encontrado:", product);
} catch (error) {
    console.log("Error al obtener el producto:", error.message);
}


try {
    const product = manager.getProductById(0);
    console.log("Producto encontrado:", product);
} catch (error) {
    console.log("Error al obtener el producto:", error.message);
}
