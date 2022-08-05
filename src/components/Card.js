import React from 'react';

function Card({users}) {
    return(
        <div className="card-container">
        {
          users.map((user) => ( 
            <div key={user.id} className="card">
                <img src={`https://robohash.org/${user.id}`} alt={user.name} />
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>
            ))
        }
        </div>
    );
}

export default Card;