import styled from '@emotion/styled'

export default styled.button`
  padding: .5em 1em;
  border: 1px solid black;
  font-size: 1em;
  background-color: white;
  color: black;
  border-radius: .25em;
  cursor: pointer;

  &:disabled {
    border-color: gray;
    color: gray;
  }
`