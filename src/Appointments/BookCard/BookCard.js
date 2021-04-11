import React from 'react';
import { Card } from 'react-bootstrap';
import AppointForm from '../AppointForm/AppointForm';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
const BookCard = ({data}) => {

    const {subject,visitingHour,doctorsName,totalSpace}=data;
 
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal(){
      setIsOpen(false);
    }
   

    return (
      <div className="col-md-3 col-lg-4 mb-3">
            <Card className="h-100">
  <Card.Body>
   
    <Card.Text>
     <h4>{subject}</h4>
     <h4>Doctor : {doctorsName}</h4>
     <h5> <small>Visiting Hour : {visitingHour}</small></h5>
     <h6><small>Available : {totalSpace} seats</small></h6>
     <button className="btn btn-primary" onClick={openModal}>Book Now</button> 
     <Modal
          isOpen={modalIsOpen}
         
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <button onClick={closeModal}> <FontAwesomeIcon icon={faTimesCircle} /></button>
           <AppointForm modalTitle={subject}/>
        </Modal>
     
    </Card.Text>
    
  </Card.Body>
  
</Card>
      </div>
    )
};

export default BookCard;