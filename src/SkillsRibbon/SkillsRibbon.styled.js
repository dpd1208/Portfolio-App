import styled, { keyframes } from 'styled-components';

const pan = keyframes`
0% {
    transform: translateX(0);
    }
    
  100% {
    transform: translateX(-3300px);
    }
`;

const SectionWrapper = styled.div`
    width: 100%;
    height: 48px;
    position: absolute;
    top: 94vh;
    overflow: hidden;
    background-color: rgb(0,0,0);
    z-index: 1;

    .list, .list-bis {
        width: 6000px;
        position: absolute;
        white-space: nowrap;
        display: inline-block;
        animation-name: ${pan};
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      
      .list-bis {
        left: 3300px;
      }
`;

const ListWrapper = styled.div`
    width: 3700px;
`;

const Card = styled.div`
    height: 42px;
    line-height: 42px;
    width: 300px;
    display: inline-block;
    margin-left: 30px;
    float: left;
    overflow: hidden;
    text-align: center;
    color: white;
    background-color: transparent;
`;

export {
    SectionWrapper,
    ListWrapper,
    Card,
};