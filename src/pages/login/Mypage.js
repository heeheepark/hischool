import React, { useState } from "react";
import { MypageDiv } from "../../styles/login/MyPageStyle";
import MyPageConFirm from "../../components/login/MyPageConFirm";
import MyPageContent from "../../components/login/MyPageContent";
import { client } from "../../api/login/client";

const Mypage = () => {
  const [passwordConFirm, setPasswordConFirm] = useState(true);

  const handlePasswordConFirm = async (password, setErrMassege) => {
    try {
      const res = await client.post(`/api/mypage/pw-check`, {
        pw: password,
      });
      if (res.data === 1) {
        setPasswordConFirm(false);
      }
      setErrMassege(res.data);
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
