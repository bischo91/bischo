import React from "react";
import axios from 'axios';
// const API_PATH = 'http://localhost:3000/sendemail.php';
class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
  lname: '',
  email: '',
  message: '',
  mailSent: false,
  error: null


      };
    }



    handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${"http://localhost:3000/api/contact/sendemail.php"}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};
//
//     onNameChange(event) {
//     this.setState({name: event.target.value})
//   }
//
//   onEmailChange(event) {
//     this.setState({email: event.target.value})
//   }
//
//   onMessageChange(event) {
//     this.setState({message: event.target.value})
//   }
//
//   handleSubmit(e) {
//   e.preventDefault();
//
//   fetch('/send', {
//       method: "POST",
//       body: JSON.stringify(this.state),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then(
//     (response) => (response.json())
//       ).then((response)=> {
//     if (response.status === 'success') {
//       alert("Message Sent.");
//       this.resetForm()
//     } else if(response.status === 'fail') {
//       alert("Message failed to send.")
//     }
//   })
// }
    // <ContactForm />
  render() {
      return (
        <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen">
                  <form action="#">
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
          />
          <label>Last Name</label>
          <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />


          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
        </form >

        </div>
        );

  }
}

export default Contact;
