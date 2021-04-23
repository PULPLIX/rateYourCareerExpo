const express = require("express");
const path = require("path");
const router = express.Router();

const con = require("../../database");

router.post("/insertStudent", (req, res) => {
  let script = "call insertar_estudiante(?,?,?)";
  con.query(
    script,
    [req.query.usuario, req.query.carrera, req.query.nivel],
    (err, rows, fields) => {
        if(!err){
            console.log("Estudiante: " + rows.affectedRows + " rows affected");  
            res.sendStatus(200);
        }
        else{
            console.log(err);
            res.json({ err: "Server Error", id: 3 });
        }
    }
  );
});

router.get("/getStudent",(req,res)=>{
    let script = "call obtener_estudiante(?)";
    con.query(
        script,
        [req.query.cedula],
        (err,rows,fields)=>{
            if(!err){
                console.log("Estudiante: "+rows[0]);
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
