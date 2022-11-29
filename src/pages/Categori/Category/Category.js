import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../shared/NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This category category has {categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;