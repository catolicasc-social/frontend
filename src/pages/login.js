import Router from 'next/router';

import { Button } from '../components/commons/Button';
import { Heading } from '../components/commons/Heading';
import { Pane } from '../components/commons/Pane';

const handleLogin = () => {
  Router.push('/index');
};

const Login = () => (
  <div className="container div-centered">
    <div className="div-welcome div-centered">
      <div className="div-centered">
        <Pane id="paneWelcome" height={300}>
          <Heading>Bem Vindo!</Heading>
        </Pane>
        <Pane height={100}>
          <Button
            appearance="primary"
            intent="success"
            isLoading={false}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Pane>
      </div>
    </div>
    <style jsx>
      {`
        .div-centered {
          text-align: center;
          padding-top: 5rem;
        }

        .container {
          height: 100%;
        }

        .div-welcome {
          box-shadow: 2px 9px 8px 0px rgba(67, 90, 111, 0.3),
            0 16px 24px -8px rgba(67, 90, 111, 0.47);
          display: inline-table;
          width: 50%;
          height: 100%;
        }
      `}
    </style>
  </div>
);

export default Login;
