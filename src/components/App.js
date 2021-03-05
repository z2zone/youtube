import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
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
        this.setState({ videos: response.data.items});
        console.log(response);
    }
    onSelect(video){
        console.log(video);
        this.setState({selectedVideo: video})
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit = {this.onFormSubmit} />
                <VideoList onSelect = {this.onSelect} videos = {this.state.videos} />
            </div> 
        );
    }
}

export default App;