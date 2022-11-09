import './productDetail.scss';
import Lightbox from 'react-image-lightbox';
import snicker1 from '../../assets/images/products/snicker1.jpg';
import snicker2 from '../../assets/images/products/snicker2.jpg';
import snicker3 from '../../assets/images/products/snicker3.jpg';
import snicker4 from '../../assets/images/products/snicker4.jpg';
import { useState } from 'react';
import ImageSmall from './ImageSmall';

const ProductDetail = () => {
    const images = [snicker1, snicker2, snicker3, snicker4];
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="product-detail">
                <div className="content-left">
                    <div className='image-up'>
                        <img alt='' src={images[photoIndex]} onClick={() => setIsOpen(true)}></img>
                    </div>
                    <div className='image-down'>
                        {images.map((e, index) =>
                            <ImageSmall key={e} item={e} isSelected={photoIndex === index} onClick={() => { setPhotoIndex(index) }} />
                        )}
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ nam New Balance - M860E11</div>
                    <div className="price">3.695.000 ₫</div>
                    <div className="size">Size: 30</div>
                    <div className="action">
                        <label>Số lượng</label>
                        <input type="number" min={1} defaultValue="1" className="quantity"></input>
                        <button className='buy'>Chọn Mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>

    );
}

export default ProductDetail;
