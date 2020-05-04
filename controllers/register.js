const model = require('../db/models/index');

module.exports = {
    getAll:async (req,res) =>{
        try {
            const users = await model.users.findAll({});
            if (users.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': users
            })
            } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
            }
        } catch (err) {
            res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
            })
        }
    },
    getByid:async (req,res) =>{
        try {
            const {
                phoneNumber,
                email
            } = req.body;
            const users = await model.users.findAll({
                where: {
                    mobile_number: phoneNumber
                }
            });
            if (users.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': users
            })
            } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
            }
        } catch (err) {
            res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
            })
        }
    },
    addUser:async (req,res) =>{
        const {
            phoneNumber,
            firstName,
            lastName,
            monthOfbirth,
            dateOfbirth,
            yearOfbirth,
            gender,
            email
        } = req.body;
        
        let dateformat = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g;
        let phoneTotest = req.body.phoneNumber
        if(dateformat.test(phoneTotest)){
            try {
                clearPhonenumber = phoneTotest.replace("+62", "0")
                const users = await model.users.findAll({
                    where: {
                        mobile_number: clearPhonenumber
                    }
                });
                if (users.length !== 0) {
                    res.status(200).send({
                        'status': 'ERRORMOBILENUMBER',
                        'messages': 'The mobile number you entered is already registered'
                    });
                } else {
                    try {
                        const users = await model.users.findAll({
                            where: {
                                email: email
                            }
                        });
                        if (users.length !== 0) {
                            res.status(200).send({
                                'status': 'ERROREMAIL',
                                'messages': 'The email you entered is already registered'
                            });
                        } else {
                            try {
                                const users = await model.users.create({
                                  mobile_number:clearPhonenumber,
                                  first_name: firstName,
                                  last_name: lastName,
                                  month_of_birth: monthOfbirth,
                                  date_of_birth: dateOfbirth,
                                  year_of_birth: yearOfbirth,
                                  gender,
                                  email
                                });
                                if (users) {
                                    res.status(200).send({
                                        'status': 'OK',
                                        'messages': 'User successfully added',
                                        'data': users,
                                    });
                                }
                            } catch (err) {
                               res.status(400).json({
                                 'status': 'ERROR',
                                 'messages': err.message,
                                 'data': {},
                               })
                            }
                        }
                    } catch (err) {
                        res.json({
                        'status': 'ERROR',
                        'messages': err.messages,
                        'data': {}
                        })
                    }
                }
            } catch (err) {
               res.status(400).json({
                 'status': 'ERROR',
                 'messages': err.message,
                 'data': {},
               })
            }
        } else {
            res.status(200).send({
                'status': 'NOTINDONESIAN',
                'messages': 'The mobile number you entered is not an Indonesian number'
            });
        }
    }
};