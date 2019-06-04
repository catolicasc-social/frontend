import React from 'react';
import Router from 'next/router';

import { Button } from '../components/commons/Button';
import { Text } from '../components/commons/Text';
import { Paragraph } from '../components/commons/Paragraph';
import { Heading } from '../components/commons/Heading';
import { Pane } from '../components/commons/Pane';

const errors = {
  404: {
    title: 'Oooops! Página não encontrada',
    description: 'Parece que o endereço foi digitado incorretamente',
    statusCode: 404
  },
  500: {
    title: 'Erro do Servidor Interno',
    description: 'Ocorreu um erro interno no servidor',
    statusCode: 500
  },
  default: {
    title: 'Erro HTTP',
    description: 'Ocorreu um erro ao tentar acessar a página'
  }
};

class Error extends React.Component {
  static getInitialProps({ res, xhr }) {
    const statusCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { statusCode };
  }

  handleBack() {
    Router.push('/');
  }

  renderContent({ title, description, statusCode }) {
    return (
      <Pane
        background="#f5f5f5"
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size={800} color="#425A70">
          {title}
          <Text size={600} color="muted" marginLeft={10}>
            {statusCode}
          </Text>
        </Heading>

        <Paragraph size={600} color="#425A70" marginTop={10} marginBottom={50}>
          {description}
        </Paragraph>

        <Button
          appearance="primary"
          height={35}
          width={200}
          justifyContent="center"
          isLoading={false}
          onClick={this.handleBack}
        >
          PÁGINA INICIAL
        </Button>
      </Pane>
    );
  }

  render() {
    let response;
    switch (this.props.statusCode) {
      case 200:
      case 404:
        response = this.renderContent(errors[404]);
        break;
      case 500:
        response = this.renderContent(errors[500]);
        break;
      default:
        response = this.renderContent({
          ...errors.default,
          statusCode: this.props.statusCode
        });
    }

    return response;
  }
}

export default Error;
