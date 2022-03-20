import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  //  const user = true;

  const {user,dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div>
      {console.log(user)}
      <div className="top">
        <div className="topleft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-discord"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="Link" to="/">
                HOME
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="Link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="Link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="Link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="toplistitem" onClick={handleLogout}>
              <Link className="Link" to="/login">
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>

        <div className="topright">
          
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImage"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="Link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
      </div>
    </div>
  );
}
