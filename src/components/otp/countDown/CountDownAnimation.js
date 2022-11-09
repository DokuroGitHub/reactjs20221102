import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import './CountDownAnimation.scss';



const CountDownAnimation = forwardRef((props, ref) => {
    // props
    const { initialCount, setIsTimeOut } = props;// DEFAULT_TIME_LIMIT;
    // const
    const DEFAULT_TIME_LIMIT = 20;
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = .5;
    const ALERT_THRESHOLD = .25;
    const INITIAL_COUNT = initialCount ?? DEFAULT_TIME_LIMIT;
    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: Math.floor(WARNING_THRESHOLD * INITIAL_COUNT)
        },
        alert: {
            color: "red",
            threshold: Math.floor(ALERT_THRESHOLD * INITIAL_COUNT)
        }
    };
    // state
    const [timeLeft, setTimeLeft] = useState(INITIAL_COUNT);
    const [remainingPathColor, setRemainingPathColor] = useState(COLOR_CODES.info.color);
    const [strokeDasharray, setStrokeDasharray] = useState(`${FULL_DASH_ARRAY}`);
    // effect
    useEffect(() => {
        if (timeLeft === 0) {
            setIsTimeOut(true);
            return;
        }
        const timerInterval = setInterval(() => {
            const _timeLeft = timeLeft - 1;
            setTimeLeft(_timeLeft);
            handleSetCircleDasharray(_timeLeft);
            handleSetRemainingPathColor(_timeLeft);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
        // eslint-disable-next-line
    }, [timeLeft]);

    useImperativeHandle(ref, () => ({
        resetTime() {
            setTimeLeft(INITIAL_COUNT);
            setRemainingPathColor(COLOR_CODES.info.color);
            setIsTimeOut(false);
        }
    }));
    // fn
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const handleSetRemainingPathColor = (timeLeft) => {
        const { alert, warning } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            setRemainingPathColor(alert.color);
        } else if (timeLeft <= warning.threshold) {
            setRemainingPathColor(warning.color);
        }
    }

    const calculateTimeFraction = (timeLeft) => {
        const rawTimeFraction = timeLeft / INITIAL_COUNT;
        return rawTimeFraction - (1 / INITIAL_COUNT) * (1 - rawTimeFraction);
    }

    const handleSetCircleDasharray = (timeLeft) => {
        const circleDasharray = `${(calculateTimeFraction(timeLeft) * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
        setStrokeDasharray(circleDasharray);
    }
    // render
    return (
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                    <path
                        strokeDasharray={strokeDasharray}
                        className={`base-timer__path-remaining ${remainingPathColor}`}
                        d={`M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0`}
                    />
                </g>
            </svg>
            <span className="base-timer__label">{formatTime(timeLeft)}</span>
        </div>
    );
});

export default CountDownAnimation;