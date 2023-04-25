// // import Col from 'react-bootstrap/Col';
// // import Form from 'react-bootstrap/Form';
// // import Row from 'react-bootstrap/Row';
// // import Button from 'react-bootstrap/Button';
import "./registeruser.css"
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import ill from "../../SVG//depositphotos_376824264-stock-illustration-online-registration-sign-concept-young.jpg"

const Registeruser =() =>{
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);
    
  return (
    <div>
      <Navbar/>
      <div className="usercontainer">
      <img src={ill} alt="" className="ill" />
  
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Registration Form</h1>
        <div className="nameinput">
        <input type="text"
        placeholder="Full name" 
        className="nameTexInput"{...register("name")} /></div>
        <div className="nameinput">
          <input type="email"
          placeholder="Email" 
          className="nameTexInput" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}</div>
        <div className="nameinput">
          <input type="password" 
          placeholder="Password" 
          className="nameTexInput"{...register("password")} /></div>
        <div className="nameinput"><button className="userBtn" >Sign In</button></div>
      </form>
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
}
export default Registeruser;

// import {
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// function Registeruser() {

//   return (
//     <form>
//       <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
//       <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

//       <MDBRow className='mb-4'>
//         <MDBCol className='d-flex justify-content-center'>
//           <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
//         </MDBCol>
//         <MDBCol>
//           <a href='#!'>Forgot password?</a>
//         </MDBCol>
//       </MDBRow>

//       <MDBBtn type='submit' block>
//         Sign in
//       </MDBBtn>
//     </form>
   
//     // <Form>
//     //   <Row className="mb-3">
//     //     <Col>
//     //       <Form.Control placeholder="First name" />
//     //     </Col>
//     //     <Col>
//     //       <Form.Control placeholder="Last name" />
//     //     </Col>
//     //   </Row>
//     //   <Row className="mb-3">
//     //     <Form.Group as={Col} controlId="formGridEmail">
//     //       <Form.Label>Email</Form.Label>
//     //       <Form.Control type="email" placeholder="Enter email" />
//     //     </Form.Group>

//     //     <Form.Group as={Col} controlId="formGridPassword">
//     //       <Form.Label>Password</Form.Label>
//     //       <Form.Control type="password" placeholder="Password" />
//     //     </Form.Group>
//     //   </Row>
//     //   <Form.Group className="mb-3" id="formGridCheckbox">
//     //     <Form.Check type="checkbox" label="terms and conditions" />
//     //   </Form.Group>

//     //   <Button variant="primary" type="submit">
//     //     Submit
//     //   </Button>


//     // </Form>
//   );
// }

