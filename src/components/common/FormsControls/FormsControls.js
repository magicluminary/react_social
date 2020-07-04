import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({input, meta, child, element, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, element, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...props}/></FormControl>)
}

export const Input = (props) => {
    const {input, meta, children, element, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...props}/></FormControl>)
}