const db = require('../db/db.js');

//Create new URL link;
const createURL = async (req, res) => {
    try {
        let User = req.body.id;
        let URLTitle = req.body.title;
        let MainURL = req.body.URL

        let data = { USER_ID: User, TITLE: URLTitle, URL: MainURL }
        let NewURL = 'INSERT INTO `url_master` SET?'

        db.query(NewURL, data, (err, result) => {
            if (err) {
                throw err
            }
            else {
                return res.status(201).json({ Message: 'Successfully URL Added' })
            }
        })
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


//Get all url based on userID;
const getURLbasedOnUser = (req,res) => {
    try {
        let User = req.params.id;
        let data = "SELECT * FROM `url_master` WHERE USER_ID=?"
        db.query(data, User, (err, result) => {
            if (err) {
                throw err
            }
            else {
                return res.status(200).json(result)
            }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}



//Get one  url based on urlID;
const getURLbasedOnId = (req,res) => {
    try {
        let URL = req.params.id;
        let data = "SELECT * FROM `url_master` WHERE ID=?"
        db.query(data, URL, (err, result) => {
            if (err) {
                throw err
            }
            else {
                return res.status(200).json(result)
            }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}



module.exports = {
    createURL,
    getURLbasedOnUser,
    getURLbasedOnId
}