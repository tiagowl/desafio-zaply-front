import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../Services/api';

export default function Main(){

    const [productsApi, setProducts] = React.useState([]);

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get('/products');
            setProducts(response.data);
         }

         fetch();
    }, []);

    const products = [
        { id: 70709795, image: "https://savegnago.vteximg.com.br/arquivos/ids/293238_2", name: "Borracha Escolar Faber Castell Super Soft", categories: "Bazar E Utilidades", price: 5.39, brand: "Faber Castell" },
        { id: 70709271, image: "https://savegnago.vteximg.com.br/arquivos/ids/296943_2", name: "Cereal Barra Linea 60g Cookies Cream", categories: "Mercearia", price: 4.99, brand: "Linea" },
        { id: 70712433, image: "https://savegnago.vteximg.com.br/arquivos/ids/268054_2", name: "Sobremesa Chandelle 200g Chantilly Caramelo", categories: "Laticínios", price: 4.99, brand: "Chandelle" },
        { id: 70705194, image: "https://savegnago.vteximg.com.br/arquivos/ids/276040_2", name: "Vagem Macarrao Organica Solo Vivo 300g", categories: "Hortifruti", price: 6.99, brand: "Solo Vivo" },
        { id: 70707050, image: "https://savegnago.vteximg.com.br/arquivos/ids/448210_2", name: "Tempero Smart Zero Sódio 48g Frango", categories: "Mercearia", price: 18.38, brand: "Smart" },
        { id: 70703001, image: "https://savegnago.vteximg.com.br/arquivos/ids/305299_2", name: "Amaciante Roupa Baby Soft 5l Toque Cuidado", categories: "Limpeza", price: 13.95, brand: "Baby Soft" },
        { id: 70714252, image: "https://savegnago.vteximg.com.br/arquivos/ids/270090_2", name: "Acendedor Alcool Solido Fiat Lux", categories: "Bazar E Utilidades", price: 11.49, brand: "Fiat Lux" },
        { id: 70710641, image: "https://savegnago.vteximg.com.br/arquivos/ids/291388_2", name: "Mostarda Kuhne 255g Levemente Picante", categories: "Mercearia", price: 18.68, brand: "Kuhne" },
    ]
    if(productsApi != "") return(
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title" >Products</h1>
                        </div>
                    </div>
                    <div className="row" >
                        {productsApi.map((product)=>(
                            <div className="product" >
                                <img src={product.image} className="product-img" />
                                <a href={`product/${productsApi.id}`} className="product-name" >{product.name}</a>
                                <p className="product-price" >R$ {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )

    else return(
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="title" >Products</h1>
                        </div>
                    </div>
                    <div className="row" >
                        {products.map((product,index)=>(
                            <div className="product" >
                                <img src={product.image} className="product-img" />
                                <a href={`/product/${index}`} className="product-name" >{product.name}</a>
                                <p className="product-price" >R$ {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}