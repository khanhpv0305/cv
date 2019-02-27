import React from 'react'

import { Row, Col } from 'reactstrap'
import Main from './styled'
import SectionHeading from '~/components/SectionHeading'

export default props => <Main>
  <Main.SectionWrapper>
    <SectionHeading>Summary</SectionHeading>

    <Main.SkillSection>
      <Main.SkillSectionContentWrapper style={{ padding: '40px' }}>
        Hi, I&apos;m Pham Van Khanh, a Front-end developer with 2 year of experience.<br />

        My main skills: ReactJS, Mobile-First Web Design<br />

        I especially like learning JavaScript (and it&apos;s libraries), TypeScript, find ways to optimize and increase performance<br />

        I like (deep) talking and helping other people. I was excited by the colorful things.<br />

        My hobbies: reading, playing guitar, sing (but bad)...
      </Main.SkillSectionContentWrapper>
    </Main.SkillSection>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Skills</SectionHeading>

    <Row>
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Front-end</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                Basic

                <ul>
                  <li>HTML5, CSS3 (Flexbox, Grid...)</li>

                  <li>CSS Frameworks: Bootstrap 4, Bulma</li>

                  <li>CSS methodologies: BEM, ITCSS</li>

                  <li>CSS preprocessor: SASS</li>

                  <li>Solid understading of JavaScript concepts: Promise, async/await, generator function, DOM manipulation...</li>

                  <li>Have experience in TypeScript</li>

                  <li>Have experience in AMP</li>

                  <li>Mobile-First Web Design</li>

                  <li>Task runner, bundler: Gulp, Webpack</li>

                  <li>Have knowledge of color theory, typography</li>

                  <li>jQuery</li>
                </ul>
              </li>

              <br />

              <li>
                ReactJS

                <ul>
                  <li>Solid understanding of React concepts: Virtual DOM, Component&apos;s lifecycle, PureComponent, Hooks, Context...</li>

                  <li>Deep understanding about Redux</li>

                  <li>Deep understading about Immutability in Redux, React</li>

                  <li>Have experience optimizing React performance (by using PureComponent, React.memo, memoization, restructuring components...)</li>

                  <li>ReactJS middlewares &amp; libralires: redux-thunk, redux-saga, styled-components, redux-form, formik, react-intl... </li>

                  <li>Have experience in Server-side rendering with NextJS</li>

                  <li>Others: Gatsby...</li>
                </ul>
              </li>

              <br />

              <li>Basic knowledge about Angular (2+)</li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Row>
          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Common Knowledge</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>Understanding about OOP</li>

                  <li>Agile, Scrum</li>

                  <li>SOLID principles</li>

                  <li>Database design</li>

                  <li>RestfulAPI</li>

                  <li>Git</li>

                  <li>CI/CD</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Back-end</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>NodeJS: ExpressJS, Strapi</li>

                  <li>PHP: Wordpress</li>

                  <li>Database: MySQL, MongoDB</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Soft skills</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>Good at researching new technologies</li>

                  <li>Good communication with teammate</li>

                  <li>High responsibility</li>

                  <li>Positive thinking</li>

                  <li>English documents reading</li>

                  <li>Basic English communication</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>
        </Row>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Experiences</SectionHeading>

    <Row>
      <Col xs={12}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Devinition</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 06/2018 - Present</li>

              <li>Role: Front-end developer</li>

              <li>Technologies: ReactJS, Angular (2+)</li>

              <li>
                Projects

                <ul>
                  <li>Webshop (main project): An e-commerce website build on .NET, ReactJS, Angular (for dashboard)</li>

                  <li>ItJobs: IT jobs finder</li>

                  <li>Busjehuren: Car booking application</li>
                </ul>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Education</SectionHeading>

    <Row>
      <Col xs={12}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>University of Information Technology - VNUHCM</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 2014 - 2017</li>

              <li>Major: Software Engineering</li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Freelance projects</SectionHeading>

    <Row>
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Wordpress</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="http://publicspeaking.ayp.vn/">AYP Public speaking</a>
              </li>

              <li>
                <a href="http://athehospitality.edu.vn">Athe Hospitality</a>
              </li>

              <li>
                <a href="https://khanhpv.com/project/minh-long-demo/">Minh Long Elevators</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>ReactJS</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="https://ngabds.com">NgaBDS (server-side render with NextJS)</a>
              </li>

              <li>
                <a href="https://github.com/khanhpv0305/cv">This CV Git Repo</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Templates</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="http://khanhpv.com/project/salesjunction/">Sales Junction</a>
              </li>

              <li>
                <a href="http://khanhpv.com/project/monmi-cosmetic/">Monmi Cosmetic</a>
              </li>

              <li>
                <a href="http://khanhpv.com/project/titania/">Titania</a>
              </li>

              <li>
                <a href="https://khanhpv.com/project/rosie-cosmetic/">Rosie Cosmetic</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>
</Main>