import './productDetail.scss';

const ImageSmall = (props) => {
    const { item, onClick, isSelected } = props;
    return (
        <div onClick={onClick} className='image-small'>
            <div className={isSelected ? 'active' : null}>
                <img alt='' src={item} ></img>
            </div>
        </div>
    );
}

export default ImageSmall;
