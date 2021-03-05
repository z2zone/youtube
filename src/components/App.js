import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import Youtube from '../api/Youtube';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onFormSubmit = async (searchedTerm) => {
        const response = await Youtube.get('/search', {
            params:{
                q: searchedTerm
            }
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onSelect(video){
        this.setState({selectedVideo: video})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit = {this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoPlayer video = {this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelect = {this.onSelect} videos = {this.state.videos} />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default App;