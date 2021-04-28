import React from 'react'
import classes from '../Input/Input.module.css'
const Input = (props) => {
    return(
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
        // <input
        // type={props.type}
        // onClick={props.onClick}
        // className={props.className}
        // >
        //     {props.children}
        // </input>
    )
}

export default Input