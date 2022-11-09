import { useNavigate } from "react-router-dom";

const SearchResultItem = (props) => {
    const { title, locationType, woeid, lattLong } = props;
    const navigate = useNavigate();

    const handleViewDetail = (woeid) => {
        navigate(`/weather/detail/${woeid}`);
    }
    return (
        <div className="search-result-item">
            <div className="title">Title: {title}</div>
            <div className="type">Type: {locationType}</div>
            <div className="woeid"><span onClick={() => handleViewDetail(woeid)}>Woeid: {woeid}</span></div>
            <div className="lattLong">lattLong: {lattLong}</div>
        </div>
    )
}

export default SearchResultItem;