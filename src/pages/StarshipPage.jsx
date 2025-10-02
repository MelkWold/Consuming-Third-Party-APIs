import { useState, useEffect } from 'react';
import axios from "axios";
import Ship from "../components/Ship";


export default function StarshipPage(){

    const [ships, setShip] = useState(null);

    let urlStr = "https://swapi.info/api/starships";

    useEffect(() => {
        async function getShip(){
            try {
                let response = await axios.get(urlStr);
                
                response.data.length = 10;

                setShip(response.data)

            }catch(error){
                console.error(error.message);
            }
        }

        getShip();
    }, []);

    let loading = () => { return <h1>Loading ships ...</h1>;};

    let loaded = () => ships.map((ship, i) => {
        return <Ship key ={i} {...ship}/>
    });

    return ships ? <div className="container">{loaded()}</div> : loading();
}