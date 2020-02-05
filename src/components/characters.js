import React from 'react'

const Characters = ({characters}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{characters['title']}</h5>
                    <div className="card-subtitle mb-2 text-muted">
                      
                      <img alt="" src={characters['thumbnail'].path + '.' + characters['thumbnail'].extension} className="img-fluid" />
                    </div>
                    <p className="card-text">{characters['description']}</p>
                </div>
            </div>
        </div>
    )
};

export default Characters
