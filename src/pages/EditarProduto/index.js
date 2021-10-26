import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../Services/api';
import { useParams } from 'react-router-dom';

export default function EditarProduto(){

    const [nome, setNome] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [preco, setPreco] = React.useState(0);
    const [marca, setMarca] = React.useState("");

    const [product, setProduct] = React.useState([]);
    const {id} = useParams();

    React.useEffect(()=>{
        async function fetch(){
        
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
         }

         fetch();
    }, []);

    async function updateData(){
        const res = await api.put(`/products/${id}`, { nome, categoria, preco, marca });
    }

    if(product != "")return(
        <>
        <main>
            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title" >Editar</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6 card" style={{height: "300px", justifyContent: "center"}}>
                        <form className="product-form" >
                            <input className="form-control form-margin" value={product[0].name} onChange={(e)=>setNome(e.target.value)} type="text" placeholder="Nome"/>
                            <input className="form-control form-margin" value={product[0].categories} onChange={(e)=>setCategoria(e.target.value)} type="text" placeholder="Categoria" />
                            <input className="form-control form-margin" value={product[0].price} onChange={(e)=>setPreco(e.target.value)} type="text" placeholder="Preço" />
                            <input className="form-control form-margin" value={product[0].brand} onChange={(e)=>setMarca(e.target.value)} style={{marginBottom: "20px"}} type="text" placeholder="Marca"/>
                            <button onClick={updateData} className="btn btn-dark" >Editar</button>
                        </form>
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
                            <h1 className="title" >Editar</h1>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-6 card" style={{height: "300px", justifyContent: "center"}}>
                            <form className="product-form" >
                                <input className="form-control form-margin"  type="text" placeholder="Nome"/>
                                <input className="form-control form-margin"  type="text" placeholder="Categoria" />
                                <input className="form-control form-margin"  type="text" placeholder="Preço" />
                                <input className="form-control form-margin"  style={{marginBottom: "20px"}} type="text" placeholder="Marca"/>
                                <button className="btn btn-dark" >Editar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}