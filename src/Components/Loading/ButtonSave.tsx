/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Loading
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import Button from 'react-bootstrap/Button';

function ButtonSave(props){
  return(
    <div className="d-grid">
      <Button type="submit" className="btn btn-primary" disabled={props.disable} >
        {props.title}
      </Button>
    </div>
  );
}

export default ButtonSave