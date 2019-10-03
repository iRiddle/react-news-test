import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";

import { loginTrigger } from "core/actions/login";

import { validateEmail } from "core/utils";

const Login = props => {
  const dispatch = useDispatch();
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");

  const onChangeEmail = e => {
    handleEmail(e.target.value);
  };

  const onChangePassword = e => {
    handlePassword(e.target.value);
  };

  const submitButton = () => {
    if (!validateEmail(email)) {
      return NotificationManager.error("Неверно введен Email");
    }

    if (!password.length) {
      return NotificationManager.error("Пароль не может быть пустым");
    }

    dispatch(loginTrigger({ email, password }, getStateOfQuery));
  };

  const getStateOfQuery = ({ status }) => {
    switch (status) {
      case "ok": {
        props.history.push("/profile");
      }

      case "err": {
        handlePassword("");
        return NotificationManager.error("Неверный email или пароль");
      }

      case "errorServer": {
        return NotificationManager.error("Ошибка сервера");
      }

      default: {
        return NotificationManager.error("Ошибка сервера");
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" lg="12" xl="12">
          <Form>
            <FormGroup>
              <Label for="emailId">Email</Label>
              <Input
                type="email"
                name="email"
                id="emailId"
                placeholder="Введите E-mail"
                onChange={onChangeEmail}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="passwordId">Пароль</Label>
              <Input
                type="password"
                name="password"
                id="passwordId"
                placeholder="Введите пароль"
                onChange={onChangePassword}
                value={password}
              />
            </FormGroup>
            <Button onClick={submitButton}>Ввод</Button>
          </Form>
        </Col>
      </Row>
      <NotificationContainer />
    </Container>
  );
};

export default withRouter(Login);
