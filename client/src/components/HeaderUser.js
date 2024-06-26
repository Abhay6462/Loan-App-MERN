import { Link, useNavigate } from "react-router-dom";
import "./HeaderUser.css";
import { useState } from "react";


const HeaderUser = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

   const handleSignOut = () => {
    localStorage.setItem("email", "");
    navigate("/login");
  };

   const handleAlert = () => {
    if (window.confirm("Are you sure you want to sign-out!")) {
      var txt = "You pressed OK!";
      handleSignOut();
    } else {
      var txt = "You pressed Cancel!";
    }
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <div className="navTop">
          <div className="mainLogo" > m-App</div>
          <div className="menuBar" onClick={toggleDropdown}>
            <i className="ri-menu-line"></i>
          </div>
          <div className={`navLinks ${isDropdownOpen ? "show" : ""}`}>
            <Link style={{ textDecoration: "none", color: "#000", fontWeight: "bold", transition: "color 0.3s"  }} to="/dashboard"
            onMouseEnter={(e) => { e.target.style.color = "red"; }}
            onMouseLeave={(e) => { e.target.style.color = "#000"; }}
            >
              Home
            </Link>
            <Link style={{ textDecoration: "none", color: "#000", fontWeight: "bold", transition: "color 0.3s" }} to="/pay"
             onMouseEnter={(e) => { e.target.style.color = "blue"; }}
             onMouseLeave={(e) => { e.target.style.color = "#000"; }}
            >
              Pay Repayment
            </Link>
            <Link style={{ textDecoration: "none", color: "#000", fontWeight: "bold", transition: "color 0.3s" }} to="/status"
            onMouseEnter={(e) => { e.target.style.color = "blue"; }}
            onMouseLeave={(e) => { e.target.style.color = "#000"; }}
            >
              Loan Details
            </Link>
          </div>
          <div onClick={() => {handleAlert();}} className={`user ${isDropdownOpen ? "show" : ""}`}>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;









// import { Link, useNavigate } from "react-router-dom";
// import "./HeaderUser.css";

// import { useState } from "react";



// const HeaderUser = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);


//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };


//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     localStorage.setItem("email", "");
//     navigate("/login");
//   };
//   const handleAlert = () => {
//     if (window.confirm("Are you sure you want to sign-out!")) {
//       var txt = "You pressed OK!";
//       handleSignOut();
//     } else {
//       var txt = "You pressed Cancel!";
//     }
//   };

//   return (

//     <div className="Navbar">
//     <div className="nav">
//       <div className="navTop">
//            <div className="mainLogo">
//                  Loan App

//            </div>
           
//          {/* ---------------- */}
//              <div className="navLinks">
//              <Link style={{textDecoration:"none", color:"#000"}} to="/dashboard"> Home </Link>
//              <Link style={{textDecoration:"none", color:"#000"}} to="/pay">Pay Repayment</Link>
//              <Link style={{textDecoration:"none", color:"#000"}} to="/status"> Loan Details </Link>
//              </div>

//         {/* ------------------ */}
//         <div className="user" onClick={toggleDropdown}>
//           <span>Logout</span>
//         </div>
//         {isDropdownOpen && (
//           <div className="dropdownContent">
//             <button onClick={() => {handleAlert();}}><i class="ri-logout-box-line"></i> Log Out</button>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>

    
//   );
// };

// export default HeaderUser;
