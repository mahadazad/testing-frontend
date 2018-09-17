import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { City, Weather as WeatherType } from 'types/weather';
import Weather from 'components/Weather';
import { featchCityWeather } from './actions';

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface Props {
  load: Function,
  loading: boolean,
  data: City,
  match: {
    params: {
      woeid: number;
    };
  };
}

class CityScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.load(this.props.match.params.woeid)
  }

  render() {
    if (this.props.loading) {
      return 'loading...';
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
  loading: state.city.loading,
  data: state.city.data,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    load: (woeid: number) => dispatch(featchCityWeather(woeid)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CityScreen as any);
