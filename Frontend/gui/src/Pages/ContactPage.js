import React from "react";
import { Form, Input, Button } from "antd";
import { Col } from "react-bootstrap";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
  }

  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not validate email!",
      },
    };

    return (
      <Col className="form-container">
        <Col className="">
          <Form
            onSubmitCapture={this.handleSubmit}
            {...layout}
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              className="w-75pc"
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={(e) => this.handleNameChange(e)} />
            </Form.Item>
            <Form.Item
              className=" w-75pc "
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input onChange={(e) => this.handleEmailChange(e)} />
            </Form.Item>

            <Form.Item name="feedback" label="Message" className=" w-75pc">
              <Input.TextArea onChange={(e) => this.handleFeedbackChange(e)} />
            </Form.Item>
            <Form.Item
              className="w-75pc"
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Col>
    );
  }

  handleFeedbackChange(event) {
    this.setState({ feedback: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  // onFinish = (values) => {
  //   this.setState({ feedback: values.feedback });
  //   this.setState({ name: values.name });
  //   this.setState({ email: values.email });
  // };
  handleSubmit(event) {
    const templateId = "estessaouiracontactus";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}

export default ContactPage;
// estessaouiracontactus
