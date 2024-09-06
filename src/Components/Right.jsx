import React, { useState } from 'react'
import styles from "./Right.module.css"
import logo from "../images/logo.jpeg"; 
import { useFormik } from 'formik';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Right() {
    const [submitCount, setSubmitCount] = useState(0); 

    const handleSubmitCount = () => {
        setSubmitCount(submitCount + 1); 
    }

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required!';
        }
        else if (values.firstName.length > 10 && /^[A-Z]/i.test(values.firstName)) {
            errors.firstName = 'Maximum 10 simvol uzunlugunda olmalidir!';
        }
        else if (values.firstName.length < 3 && /^[A-Z]/i.test(values.firstName)) {
            errors.firstName = 'Minimum 3 simvol uzunlugunda olmalidir!';
        }
        else if (/^[0-9._*,%+-]{2,4}$/i.test(values.firstName)) {
            errors.firstName = 'Reqemler ve +, -, _, %, * kimi simvollardan istifade etmek olmaz!';
        }
        
        if (!values.lastName) {
            errors.lastName = 'Required!';
        }
        else if (values.lastName.length > 10 && /^[A-Z]/i.test(values.lastName)) {
            errors.lastName = 'Maximum 10 simvol uzunlugunda olmalidir!';
        }
        else if (values.lastName.length < 3 && /^[A-Z]/i.test(values.lastName)) {
            errors.lastName = 'Minimum 3 simvol uzunlugunda olmalidir!';
        }
        else if (/^[0-9._*,%+-]{2,4}$/i.test(values.lastName)) {
            errors.lastName = 'Reqemler ve +, -, _, %, * kimi simvollardan istifade etmek olmaz!';
        }
        
        if (!values.email) {
            errors.email = 'Required!';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email unvaninizi duzgun daxil edin!';
        }


        if(!values.phoneNumber){
            errors.phoneNumber = "Required!"
        }
        else if(values.phoneNumber.length!= 10 && /^[A-Z._%+-]/i.test(values.phoneNumber)){
            errors.phoneNumber = "Nomreniz 10 reqemden ibaret olmalidir!"
        }
        else{
            const prefix = values.phoneNumber.substring(0, 3);
            const validPrefixes = ["012", "010", "050", "051", "055", "070", "077"];
            
            if (!validPrefixes.includes(prefix)) {
                errors.phoneNumber = "Nomrenizi duzgun daxil edin!";
            }
        }
        if (!values.password) {
            errors.password = "Required!";
        } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(values.password)) {
            errors.password = "En az bir boyuk herf, bir kicik herf ve bir reqem olmalidir!";
        } else if (values.password.length < 6) {
            errors.password = "Password minimum 6 simvol uzunlugunda olmalidir!";
        }
        



        if(!values.confirmPassword){
            errors.confirmPassword = "Required!"
        }
        else if(values.password!= values.confirmPassword){
            errors.confirmPassword = "Parollar eyni deyil!"
        }
        return errors;

       
    };


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword:""
        },
        validate, 
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.icon}>
                    <img src={logo} alt="" />
                </div>
                <h1 className={styles.header}>Create Account</h1>
                <p className={styles.description}> For business. Band or celebrity</p>
                
                <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label htmlFor="firstName">First name</label>
                            <input 
                                type="text" 
                                id='firstName' 
                                name='firstName'
                                onChange={formik.handleChange} 
                                value={formik.values.firstName} 
                                style={formik.errors.firstName && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                {submitCount > 0 && formik.errors.firstName ? <div style={{color: "red", fontSize: "12px"}}>{formik.errors.firstName}</div> : null}
                            </div>
                        </div>
                        <div className={styles.col}>
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text" 
                                id='lastName' 
                                name='lastName' 
                                onChange={formik.handleChange} 
                                value={formik.values.lastName}
                                style={formik.errors.lastName && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{ height: '16px' }}>
                                { submitCount > 0 && formik.errors.lastName ? <div style={{color: "red", fontSize: "12px"}}>{formik.errors.lastName}</div> : null}
                            </div>

                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}> 
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id='email' 
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={formik.errors.email && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{height:"16px"}}>
                                {formik.errors.email && submitCount > 0 ? <div style={{color:"red" , fontSize: "12px"}}>{formik.errors.email}</div> : null}
                            </div>
                        </div>
                        <div className={styles.col}>
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input 
                            type="text" 
                            id='phoneNumber'
                            name='phoneNumber'
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            style={formik.errors.phoneNumber && submitCount > 0 ? {border: "2px solid red"} : null}/>

                            <div style={{height:"16px"}}>
                                {formik.errors.phoneNumber && submitCount > 0 ? <div style={{color:"red", fontSize:"12px"}}>{formik.errors.phoneNumber}</div> : null}
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            style={formik.errors.password && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{height:"16px"}}>
                                {formik.errors.password && submitCount > 0 ? <div style={{color:"red", fontSize:"12px"}}>{formik.errors.password}</div> : null}
                            </div>
                        </div>
                        <div className={styles.col}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                            type="password"
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            style={formik.errors.confirmPassword && submitCount > 0 ? {border: "2px solid red"} : null}/>
                            <div style={{height:"16px"}}>
                                {formik.errors.confirmPassword && submitCount > 0 ? <div style={{color:"red", fontSize:"12px"}}>{formik.errors.confirmPassword}</div> : null}
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" />
                                <label>Remember me</label>
                            </div>
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" />
                                <label>I agree to all the <a href="" style={{color: "blue", textDecoration:'none'}}>Terms</a> and <a href="" style={{color: "blue", textDecoration:'none'}}>Privacy Policy</a></label> 
                            </div>
                        </div>
                        <div className={styles.col}>
                            <a href="" style={{color: "blue", textDecoration:'none', textAlign: "end"}} >Forgot Password?</a>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <button className={styles.account} onClick={handleSubmitCount}>Create Account</button>
                        </div>
                        <div className={styles.col}>
                            <button className={styles.SignIn}>Sign-in With Google</button>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Don{"'"}t have account? 
                        <a href="" style={{color: "blue", textDecoration:'none'}}>Log In</a>
                    </div>
                    <div className={styles.social}>
                        <button className={styles.google}>
                            <FaGooglePlay style={{fontSize: "24px"}}/>
                            Google Play
                        </button>
                        <button className={styles.apple}>
                            <FaApple style={{fontSize: "24px"}}/>
                            App Store
                        </button>
                    </div>
                </form>

               
            </div>
        </div>
    )
}

export default Right