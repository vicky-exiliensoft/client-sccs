// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
// import Image from "next/image";
// import { CiMail } from "react-icons/ci";

// function ForgetPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }

//     try {
//       const response = await axios.post(process.env.FORGET_PASSWORD, { email });
//       setMessage(response.data.message);
//       setError("");
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message);
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//       setMessage("");
//     }
//   };

//   return (
//     <section className="login-sec">
//       <Container fluid>
//         <Row className="justify-content-center align-items-center divide-y-1">
//           <Col md={4}>
//             <Form className="bg-dark shadow rounded px-4 pt-4 pb-4 mb-4 divide-y-2" onSubmit={handleSubmit}>
//               <Image src="../logo-square.svg" alt="logo" width={80} height={200} className="img-fluid d-block mx-auto" />
//               <h1 className="text-center mb-5 text-white fw-medium">Forget Password</h1>
//               <Form.Group className="mb-4">
//                 <Form.Label>Email</Form.Label>
//                 <div className="input-group">
//                   <span className="input-group-text"><CiMail /></span>
//                   <FormControl
//                     type="email"
//                     placeholder="Email"
//                     className={`shadow-none border ${emailError ? "border-danger" : ""}`}
//                     value={email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
//               </Form.Group>
//               <div className="d-flex justify-content-between align-items-center">
//                 <Button
//                   className="py-2 px-4 rounded focus:outline-none focus:shadow-outline w-75 d-block mx-auto"
//                   type="submit"
//                 >
//                   Reset Password
//                 </Button>
//                 {message && <p className="text-success">{message}</p>}
//                 {error && <p className="text-danger">{error}</p>}
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default ForgetPassword;
