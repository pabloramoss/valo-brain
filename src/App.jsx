import React from 'react';
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import youtube from './apis/youtube'

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })

      this.setState({
          videos: response.data.items
      })
      console.log("this is resp",response);
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
      return (
          <div>
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              <div>
                  <div>
                      <div>
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div>
                          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default App;
