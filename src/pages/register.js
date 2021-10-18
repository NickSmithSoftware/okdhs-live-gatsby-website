import React, {useState, useEffect} from 'react';

import Layout from '../components/layout';

const hasEmptyField = (form) => {
    for(key in form) {
        if(key == "") return true;
    }
    return false;
}

const passwordsMatch = (form) => {
    if(form.password == "" || form.passwordConfirmation == "") return false;
    return form.password == form.passwordConfirmation;
}

const handleRegistration = async (e, form, auth) => {
    if(!hasEmptyField(form) && passwordsMatch(form)) {
        
    }
}

export const Register = () => {
    const [form, updateForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })
    useEffect(() => {

    }, [])
    return (
        <Layout>
            <form onSubmit={handleRegistration(e, form)}>
                <label for="register-first-name" className="form-label">First Name</label>
                <input value={form.firstName} type="text" className="form-control" id="register-first-name" onChange={(e) => {
                    updateForm({
                        ...form,
                        firstName: e.target.value
                    })
                }}/>
                
                <label for="register-last-name" className="form-label">First Name</label>
                <input value={form.lastName} type="text" className="form-control" id="register-last-name" onChange={(e) => {
                    updateForm({
                        ...form,
                        lastName: e.target.value
                    })
                }} />
                
                <label for="register-email" className="form-label">First Name</label>
                <input value={form.email} type="email" className="form-control" id="register-email" onChange={(e) => {
                    updateForm({
                        ...form,
                        email: e.target.value
                    })
                }} />
                
                <label for="register-password" className="form-label">First Name</label>
                <input value={form.password} type="password" className="form-control" id="register-password" onChange={(e) => {
                    updateForm({
                        ...form,
                        password: e.target.value
                    })
                }} />

                <label for="register-password-confirmation" className="form-label">First Name</label>
                <input type="password" className="form-control" id="register-password-confirmation" onChange={(e) => {
                    updateForm({
                        ...form,
                        passwordConfirmation: e.target.value
                    })
                }} />

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </Layout>
    )
}