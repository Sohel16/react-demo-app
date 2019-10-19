import * as React from "react";

import "./main.css";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Main extends React.Component<any, any> {
  render() {
    return (
      <div className="main-wraper">
        <div className="section-wraper">
          <div className="main">
            i am main
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <NavLink to="/players" className="Card-title" style={{textDecoration: "none", listStyle: "none"}}>
                  <Card.Title>ONE</Card.Title>
                  <Card.Text>
                   Table with multiple Search, Sort & Pagination
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </NavLink>
              </Card.Body>
            </Card>
          </div>
          <div className="article">I am article</div>
        </div>
       
      </div>
    );
  }
}

export default Main;
