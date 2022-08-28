import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import styled from "styled-components";

interface IAddressOnMapProps {
  Xcoord: number;
  Ycoord: number;
}

export const AddressOnMap = ({ Xcoord, Ycoord }: IAddressOnMapProps) => {
  return (
    <YMaps>
      <MapWrapper>
        <StyledMap defaultState={{ center: [Xcoord, Ycoord], zoom: 19 }}>
          <Placemark geometry={[Xcoord, Ycoord]} />
        </StyledMap>
      </MapWrapper>
    </YMaps>
  );
};

const MapWrapper = styled.div`
  margin: 15px 10px;
  height: 420px;

  @media screen and (max-width: 768px) {
    margin: 12px 10px;
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    margin: 10px 10px;
    height: 420px;
  }

  @media screen and (max-width: 320px) {
    margin: 5px 5px;
    height: 290px;
  }
`;

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
`;
