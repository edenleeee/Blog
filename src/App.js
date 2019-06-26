import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Button, Row, Col } from "antd";
import { TextEditor } from "./component";
import Post from "./model/Post";
import ACTIONS from "./modules/action";
import { connect } from "react-redux";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Row>
            <Col span={4} offset={1}>
              <h3>Title</h3>
              <TextArea rows={1} />
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={1}>
              <h3>Author</h3>
              <TextArea rows={1} />
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={1}>
              <h3>Write Your Content Below</h3>
            </Col>
          </Row>
          <Row>
            <Col span={22} offset={1}>
              <TextEditor
                onSavePost={(content) => { const post = new Post("Eden", "Eden", content);
    this.props.createPost(post);
    console.log(this.props.post);
    return;

                }}
              />
            </Col>
          </Row>
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
    );
  }
}

const mapStateToProps = state => ({
  post: state
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(ACTIONS.createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
