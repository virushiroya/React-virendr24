import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Table3() {
  return (
    <div className='main'>
      <div className='container text-center p-6'>
        <Row>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
          <Col>
            <Row className="pe-4">
              <Col className="box p-2">1</Col>
            </Row>
          </Col>
        </Row>
        <Row>
        <Col md={{ span: 4 }}>
            <Row className="pe-2">
              <Col className="box p-2">4</Col>
            </Row>
          </Col>
          <Col md={{ span: 4 }}>
            <Row className="pe-2">
              <Col className="box p-2">4</Col>
            </Row>
          </Col>
          <Col md={{ span: 4 }}>
            <Row className="pe-2">
              <Col className="box p-2">4</Col>
            </Row>
          </Col>
        </Row>
        <Row>
        <Col md={{ span: 4 }}>
            <Row className="pe-2">
              <Col className="box p-2">4</Col>
            </Row>
          </Col>
          <Col md={{ span: 8 }}>
            <Row className="pe-2">
              <Col className="box p-2">8</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6 }}>
            <Row className="pe-2">
              <Col className="box p-2">6</Col>
            </Row>
          </Col>
          <Col md={{ span: 6 }}>
          <Row className="pe-2">
              <Col className="box p-2">6</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='box p-2' md={{ span: 12 }}>12</Col>
        </Row>
        <Row>
          <Col className='box p-2' md={{ span: 4 }}>4</Col>
          <Col className='box p-2' md={{ offset: 4 }}>4 offset 4</Col>
        </Row>
        <Row>
          <Col className='box p-2' md={{ offset: 3 }}>3 offset 3</Col>
          <Col className='box p-2' md={{ offset: 3 }}>3 offset 3</Col>
        </Row>
        <Row>
          <Col className='box p-2' md={{ span: 4, offset: 4 }}>4 offset 4</Col>
        </Row>
      </div>
    </div>
  );
}

export default Table3;