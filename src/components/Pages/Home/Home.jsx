import React, { useState, useEffect } from 'react';
import Slider from '../../../images/slider.png';

export default function Home(props) {

    const [apiData, setApiData] = useState(null);

    async function getNews() {
        const fetchHeaders = new Headers();
        fetchHeaders.append("Accept", "application/json");
        try {
            const request = await fetch("https://api.mediehuset.net/mediesuset/news", { headers: fetchHeaders });
            const response = await request.json();
            setApiData(response.items);
            console.log(response.items)
        } catch (error) {
            console.log("getNews -> Error", error);
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className="main-div">
            <img src={Slider} className="slider-image"></img>
            <h1 className="tac">NYHEDER</h1>
            <div className="news">
                {
                    apiData && apiData.slice(0, 6).map((items, i) =>
                        <div key={items.title} className="single-news">
                            <img src={items.image} alt="image-names" className="news-image" />
                            <div className="news-text">
                                <h3>{items.title}</h3>
                                <div className="textoverflow">
                                    <p>{items.teaser}</p>
                                </div>
                                <button className="read-more">LÆS MERE</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <button className="news-archive-link">NYHEDSARKIV</button>
        </div>
    )
}