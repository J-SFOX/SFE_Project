import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

class FormAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      unm: '',
      password: '',
      error:'',
      errorIn:true,
      
    }
  }
  handlePasswordChange=(event)=>{
    this.setState({
      password: event.target.value
    });
  }
  handleUsernameChange=(event)=>{
    this.setState({unm: event.target.value});
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const un=this.state.unm;
    const pwd= this.state.password;
    if(un === "admin" && pwd === "admin"){
      console.log(un,pwd);
      window.location.href="/admin/dashboard";
      this.setState({errorIn:false})
    }
    else{
      this.setState({errorIn:true});
      if(un !== 'admin' && pwd !== 'admin'){
        this.setState({error:' Entrer le username et le password correctement'});
      }
      else{
        if(un !== 'admin' && pwd === 'admin'){
        this.setState({error:'Entrer le username correctement'});
        }
        if(un === 'admin' && pwd !== 'admin'){
        this.setState({error:'Entrer le password correctement'});
        }
      }
    }
  }
  render() {
    return (
      <Container fluid className="container-div mt-100 mb-100">
        <Row className=" justify-content-center">
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Label >Username</Form.Label>
                <Form.Control
                  name="username" onChange={this.handleUsernameChange}
                  type="username"
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password" onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              {this.state.errorIn && <p className="dangerous mt-4 mb-4 p-2">{this.state.error}</p>}
              <Button variant="success" type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormAdmin;
