import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="my-footer">
      <p>Copyright Adi Mazuz {year} ©</p>
    </div>
  );
}

export default Footer;
