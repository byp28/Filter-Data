const axios = require("axios")
const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit : 10,
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb'
})


const dashboard = (req,res,next) =>{
    res.render('dashboard')
}

const selectAll = (req,res,next)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
        console.log(`connected as id ${connection.threadId}`)
    
        connection.query('SELECT * FROM habitant',(err,rows)=>{
            connection.release();
    
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
            
        })
    })
}

const selectAllBySexe = (req,res,next)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
        console.log(`connected as id ${connection.threadId}`)
    
        connection.query('SELECT sexe, COUNT(*) as nombre FROM habitant GROUP BY sexe',(err,rows)=>{
            connection.release();
    
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
            
        })
    })
}

const selectAllByCity = (req,res,next)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log("filtre par ville")
        let cityFilter = "ville = ?";
    
        connection.query(`SELECT sexe, COUNT(*) as nombre FROM habitant WHERE ${cityFilter} GROUP BY sexe`,[req.params.ville],(err,rows)=>{
            connection.release();
    
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
            
        })
    })
}

const selectAllByAge = (req,res,next)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log("filtre par age")
        let AgeMin = "age >= ?";
        let AgeMax = "age <= ?";
        

        connection.query(`SELECT sexe, COUNT(*) as nombre FROM habitant WHERE ${AgeMin} AND ${AgeMax}  GROUP BY sexe`,[req.params.min,req.params.max],(err,rows)=>{
            connection.release();
    
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
            
        })
    })
}

const selectAllByCityAndAge = (req,res,next)=>{
    pool.getConnection((err,connection)=>{
        if(err)throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log("filtre par age et ville "+req.params.min+" "+req.params.max+" "+req.params.ville)
        let AgeMin = "age >= ?";
        let AgeMax = "age <= ?";
        let cityFilter = "ville = ?";

        connection.query(`SELECT sexe, COUNT(*) as nombre FROM habitant WHERE ${AgeMin} AND ${AgeMax} AND ${cityFilter} GROUP BY sexe`,[req.params.min,req.params.max,req.params.ville],(err,rows)=>{
            connection.release();
    
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
            
        })
    })
}

module.exports = {
    dashboard,
    selectAll,
    selectAllBySexe,
    selectAllByCity,
    selectAllByAge,
    selectAllByCityAndAge,
}