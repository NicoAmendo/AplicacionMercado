const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname,'../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    
  productos: function(req,res){
        res.render('products');
      },
    };

      
module.exports = productsController;