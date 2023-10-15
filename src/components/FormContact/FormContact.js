import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const contactsSchema = Yup.object().shape({
    name: Yup.string
        .matches(/^[a-zA-Z\s]+$/, 'Please, enter only letter')
        .min(3, 'Too short!')
        .required('This field is required!'),
    number: Yup.string
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: XXX-XX-XX')
        .required('This field is required!'),
})

export const FormContact = ({ onAdd }) => {
    return (
        
            <Formik
                initialValues={{
                    name: '',
                    number:'',
        
            }}
            validationSchema={contactsSchema}
                onSubmit={(values, actions) => {
                    onAdd(values);
                    actions.resetForm();
            }}>
            

            {({errors}) => (
                <Form>
                    <label>Name
                    <Field name="name" type="text" placeholder="Enter name" />
                    <div>{errors.name}</div>
                    </label>

                    <label>Number
                        <Field name="number" type="number" placeholder="Enter number"/>
                    </label>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        
    )
}
