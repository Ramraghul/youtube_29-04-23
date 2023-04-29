const db = require('../db/db.js')
const bcrypt = require('bcrypt');


//Admin Login Validation
const adminLogin = (req, res) => {
    try {
        let AdminEmail = req.body.email
        let adminpassword = req.body.password
        let FindAdmin = 'SELECT * FROM `user_master` WHERE EMAIL=?' 

        db.query(FindAdmin, AdminEmail, async (err, result) => {
            if (err) {
                throw err
            }
            if (result.length === 0) {
                res.status(404).json({ message: "User not found or Contact to Admin" });
            }
            else {
                let adminCr = result[0].PASSWORD
                let Verify = await bcrypt.compare(adminpassword, adminCr)
                if (Verify === true) {
                    res.status(200).json({ ID:result[0].ID,User: result[0].USER_NAME })
                } else {
                    res.status(401).json({ message: 'Unauthorized or wrong password' })
                }
            }
        })
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


//Admin create new user;
const createUsers =async (req, res) => {
    try {
        let UserPassword = req.body.password;
        let UserEmail = req.body.email;
        let UserName = req.body.username;
        let OTPSalt = await bcrypt.genSalt(10);
        let OTPHash = await bcrypt.hash(UserPassword, OTPSalt);
        UserPassword = OTPHash;

        let data = {USER_NAME:UserName,EMAIL:UserEmail,PASSWORD:UserPassword}
        let NewUserAdd = 'INSERT INTO `user_master` SET?'
        let FindUser = 'SELECT * FROM `user_master` WHERE EMAIL=?'
        
        db.query(FindUser, UserEmail, (err, result) => {
            if (err) {
                throw err
            }
            if (result.length === 0) {
                db.query(NewUserAdd,data, (err, result) => {
                    if (err) {
                        throw err
                    }
                    else {
                        return res.status(201).json({ Message: 'Successfully Registered' })
                    }
                })
            }
            else {
               return res.status(409).json({ Message: 'This user Email is already Registered' })
            }
        })
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}




module.exports = {
    adminLogin,
    createUsers,
}