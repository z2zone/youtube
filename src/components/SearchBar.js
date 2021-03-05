import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputSubmit = this.onInputSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value});
    }
    onInputSubmit(event){
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <form className="ui form" onSubmit={this.onInputSubmit}>  
                <div className="field">
                    <label>Search Bar</label>
                    <input value={this.state.term} onChange={this.onInputChange} />
                </div>
            </form>
        );
    }
}

export default SearchBar;