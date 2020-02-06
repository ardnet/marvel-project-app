import React from 'react'

const ListCharacters = ({characters}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{characters['name']}</h2>
                    <div className="card-subtitle mb-2 text-muted">
                      
                      <img alt="" src={characters['thumbnail'].path + '.' + characters['thumbnail'].extension} className="img-fluid" />
                    </div>
                    <p className="card-text">{characters['description']}</p>
                </div>
            </div>
        </div>
    )
};

export default ListCharacters
