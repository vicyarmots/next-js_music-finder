import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = ({ children, albums }) => {
  const getStaticProps = async () => {
    const response = await fetch("https://api.deezer.com/album/302127");
    const data = response.data

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { albums: data },
    };
  };

  useEffect(() => {
    getStaticProps();
  }, []);

  return (
    <>
      <Header albums={albums} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
