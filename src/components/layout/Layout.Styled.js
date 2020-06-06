import styled from 'styled-components';

export const PageContainer = styled.div`
    padding: 80px 0 300px;
`;

export const ContentContainer = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  padding: 0 15px;    
  ${props => props.size === 'small' && 'max-width:900px'}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.4);
  ${(props)=> props.alpha && `
    background: rgba(0,0,0,${props.alpha});
  `}
    
`;

export const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 30px ;
    h2{
    font-size: 30px;
    color: #333;
    font-weight: 600;
    display: inline-block;
    }
    
    p{
    font-size: 12px;
    color: #888;
    font-weight: 400;
    margin-bottom: 15px;
    }
    
`;


export const ShadowLine = styled.div`
    background-image: -webkit-linear-gradient(left,rgba(0,0,0,0),#a5a5a5,rgba(0,0,0,0));
    background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,.75),rgba(0,0,0,0));
    background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,.75),rgba(0,0,0,0));
    background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,.75),rgba(0,0,0,0));
    height: 1px;
    margin: auto;
    ${props => props.width &&
      `width: ${props.width}px`};
    ${props => props.mt &&
    `margin-top: ${props.mt}px`};
    
    
`;

export const Grid = styled.div`
    
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;

export const Col = styled.div`
    
`;

export const Card = styled.div`

    
`;