import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps={
country:"in",
pageSize:5,

  }
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
  }
  
componentDidMount(){
 
let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a1f92d889dff415f9100ee290d29088f&page=${this.state.page}&pageSize=6`;
this.setState({loading:true})
fetch(url)
.then(res=>res.json())
.then(responce=>{
  this.setState({loading:false,articles:responce.articles,totalResults:responce.totalResults})
 
})
}

fetchMoreData=()=>{
  this.setState({page:this.state.page+1});
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=a1f92d889dff415f9100ee290d29088f&page=${this.state.page +1}&pageSize=6`;
this.setState({loading:true})
fetch(url)
.then(res=>res.json())
.then(res=>{
  this.setState({loading:false,
    articles:this.state.articles.concat(res.articles),
    totalResults:res.totalResults})
 
})
}


  render() {

    return (
      <>
        <h1 className='text-center ' style={{margin:'35px 0px',marginTop:"90px"}}>News monkey top headline</h1>
     {this.state.loading && <Loading/>}
     <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Loading/>}
        >
      <div className="container">
       <div className='row'>
      { this.state.articles.map((element)=>{
     return <div className='col-md-4' key={element.url}>
      <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt
} source={element.source.name}/>
     </div>
      })}
       </div>
       </div>
       </InfiniteScroll>
       
      </>
    )
  }
}
