import './Weather.scss';

const SearchResultItemSkeleton = () => {
    return (
        <div className="search-result-item-skeleton">
            <div className="title" />
            <div className="type" />
            <div className="woeid" />
            <div className="lattLong" />
        </div>
    )
}

export default SearchResultItemSkeleton;