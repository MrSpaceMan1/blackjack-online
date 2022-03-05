import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const initialValues = {
        login: "",
        password: ""
    }
    const navigate = useNavigate()
    
    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                axios.post('http://127.0.0.1:5000/accounts/login', values)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    navigate('/')
                    actions.setSubmitting(false)
                })
                .catch(err => {
                    console.log(err.response);
                })
            }}
            >
                {({isSubmitting}) => (<Form>
                    <label htmlFor='login'>Login</label>
                    <Field name='login'></Field>
                    
                    <label htmlFor='password'>Hasło</label>
                    <Field name='password' type='password'></Field>

                    <button disabled={isSubmitting} type='submit'>Zaloguj się</button>
                </Form>)}
            </Formik>
        </div>
    );
}

export default LoginForm;