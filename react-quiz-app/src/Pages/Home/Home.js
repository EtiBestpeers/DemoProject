import {Button, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import './Home.css';
import Categories, { } from "../../Data/Categories";
import {useState } from "react";
import {useHistory} from "react-router"
import ErrorMessage, {} from "../../components/ErrorMessage/ErrorMessage";
const Home =({name ,setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, seterror] = useState(false);
    
    const history = useHistory();

    const handleSubmit = () => {
 if(!category || !difficulty || !name){
     seterror(true);
     return ;
 }
 else{
    seterror(false);
    fetchQuestions(category, difficulty); 
    history.push('/quiz')
 }

    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Details</span>

                <div className='settings_select'>
                    {error && <ErrorMessage> PLease fill all the feilds</ErrorMessage>}
                    <TextField style={{ marginBottom: 25 }} label="Enter Your Name" variant="outlined" 
                    onChange={(e) => setName(e.target.value)} 
                    
                    />
                    <TextField
                        select label="Select Category"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
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
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant="contained" color="primary" size="large"
                    onClick={handleSubmit}
                    >Start Quiz</Button>
                </div>
            </div>
            <img src="/banner.jpg" className='banner' alt="quiz img" />
        </div>
    );
};

export default Home
