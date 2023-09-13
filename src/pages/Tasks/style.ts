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
  justify-content: space-between;
  margin: 10px 0;

  h1{
    margin-bottom: 40px;
    color: var(--purple);
  }
`

export const Tasks = styled.div`

  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 30px;

  li{
    list-style: none;
    color: var(--purple);
    font-weight: 600;
    text-transform: uppercase;
  }

  p{
    font-size: 20px;
    font-weight: 600;
  }
`

export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #cacaca;

`

export const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  position: relative;

  &:checked {
    background-color: var(--purple);
    border: 1px solid var(--purple);

    
    &::after {
      content: "X"; 
      position: absolute;
      color: #fff;
      font-size: 16px;
    }
    &::after {
      top: 2px;
      right: 3.6px;
    }
  }
`;

export const BtnSend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const ProgressBar = styled.div`
  height: 20px;
  border-radius: 5;
  margin-top: 5;
  border: 1px solid #cacaca;
  background-color: transparent;
  width: 300px;
  border-radius: 4px;

  text-align: center;
  
  p{
    margin: 4px 0;
    font-weight: 500;
  }

`
