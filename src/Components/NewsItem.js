import React from 'react'

const NewsItem =(props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className="card my-3">
                <div  style={{right:"0",display: 'flex',justifyContent: 'flex-end'}}>
                <span className="position-absolute badge rounded-pill bg-danger">{source ? source : "Unknown"}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted"><strong>By</strong> <em> {author ? author : "Unknown"}</em> <strong>on</strong> <em>{date ? new Date(date).toGMTString() : "Unknown"}</em></small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
}

export default NewsItem