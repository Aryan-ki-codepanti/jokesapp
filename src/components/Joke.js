import React , {useEffect , useState} from 'react'
import JokeItem from './JokeItem'

export default function Joke() {

    const capitalize = (str)=>{
        return `${str[0].toUpperCase()}${str.slice(1,)}`;
    }

    const [categories, setCategories] = useState(null);
    const [chosenCategory , setChosenCategory] = useState("general");

    const handleCategoryClick = (event,category) =>{
        event.preventDefault();
        setChosenCategory(category.category);
    }

    const fetchCategories = async ()=>{
        const data = await fetch("https://api.chucknorris.io/jokes/categories");
        const parsedData = await data.json();
        parsedData.unshift("general");
        setCategories(parsedData);
    }

    useEffect( ()=>{
        fetchCategories();
    } , [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1>Welcome to Jokes App</h1>
                <p>Navigate to specific categories to have a nice laugh</p>
            </div>

            <div className="d-flex flex-column">

                <div className="d-flex flex-wrap justify-content-center mt-3 mb-5">
                    {categories && categories.map(category => {
                        return (<a key={category} className="nav-link" href="/" onClick={(e)=>handleCategoryClick(e , {category})}>{capitalize(category)}</a>) 
                    })}
                </div>

                
                <div className="d-flex justify-content-center flex-grow-1">

                    <JokeItem category={chosenCategory} capitalize={capitalize} />
                </div>

            </div>


        </div>
    )
}
