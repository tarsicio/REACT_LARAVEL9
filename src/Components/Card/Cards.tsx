import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function Cards() {
  const  { t, i18n } = useTranslation();
  return (    
    <CardGroup>
      <Card style={{background: "#E5CB0C", margin:"10px"}}>
          <div style={{textAlign:"center"}}>
            <Card.Img 
              variant="top" 
              style={{width: 50, height: 50}} 
              src={ LOGO_HORUS.LogoHorus } 
              alt="Logo_Horus" 
              className="img-fluid" />
          </div>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('users.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            {t('dashboard.text')}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small><b>HORUS | 2023</b></small>
        </Card.Footer>
      </Card>
      <Card style={{background: "#0F54CD", margin:"10px"}}>
        <div style={{textAlign:"center"}}>
          <Card.Img 
            variant="top" 
            style={{width: 50, height: 50}} 
            src={ LOGO_HORUS.LogoHorus } 
            alt="Logo_Horus" 
            className="img-fluid" />
        </div>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('rols.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            {t('dashboard.text')}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small><b>HORUS | 2023</b></small>
        </Card.Footer>
      </Card>
      <Card style={{background: "#EA0A25", margin:"10px"}}>
        <div style={{textAlign:"center"}}>
            <Card.Img 
              variant="top" 
              style={{width: 50, height: 50}} 
              src={ LOGO_HORUS.LogoHorus } 
              alt="Logo_Horus" 
              className="img-fluid" />
          </div>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{t('notifications.title')}</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            {t('dashboard.text')}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign:"center"}}>
          <small><b>HORUS | 2023</b></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;