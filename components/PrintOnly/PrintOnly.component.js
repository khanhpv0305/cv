import styled from 'styled-components'

const PrintOnly = styled.span`
  display: none;

  @media print {
    display: ${(props) => props.dp};
  }
`

PrintOnly.defaultProps = {
  dp: 'inline',
}

export default PrintOnly