import React from 'react'

const Card = () => {
  return (
    <div>
        
      <div>
        <Container className="grow-0">
          <div><h3 class="text-center font-bold ">Task-1</h3>
            <Row className="my-2.5 flex text-center content-evenly">
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
              <Col className='border-1 border-sky-500' md="1">col-1</Col>
            </Row>
            <Row className="my-3 flex text-center">
              <Col className='border-1 border-sky-500' md="8">col-md-1</Col>
              <Col className='border-1 border-sky-500' md="4">col-md-1</Col>
            </Row>
            <Row className="my-2.5 flex text-center">
              <Col className='border-1 border-sky-500' md="4">col-md-4</Col>
              <Col className='border-1 border-sky-500' md="4">col-md-4</Col>
              <Col className='border-1 border-sky-500' md="4">col-md-4</Col>
            </Row>
            <Row className="my-3 flex text-center">
              <Col className='border-1 border-sky-500 gap-3' md="6">col-md-6</Col>
              <Col className='border-1 border-sky-500' md="6">col-md-6</Col>
            </Row>
          </div>
          <div className="text-center font-bold "><h3>Task-2</h3>
            <Row className='mt-2.5'></Row>
            <Row>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
              <Col className='border-2 border-white bg-sky-300'>col-1</Col>
            </Row>
            <Row className="flex">
              <Col className='border-2 border-white bg-green-400' md="3">col-md-1</Col>
              <Col className='border-2 border-white bg-green-400' md="3">col-md-1</Col>
              <Col className='border-2 border-white bg-green-400' md="3">col-md-1</Col>
              <Col className='border-2 border-white bg-green-400' md="3">col-md-1</Col>
            </Row>
            <Row>
              <Col className='border-2 border-white bg-blue-600' md="4">col-md-4</Col>
              <Col className='border-2 border-white bg-blue-600' md="4">col-md-4</Col>
              <Col className='border-2 border-white bg-blue-600' md="4">col-md-4</Col>
            </Row>
            <Row>
              <Col className='border-2 border-white bg-purple-700' md="8">col-md-6</Col>
              <Col className='border-2 border-white bg-purple-700' md="4">col-md-6</Col>
            </Row>
            <Row>
<Col className='border-2 border-white bg-purple-400' md="2">col-md-4</Col>
              <Col className='border-2 border-white bg-purple-400' md="2">col-md-4</Col>
              <Col className='border-2 border-white bg-purple-400' md="4">col-md-4</Col>
              <Col className='border-2 border-white bg-purple-400' md="2">col-md-4</Col>
              <Col className='border-2 border-white bg-purple-400' md="2">col-md-4</Col>
            </Row>
            <Row>
              <Col className='border-2 border-white bg-purple-700' md="6">col-md-6</Col>
              <Col className='border-2 border-white bg-purple-700' md="6">col-md-6</Col>
            </Row>
            <Row className="mb-3">
              <Col className='border-2 border-white bg-purple-700' md="12">col-md-6</Col>
            </Row>
          </div>
          <div className="text-center font-bold "><h3>Task-3</h3></div>
          <Row className="mt-2.5">
            <Col className='border-2 border-white bg-blue-600' md="12">.</Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="1">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="11"></Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="2">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="10"></Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="3">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="9"></Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="4">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="8"></Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="5">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="7"></Col>
          </Row>
          <Row>
            <Col className='border-2 border-white bg-blue-600' md="6">.</Col>
            <Col className='border-2 border-white bg-blue-600' md="6"></Col>
          </Row>
          <br />
          <div className="text-center font-bold flex-nowrap  "><h1>Task-4</h1>
            <Row className="flex my-3 gap-1">
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="1">1</Col>

            </Row>
            <Row className="flex my-3">
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="4">4</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="4">4</Col>
              <Col className='border-2 border-green-600 rounded-lg mx-1' md="4">4</Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Card