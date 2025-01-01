const addToCartModel = require("../../models/addToCartModel");

const updateAddToCartProduct = async(req,res) => {
    try {
        const currentUserId = req.userId
        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id : addToCartProductId}, {
            ...(qty && {quantity : qty})
        })

        res.json({
            message : "Product Updated",
            data : updateProduct,
            error : false,
            success : true 
        })
        
    } catch (err) {
        res.json({
            message : err?.message || err,
            error : true,
            succes : false
        })
    }
}

module.exports = updateAddToCartProduct 