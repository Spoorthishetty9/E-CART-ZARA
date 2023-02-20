import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import SignInform from '../components/SignInform'

const SignIn = () => {
 const [theme] = useThemeHook();
  return (
    <Container className='py-5 mt-5'>
      <Row className='justify-content-center mt-5'>
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}
        >
          <h1 className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
            Sign in
          </h1>
        <SignInform />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
