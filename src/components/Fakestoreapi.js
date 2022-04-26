import { React, useEffect, useState } from "react";
import { Panel } from "rsuite";

function Fakestoreapi() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        products.map((item) => (
          <div key={item.id}>
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 240 }}
            >
              <img src={item.image} height="240" />
              <Panel header={item.title}>
                <p>{item.description}</p>
              </Panel>
            </Panel>
          </div>
        ))
      )}
    </div>
  );
}

export default Fakestoreapi;
