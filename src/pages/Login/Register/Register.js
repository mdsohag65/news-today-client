import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contenxts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success("Please verify your email address")
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccept = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit} className='mb-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccept}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;