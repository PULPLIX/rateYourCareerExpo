const express = require("express");
const path = require("path");
const router = express.Router();

const con = require("../../database");


router.post("/insertCourse",(req,res)=>{
    let script = "call insertar_curso(?,?,?,?,?,?)";
    con.query(
        script,
        [req.query.numero,req.query.carrera,req.query.nombre,req.query.carta,req.query.creditos,req.query.descripcion],
        (err,rows,fields)=>{
            if(!err){
                console.log("Curso: " + rows.affectedRows + " rows affected");
                res.sendStatus(200);
            }else{
                console.log(err);
                res.json({ err: "Server Error", id: 3 });
            }
        }
    )
});

router.get("/getCourse",(req,res)=>{
    let script = "call obtener_curso(?)";
    con.query(
        script,
        [req.query.numero],
        (err,rows,fields)=>{
            if(!err){
                console.log("Curso: " + rows[0]);
                res.send(rows[0]);
            }else{
                console.log(err);
                res.json({ err: "Server Error", id: 3 });
            }
        }
    )
})

module.exports = router;