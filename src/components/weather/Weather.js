import axios from "axios";
import React, { useEffect, useState } from "react";

export const fetchData = (props) => {
    const { funcAfter } = props;
    setTimeout(async () => {
        axios.post('https://be-metaweather20221105.herokuapp.com/get-data-by-url',
            {
                //"url": "https://goweather.herokuapp.com/weather/ho-chi-minh"
                "url": "https://be-metaweather20221105.herokuapp.com/weathers/search?query=H",
            },
        ).then((val) => {
            console.log('val.data: ', val.data);
            funcAfter(val.data);
        }).catch((error) => {
            console.log('error: ', error);
        });
    }, 100);
}

const Weather = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData({ funcAfter: setData });
    }, []);

    return (
        <div>
            <div>
                Weather app
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
}

// class Weather extends React.Component {
//     state = {
//         data: {},
//     };

//     componentDidMount() {
//         fetchData({ funcAfter: (val) => this.setState({ data: val }) });
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     Weather App
//                 </div>
//                 <div>
//                     {JSON.stringify(this.state.data)}
//                 </div>
//             </div>
//         );
//     }
// }


export default Weather;