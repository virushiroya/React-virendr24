import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Table4() {
  return (
    <div className='main'>
    <Container>
      <Row>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
        <Col className='box' md={1}>col-md-1</Col>
      </Row>
      <Row>
      <Col className='box-1' md={{ span: 8 }}>col-md-8</Col>
      <Col className='box-1' md={{ span: 4}}>col-md-4</Col>       
      </Row>
      <Row>
      <Col className='box-2' md={{ span: 4 }}>col-md-4</Col>
      <Col className='box-2' md={{ span: 4}}>col-md-4</Col>  
      <Col className='box-2' md={{ span: 4}}>col-md-4</Col>       
      </Row>
      <Row>
      <Col className='box-3' md={{ span: 6}}>col-md-6</Col>
      <Col className='box-3' md={{ span: 6}}>col-md-6</Col>         
      </Row>
    </Container>
    </div>
  );
}

export default Table4;