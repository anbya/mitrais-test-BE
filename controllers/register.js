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
    addUser:async (req,res) =>{
        try {
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
            const users = await model.users.create({
              mobile_number:phoneNumber,
              first_name: firstName,
              last_name: lastName,
              month_of_birth: monthOfbirth,
              date_of_birth: dateOfbirth,
              year_of_birth: yearOfbirth,
              gender,
              email
            });
            if (users) {
                res.status(201).json({
                'status': 'OK',
                'messages': 'User berhasil ditambahkan',
                'data': users,
                })
            }
        } catch (err) {
           res.status(400).json({
             'status': 'ERROR',
             'messages': err.message,
             'data': {},
           })
        }
    }
};