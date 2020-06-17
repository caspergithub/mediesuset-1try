import React, { useState, useEffect } from 'react';
import Styles from './Bakeoff.scss';


export default function Bakeoff(props) {

    const [apiData, setApiData] = useState(null);

    async function getRecipe() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            // console.log(apiData)
            const request = await fetch('https://api.mediehuset.net/bakeonline/products', { headers: fetchHeaders });
            const response = await request.json();
            setApiData(response.products);
            // console.log(response.products)
        } catch (error) {
            console.log('getRecipe -> Error', error);
        }
    }

    useEffect(() => {
        getRecipe()
    })

    return (
        <div>
            <h2>Bakeoff</h2>
            <div>
                <p>This is the React Bakeoff page.</p>

                <div className={Styles.recipes}>

                    {
                        apiData && apiData.length > 0 && apiData.map((products, i) =>
                            <div key={products.title}>
                                <img src={products.image.fullpath} alt="imgnames" />
                                <h3>{products.title}</h3>
                                <p>{products.teaser}</p>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>
    )
}
