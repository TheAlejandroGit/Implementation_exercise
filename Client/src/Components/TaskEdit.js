import React from 'react';
import { Link } from 'react-router-dom';




const TaskEdit = () => {
   

      
    return (
        <div className='wrap'>
            <div className='edit'>
                <h3>Editing Task </h3>
                <input type="text" />
                <button>Safe</button>
                
            <Link to={"/"}><button>Cancel</button></Link>
                
            </div>

        </div>
    );
};



export default TaskEdit;

