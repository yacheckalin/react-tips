import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchField: "" };
  }
  handleSearch = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="search_prefix"
                type="text"
                name="searchField"
                className="input-field"
                value={this.state.searchField}
                onChange={this.handleSearch}
              />
              <label htmlFor="search_prefix"></label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
