const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt= require("jsonwebtoken")
var bcrypt= require("bcryptjs");
const jwtsecret= "Thisisamplestringwithexactly32characterslength"

router.post("/createuser",
    [
        body("email").isEmail(),
        body("name").isLength({ min: 5 }),
        body("password").isLength({ min: 5 }),
        body("location").exists(), 
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

         const salt= await bcrypt.genSalt(10);
        let hashedPassword= await bcrypt.hash(req.body.password, 10);

        try {
            await User.create({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                location: req.body.location
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error: "Failed to create user" });
        }
    }
);

router.post( "/loginuser",
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res
                    .status(400)
                    .json({ errors: "try login with correct credentials" });
            }
           
              const pwtcompare= await bcrypt.compare(req.body.password,userdata.password )
              
             console.log(pwtcompare)
            if (!pwtcompare) {
                return res
                    .status(400)
                    .json({ errors: "try login with correct credentials" });
            }

            const data= {
                user:{
                    id: userdata.id
                }
            }
            const authtoken= await jwt.sign(data,jwtsecret);
            return res.json({ success: true , authtoken:authtoken });

        
        } 
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;
