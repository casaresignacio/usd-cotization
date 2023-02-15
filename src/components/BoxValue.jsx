import { CardValue } from './CardValue';
import { MenuBar } from './MenuBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Footer } from './Footer';




export const BoxValue = () => {


    return (
        <Container fluid className='page-container'>
            <Row className="justify-content-md-center">
                <MenuBar />
            </Row>
            <br />
            <CardValue />
            <Row >
                <Footer />
            </Row>
          
        </Container>
        
       
    )
   
}