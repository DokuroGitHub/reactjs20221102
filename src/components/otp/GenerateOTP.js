import { useState } from "react";

const GenerateOTP = (props) => {
    // props
    const { setOrgOTPParent } = props;
    // state
    const [orgOTP, setOrgOTP] = useState("");
    // fn
    const handleClickBtn = () => {
        const _otp = `${Math.floor(100000 + Math.random() * 900000)}`;
        setOrgOTP(_otp);
        setOrgOTPParent(_otp);
    }
    // render
    return (
        <div className="generate-otp-container">
            <button onClick={() => handleClickBtn()}>Generate OTP</button>
            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}

export default GenerateOTP;