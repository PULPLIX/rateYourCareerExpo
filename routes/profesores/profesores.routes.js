const express = require("express");
const path = require("path");
const router = express.Router();

const con = require("../../database");

router.post("/insertTeacher", (req, res) => {
  let script = "call insertar_profesor(?,?,?)";
  con.query(
    script,
    [req.query.titulo, req.query.annio_ingreso, req.query.usuario],
    (err, rows, fields) => {
      if (!err) {
        console.log("Profesor: " + rows.affectedRows + " rows affected");
        res.sendStatus(200);
      } else {
        console.log(err);
        res.json({ err: "Server Error", id: 3 });
      }
    }
  );
});

router.get("/getTeacher", (req, res) => {
  let script = "call obtener_profesor(?)";
  con.query(script, [req.query.cedula], (err, rows, fields) => {
    if (!err) {
      console.log("Profesor: " + rows[0]);
      res.send(rows[0]);
    } else {
        console.log(err);
        res.json({ err: "Server Error", id: 3 });
    }
  });
});

module.exports = router;
