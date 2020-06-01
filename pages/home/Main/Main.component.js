import React from 'react'
import {Row, Col} from 'reactstrap'

// Components
import Main from './Main.styled'
import SectionHeading from '~/components/SectionHeading'
import PrintOnly from '~/components/PrintOnly'

export default props => <Main>
  <Main.SectionWrapper>
    <SectionHeading>Summary</SectionHeading>

    <Main.SkillSection>
      <Main.SkillSectionContentWrapper style={{ padding: '40px' }}>
        Hi, I&apos;m Pham Van Khanh, a Front-end developer with 3 years of experience.<br />

        My main skills: ReactJS, Mobile-First Web Design<br />

        I especially like learning JavaScript (and it&apos;s libraries), TypeScript, finding ways to optimize and increase performance<br />

        I like (deep) talking and chilling with other people. I was excited by the colorful things.<br />

        My hobbies: reading, playing guitar, singing (but not really good)...
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

                  <li>Strong knowledge of React hooks. Know how to increase the code readability and optimize the performance with hooks</li>

                  <li>Deep understanding about Redux</li>

                  <li>Deep understading about Immutability in Redux, React</li>

                  <li>Have experience optimizing React performance (by using PureComponent, React.memo, memoization, restructuring components...)</li>

                  <li>ReactJS middlewares &amp; libralires: redux-thunk, redux-saga, styled-components, redux-form, formik, react-intl... </li>

                  <li>Unit Testing with Jest, Enzyme</li>

                  <li>e2e Testing with Nightwatch.js, Cucumber</li>

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

                  <li>Preferred editor: VIM, VSCode</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>Back-end</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>GraphQL: Apollo, graphql-yoga, Prisma</li>

                  <li>NodeJS: ExpressJS, Strapi, Sails.js</li>

                  <li>PHP: Wordpress</li>

                  <li>Database: MySQL, MongoDB</li>
                </ul>
              </Main.SkillSectionContentWrapper>
            </Main.SkillSection>
          </Col>

          <Col xs={12}>
            <Main.SkillSection>
              <Main.SkillSectionHeading>DevOps</Main.SkillSectionHeading>

              <Main.SkillSectionContentWrapper>
                <ul className="mb-0">
                  <li>Have experience on: AWS, GCP, Docker</li>

                  <li>Web Server setting up: Nginx, Apache</li>

                  <li>CI/CD tools: Jenkins, Github Actions</li>
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

                  <li>Good communication with teammates</li>

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
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>Devinition</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 06/2018 - 04/2019</li>

              <li>Role: Front-end developer</li>

              <li>Technologies: ReactJS, Angular (2+)</li>

              <li>
                Projects

                <ul>
                  <li>Webshop (main project): An e-commerce website build on .NET, ReactJS, Angular (for dashboard)</li>

                  <li>ItJobs: IT jobs seeking</li>

                  <li>Busjehuren: Car booking application</li>
                </ul>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>

      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>NFQ Asia</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>Time: 04/2019 - Present</li>

              <li>Role: Front-end developer</li>

              <li>Technologies: ReactJS</li>

              <li>
                Projects

                <ul>
                  <li>Heidelpay Banking Solution (main project): An application for managing debtors, creditors and money transferring</li>

                  <li>Heidelpay Intelligence Platform: transactions managing</li>
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
              <li>Time: 2014 - 2018</li>

              <li>Major: Software Engineering</li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>

  <Main.SectionWrapper>
    <SectionHeading>Side projects</SectionHeading>

    <Row>
      <Col md={6}>
        <Main.SkillSection>
          <Main.SkillSectionHeading>ReactJS</Main.SkillSectionHeading>

          <Main.SkillSectionContentWrapper>
            <ul className="mb-0">
              <li>
                <a href="https://ngabds.com">
                  NgaBDS - Real estate website (React Apollo, NextJs)<PrintOnly> - ngabds.com</PrintOnly>
                </a>
              </li>

              <li>
                <a href="https://github.com/khanhpv0305/cv">This CV Git Repo</a>
              </li>
            </ul>
          </Main.SkillSectionContentWrapper>
        </Main.SkillSection>
      </Col>
    </Row>
  </Main.SectionWrapper>
</Main>