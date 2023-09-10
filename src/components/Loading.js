import { BeatLoader, FadeLoader } from "react-spinners";
import { LoadingWrap, MiniLoadingWrap } from "../styles/LoadingStyle";

export const Loading = () => {
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

export const MiniLoading = () => {
  return (
    <MiniLoadingWrap>
      <div>
        <BeatLoader color="#36d7b7" margin={2} size={5} className="spinner" />
        <div className="text-area">
          <span>정보를 불러오는 중입니다.</span>
        </div>
      </div>
    </MiniLoadingWrap>
  );
};
