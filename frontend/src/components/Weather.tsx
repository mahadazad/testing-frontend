import * as React from 'react';
import styled from 'styled-components';
import { Weather as WeatherType } from 'types/weather';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const RowLabel = styled.span`
  flex: 1;
  font-weight: 600;
`;

const RowValue = styled.span`
  flex: 1;
`;

interface Props {
  weather: WeatherType;
  loading?: boolean;
  city?: string;
  onClick?: Function;
}

const Weather: React.SFC<Props & any> = (props) => {
  if (props.loading) {
    return <Container>loading...</Container>
  }

  return (
    <Container onClick={props.onClick}>
      <Title>{props.city} <Icon src={props.weather.icon} /></Title>
      <Row>
        <RowLabel>Temp</RowLabel>
        <RowValue>{props.weather.temp.toFixed(2)}°C</RowValue>
      </Row>
      <Row>
        <RowLabel>Max Temp</RowLabel>
        <RowValue>{props.weather.maxTemp.toFixed(2)}°C</RowValue>
      </Row>
      <Row>
        <RowLabel>Min Temp</RowLabel>
        <RowValue>{props.weather.minTemp.toFixed(2)}°C</RowValue>
      </Row>
    </Container>
  );
};

export default Weather;
