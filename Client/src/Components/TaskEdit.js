import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";

const TaskEdit = () => {
    return (
        <div>
            <h3>Editing Task ""</h3>
            <input type="text" />
            <button>Safe</button>
            <button>Cancel</button>
            
        </div>
    );
};

export default TaskEdit;