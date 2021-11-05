import { useEffect } from "react";

const Artist = ({id}) => {
  const getStaticProps = async () => {
    const response = await fetch(`https://api.deezer.com/artist/${id}`);
    const data = response.data

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { artist: data },
    };
  };

  useEffect(() => {
    getStaticProps();
  }, []);

  return (
    <div>
      <h4>{artist.name}</h4>
      <p>{artist.id}</p>
    </div>
  )
}

export default Artist