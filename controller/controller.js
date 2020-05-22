const { sql,poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getTotalPlantation(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalPlantation)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getTotalPlantationAvec1Paiement(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalPlantationAvec1Paiement)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getTotalPlantationEtatEgaleAZero(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalPlantationEtatEgaleAZero)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getTotalPlantationEtatEgaleAUn(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalPlantationEtatEgaleAUn)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getTotalPlantationEtatEgaleADeux(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalPlantationEtatEgaleADeux)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

        
    async getTotalMontantPrevisionnel(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalMontantPrevisionnel)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    
    async getTotalMontantPercu(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalMontantPercu)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
   
    async getTotalMontantPercuAvecPlantationEtatEgaleAZero(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalMontantPercuAvecPlantationEtatEgaleAZero)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    
    async getTotalMontantPercuAvecPlantationEtatEgaleAUn(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalMontantPercuAvecPlantationEtatEgaleAUn)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getTotalMontantPercuAvecPlantationEtatEgaleADeux(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getTotalMontantPercuAvecPlantationEtatEgaleADeux)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    /*
    async addNewData(req , res){
      try {
        if(req.body.EmployeeName != null && req.body.EmployeeCode != null && req.body.EmployeeTP != null  && req.body.EmployeeEmail != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('employeeName',sql.VarChar , req.body.EmployeeName)
          .input('employeeCode',sql.VarChar , req.body.EmployeeCode)
          .input('employeeTP',sql.VarChar,req.body.EmployeeTP)
          .input('employeeEmail',sql.VarChar,req.body.EmployeeEmail)
          .query(queries.addNewEmployee)
          res.json(result)
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async updateData(req , res){
      try {
        if(req.body.EmployeeName != null && req.body.EmployeeCode != null && req.body.EmployeeTP != null  && req.body.EmployeeEmail != null) {
        const pool = await poolPromise
          const result = await pool.request()
          .input('newEmployeeName',sql.VarChar , req.body.EmployeeName)
          .input('newEmployeeCode',sql.VarChar,req.body.EmployeeCode)
          .input('newEmployeeTP',sql.VarChar,req.body.EmployeeTP)
          .input('employeeEmail',sql.VarChar,req.body.EmployeeEmail)
          .query(queries.updateEmployeeDetails)
          res.json(result)
        } else {
          res.send('All fields are required!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deleteData(req , res){
      try {
        if(req.body.EmployeeEmail != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('employeeEmail',sql.VarChar,req.body.EmployeeEmail)
            .query(queries.deleteEmployee)
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    */
}

const controller = new MainController()
module.exports = controller;