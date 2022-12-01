import styled from "styled-components";

const StyledBanner = styled.div`
  img {
    max-height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default function Banner({bg}) {
  console.log(bg)
  return (
    <StyledBanner>
      <img src={bg} alt="Banner do site"/>
    </StyledBanner>
  );
}



// const StyledBanner = styled.div`
//   /* background-image: url(${({bg}) => bg}); */
//   /* background: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80'); */
//   background: url('/images/banner.png');
//   background-position: 'center';
//   background-size: 'cover';
//   background-repeat: 'none';
//   /* max-height: 30vh; */
//   /* width: 100%; */
// `;

// export default function Banner({bg}) {
//   console.log(bg);
//   return (
//     <StyledBanner>
//       {/* <img src={bg} alt="Banner do site"/> */}
//     </StyledBanner>
//   );
// }
