import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function RegisterForm() {

    const initialValues = {
        email: "",
        login:"",
        password: "",
        confirm_password: "",
        profile_picture: ""
    }
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .min(6, "Email nie może mieć mniej niż 6 znaków")
            .max(60, "Email nie może mieć więcej niż 60 znaków")
            .matches(/.+@(.+\.)+.+/, "Zły format e-maila")
            .required("Pole wymagane"),
        login: yup
            .string()
            .min(3, "Login nie może mieć mniej niż 3 znaki")
            .max(30, "Login nie może mieć więcej niż 30 znaków")
            .required("Pole wymagane"),
        password: yup
            .string()
            .min(6, "Hasło nie może mieć mniej niż 6 znaków")
            .max(30, "Hasło nie może mieć więcej niż 30 znaków")
            .required("Pole wymagane"),
        confirm_password: yup.string()
            .required("Pole wymagane")
            .test("is-same-as-password", "Hasła się nie zgadzają", function (value, context) {
                return value === context.from[0].value.password
            }),
        profile_picture: yup.mixed().optional()
    })
    return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
        >
            <Form style={{"display": "grid", "gridColumnTemplate": "1fr", "width": "60%", "margin": "0 auto"}}>
                <label htmlFor='email'>Email</label>
                <Field 
                    name='email' 
                    type='email'
                    placeholder='Wpisz email'
                ></Field>
                <ErrorMessage name='email'></ErrorMessage>

                <label htmlFor='login'>Login</label>
                <Field 
                    name='login'
                    placeholder='Wpisz login'
                ></Field>
                <ErrorMessage name='login'></ErrorMessage>

                <label htmlFor='password'>Hasło</label>
                <Field 
                    name='password' 
                    type='password'
                    placeholder='Wpisz hasło'
                ></Field>
                <ErrorMessage name='password'></ErrorMessage>

                <label htmlFor='confirm_password'>Potwierdź hasło</label>
                <Field 
                    name='confirm_password' 
                    type='password'
                    placeholder='Powtórz hasło'
                ></Field>
                <ErrorMessage name='confirm_password'></ErrorMessage>

                <label htmlFor='profile_picture'>Zdjęcie profilowe(opcjonalne)</label>
                <Field 
                    name='profile_picture' 
                    type='file'
                ></Field>
                <ErrorMessage name='profile_picture'></ErrorMessage>

                <button>Zarejestruj się</button>
            </Form>
        </Formik>
    </div>
    );
}

export default RegisterForm;