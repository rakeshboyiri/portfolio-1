import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="shine">Rakesh Boyiri</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .shine {
    font-size: 4em;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.3);
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.5, #fff)
      ) 0 0 no-repeat;
    background-image: -webkit-linear-gradient(
      -40deg,
      transparent 0%,
      transparent 40%,
      #fff 50%,
      transparent 60%,
      transparent 100%
    );
    -webkit-background-clip: text;
    -webkit-background-size: 50px;
    -webkit-animation: zezzz;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
  }
  @-webkit-keyframes zezzz {
    0%,
    10% {
      background-position: -200px;
    }
    20% {
      background-position: top left;
    }
    100% {
      background-position: 200px;
    }
  }`;

export default Card;