import React, { Component } from 'react';

function Button (props) {
    console.log('BTN props', props)
    if(props.type ==='submit'){
        return (
            <input type="submit" value={props.text} ></input>
        )    
    }
    //TODO predefined buttons like alert, submit, reset
    return (
        <button onClick={props.onClick} >{props.text}</button>
    )
}
 export default Button;
