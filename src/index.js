import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar.jsx';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail.jsx';

const API_KEY = 'AIzaSyCPMj8NCro6glUz31GoglGLPxfxT4nsdsM';
// Create a new component
// This component will produce some HTML


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo : null,
    };
    
    this.videoSearch('surfboards')    
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
    return (
      <div> 
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos }
        />
      </div>
    );
  }
}
  

// Take this component;s generated HTML and put
// in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));