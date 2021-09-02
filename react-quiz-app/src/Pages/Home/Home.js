import {Button, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import './Home.css';
import Categories, { } from "../../Data/Categories"
function Home() {
    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Details</span>
                <div className='settings_select'>
                    <TextField style={{ marginBottom: 25 }} label="Enter Your Name" variant="outlined" />
                    <TextField
                        select label="Select Category"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.category}> 
                                {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        select label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant="container" color="primary">Start Quiz</Button>
                </div>
            </div>
            <img src="/quiz.jpeg" className='banner' alt="quiz img" />
        </div>
    );
};

export default Home
