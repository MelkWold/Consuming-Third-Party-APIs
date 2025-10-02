import { useState, useEffect } from 'react';
import axios from "axios";
import Planet from "../components/Planet";


export default function PlanetsPage(){

    const [planets, setPlanet] = useState(null);

    let urlStr = "https://swapi.info/api/planets";

    useEffect(() => {
        async function getPlanet(){
            try {
                let response = await axios.get(urlStr);
                
                response.data.length = 10;

                setPlanet(response.data)

            }catch(error){
                console.error(error.message);
            }
        }

        getPlanet();
    }, []);

    let loading = () => { return <h1>Loading planets ...</h1>;};

    let loaded = () => planets.map((planet, i) => {
        return <Planet key ={i} {...planet}/>
    });

    return planets ? <div className="planetContainer">{loaded()}</div> : loading();
}