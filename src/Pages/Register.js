import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import 'react-phone-input-2/lib/high-res.css';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const [theme] = useThemeHook();
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Create Account
                    </h1>
                <RegisterForm />
                </Col>
            </Row>
       </Container>
    );
};

export default Register;