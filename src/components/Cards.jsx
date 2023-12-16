/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Cards({ items, title = " " }) {
  return (
    <div>
      <Container className='mx-auto'>
        <h1 className='text-light text-center py-5'>{title} Movies</h1>
        <Row className='text-white pb-2' xs={1} md={3} lg={4} sm={2}>
          {
            items.map(item =>
              <Col key={item.id} className='pb-2'>
                <Card className='h-100'>
                  <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className='p-1' />
                  <Card.Body>
                    <Card.Title>{item.original_title}</Card.Title>
                    <Card.Text>
                      {item.overview}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>)
          }
        </Row>
      </Container>
    </div>
  )
}
