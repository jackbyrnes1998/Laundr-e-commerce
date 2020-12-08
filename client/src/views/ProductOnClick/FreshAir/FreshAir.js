import React, {useState} from 'react';
// import "../../Product/Product.scss"
// import "../../ProductOnScroll/ProductOnScroll.scss"
import "../ProductOnClick.scss"
import "../../../functions/ParallaxEffect"

const FreshAir = (props) => {
    const [productToAdd, setProductToAdd] = useState([{
        name: props.productName,
        price: 18.99,
        productID: props.productID
    }])

    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [cartSize, setCartSize] = useState(1)

    const addToCart = () => {
        setIsCartEmpty(false)

        try {
            const res = fetch("http://localhost:5000/api/cart/" + props.productID + "/" + "1", {
              method: "POST",
              body: JSON.stringify({
                productId: props.productID,
                quantity: 1,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            console.log(res);
            // fetchCart();
            // alert("Item Incremented");
          } catch (err) {
            console.log(err);
          }
    }
    const increaseQty = () => {
        setCartSize(cartSize + 1)

        try {
            const res = fetch("http://localhost:5000/:productId/:quantity", {
              method: "POST",
              body: JSON.stringify({
                productId: props.productID,
                quantity: 1,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            console.log(res);
            // fetchCart();
            // alert("Item Incremented");
          } catch (err) {
            console.log(err);
          }
    }
    const decreaseQty = () => {
        setCartSize(cartSize - 1)
        if(cartSize === 0) {
            setIsCartEmpty(true)
        }
    }

    return (
        <div className="freshAir">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>Fresh Air</h1>
                    <h2>$18.99</h2>
                    {isCartEmpty
                        ? <button onClick={addToCart} className="btn btn-md btn-info">Add to Cart</button>
                        : <div>
                                <button onClick={decreaseQty} className="btn btn-danger">-</button>
                                {cartSize}
                                <button onClick={increaseQty} className="btn btn-danger">+</button>
                          </div>
                    }
                    <a className="btn btn-danger" href="/products/#LPFA">Back</a>
                </div>
            </div>
        </div>
    )
}

export default FreshAir