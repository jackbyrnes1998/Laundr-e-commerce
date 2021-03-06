import React, {useState} from 'react';
import $ from 'jquery';
import "./EucalyptusTeaTree.scss"
import "../../../functions/ParallaxEffect"

const EucalyptusTeaTree = (props) => {

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
            const res = fetch("http://localhost:5000/api/cart/" + props.productID + "/" + "1", {
                method: "POST",
                body: JSON.stringify({
                    productId: props.productID,
                    quantity: 1,
                }),
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
        if (cartSize === 1) {
            setIsCartEmpty(true)
        }
        
        try {
          const res = fetch("http://localhost:5000/api/cart/" + props.productID + "/" + "1", {
            method: "DELETE",
            body: JSON.stringify({
              productId: props.productID,
              quantity: 1,
            }),
          });
          console.log(res);
          // fetchCart();
          // alert("Item Incremented");
        } catch (err) {
          console.log(err);
        }
    }
    
    return (
        <div className="eucalyptus">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionEucalyptus bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionEucalyptus" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo">
                        <h1 className='display-2'>Eucalyptus Tea Tree</h1>
                        <h2>$18.99</h2>
                        <p>A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and
                            having a “me day.”</p>
                        <br />
                        This fragrance has hints of:
                        <ul>
                            <li>Tea Tree and Eucalyptus</li>
                            <li>Natural Herbs</li>
                            <li>Bergamot Orange</li>
                        </ul>

                        {isCartEmpty
                            ? <button onClick={addToCart} className="btn btn-md btn-info">Add to Cart</button>
                            : <div>
                                <button onClick={decreaseQty} className="btn btn-danger">-</button>
                                {cartSize}
                                <button onClick={increaseQty} className="btn btn-danger">+</button>
                            </div>
                        }
                        <button className="btn btn-light">
                            <a href="/products/#5fd002cb160ed44708479034">Back</a>
                        </button>
                    </div>
                    <div className="col productInfo">
                        <h1>
                            This fragrance has hints of:
                            <ul>
                                <li>Tea Tree and Eucalyptus</li>
                                <li>Natural Herbs</li>
                                <li>Bergamot Orange</li>
                            </ul>
                        </h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EucalyptusTeaTree