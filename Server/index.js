const express= require('express');
const app=express();
const mysql=require('mysql');
const cors= require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"web_app",
});

app.post("/create",(req,res)=>{
    const name=req.body.name;
    

    db.query(
        "INSERT INTO todo_list (name, check) VALUES (?,?)",
        [name],
        (err,result)=>{
            if(err){
                console.log(err)
            }

            else{
                res.send("Values Inserted")
            }
        }
    )
});

app.get('/list', (req, res)=>{
    db.query("SELECT* FROM todo_list", (err, result)=>{
        if(err){
            console.log(err);

        }
        else{
            res.send(result);
        }
    })


})


app.listen(3001, ()=>{
    console.log("Todo bien todo correcto en el puerto 3001");
});