import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { Values } from '../../context';
import { actionTypes } from '../../reducer';

export default function Login(){
    const [state, dispatch] = Values();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCG6WLK3KJEkZwN-zD1MkCpe3ps86QcuiCKg&usqp=CAU" alt="" />
                <h1>Sign In to Slack</h1>
                <p>demo.slack.com</p>
                <Button onClick={() => signIn()}>Sign In with Google</Button>
            </div>
        </div>
    );
}