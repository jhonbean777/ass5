import React from 'react'
import './Login.css'
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email } = this.state;
    const isValid = this.validateForm();
    if (isValid) {
      this.setState({
        display:
          <div className="container">
            <div className="row">
              <table className="col-lg-6 offset-lg-2">
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
                <tr>
                  <td>{this.state.email}</td>
                  <td>{this.state.password}</td>
                </tr>
              </table>
            </div>
          </div>

      })
    }


    if (this.validateForm()) {
      console.log('Logging in with email:', email);
    } else {
      console.error('Validation failed. Please correct the errors.');
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.validateField(name, value);
  };

  validateField(fieldName, value) {
    const errors = { ...this.state.errors };

    switch (fieldName) {
      case 'email':
        errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Please enter a valid email address';
        break;
      case 'password':
        //Password validation: At least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character
        errors.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
          ? ''
          : <span>Please enter valid password</span>

        break;
      default:
        break;
    }

    this.setState({ errors });
  }

  validateForm() {
    const { errors, email, password } = this.state;
    return errors.email === '' && errors.password === '' && email !== '' && password !== '';
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <section className="vh-100">
              <div className="container py-5 h-90 form-section">
                <div className="row d-flex justify-content-center align-items-center h-80">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong">
                      <div className="card-body p-5 text-center">
                        <h3 className="mb-5">Sign in</h3>

                        <div className="form-outline mb-2">
                          <label className="form-label"></label>
                          <input
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            value={email}
                            onChange={this.handleChange}
                          />
                          <div className="error">{errors.email}</div>
                        </div>
                        <div style={{ textAlign: "left", fontSize: 14, color: "red" }}>{this.state.userNameError}</div>

                        <div style={{ textAlign: "left", fontSize: 14, color: "red" }}>{this.state.emailError}</div>

                        <div className="form-outline mb-2">
                          <label className="form-label"></label>
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange}
                          />
                          <div className="error">{errors.password}</div>
                        </div>
                        <div style={{ textAlign: "left", fontSize: 14, color: "red" }}>{this.state.passwordError}</div>

                        <button
                          className="btn btn-primary btn-lg btn-block my-5"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
        <div>{this.state.display}</div>
      </>
    );
  }
}