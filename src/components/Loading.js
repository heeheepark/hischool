import { FadeLoader } from "react-spinners";
import { LoadingWrap } from "../styles/LoadingStyle";

const Loading = () => {
  return (
    <LoadingWrap>
      <div>
        <FadeLoader color="#36d7b7" className="spinner" />
        <div className="text-area">
          <span>정보를 불러오는 중입니다.</span>
          <span>잠시만 기다려주세요.</span>
        </div>
      </div>
    </LoadingWrap>
  );
};
export default Loading;
