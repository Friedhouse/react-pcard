import { Container, Row, Col } from 'reactstrap';
import notebook from '../shared/images/notebook.png';
import checklist from '../shared/images/checklist.png';
import document from '../shared/images/document.png';

function MainFeatures() {
    return (
      <>
      <Container>
        <Row className='row-content' id='features'>
          <Col>
            <h2>Main Features</h2>
          </Col>
        </Row>
        <Row className='feature-heading'>
          <Col className='sm-4 d-none d-sm-block'>
            <h4>Customize</h4>
          </Col>
          <Col className='sm-4 d-none d-sm-block'>
            <h4>Database</h4>
          </Col>
          <Col className='sm-4 d-none d-sm-block'>
            <h4>Share</h4>
          </Col>
        </Row>
        <Row className='mb-5'>
            <Col xs-12 col-md-2 className='icon'>
                <img src={notebook} alt='notebook' width='80%' />
            </Col>
            <Col xs-12 col-md-2>
                <p>Write out you preference cards your way</p>
            </Col>
            <Col xs-12 col-md-2 className='icon'>
                <img src={checklist} alt='notebook' width='80%' />
            </Col>
            <Col xs-12 col-md-2>
                <p>Use our databases of prefernce card to make your card build easier.</p>
            </Col>
            <Col xs-12 col-md-2 className='icon'>
                <img src={document} alt='notebook' width='80%' />
            </Col>
            <Col xs-12 col-md-2>
                <p>Share your preference cards with co-workers or travelers.</p>
            </Col>
        </Row>
      </Container>
      </>
    )
  }

  export default MainFeatures;
  