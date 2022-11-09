import _ from "lodash";
import SearchResultItem from "./SearchResultItem";
import SearchResultItemSkeleton from "./SearchResultItemSkeleton";

const RenderSearchResults = (props) => {
    // props
    const { data, isLoading } = props;
    // render
    return (
        <div className="result-container">
            {data && data.length > 0 && data.map((item, index) =>
                <SearchResultItem
                    key={`search-result-item-${index}`}
                    title={item.title}
                    locationType={item.locationType}
                    woeid={item.woeid}
                    lattLong={item.lattLong}
                />
            )}
            {isLoading && [0, 1, 2].map((e) =>
                <SearchResultItemSkeleton key={`search-result-item-skeleton-${e}`} />
            )}
            {!isLoading && _.isEmpty(data) &&
                < div > Không tìm thấy kết quả</div>
            }
        </div >
    )
}

export default RenderSearchResults;