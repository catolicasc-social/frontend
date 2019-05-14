import Router from 'next/router';

import { Pane } from '../components/commons/Pane';
import { Button } from '../components/commons/Button';
import { Heading } from '../components/commons/Heading';

const YEAR = new Date().getFullYear();

const handleLogin = () => {
  Router.push('/index');
};

const Login = () => (
  <Pane
    background="#f5f5f5"
    height="100vh"
    width="100%"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Pane
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <img src="/static/logo.png" alt="Logo" />
      <Heading size={700} color="#425A70">
        Restaurante Popular
      </Heading>
    </Pane>

    <Pane
      background="#fff"
      width="25%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={8}
      padding={40}
      marginY={80}
    >
      <Heading size={600} color="#425A70">
        Bem vindo!
      </Heading>

      <Button
        appearance="primary"
        height={35}
        width="50%"
        justifyContent="center"
        marginTop={50}
        iconBefore="log-in"
        isLoading={false}
        onClick={handleLogin}
      >
        ENTRAR
      </Button>
    </Pane>

    <Heading size={200} color="#C7CED4" fontWeight={500}>
      Copyright &copy; {YEAR} Católica - Joinville | Todos os direitos
      reservados.
    </Heading>

    <style jsx>
      {`
        img {
          height: 70px;
          width: 70px;
          margin-right: 20px;
        }
      `}
    </style>
  </Pane>
);

export default Login;
