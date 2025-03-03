import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom';

export class NewsItem extends Component {
  render() {
    let {title,description,ImageUrl,newsurl,author,date,source}=this.props;
    return (
     
      <div className='my-3'>
          <span className="badge text-bg-danger">{source}</span>
        <div className="card" >
       
  <img src={!ImageUrl?"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg":ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By{!author?"unknown":author} on{new Date(date).toGMTString()}</small></p>
    <a href={newsurl} className="btn btn-primary">Read More</a>
    
  </div>
</div>

      </div>
     
    )
  }
}

export default NewsItem
