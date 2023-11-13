import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '640px',
      }}
    >
      <img
        style={{ height: '400px', width: '400px' }}
        src="https://media.giphy.com/media/GFHJXPCoVQEec/giphy.gif"
        alt=""
      />
      <h1>Oops!!! {err.error.message}</h1>
      <h2>Something went wrong!</h2>
    </div>
  );
};

export default Error;
