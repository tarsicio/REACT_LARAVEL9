/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Loading
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonLoading(props){
  return(
    <div style={{textAlign: "center"}}>
      <Button className="btn btn-primary" disabled>
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true" />
        <span className="visually-hidden">{props.msg}</span>
      </Button>{' '}
      <Button className="btn btn-primary"  disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true" />
        {props.msg}
      </Button>
    </div>
  );
}

export default ButtonLoading;

