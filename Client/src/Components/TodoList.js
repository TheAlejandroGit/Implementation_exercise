import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';
const TodoList = () => {
    const [name,setName]=useState("");
    const [list,setList]=useState([]);

   
    useEffect(()=>{

      axios.get('http://localhost:3001/list')
      .then(res=>setList(res.data))
      
  },[]);
    
    const getList=()=>{
        
        axios.get('http://localhost:3001/list')
        .then((response)=>{
        setList(response.data);
          console.log(response.data);
     
        });
      };

      const addTask=event=>{
        event.preventDefault();
        axios.post("http://localhost:3001/create", {
          name:name
        })
        .then(()=>{
           
            getList()
            reset();
          });

        };

        const reset=()=>{
            setName("");
        }

        const deleteTask=(id)=>{
          axios.delete(`http://localhost:3001/delete/${id}`)
          .then((
           (response)=>{
             
             getList()
           }
       
         ))
          
        };
      
    return (
        <div className='wrap'> 
        
            <div className='list'>
                <h3>TO-DO List</h3>
                {
                        list.map(val=>(
                        <div key={val.id} value={val.id} className='task'>
                        <input type="checkbox" />
                        <p ><b>{val.name}</b> </p>
                        <Link to={"/edit"}> <button>Edit</button></Link>
                        <button onClick={()=>{deleteTask(val.id)}}>Delete</button>
                      
                        </div>
                        ))
                }
                <div className='form'> 

                <form onSubmit={addTask}>    
                    <input type="text" placeholder='New Task' onChange={(event)=>{setName(event.target.value)}} value={name} required/>
                    <button className='add-btn' >Add</button>
                </form> 

                </div>
            </div>
        </div>
    );
};

export default TodoList;