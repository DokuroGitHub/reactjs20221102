import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import './OTP.scss';

const OTP = (props) => {
    // props
    const initialCount = props.initialCount ?? 60;
    // state
    const [orgOTPParent, setOrgOTPParent] = useState("");
    // render
    return (
        <div className="otp-parent-container">
            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                initialCount={initialCount}
                orgOTPParent={orgOTPParent}
            />
        </div>
    )
}

export default OTP;