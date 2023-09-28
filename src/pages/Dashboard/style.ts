import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 48px);
  gap: 10px;
  background-color: var(--white);

  h3{
    font-weight: bold;
    font-size: 26px;
  }

  h1{
    font-size: 42px;
    color:#008000
  }
  span{
    margin-top: 30px;
  }
`