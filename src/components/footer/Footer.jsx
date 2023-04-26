import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <section id="footerbg">
                <footer class="text-center mt-5">
                    <Row id="footer">
                        <Col>
                            <div className="logoFooter">
                                <a className="navbar-brand align-items-center" href="/">
                                    <img src={process.env.PUBLIC_URL + '/Images/logofinal-navbar.png'} height="120" alt="Evince" />
                                </a>
                            </div>

                            <div className="footerCenter">
                                {/* <ul className="footerList"> */}
                                <span className="footerListItem">
                                    <Link className="footerLink" to="/">
                                        HOME{" "}
                                    </Link>
                                </span>

                                <span className="footerListItem">
                                    <Link className="footerLink" to="/about">
                                       | ABOUT |
                                    </Link>
                                </span>
                                <span className="footerListItem">
                                    <Link className="footerLink" to="/bookstore">
                                       {" "} BOOK STORE 
                                    </Link>
                                </span>
                                <li className="footerListItem">
                                </li>
                                {/* </ul> */}
                            </div>
                        </Col>
                        <p className="p" >Contact me: 345lemaire@gmail.com 
                        <br/>
                        © 2023 Evince. All rights reserved | Created By: JYT WEB DESIGNS</p>
                    </Row>
                </footer>
            </section>
        </>
    )
}