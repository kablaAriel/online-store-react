import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import cartProducts from './cartProducts';

function CartModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header >
        <Modal.Title 
        id="contained-modal-title-vcenter"
        >
        עגלת קניות
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <cartProducts products={getCustomerProducts()}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CartBtn = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        עגלת קניות
        </Button>

      <CartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
const getCustomerProducts = ()=>{
  fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then((data) => {
          return data
        })
        .catch(console.log)
}
export default CartBtn;