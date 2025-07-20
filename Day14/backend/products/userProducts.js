const products = (req, res) => {
    const productsList = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 9.99 },
        { id: 3, name: "Product 3", price: 12.99 },
    ];
    
    res.status(200).json(productsList);
};

module.exports = {
    products
};