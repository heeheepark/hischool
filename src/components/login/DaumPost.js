import "../../styles/login/DaumPostStyle";
import { useEffect } from "react";
import { PostWrap } from "../../styles/login/DaumPostStyle";

const DaumPost = props => {
  console.log(props);
  const complete = data => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    props.setHouseAddress({
      ...props.company,
      address: fullAddress,
    });
    props.onComplete();
  };

  useEffect(() => {
    document.getElementById("address-input").value = props.company.address;
  }, [props.company.address]);

  return (
    <div>
      <PostWrap className="postmodal" autoClose onComplete={complete} />
    </div>
  );
};

export default DaumPost;