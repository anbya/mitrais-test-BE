const connection = require("../config/db")

module.exports = {
    getAll:(req,res) =>{
        connection.query("SELECT * FROM prm_karyawan WHERE NIK = 1116015")
        .then(([results, metadata]) => {
            res.status(200).send({
                results
            });
        })
        .catch(err => console.log(err));
    }
};