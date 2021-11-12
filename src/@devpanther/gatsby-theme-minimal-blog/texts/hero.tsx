import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  .width_960,
  .width_627,
  .width_512,
  .width_350 {
    display: none;
  }

  @media only screen and (min-width: 960px) {
    .width_960 {
      display: block;
    }
  }

  @media only screen and (min-width: 627px) and (max-width: 959px) {
    .width_627 {
      display: block;
    }
  }

  @media only screen and (min-width: 512px) and (max-width: 626px) {
    .width_960 {
      display: block;
    }
  }

  @media only screen and (max-width: 511px) {
    .width_960 {
      display: block;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <img
        className="width_960"
        src="./Banner960Width.svg"
        width="100%"
        height="auto"
      />

      <img
        className="width_627"
        src="./Banner627Width.svg"
        width="100%"
        height="auto"
      />

      <img
        className="width_512"
        src="./Banner512Width.svg"
        width="100%"
        height="auto"
      />

      <img
        className="width_350"
        src="./Banner350Width.svg"
        width="100%"
        height="auto"
      />
    </Wrapper>
  );
};
export default Hero;
