import styled from "styled-components";

const StyledBanner = styled.div`
  img {
    max-height: 30vh;
    width: 100%;
  }
`;

export default function Banner() {
  return (
    <StyledBanner>
      <img src="./images/banner.png" alt="Banner do site"/>
    </StyledBanner>
  );
}
