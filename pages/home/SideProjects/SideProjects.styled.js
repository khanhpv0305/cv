import styled from 'styled-components'

const itemSpacing = '30px'

const SideProjects = styled.div`
  margin-bottom: -${itemSpacing};
`

SideProjects.Item = styled.a.attrs(
  (props) => ({
    style: {
      backgroundImage: `url('${props.thumbnail}')`,
    },
  }),
)`
  background: no-repeat center / cover;
  margin-bottom: ${itemSpacing};
  display: block;
  color: white;
  padding-top: 60%;
  position: relative;

  &:hover {
    text-decoration: none;
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9136029411764706) 0%, rgba(255,255,255,0) 45%);
  }
`

SideProjects.ItemDescription = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-size: 0.95rem;
  text-align: center;
`

export default SideProjects
