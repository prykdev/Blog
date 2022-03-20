// import "./Register.css";
// import React, { useState,useEffect } from "react";
// import Sawo from "sawo";
// const API_KEY = "737fdccf-8b92-4f5f-b18e-bb2a9b8291e1";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isUserLoggedIn, setUserLoggedIn] = useState(false);
//   const [payload, setPayload] = useState({});

//   useEffect(() => {
//     var config = {
//       containerID: "sawo-container",
//       identifierType: "email",
//       apiKey: API_KEY,
//       onSuccess: (payload) => {
//         console.log("Payload : " + JSON.stringify(payload));
//         setUserLoggedIn(true);
//         setPayload(payload);
//       },
//     };
//     let sawo = new Sawo(config);
//     sawo.showForm();
//   }, []);

//   const handleSubmit =async (e)=>{
//     console.log("hi")

//     if( isUserLoggedIn.toString() == "true"){
//       console.log("Login Sucess");
//     }
//     else{
//       console.log("Login Failed")
//     }


//   };

//   return (
//     <div className="Register">
//       <div className="Register-card">
//         <div className="Register-heading">
//           <span className="Register-welcome">
//             Welcome to<strong> Post IT</strong>
//           </span>


//           <form className='loginForm' onSubmit={handleSubmit}> 
//           <div  id="sawo-container" style={{height:"300px", width:"400px"}} className="containerStyle">
//             <section>

//               {!isUserLoggedIn ? (
//                 <div className="formContainer" id="sawo-container"></div>
//               ):(
//                 <div className="loggedin">
//                   <h2>User Successful Login</h2>
//                   <div>UserId: {payload.user_id}</div>
//                   <div>Verification Token: {payload.verification_token}</div>
//                   <div>username: {payload}</div>
//                 </div>
//               )}
//             </section>
//           </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
