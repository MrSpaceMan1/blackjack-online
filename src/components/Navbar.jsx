import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear()
    }

    return ( 
    <nav>
        <div><Link to='/'>Logo</Link></div>
        <div>
            <Formik
            initialValues={{searchQuery: ""}}
            onSubmit={values => {
                navigate(`/profile/search?name=${values.searchQuery}`)
            }}
            >
                <Form>
                    <Field name='searchQuery'></Field>
                    <button type="submit">Wyszukaj</button>
                </Form>
            </Formik>
        </div>
        <div>
            <Link to="/register">Zarejestruj się</Link>
            <Link to='/profile/ZMIEN_TEN_STRING'>Profil</Link>
            <Link to='/login' onClick={handleLogout}>Wyloguj</Link>
        </div>
    </nav>
    );
}

export default Navbar;