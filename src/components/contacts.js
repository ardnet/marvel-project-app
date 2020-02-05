import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{contacts['title']}</h5>
                    <div className="card-subtitle mb-2 text-muted">
                      
                      <img src={contacts['thumbnail'].path + '.' + contacts['thumbnail'].extension} className="img-fluid" />
                    </div>
                    <p className="card-text">{contacts['description']}</p>
                </div>
            </div>
        </div>
    )
};

export default Contacts
