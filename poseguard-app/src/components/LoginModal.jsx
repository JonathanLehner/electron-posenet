import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginModal extends React.Component {
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { showSignup: false };
      this.toggleSignup = this.toggleSignup.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    toggleSignup(){
      const old_signup = this.state.showSignup;
      this.setState({showSignup: !old_signup});
    }
  
    handleChange(event){
      this.setState({[event.target.name]: event.target.value});
    }
  
    render (){
      const {
        showLogin,
        closeLoginModal,
        register,
        login
      } = this.props;
      const showSignup = this.state.showSignup;
      return (
        <Modal show={showLogin} onHide={closeLoginModal}>
          <Modal.Header closeButton>
            <Modal.Title>{ showSignup ? "Signup" : "Login" }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm 
              {...this.props} 
              showSignup={showSignup} 
              handleChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeLoginModal}>
              Close
            </Button>
            { showSignup ? 
            <Button variant="primary" onClick={
              () => {
                register(this.state.username, this.state.password);
              }}
              >
              Register
            </Button> :
            <Button variant="primary" onClick={
              () => {
                login(this.state.username, this.state.password);
              }}
              >
              Login
            </Button>}
            { (showSignup == false) ? 
              <a href="#" onClick={this.toggleSignup}>register</a> :
              <a href="#" onClick={this.toggleSignup}>login</a>
            }
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
function LoginForm(props) {
    const {showSignup, handleChange} = props;
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email"
            name="username"
            placeholder="Enter email"
            onChange={handleChange}
          />
          {showSignup ?
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            : ""}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password"
            placeholder="Password" 
            onChange={handleChange}
          />
        </Form.Group>
        {showSignup ?
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to the T&C" />
          </Form.Group>
          : ""}
      </Form>
    ); 
  }

export default LoginModal;