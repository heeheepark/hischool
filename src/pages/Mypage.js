import React, { useState } from "react";
import MyPageContent from "../components/MyPageContent";
import MyPageConFirm from "../components/MyPageConFirm";
import { MypageDiv } from "../styles/MyPageStyle";
import axios from "axios";

const Mypage = () => {
  const [passwordConFirm, setPasswordConFirm] = useState(true);

  const handlePasswordConFirm = async password => {
    try {
      const res = await axios.post("api/pass", {
        password: password,
      });
      if (res.data.key) {
        setPasswordConFirm(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MypageDiv>
      {passwordConFirm ? (
        <MyPageConFirm handlePasswordConFirm={handlePasswordConFirm} />
      ) : (
        <div className="mypage-wrap">
          <h3>회원 정보 수정</h3>
          <MyPageContent />
        </div>
      )}
    </MypageDiv>
  );
};

export default Mypage;
