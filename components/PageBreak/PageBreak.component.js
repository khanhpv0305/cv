import styled from 'styled-components'

const PageBreak = styled.div`
  @media print {
    page-break-after: always;
  }
`

export default PageBreak
