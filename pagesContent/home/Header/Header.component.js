import React from 'react'
import {Row, Col} from 'reactstrap'

// Components
import Header from './Header.styled'

const HeaderComponent = () => (
  <Header>
    <Header.WAvatar>
      <Header.Avatar url="/static/avatar.jpg" />
    </Header.WAvatar>

    <Header.Name>PHẠM VĂN KHÁNH</Header.Name>

    <Header.Title>Front-end Developer</Header.Title>

    <Header.WItems>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Header.ItemGroup>
            <Header.Item>
              <Header.ItemLabel>Date of birth: </Header.ItemLabel>

              03/05/1996
            </Header.Item>

            <Header.Item>
              <Header.ItemLabel>Phone: </Header.ItemLabel>

              <a href='tel:0347719454'>034 7719 454</a>
            </Header.Item>
          </Header.ItemGroup>

          <Header.ItemGroup>
            <Header.Item>
              <Header.ItemLabel>Email: </Header.ItemLabel>

              <a href='mailto:vankhanhpf96@gmail.com'>vankhanhpf96@gmail.com</a>
            </Header.Item>

            <Header.Item>
              <Header.ItemLabel>Facebook: </Header.ItemLabel>

              <a href='https://www.facebook.com/KhanhPV0305'>/KhanhPV0305</a>
            </Header.Item>
          </Header.ItemGroup>
        </Col>
      </Row>
    </Header.WItems>
  </Header>
)

export default HeaderComponent
