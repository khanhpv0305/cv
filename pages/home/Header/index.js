import React from 'react'

import Header from './styled'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

export default props => <Header>
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

            685/80 Xô Viết Nghệ Tĩnh, Bình thạnh District, Hồ Chí Minh City
          </Header.Item>
        </Header.ItemGroup>
      </Col>
    </Row>
  </Header.WItems>
</Header>