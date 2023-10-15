import { Formik, Field, Form } from 'formik';

export const FormContact = ({ onAdd }) => {
    return (
        
            <Formik
                initialValues={{
                    name: '',
                    number:'',
        
                }}
                onSubmit={(values, actions) => {
                    onAdd(values);
                    actions.resetForm();
                }}
            >
                <Form>
                    <label>Name
                        <Field name="name" placeholder="Enter name" required/>
                    </label>

                    <label>Number
                        <Field name="number" placeholder="Enter number" required />
                    </label>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        
    )
}
