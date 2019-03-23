import Head from 'next/head';

const Page = ({ children }) => (
  <>
    <Head>
      <title>Restaurante Popular</title>
    </Head>
    <div>{children}</div>
  </>
);

export default Page;
