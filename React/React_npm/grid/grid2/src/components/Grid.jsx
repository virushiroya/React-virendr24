import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Table2() {
  return (
    <div className='main'>
      <div className='container p-8'>
        <h1 className='text-2xl'><b>Fluid</b></h1>
        <div className='text-lg mt-2'>Percent based widhs allow fluid resizing of columns and rows.</div>
        <Row className='mt-4'>
          <Col md={{ span: 12 }}>
            <Row className="pe-4">
              <Col className="box"></Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 1 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 11 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 10 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 9 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 8 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 7 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
          <Col md={{ span: 6 }}>
            <Row className="pe-4">
              <Col className="box1"></Col>
            </Row>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Table2;