import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../helpers/index.css';
import { useFetch } from '../helpers/useFetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';

export const CardValue = () => {

  const url = 'https://api.bluelytics.com.ar/v2/latest';

    const { data, loading, error } = useFetch( url );

    if (!data) return null;
    console.log(data)
    const { oficial, blue } = data;
    
    const kindOfCotization = [
      'oficial',
      'blue' 
  ];

  let desc = {
    blue: 'It is the dollar that one can get in the parallel market, outside the bank and official system. It is more expensive than the official quote.',
    official: 'It is the dollar offered by the Bank of the Argentine nation, but with multiple restrictions.'
  };

  return (

    <Row xs={1} md={2} className="g-4 justify-content-md-center">
      {kindOfCotization.map( ( cot, index ) => {
        
        let curDesc = cot === 'oficial' ? desc.official : desc.blue;
        let curValueBuy = cot === 'oficial' ? oficial.value_buy : blue.value_buy;
        let curValueSell = cot === 'oficial' ? oficial.value_sell : blue.value_sell;
        let title = cot === 'oficial'? 'Official' : 'Blue';
        
        const date = new Date(data.last_update);
        const setTime = date.getHours() >= 12 ? 'PM' : 'AM';
        const formattedDate = `${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${(date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)}/${date.getFullYear()} ${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()} ${setTime}`;
        
        return (
        <Col xs lg="3" key={index} className="text-center">
          <CardGroup>

            <Card style={{ width: '5rem' }}>
              <Card.Body className='card-cotization'>
                <Card.Text >
                  Buy: ${curValueBuy} - Sell: ${curValueSell}<br />
                  {/* <div className='card-updated-time'> Last Update: { formattedDate }</div> */}                  
                </Card.Text>
              </Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{ title } Dolar</Accordion.Header>
                  <Accordion.Body>
                    { curDesc }
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Card.Body className='card-cotization'>
                <Card.Text className='card-updated-time'>
                  Last Update: { formattedDate }
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
        )
      })}
    </Row>
  );
}
