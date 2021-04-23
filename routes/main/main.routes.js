const express = require("express");
const path = require("path");
const router = express.Router();

const con = require("../../database");

router.post("/login", (req, res) => {
  let script = "call obtener_usuario(?,?)";
  console.log(req.query.cedula,req.query.password);
  con.query(
    script,
    [req.query.cedula, req.query.password],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows[0]);
      } else {
        console.log(err);
        res.json({ err: "Server Error", id: 3 });
      }
    }
  );
});

router.post("/insertUser", (req, res) => {
  let script = "call insertar_usuario(?,?,?,?,?)";
  con.query(
    script,
    [req.query.cedula,req.query.nombre, req.query.apellidos, req.query.correo, req.query.clave],
    (err, rows, fields) => {
      if (!err) {
        console.log(rows.affectedRows + " rows affected");  
        res.sendStatus(200);
      } else {
        console.log(err);
        res.json({ err: "Server Error", id: 3 });
      }
    }
  );

  router.put("/updateUser",(req,res)=>{
    let script = "call actualizar_usuario(?,?,?,?,?)";
    con.query(script,[req.query.cedula,req.query.nombre, req.query.apellidos, req.query.correo, req.query.clave],
      (err,rows,fields)=>{
        if(!err){
          console.log(rows.changedRows + " rows changed");
          res.send(rows.changedRows);
        }
        else{
          console.log(err);
          res.json({ err: "Server Error", id: 3 });
        }
      })
  })
});

module.exports = router;
