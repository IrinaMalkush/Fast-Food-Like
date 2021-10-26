import * as React from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../../core/hooks/Hooks';
import {menuSelector} from '../../../modules/menu/MenuSelector';

type FullScreenImageProps = {
    backPath: string;
}

type ImageIdType = {
    imageId: string;
}

export function FullScreenImage({backPath}: FullScreenImageProps): React.ReactElement {
    const menuList = useAppSelector(menuSelector);
    let {imageId}: ImageIdType = useParams();
    let indx = parseInt(imageId, 10);
    
    return (
        <div className="big-image-background">
            <div className="show-big-image">
                <a href={backPath}><span>&#10008;</span></a>
                <img src={menuList.items[indx].fullimage} alt={menuList.items[indx].name}/>
            </div>
        </div>
    )
}
