import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--purple);
  min-height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background-color: var(--white);
  width: 90%;
  max-width: 500px;
  min-height: 90vh;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  h1{
    color: var(--purple);
    text-align: center;
  }

  img{
    width: 120px;
  }

  .hero{
    max-width: 120px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .heroLeft{
    left: -10%;
  }
  
  .heroRight{
    right: -10%;
  }

  @media (max-width:600px){
    .heroLeft{
    left: 10px;
  }
  
  .heroRight{
    right: 10px;
  }
  }

  @media (max-width:450px){
    .hero{
    display: none;
  }
  }
`