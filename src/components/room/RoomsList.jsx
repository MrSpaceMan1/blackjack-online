import React, { useReducer, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ReactModal from 'react-modal';

function RoomsList({}) {
    const [modalEnabled, modalSwitch] = useReducer((state) => {return !state}, false);

    const initialValues = {name: "", maxPlayers: "2"};
    const handleAddingRooms = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false)
    };

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .min(3, "Nazwa pokoju musi mieć przynajmniej 3 znaki")
            .max(30, "Nazwa pokoju może mieć maksymalnie 30 znaków")
            .required("Nazwa pokoju jest wymagana"),
        maxPlayers: yup
            .string()
            .optional()
    });

    ReactModal.setAppElement("#root")
    return ( 
    <div>
        <ReactModal
            isOpen={modalEnabled}
            parentSelector={() => {return document.getElementById("root")}}
        >
            <button onClick={modalSwitch}>x</button>
            <Formik
                initialValues={initialValues}
                onSubmit={handleAddingRooms}
                validationSchema={validationSchema}
            >
                {({isSubmitting}) => (<Form>
                    <label htmlFor='name'>Nazwa pokoju</label>
                    <Field name='name'></Field>
                    <ErrorMessage name='name' />

                    <label htmlFor='maxPlayers'>Ilość graczy</label>
                    <Field name='maxPlayers' as="select">
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </Field>
                    <ErrorMessage name='maxPlayers' />

                    <button disabled={isSubmitting} type='submit'>Stwórz pokój</button>
                </Form>)}
            </Formik>
        </ReactModal>
        <button onClick={modalSwitch}>Stwórz pokój</button>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>
    </div>
    );
}

export default RoomsList;