import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.jsx'
const API_KEY = 'AIzaSyCPMj8NCro6glUz31GoglGLPxfxT4nsdsM';
// Create a new component
// This component will produce some HTML

YTSearch({ key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data)
})
const App = () => 
  <div> 
    <SearchBar />
  </div>;

// Take this component;s generated HTML and put
// in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));