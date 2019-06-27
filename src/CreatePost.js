import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Button, Row, Col } from "antd";
import { TextEditor } from "./component";
import Post from "./model/Post";
import ACTIONS from "./modules/action";
import { connect } from "react-redux";
import { Value } from "slate";


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: "", Author: "", Content: ""};
  }

  createPost() {
    let post = new Post(this.state.Title,this.state.Author,this.state.Content.toJSON())
    console.log(post)
    this.props.createPost(post)
  }

 
  render() {
    return (
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Row>
            <Col span={4} offset={1}>
              <h3>Title</h3>
              <TextArea rows={1} onChange={(data) => this.setState({Title: data.target.value})} />
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={1}>
              <h3>Author</h3>
              <TextArea rows={1} onChange={(data) => this.setState({Author: data.target.value})} />
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
                onSavePost={(content) => this.setState({Content: content})}
              />
            </Col>
          </Row>
        </Content>
        <Row>
          <Col span={8} offset={11}>
            <Button type="primary" shape="round" icon="check" size="large" onClick= {() => {
             this.createPost()
            }} >
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
)(CreatePost);
