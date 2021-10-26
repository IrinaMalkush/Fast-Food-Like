import * as React from 'react';
import {ICarouselItem} from '../../../api/types/ICarousel';
import '../stylesMainPage.css';

interface IIndicatorsProps {
    element: ICarouselItem;
    currentPhotoIndex: number;
    onClick: () => void;
}

export function Indicators({element, currentPhotoIndex, onClick}: IIndicatorsProps): React.ReactElement {
    return (
        <button className={
            currentPhotoIndex === element.id
                ? 'indicator is-current'
                : 'indicator'
        }
                tabIndex={currentPhotoIndex ? -1 : 0}
                onClick={onClick}
        />
    )
}
