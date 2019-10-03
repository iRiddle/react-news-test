import React, { useEffect } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getNewsTrigger } from "core/actions/news";

import { getNewsSelector, isLoadingNewsSelector } from "core/selectors/news";

import "containers/News/news.css";

const News = ({ news, getNewsTrigger, isLoadingNews }) => {
  useEffect(() => {
    getNewsTrigger();
  }, []);
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" lg="12" xl="12">
          {isLoadingNews ? (
            <div className="news_preloader">
              <Loader type="Oval" color="#17a2b8" height={100} width={100} />
            </div>
          ) : (
            news.map(news => (
              <Media key={news.id} className="news">
                <Media body>
                  <Media heading>{news.title}</Media>
                  {news.text}
                </Media>
              </Media>
            ))
          )}
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" lg="12" xl="12">
          <div className="news__count">{`Количество новостей: ${news.length}`}</div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  news: getNewsSelector(state),
  isLoadingNews: isLoadingNewsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getNewsTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
