import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { DatePicker, message } from "antd";
import { Layout, Menu, Breadcrumb, Icon, Input } from "antd";
import { TextEditor } from './component';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;


function App() {
  return (
    <Layout>
    
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      {/* <TextArea rows={10}> */}
        <TextEditor/>
      {/* </TextArea> */}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Make with 💜 by Eden</Footer>
  </Layout>
  );
}

export default App;
