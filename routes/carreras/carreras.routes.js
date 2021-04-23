const express = require("express");
const path = require("path");
const router = express.Router();

const con = require("../../database");

router.post("/insertCareer", (req, res) => {
  let script = "call insertar_carrera(?,?)";
  con.query(
    script,
    [req.query.codigo, req.query.nombre],
    (err, rows, fields) => {
        if(!err){
            console.log("Carrera: " + rows.affectedRows + " rows affected");  
            res.sendStatus(200);
        }
        else{
            console.log(err);
            res.json({ err: "Server Error", id: 3 });
        }
    }
  );
});

router.get("/getCareer",(req,res)=>{
    let script = "call obtener_carrera(?)";
    con.query(
        script,
        [req.query.codigo],
        (err,rows,fields)=>{
            if(!err){
                console.log("Carrera: "+rows[0]);
                res.send(rows[0]);
            }
            else{
                console.log(err);
                res.json({ err: "Server Error", id: 3 });
            }
        }
    )
})

module.exports = router;
