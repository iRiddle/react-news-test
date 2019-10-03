import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

import { logoutAction } from "core/actions/login";
import { getUserIdSelector } from "core/selectors/user";

import "components/Header/header.css";

const isEmpty = require("lodash/isEmpty");

const Header = ({ userId, logoutAction }) => {
  const logout = () => {
    logoutAction();
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">
          <NavbarBrand>News</NavbarBrand>
        </Link>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav__link">
              <Link to="/news">Новости</Link>
            </NavItem>
            <NavItem className="nav__link">
              <Link to="/profile">Профиль</Link>
            </NavItem>
            <NavItem>
              {isEmpty(userId) ? (
                <Link to="/login">
                  <Button color="primary">Войти</Button>
                </Link>
              ) : (
                <Button color="danger" onClick={logout}>
                  Выйти
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: getUserIdSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
