import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });

    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
