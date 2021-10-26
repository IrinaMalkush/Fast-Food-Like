import * as React from 'react';

interface INewsFeedProps {
    dateofnew: string;
    image: string;
    newsitem: string;
}

export function NewsFeed({dateofnew, image, newsitem}: INewsFeedProps): React.ReactElement {
    return (
        <div>
            {/*newsList.sort( (a,b) =>b.id-a.id).map((element)*/}
            <div className="content">
                <div className="news-image">
                    <img src={image} alt="news"/>
                </div>
                <div className="news-text-date">
                    <p>{newsitem}</p>
                    <p>{dateofnew}</p>
                </div>
            </div>
        </div>
    );
}
