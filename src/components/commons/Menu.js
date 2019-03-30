import { withRouter } from 'next/router';
import Link from 'next/link';
import { Icon, Text } from 'evergreen-ui';

const MenuLink = withRouter(({ router, href, icon, text, last = false }) => (
  <Link prefetch href={href}>
    <a className="tab">
      <figure>
        <Icon
          icon={icon}
          size={16}
          color="#fff"
          display="block"
          margin="auto"
        />
      </figure>
      <Text color="#fff">{text}</Text>

      <style jsx>
        {`
          figure {
            margin: 0 0 10px;
          }

          a {
            text-decoration: none;
            color: '#fff';
          }

          .tab {
            background-color: ${router.pathname.match(href)
              ? '#234361'
              : 'transparent'};
            display: flex;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out 0s;
            padding: 10px;
            margin-bottom: ${last ? '0' : '10px'};
          }

          .tab:hover {
            background-color: #7b8ea0 !important;
          }
        `}
      </style>
    </a>
  </Link>
));

const Menu = () => (
  <nav>
    <div className="wrapper">
      <div className="navigation">
        <img src="/static/logo.png" alt="logo" height="30px" width="30px" />
        <MenuLink href="/index" text="Dashboard" icon="list-detail-view" />
        <MenuLink href="/products" text="Produtos" icon="list-detail-view" />
      </div>
      <div className="navigation">
        <MenuLink href="/logout" text="Sair" icon="log-out" last />
      </div>
    </div>

    <style jsx>
      {`
        nav {
          flex-shrink: 0;
          width: 90px;
        }

        img {
          margin: 2px 0 18px;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #425a70;
          text-align: center;
          height: 100vh;
          overflow: auto;
          position: sticky;
          top: 0;
          left: 0;
        }

        .navigation {
          margin: 10px 0;
        }
      `}
    </style>
  </nav>
);

export default Menu;
