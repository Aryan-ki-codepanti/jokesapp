import React , {useEffect , useState } from 'react'
import JokeItemContainer from './JokeItemContainer';
import Loader from './Loader';


export default function JokeItem(props) {

    const {category , capitalize} = props;
    const [jokeData , setJokeData] = useState([]);
    const [loading , setLoading] = useState(false);


    const fetchJokeData = async (category)=>{

        setLoading(true);

        let url;
        if (category === "general"){
            url = `https://api.chucknorris.io/jokes/random`;
        } 
        else{
            url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        }

        const jokeFetchedData = await fetch(url);
        const parsedJokeData = await jokeFetchedData.json();
        setLoading(false);
        setJokeData(parsedJokeData);

    }

    useEffect( ()=>{
        fetchJokeData(category);
    } , [category])

    return (
        <div>
            {loading && (<Loader/>) }
            { !loading && (<JokeItemContainer joke={jokeData} capitalize={capitalize} />) }
        </div>
    )
}

JokeItem.defaultProps = {
    category: "general"
};