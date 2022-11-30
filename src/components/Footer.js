import React from "react";
import "../css/Footer.css";



export function Footer() {
  return (
   
        <div className="footer">
          <p>
            &copy;{new Date().getFullYear()} Slagteren 
          </p>
          <p>
          Kontakt os på tlf nummer: 123456789 
          </p>
        </div>
      
  );
}

export default Footer;