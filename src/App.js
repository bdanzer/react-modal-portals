import React from 'react';
import axios from 'axios';

import Spinner from './components/spinner/spinner.component';
import ImageCollection from './components/image-collection/image-collection.component';

import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    images: null
  };

  componentDidMount() {
    this.getImages();
  }

  /**
   * TODO: Should implement a way to check 
   * for status codes in case of error
   */
  async getImages() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=25');
    let data = response.data;

    this.setState({
      images: data,
      isLoading: false
    });
  }

  render() {
    return (
      <div className="App">
        {(this.state.isLoading) ? 
          <Spinner/> 
          : (<ImageCollection images={this.state.images}/>)
        }
      </div>
    );
  }
}

export default App;
