import React from 'react';

class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render (){
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar"/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default SearchBar;
