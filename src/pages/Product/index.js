import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../Services/api';
import { useParams } from 'react-router-dom';

export default function Product(){

    const [product, setProduct] = React.useState([]);
    const {id} = useParams();

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
         }

         fetch();
    }, []);

    const products = [
        { id: 70709795, image: "https://savegnago.vteximg.com.br/arquivos/ids/293238_2", name: "Borracha Escolar Faber Castell Super Soft", categories: "Bazar E Utilidades", price: 5.39, brand: "Faber Castell" }
    ]

    if(product != "") return(
        <>
            <main>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title" >Product</h1>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-7 card" style={{marginRight: "15px"}} >
                            <img src={product[0].image} className="product-img-item" alt="" />
                        </div>
                        <div className="col-md-4 card" >
                                <h1 className="product-name-item" >{product[0].name}</h1>
                                <p className="product-brand-item" >{product[0].brand}</p>
                            <div className="line" style={{display: "flex", justifyContent: "space-between"}}>
                                <p className="product-price-item" >R${product[0].price}</p>
                                <a href={`product/editar/${product[0].id}`} className="btn btn-dark" style={{width: "100px",height: "45px", marginTop: "250px", display: "flex", alignItems: "center", justifyContent: "center"}} >Editar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

    else return(
        <>
            <main>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title" >Product</h1>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-7 card" style={{marginRight: "15px"}} >
                            <img src={products[0].image} className="product-img-item" alt="" />
                        </div>
                        <div className="col-md-4 card" >
                                <h1 className="product-name-item" >{products[0].name}</h1>
                                <p className="product-brand-item" >{products[0].brand}</p>
                            <div className="line" style={{display: "flex", justifyContent: "space-between"}}>
                                <p className="product-price-item" >R${products[0].price}</p>
                                <a href="/product/editar/1" className="btn btn-dark" style={{width: "100px",height: "45px", marginTop: "250px", display: "flex", alignItems: "center", justifyContent: "center"}} >Editar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}