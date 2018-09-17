import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WeatherToday from 'containers/WeatherToday';
import { City } from './reducer';
import { updateSearchField } from './actions';

const Cities = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SearchField = styled.input`
  height: 30px;
  width: 200px;
  padding: 6px;
  border: 1px solid black;
`;

const SearchButton = styled.button`
  height: 30px;
  padding: 8px;
  background: #1a85ff;
  color: white;
  border: 0;
  margin-left: 5px;
  cursor: pointer;
`;

interface Props {
  history: any;
  searchKeyword: string;
  updateSearchField: Function;
  cities: Array<City>
}

class HomeScreen extends React.Component<Props> {
  onSearch = () => {
    this.props.history.push(`/search/${this.props.searchKeyword.toLowerCase()}`);
  };

  render() {
    return (
      <React.Fragment>
        <SearchContainer>
          <SearchField value={this.props.searchKeyword}
                       onChange={e => this.props.updateSearchField(e.target.value)} />
          <SearchButton onClick={this.onSearch}>Search</SearchButton>
        </SearchContainer>
        <Cities>
          {this.props.cities.map((city: City) => (
            <WeatherToday key={city.woeid} woeid={city.woeid} />
          ))}
        </Cities>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  searchKeyword: state.home.searchKeyword,
  cities: state.home.cities,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateSearchField: (searchKeyword: string) => dispatch(updateSearchField(searchKeyword)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen as any);
