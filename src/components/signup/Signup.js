import React from "react";
import "../auth/Auth.css";
import { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./Signup.css"
import { apiClient2 } from "../../api/axiosConfig";
import {  useNavigate } from "react-router-dom";


export const Signup = () => {
    const navigate = useNavigate();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = async(values) => {
    console.log("Finish:", values);

    try{
        const apiURl ='/api/signup';
        const payload= {...values};
        const response = await apiClient2.post(apiURl,payload);
       
        message.success("Registered Successfully");
        navigate("/signin");

        

    }catch(error){

        if(error && error.response.data){
            message.error(error.response.data.message);
        }
        
        console.log(error , "Error while submitting");
        
    }
  };

  return (
    <div className="body">
      <Form
      className="form-container"
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="userName"
          label="User Name :"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password:"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          label="Confirm password:"
          
          dependencies={["password"]}  
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          // Custom validation to check if passwords match
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The two passwords do not match!"));
            },
          }),
        ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="confirm Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              className="button"
              type="primary"
              htmlType="submit"
              disabled={
                !clientReady ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }


            >
              Register
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
