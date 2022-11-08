import { useHistory } from "react-router-dom";

const SearchResultItem = (props) => {
    const { title, locationType, woeid, lattLong } = props;
    let history = useHistory();

    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
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