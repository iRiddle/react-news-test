import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import Loader from "react-loader-spinner";

import { getUserInfoTrigger } from "core/actions/userInfo";

import { getUserIdSelector } from "core/selectors/user";
import {
  getUserInfoSelector,
  isUserInfoPendingSelector,
  getUserInfoLanguagesSelector,
  getUserSocialLanguagesSelector
} from "core/selectors/userInfo";

import { getIcon } from "core/utils";

const isEmpty = require("lodash/isEmpty");

const Profile = ({
  userId,
  userInfo,
  userLanguages,
  userSocial,
  isUserPending,
  getUserInfoTrigger
}) => {
  useEffect(() => {
    getUserInfoTrigger(userId);
  }, []);
  console.log(userSocial);
  return isEmpty(userId) ? (
    <Redirect to="/login" />
  ) : (
    <Container>
      {isUserPending ? (
        <div className="news_preloader">
          <Loader type="Oval" color="#17a2b8" height={100} width={100} />
        </div>
      ) : (
        <Row>
          <Col xs="12" sm="12" lg="12" xl="12">
            <h1>Профиль пользователя</h1>
          </Col>
          <Col xs="12" sm="12" lg="12" xl="12">
            <h2>Город:</h2>
            <h4>{userInfo.city}</h4>
          </Col>
          <Col xs="12" sm="12" lg="12" xl="12">
            <h2>Знание языков:</h2>
            {userLanguages.map(language => (
              <h4 key={language}>{language}</h4>
            ))}
          </Col>
          <Col xs="12" sm="12" lg="12" xl="12">
            <h2>Ссылки:</h2>
            {userSocial.map(social => (
              <h4 key={social.label}>
                <a href={social.link} target="_blank">
                  <img
                    src={getIcon(social.label)}
                    width="25"
                    height="25"
                    style={{ marginRight: "12px" }}
                  ></img>
                  {social.label}
                </a>
              </h4>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  userId: getUserIdSelector(state),
  userInfo: getUserInfoSelector(state),
  isUserPending: isUserInfoPendingSelector(state),
  userLanguages: getUserInfoLanguagesSelector(state),
  userSocial: getUserSocialLanguagesSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserInfoTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
