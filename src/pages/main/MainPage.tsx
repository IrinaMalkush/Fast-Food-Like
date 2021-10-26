import * as React from 'react';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../core/hooks/Hooks';
import {newsSelector} from '../../modules/news/NewsSelector';
import {fetchNews} from '../../modules/news/FetchNewsThunk';
import {NewsFeed} from './components/NewsFeed';
import {INewsItem} from '../../api/types/INew';
import {Carousel} from './components/Carousel';
import './stylesMainPage.css';

export function MainPage(): React.ReactElement {
    const dispatch = useAppDispatch();
    const newsList = useAppSelector(newsSelector);

    useEffect(() => {
        dispatch(fetchNews({page: 1, pageSize: 10}));
    }, []);

    const currentPageNews = newsList.items.map((item: INewsItem) => (
        <NewsFeed dateofnew={item.dateofnew} image={item.image} newsitem={item.newsitem} key={item.id}/>
    ));
    
    return (
        <div className="container">
            <Carousel/>
            <p className="news-title">Новости Fast Food Like</p>
            {currentPageNews}
        </div>
    );
}
