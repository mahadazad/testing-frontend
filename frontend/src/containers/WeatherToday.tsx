import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchByWoeid } from 'modules/weather';
import { City } from 'types/weather';
import WeatherComp from 'components/Weather';

interface Props {
  woeid: number;
  history: any,
}

interface State {
  loading: boolean;
  city: City | null,
}

class WeatherToday extends React.Component<Props & any, State> {
  state = {
    loading: true,
    city: {} as City,
  };

  onClick = () => {
    this.props.history.push(`/weather/${this.state.city.woeid}`);
  };

  async componentDidMount() {
    const city = await fetchByWoeid(this.props.woeid);
    this.setState({ loading: false, city });
  };

  render() {
    const { loading, city} = this.state;

    return <WeatherComp loading={loading}
                        city={city.name}
                        weather={city.weathers && city.weathers[0]}
                        onClick={this.onClick} />
  }
}

export default withRouter(WeatherToday);
