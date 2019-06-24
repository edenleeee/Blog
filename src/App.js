import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Button, Row, Col } from "antd";
import { TextEditor } from "./component";



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;



class App extends React.Component {

  render() {
    return (
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          {/* <TextArea rows={10}> */}
          <TextEditor onSubmit={this.printOut} onRef={ref => (this.child = ref)} />
          {/* </TextArea> */}
        </Content>
        <Row>
          <Col span={8} offset={11}>
            <Button type="primary" shape="round" icon="check" size="large">
              Upload
            </Button>
          </Col>
        </Row>
  
        <Footer style={{ textAlign: "center" }}>Make with 💜 by Eden</Footer>
      </Layout>
    )
  }
}



export default App;
