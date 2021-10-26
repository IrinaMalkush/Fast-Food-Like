import * as React from 'react';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../core/hooks/Hooks';
import {carouselSelector} from '../../../modules/carousel/CarouselSelector';
import {fetchCarousel} from '../../../modules/carousel/FetchCarouselThank';
import {ICarouselItem} from '../../../api/types/ICarousel';
import {Indicators} from './Indicators';
import '../stylesMainPage.css';

export function Carousel(): React.ReactElement {
    const dispatch = useAppDispatch();
    const carouselList = useAppSelector(carouselSelector);

    let [currentPhotoIndex, setCurrentIndex] = useState(0);
    const currentPhoto = carouselList.items[currentPhotoIndex];
    const nextPhoto = () => {
        setCurrentIndex(
            currentPhotoIndex === carouselList.total - 1
                ? 0
                : currentPhotoIndex + 1
        );
    };

    useEffect(() => {
        dispatch(fetchCarousel(null));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextPhoto();
        }, 5000);
        return () => clearInterval(interval);
    });

    const indicators = carouselList.items.map((element: ICarouselItem) => (
        <Indicators element={element} currentPhotoIndex={currentPhotoIndex}
                    onClick={() => {
                        setCurrentIndex(element.id)
                    }} key={element.id}/>
    ));

    return (
        <div className="banner">
            {currentPhoto === undefined ? <div className="loadingBanner">Loading...</div> :
                <div className={`banner-container ${currentPhoto ? "current" : ""}`}>
                    <img src={currentPhoto.photo} alt="banner"/>
                </div>}
            <div className="indicators">
                {indicators}
            </div>
        </div>
    )
}
