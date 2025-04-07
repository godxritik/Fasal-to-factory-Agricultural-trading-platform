import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard.jsx';

function News()
{
  const [Data , setData] = useState([]);
  useEffect(() =>{
    let query = "Agriculture";
    const url = `https://newsapi.org/v2/everything?q=${query}&apikey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
   .then(res => res.json())
   .then(data => setData(data.articles))
  },[])

  return (
   <div>
    <h1 className='text-center text-4xl font-semibold my-4 mt-8'>Fitness News</h1>
     <div className='w-full bg-gray-100 py-10 flex flex-wrap gap-5 justify-center'>
      
      {
        Data.map((news,i)=>{
          return <NewsCard key={i} title={news.title} desc={news.description} url={news.url} src={news.urlToImage}  />
        })
       }
    </div>
   </div>
  )
}

export default News