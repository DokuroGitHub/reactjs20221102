import { useRef, useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDownAnimation from './countDown/CountDownAnimation';
import _ from 'lodash';

const InputOTP = (props) => {
    // props
    const { initialCount, orgOTPParent } = props;
    // state
    const [isTimeOut, setIsTimeOut] = useState(false);
    const [otp, setOtp] = useState("");
    // ref
    const countDownAnimationRef = useRef();
    // fn
    const handleChangeOtp = (value) => {
        setOtp(value);
    }

    const handleClear = () => {
        setOtp('');
        countDownAnimationRef.current.resetTime();
    }

    const handleConfirmOTP = () => {
        if (!orgOTPParent) {
            alert("Empty OTP~");
            return;
        }
        if (!otp) {
            alert("Please fill the OTP~");
            return;
        }
        if (orgOTPParent === otp) {
            alert("Correct OTP ^^")
        } else {
            alert("Wrong OTP ~~")
        }
    }

    const isDisableClear = () => _.isEmpty(otp);
    const isDisableConfirm = () => otp.length !== 6 || isTimeOut;

    return (
        <div className='input-otp-container'>
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChangeOtp}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className='timer'>
                <CountDownAnimation
                    ref={countDownAnimationRef}
                    initialCount={initialCount}
                    setIsTimeOut={setIsTimeOut}
                />
            </div>
            <div className='action'>
                <button className='clear'
                    disabled={isDisableClear()}
                    onClick={handleClear}
                >clear
                </button>
                <button className='confirm'
                    disabled={isDisableConfirm()}
                    onClick={() => handleConfirmOTP()}
                >Confirm
                </button>
            </div>
        </div>
    );
}

export default InputOTP;