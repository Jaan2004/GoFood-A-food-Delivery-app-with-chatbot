const express = require("express");
const router = express.Router();
const Order = require('../models/Orders')
router.post('/orderdata', async (req, res) => {
    let data = req.body.orderdata
    await data.splice(0,0,{Order_date:req.body.order_date})
   

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    // console.log(eId)
    if (eId===null) {
        try {
            await Order.create({
                email: req.body.email,
                orderdata:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{orderdata: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.post('/myorderdata',async (req,res)=>{
    try {
        let mydata = await Order.findOne({'email':req.body.email})
        res.json({orderData:mydata})
    }
    catch {
        console.log(error.message)
    }
})


module.exports = router;