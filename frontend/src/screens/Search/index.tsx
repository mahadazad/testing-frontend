import * as React from 'react';
import { connect } from 'react-redux';
import { searchByCityKeyword } from './actions';
import Weather from 'components/Weather';
import { City, Weather as WeatherType } from 'types/weather';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Error = styled.h3`
  color: red;
  text-align: center;
`;

interface Props {
  searchByCity: Function;
  loading: boolean,
  error: boolean,
  data: City,
  match: {
    params: {
      keyword: string;
    };
  };
}

class SearchScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.searchByCity(this.props.match.params.keyword);
  }


  render() {
    if (this.props.loading) {
      return 'loading...';
    }

    if (this.props.error) {
      return <Error>No results were found. Try changing the keyword!</Error>
    }

    return (
      <React.Fragment>
        <Title>{this.props.data.name}</Title>
        <Container>
          {this.props.data.weathers.map((weather: WeatherType) => (
            <Weather key={weather.id} weather={weather} />
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.search.loading,
  error: state.search.error,
  data: state.search.data,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchByCity: (keyword: string) => dispatch(searchByCityKeyword(keyword)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen as any);
