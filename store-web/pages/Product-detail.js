import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Route from 'next/router'

export default class ProductDetail extends React.Component {
  addToCart() {
    Route.push('/Confirm-order')
  }

  render() {
    return (
      <Container>
        <dev>
          <img src="https://i.pinimg.com/474x/17/43/2f/17432f12ec88c0d0ea3d0cffc69d25ce.jpg" alt="product" width="20%" />
        </dev>
        <div>
          <h3 id="productName-1">43 Piece dinner Set</h3>
          <div>
            ผลิตโดย:
            <span id="productBrand">CoolKidz</span>
          </div>
          <div>
            ราคา:
            <span id="productPrice-1">12.95 USD</span>
          </div>
          <div>
            จำนวน
            <input id="productQuantity" type="number" value="0" />
          </div>
          <div><Button id="addToCart" onClick={() => this.addToCart()}>เพิ่มไปยังตะกร้าสินค้า</Button></div>
        </div>
      </Container>
    )
  }
}
