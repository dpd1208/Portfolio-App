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
    height: 300px;
    position: relative;

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

      .card1 { background: #BF3030; } 
      .card2 { background: #BF7130; }
      .card3 { background: #009999; }
      .card4 { background: #008500; }
      .card5 { background: #FFB273; }
      .card6 { background: #BF3030; } 
      .card7 { background: #BF7130; }
      .card8 { background: #008500; }
      .card9 { background: #FFB273; }
      .card10 { background: #009999; }
`;

const ListWrapper = styled.div`
    width: 3700px;
`;

const Card = styled.div`
    height: 84px;
    width: 300px;
    display: inline-block;
    margin-top: 30px;
    margin-left: 30px;
    float: left;
    overflow: hidden;
    text-align: center;
    padding-top: 100px;
    color: white;
`;

export {
    SectionWrapper,
    ListWrapper,
    Card,
};