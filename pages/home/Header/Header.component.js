import React from 'react'
import {Row, Col} from 'reactstrap'
import Link from 'next/link'

// Components
import Header from './Header.styled'

export default () => (
  <Header>
    <Header.WAvatar>
      <Header.Avatar url="/static/avatar.jpg" />
    </Header.WAvatar>

    <Header.Name>PHẠM VĂN KHÁNH</Header.Name>

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

              034 7719 454
            </Header.Item>
          </Header.ItemGroup>

          <Header.ItemGroup>
            <Header.Item>
              <Header.ItemLabel>Email: </Header.ItemLabel>

              vankhanhpf96@gmail.com
            </Header.Item>

            <Header.Item>
              <Header.ItemLabel>Facebook: </Header.ItemLabel>

              <Link href="https://www.facebook.com/KhanhPV0305">
                <a>/KhanhPV0305</a>
              </Link>
            </Header.Item>
          </Header.ItemGroup>

          <Header.ItemGroup>
            <Header.Item>
              <Header.ItemLabel>Address: </Header.ItemLabel>

              12 đường số 10, đường Lý Phục Man, phường Bình Thuân, Q7, TP. HCM
            </Header.Item>
          </Header.ItemGroup>
        </Col>
      </Row>
    </Header.WItems>
  </Header>
)