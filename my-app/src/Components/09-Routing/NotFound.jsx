import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>The page you are looking for can't be found!!!!</h1>
        <Link to="/" className="btn btn-danger">
     
          Home
     
        </Link>
    </>
  );
};

export default NotFound;
