import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../axiosAuth/axiosWithAuth.js'
//axios.defaults.withCredentials = true;

const Jokes = props => {
    const [jokes, setJokes]= useState([])
    //console.log('user', JSON.parse(localStorage.getItem('user')))
    
    useEffect(() => {
   
    axiosWithAuth().get('http://localhost:3300/api/jokes')
        .then(res => {
           console.log(res.data) 
           setJokes(res.data)
        })
        .catch(err => console.log('error from /get', err.responce))
    }, [])


    return(
    <div className='jokeContainer'>
        {jokes.map(joke => {
            return (<div className ='jokeCard' key={joke.id}>
                <p>{joke.joke}</p>
            </div>)
        })}
        <button>Log out</button>
    </div>) 
}

export default Jokes;