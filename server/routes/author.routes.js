const UserController = require('../controllers/author.controllers');
const {createNewAuthor, updateExistingAuthor, findAllAuthors, deleteAnExistingAuthor, findOneSingleAuthor,
    createNewProduct, findAllProduct, findOneSingleProduct, deleteAnExistingProduct, updateExistingProduct
} = require("../controllers/author.controllers");

module.exports = app => {
    app.post('/product/new', createNewProduct);
    app.patch('/product/edit/:id', updateExistingProduct);
    app.get('/products', findAllProduct);
    app.delete('/product/delete/:id', deleteAnExistingProduct);
    app.get('/product/:id', findOneSingleProduct);


}