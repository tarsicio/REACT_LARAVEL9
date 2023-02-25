/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function _token_CSRF
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import Button from 'react-bootstrap/Button';

function ButtonRed_Token(props){
  return(
    <div className="d-grid">
      <Button type="submit" className="btn btn-danger" disabled={props.disable} >
        {props.title}
      </Button>
    </div>
  );
}

export default ButtonRed_Token;