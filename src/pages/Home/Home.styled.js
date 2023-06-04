import styled from 'styled-components';

const SectionWrapper = styled.div `
  `;

const StyledAliceCarouselWrapper = styled.div `
  width: 100%;

.alice-carousel {
  margin: 0 !important;
}

.alice-carousel__stage-item {
    width: 100vw;
  }

.alice-carousel__dots-item {
  background-color: gray;
}

.alice-carousel__dots-item:hover,
.alice-carousel__dots-item.__active {
    background-color: rgba(0,0,0,0.3);
}

.alice-carousel__dots {
  position: absolute;
  left: calc(50% - 25px);
  bottom: 24px;
  display: flex;
  width: 63px;
}

.alice-carousel__dots-item {
    margin-right: 0px;
    margin: 0 auto;
  }

.alice-carousel__prev-btn {
    display: none;
  }

  .alice-carousel__next-btn {
    display: none;
  }

@media (max-width: 767px) {
  .alice-carousel__dots {
    margin-top: 10px !important;
    margin-bottom: 32px !important;
  }
}
`;

export {
    SectionWrapper,
    StyledAliceCarouselWrapper,
};