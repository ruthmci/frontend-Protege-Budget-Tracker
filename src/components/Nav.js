import React from 'react';
import { Link} from "react-router-dom";

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav>
          <div>
            <Link to="/" className="Nav__brand">
              {/* <img src="logo.svg" className="Nav__logo" /> */}
            </Link>

            <div>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add a new protege</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }