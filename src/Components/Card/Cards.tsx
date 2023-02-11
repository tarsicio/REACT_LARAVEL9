import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function Cards() {
  const  { t, i18n } = useTranslation();
  return (    
    <CardGroup>
      <Card style={{background: "yellow", margin:"10px"}}>
        <Card.Img variant="top" style={{width: 50, height: 50,}} src={ LOGO_HORUS.LogoHorus } alt="Logo_Horus" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('users.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small className="text-muted">HORUS | 2023</small>
        </Card.Footer>
      </Card>
      <Card style={{background: "blue", margin:"10px"}}>
        <Card.Img variant="top" style={{width: 50, height: 50,}} src={ LOGO_HORUS.LogoHorus } alt="Logo_Horus" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('rols.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small className="text-muted">HORUS | 2023</small>
        </Card.Footer>
      </Card>
      <Card style={{background: "red", margin:"10px"}}>
        <Card.Img variant="top" style={{width: 50, height: 50,}} src={ LOGO_HORUS.LogoHorus } alt="Logo_Horus" className="img-fluid" />
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('notifications.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small  className="text-muted">HORUS | 2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;