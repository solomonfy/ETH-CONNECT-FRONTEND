// import { useOktaAuth } from "@okta/okta-react";
// import React, { useState, useEffect } from "react";

// const Accounts = (props) => {
//   const { authState, authService } = useOktaAuth();
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     fetch(props.membersUrl + "member", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//       },
//     });
//     if (!authState.isAuthenticated) {
//       // When user isn't authenticated, forget any user info
//       setUserInfo(null);
//     } else {
//       authService.getUser().then((info) => {
//         setUserInfo(info);
//       });
//     }
//   }, [authState, authService]); // Update if authState changes

//   console.log(userInfo);
//   return (
//     <div>
//       {userInfo && (
//         <div>
//           <p>Welcome back, {userInfo.name}!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accounts;
