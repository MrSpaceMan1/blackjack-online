import { Formik, Form, Field } from 'formik';

function LoginForm() {
    const initialValues = {
        login: "",
        password: ""
    }
    
    return (
        <div>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false)
            }}
            >
                {({isSubmitting}) => (<Form>
                    <label htmlFor='login'>Login</label>
                    <Field name='login'></Field>
                    
                    <label htmlFor='password'>Hasło</label>
                    <Field name='password'></Field>

                    <button disabled={isSubmitting} type='submit'>Zaloguj się</button>
                </Form>)}
            </Formik>
        </div>
    );
}

export default LoginForm;