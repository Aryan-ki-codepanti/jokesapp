import React from "react";

export default function JokeItemContainer(props) {
    const { joke , capitalize } = props;
    return (
        <div className="d-flex flex-column justify-content-center align-content-center align-items-center h-100 pb-5">
            <div className="card jokeCard" style={{width: "25rem"}}>
                <div className="card-body">
                    <h5 className="card-title"> <img src={joke.icon_url} className="card-img-top me-2" alt="joke-img" style={{objectFit: "cover" , width:"70px"}} />{ joke.categories && joke.categories.length > 0 ? capitalize(joke.categories[0]) : 'General'}</h5>
                    <p className="card-text">
                        {joke.value}
                    </p>
                </div>
                <div className="card-footer text-muted d-flex justify-content-between" style={{fontSize: "12px"}}>
                    <span>Last updated at { new Date(joke.updated_at).toLocaleDateString()}</span> 
                    <span>Created at {new Date(joke.created_at).toLocaleDateString()}</span> 
                </div>
            </div>
        </div>
    );
}
