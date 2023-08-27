import React, { useState } from "react";

const MyPageConFirm = ({ handlePasswordConFirm }) => {
  const [pass, setPass] = useState("");

  const handlePasswordChange = event => {
    setPass(event.target.value);
  };

  const handlePasswordSubmit = () => {
    handlePasswordConFirm(pass);
  };

  return (
    <div>
      <input type="password" value={pass} onChange={handlePasswordChange} />
      <button onClick={handlePasswordSubmit}>확인</button>
    </div>
  );
};
export default MyPageConFirm;
