import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--purple);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background-color: var(--white);
  width: 90%;
  min-height: 90vh;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`