import React from "react"
import { Link } from "gatsby"

import { Row, Col, Container, Form, Button, Navbar } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Language of Wearing</Navbar.Brand>
      </Navbar>
    </Container>

    <Container>

      <Row>
        <Col><h3>Please answer the questions below:</h3></Col>
      </Row>

      <Form
        name="contact-1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >

      <input type="hidden" name="form-name" value="contact-1" />

      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

        <Row>
          <Col md={9}>
            <Form.Group>
              <Form.Label>How would you describe the physical feeling of the fashion as you are wearing it?</Form.Label>
              <Form.Control required type="text" name="physical-feeling" />
            </Form.Group>
          </Col>
          <Col md={9}>
            <Form.Group>
              <Form.Label>How would you describe the material the fashion is made of as you wear it?</Form.Label>
              <Form.Control required type="text" name="material" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>
    </Container>
  </Layout>
)

export default IndexPage
