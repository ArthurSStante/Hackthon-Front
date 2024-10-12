import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { login } from "../utils/auth"; // Importa a função login
import { useNavigate } from "react-router-dom"; // Para redirecionamento

const App = () => {
  const navigate = useNavigate(); // Função de navegação

  const onFinish = async (values) => {
    try {
      await login(values, navigate); // Chama login e passa 'navigate'
    } catch (error) {
      // Nenhum erro precisa ser tratado aqui, pois já está em auth.js
      console.error("Erro ao tentar fazer login:", error.message);
    }
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Por favor insira seu usuario!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor insira uma senha!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Manter-me logado</Checkbox>
          </Form.Item>
          <a href="">Esqueceu sua senha?</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Entrar
        </Button>
        <a style={{ display: "block", marginTop: "10px" }} href="">
          Registre-se agora!
        </a>
      </Form.Item>
    </Form>
  );
};

export default App;
