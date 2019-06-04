import { Heading } from './Heading';

const Header = ({ title }) => (
  <header>
    <Heading size={500} color="#425A70">
      {title}
    </Heading>

    <style jsx>
      {`
        header {
          position: sticky;
          top: 0;
          left: 0;
          z-index: 1;
          background-color: #fff;
          padding: 15px;
          box-shadow: rgba(67, 90, 111, 0.42) 0px 0px 1px 0px;
        }
      `}
    </style>
  </header>
);

export default Header;
