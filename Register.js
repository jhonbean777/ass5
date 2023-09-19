import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";
import { useState } from 'react'


const Register = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		address: "",
		phone: "",
		city: ""

	};

	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.required("First Name is required")
			.matches(/(?=.*[',A-Z,a-z])/, "firstname must contain letter."),
		lastName: Yup.string()
			.required("Last Name is required")
			.matches(/(?=.*[',A-Z,a-z])/, "lastname must contain letter."),
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
			.required("No password provided")
			.min(8, "Password is too short - should be 8 chars minimum.")
			.matches(/(?=.*[0-9])/, "Password must contain a number."),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
		address: Yup.string()
			.required("Address is required"),
		phone: Yup.string()
			.matches(/^\+(?:[0-9] ?){6,14}[0-9]$/,'Please enter a valid phone number (e.g., +1234567890)').required("Phone number is required"),
		city: Yup.string().required("City is required"),

	});


	const [submittedData, setSubmittedData] = useState(null)
	const handleSubmit = values => {
		console.log('Form data submitted:', values)
		setSubmittedData(values)
	}
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="mb-2">
					<section className="vh-100 form-section">
						<div className="container py-5 h-90">
							<div className="row d-flex justify-content-center align-items-center h-80">
								<div className="col-12 col-md-8 col-lg-6 col-xl-5">
									<div className="card shadow-2-strong">
										<div className="card-body p-5 text-center register-section">
											<h2 className="my-4 font-weight-bold .display-4">Sign Up</h2>
											<div className="my-5">

												<Field
													className="form-control"
													type="text"
													id="firstName"
													name="firstName"
													placeholder='First Name'
												/>
												<ErrorMessage
													className="error"
													name="firstName"
													component="div"
												/>
											</div>

											<div className="my-5">
												<Field
													className="form-control"
													type="text"
													id="lastName"
													name="lastName"
													placeholder='Last Name'
												/>
												<ErrorMessage
													className="error"
													name="lastName"
													component="div"
												/>
											</div>

											<div className="my-5">
												<Field
													className="form-control "
													type="email"
													id="email"
													name="email"
													placeholder='Email'
												/>
												<ErrorMessage
													className="error"
													name="email"
													component="div"
												/>
											</div>

											<div className="my-5">

												<Field
													className="form-control"
													type="text"
													id="address"
													name="address"
													placeholder='Address'
												/>
												<ErrorMessage
													className="error"
													name="address"
													component="div"
												/>
											</div>

											<div className="my-5">

												<Field
													className="form-control"
													type="tel"
													id="phone"
													name="phone"
													placeholder='Phone No.'
												/>
												<ErrorMessage
													className="error"
													name="phone"
													component="div"
												/>
											</div>
											<div className="my-5">

												<Field
													className="form-control"
													type="text"
													id="city"
													name="city"
													placeholder='City'
												/>
												<ErrorMessage
													className="error"
													name="city"
													component="div"
												/>
											</div>

											<div className="my-5">
												<Field
													className="form-control "
													type="password"
													id="password"
													name="password"
													placeholder='Password'
												/>
												<ErrorMessage
													className="error "
													name="password"
													component="div"
												/>
											</div>

											<div className="my-5">
												<Field
													className="form-control"
													type="confirmPassword"
													id="confirmPassword"
													name="confirmPassword"
													placeholder='Confirm Password'
												/>
												<ErrorMessage
													className="error"
													name="confirmPassword"
													component="div"
												/>
											</div>
											<button type="submit" className="btn-primary btn-lg btn-block my-5">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Form>
			</Formik>
			{submittedData && (
				<div className='submitted-data'>

					<div className="container">
						<div className="row text-center">
							<h3>Submitted Data</h3>
							<br></br><br></br><br></br>
						</div>
						<div className="row">
							<div className="col-lg-6 offset-lg-2 text-center">
								<table>
									<tr>
										<th>firstName</th>
										<th>lastName</th>
										<th>email</th>
										<th>password</th>
										<th>confirmPassword</th>
										<th>address</th>
										<th>phone</th>
										<th>city</th>
									</tr>
									<tr>
										<td> {submittedData.firstName}</td>
										<td>{submittedData.lastName}</td>
										<td>{submittedData.email}</td>
										<td>{submittedData.password}</td>
										<td>{submittedData.confirmPassword}</td>
										<td>{submittedData.address}</td>
										<td>{submittedData.phone}</td>
										<td> {submittedData.city}</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Register;




