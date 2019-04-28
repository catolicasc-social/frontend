/* eslint-disable react/jsx-one-expression-per-line */
import Router from 'next/router';
import { Icon } from 'evergreen-ui';

import { Button } from '../components/commons/Button';
import { Heading } from '../components/commons/Heading';

const handleLogin = () => {
  Router.push('/index');
};

const Login = () => (
  <div className="container">
    <div className="div-Center">
      <figure>
        <Icon
          icon="person"
          size={35}
          color="muted"
          display="block"
          margin="auto"
        />
      </figure>
      <Heading>Bem vindo!</Heading>
      <div className="div-Login">
        <Button appearance="primary" isLoading={false} onClick={handleLogin}>
          <Icon marginRight={16} icon="log-in" size={16} />
          Login
        </Button>
      </div>
    </div>
    <footer>
      Copyright &copy; 2019 Catolica - Joinville. All rights reserved.
    </footer>
    <style jsx global>
      {`
        html,
        body {
          height: 100% !important;
          width: 100%;
          overflow: hidden;
          background-color: #f5f5f5;
        }
      `}
    </style>
    <style jsx>
      {`
        .div-Login {
          margin-top: 10vh;
          text-align: center;
        }
        .div-Center {
          display: flex;
          border-radius: 3rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          vertical-align: middle;
          background-color: white;
          margin: 25vh 25vw;
          height: 40vh;
          width: 25vw;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
          background-color: #f5f5f5;
        }
      `}
    </style>
  </div>
);

export default Login;
