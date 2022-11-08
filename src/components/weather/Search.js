import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import RenderSearchResults from "./RenderSearchResults";
import { useEffect } from "react";

const Search = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
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
    // effect
    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="Search any city..."
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <RenderSearchResults data={data} isLoading={isLoading} />
        </div>
    )
}

export default Search;