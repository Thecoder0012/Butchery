// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Login.css';
// /*import image from "../images/frontpage.jpeg"*/

// async function loginUser(credentials) {
//  return fetch('http://localhost:5000/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
  

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }
  

//   return(

//     /*<form action="action_page.php" method="post">
//   <div class="imgcontainer">
//   <img className="frontpage-image" src={image} alt="FrontPage Image" />
//   </div>*/

//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form className="form_login" onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input className="input_login" type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input className="input_login" type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button className="button_container" type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
    
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };