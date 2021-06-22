import {Link} from 'react-router-dom';
const Nav = () =>{

    return(
        <>  
            {/* Link is a nav link from react-router-dom */}
            <Link to="/" className="btn btn-danger">Home</Link>
            <Link to="/about" className="btn btn-outline-success">About</Link>
            <Link to="/shop" className="btn btn-outline-info">Product</Link>
            <Link to="/costco" className="btn btn-outline-warning">costco</Link>
        </>
    )
}
export default Nav; 