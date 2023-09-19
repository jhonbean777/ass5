import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";

const ContactUs = () => {
  const initialValues = {
    name: "",   
    email: "",
    query: "",

  };

  // handle submitted data
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
    setSubmittedData(values);
  };

  // Validation for fields using yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().matches(
      /(?=.*[',A-Z,a-z])/,
      "name must contain letter."
    ).required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),

    query: Yup.string().required("query is required"),

  });

  return (
    <div className="signup-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <section class="vh-100">
              <div class="container py-5 h-90">
                <div class="row d-flex justify-content-center align-items-center h-80">
                  <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong contact-form">
                      <div class="card-body p-5 text-center">
                        <h2 className="my-4 font-weight-bold .display-4">
                          Contact Us
                        </h2>
                        <div className="my-5">
                          <Field
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                          <ErrorMessage
                            className="error"
                            name="name"
                            component="div"
                          />

                          <div className="my-5">
                            <Field
                              className="form-control "
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email"
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
                              type="textarea"
                              id="query"
                              name="query"
                              placeholder="Query"

                            />
                            <ErrorMessage
                              className="error"
                              name="query"
                              component="div"
                            />
                          </div>


                          <button
                            className="btn btn-primary btn-lg btn-block my-5"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Form>
      </Formik>

      {/* display form data */}
      {submittedData && (
        <div className="submitted-data">
          <section class="vh-100">
            <div class="container py-5 h-90">
              <div class="row d-flex justify-content-center align-items-center h-80">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="card shadow-2-strong">
                    <div class="card-body p-5 text-center">
                      <h2>Submitted Data:</h2>
                      <p>Name: {submittedData.name}</p>
                      <p>Email: {submittedData.email}</p>    
                  <p>query: {submittedData.query}</p>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ContactUs;