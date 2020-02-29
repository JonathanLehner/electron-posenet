import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SettingsReminders extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { };
      }

    render(){
        const settings = this.props.settings;
        const handleSettingsChange = this.props.handleSettingsChange;
        return (
            <div>
                <h2>Reminder Settings</h2>
                <div>Settings about frequency of reminders (all in seconds)</div>
                <div style={{width: "300px", margin: "auto", marginTop: "50px", textAlign: "left"}}>
                    {Object.keys(settings).map(
                        (key) => {
                            return (
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>{key}</Form.Label>
                                        <Form.Control 
                                            type="number"
                                            name={key}
                                            placeholder={settings[key]}
                                            onChange={handleSettingsChange}
                                        />
                                    </Form.Group>
                                </Form> 
                            )
                        }
                    )}
                </div>
            </div>
          );
    }
   
}

export default SettingsReminders;