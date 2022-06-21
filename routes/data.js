const express = require('express');
const app = express();
const ModelData=require('../models/data')

app.post('/data',function(req, res){

    const {text} = req.body;

    let modelData= new ModelData({
        text:text
    })
   
    modelData.save((err, dataDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            text: dataDB
        });
    });
});

module.exports = app;  