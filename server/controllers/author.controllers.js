const Product = require("../models/author.models");

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({Product: newlyCreatedProduct});
        })
        .catch(err => res.status(400).json(err)); // Use 'res' instead of 'response'
}



module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => {
            res.json({Product: updatedProduct})
        })
        .catch(err => res.status(400).json(err)); // Use 'res' instead of 'response'


}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json(err)
        });
}
//
//
module.exports.findAllProduct = (req, res) => {
    Product.find({})
        .then((allDaProducts) => {
            res.json({Products: allDaProducts})
        })
        .catch((err) => {
            res.json(err)
        });
}


module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneSingleProduct => {
            res.json({author: oneSingleProduct})
        })
        .catch((err) => {
            res.json(err)
        });
}