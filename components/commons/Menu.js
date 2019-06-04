import { withRouter } from 'next/router';
import Link from 'next/link';
import { Icon, Text } from 'evergreen-ui';

const Menu = () => {
  const MenuLink = withRouter(({ router, href, icon, text, last = false }) => {
    const isActive = router.pathname.match(href);

    return (
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
              }

              .tab {
                background-color: ${isActive ? '#324c64' : 'transparent'};
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 10px;
                margin-bottom: ${last ? '0' : '10px'};
                cursor: pointer;
                opacity: ${isActive ? '1' : '.8'};
                transition: background-color 0.12s ease;
              }

              .tab:hover {
                opacity: 1;
              }

              .tab:active {
                background-color: #2d445a;
              }
            `}
          </style>
        </a>
      </Link>
    );
  });

  return (
    <nav>
      <div className="wrapper">
        <div className="navigation">
          <img src="/static/logo.png" alt="Logo" />
          <MenuLink href="/dashboard" text="Dashboard" icon="chart" />
          <MenuLink href="/products" text="Produtos" icon="list-detail-view" />
        </div>
        <div className="navigation">
          <MenuLink href="/index" text="Sair" icon="log-out" last />
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
            height: 37px;
            width: 37px;
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
};

export default Menu;
