import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validator/validators";
import {Field} from "redux-form";

export const FormControl = ({input, meta, child, element, ...props}) => {
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

export const createField = (placeholder, name, validators, component, props) => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} props={props}/>
    </div>
}