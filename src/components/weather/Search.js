import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    let history = useHistory();
    // fn
    const handleSearch = async () => {
        setTimeout(async () => {
            setIsLoading(true);
            try {
                setData([]);
                let res = await axios({
                    method: 'post',
                    url: 'https://be-metaweather20221105.herokuapp.com/get-data-by-url',
                    data: {
                        //"url": "https://goweather.herokuapp.com/weather/ho-chi-minh"
                        url: `https://be-metaweather20221105.herokuapp.com/weathers/search?query=${keyword}`,
                    },
                });
                const _data = res.data?.data ?? [];
                if (!_.isEmpty(_data)) {
                    setData(_data);
                }
            } catch (e) {
                console.log(e);
            }
            setIsLoading(false);
        }, 100);
    }

    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
    }
    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="Search any city..."
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <button onClick={() => handleSearch()}>Search</button>
            </div>

            <div className="result-container">
                {data && data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <div className="result-child" key={`location-${index}`}>
                                <div className="title">Title: {item.title}</div>
                                <div className="type">Type: {item.location_type}</div>
                                <div className="woeid"><span onClick={() => handleViewDetail(item.woeid)}>Woeid: {item.woeid}</span></div>
                                <div className="latt_long">latt_long: {item.latt_long}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search;