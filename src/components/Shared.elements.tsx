import styled from "styled-components";

export const Title = styled.h1`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: ${props => props.color};
  margin: ${(props: {margin?: string})=> props.margin ? props.margin : 0}px;
`;