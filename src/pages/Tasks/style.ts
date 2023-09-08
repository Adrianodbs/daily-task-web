import styled from "styled-components";

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
  max-width: 700px;
  min-height: 80vh;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin-bottom: 40px;
    color: var(--purple);
  }
`

export const Tasks = styled.div`

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  li{
    list-style: none;
    color: var(--purple);
    font-weight: 600;
    text-transform: uppercase;
  }
  
`