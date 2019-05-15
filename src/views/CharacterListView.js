import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
import { loadChars } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {

    this.props.loadChars();

  }

  render() {
    
    console.log("props",this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
      
        {this.props.fetching && <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />}
        </div>
      );
    }
    return (
      <div>
        <h1>yolo</h1>
        {console.log("in success", this.props.characters)}
      {this.props.characters && <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{loadChars})(CharacterListView);
