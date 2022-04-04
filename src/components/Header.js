import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, FormGroup, Form, Input, Label, Button, ModalBody, Row, Col, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import BannerTop from './BannerTop'


const Header = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
    }
    const hanldeToggleModel = () => {
        setToggleModal(!toggleModal);
    }

    return (
        <React.Fragment>
            <Navbar color="warning" expand="md" light>
                <div className="container">
                    <NavbarToggler onClick={handleToggleNav} />
                    <Collapse isOpen={toggleNav} navbar>
                        <div>
                            <NavbarBrand className="okok" href="/">
                                <img src="assets/images/logo1.png" height="30" width="41"
                                    alt="Ristorante Con Fusion" />
                            </NavbarBrand>
                        </div>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Trang chủ
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/favorites">
                                    <span className="fa fa-heart fa-lg"></span> Wish List
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Liên hệ
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem className="nav-search">
                                <form>
                                    <div className="search">
                                        <input type="text" name="" placeholder="Nhập tên sản phẩm ..." />
                                        <button><i className="fa fa-search"></i></button>
                                    </div>
                                </form>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem className="fix">
                                <NavLink className="nav-link" to="#">
                                    <span className="fa fa-shopping-cart fa-lg"></span> Cart
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={hanldeToggleModel} className="nav-link" to="#">
                                    <span className="fa fa-user-circle fa-lg"></span> Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <BannerTop />
            <Modal isOpen={toggleModal} toggle={hanldeToggleModel}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button style={{ textAlign: "center" }} type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                    <Container>
                        <Row>
                            <Col xs="12">
                                Bạn chưa có tài khoản?
                            </Col>
                            <Col xs="12">
                                Quên mật khẩu?
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default Header;