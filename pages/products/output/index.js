import ContainerProducts from '../../../layouts/products';

const Output = () => (
  <ContainerProducts>
    <span>Saída</span>

    <style jsx>
      {`
        span {
          color: red;
        }
      `}
    </style>
  </ContainerProducts>
);

export default Output;
