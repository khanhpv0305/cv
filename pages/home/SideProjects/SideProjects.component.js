import {Row, Col} from 'reactstrap'

// Components
import SideProjects from './SideProjects.styled'
import PrintOnly from '~/components/PrintOnly'

import projectList from './projectsList'

const SideProjectsComponent = () => (
  <SideProjects>
    <Row>
      {projectList.map((item, idx) => (
        <Col
          key={idx}
          md={4}
        >
          <SideProjects.Item
            href={item.href}
            thumbnail={item.thumbnail}
          >
            <SideProjects.ItemDescription>{item.description}<PrintOnly> - {item.href}</PrintOnly></SideProjects.ItemDescription>
          </SideProjects.Item>
        </Col>
      ))}
    </Row>
  </SideProjects>
)

export default SideProjectsComponent
