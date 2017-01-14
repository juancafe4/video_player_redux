import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';

const API_KEY = 'AIzaSyCPMj8NCro6glUz31GoglGLPxfxT4nsdsM';
// Create a new component
// This component will produce some HTML


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {videos: [] };


    YTSearch({ key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div> 
        <SearchBar />
        <VideoList videos= { this.state.videos }/>
      </div>
    );
  }
}
  

// Take this component;s generated HTML and put
// in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));