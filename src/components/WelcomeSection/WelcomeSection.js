import styled from "styled-components";


export const AboutMeContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

export const AboutMeWrapper = styled.div`
  align-items: center;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;