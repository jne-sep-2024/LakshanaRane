import { Link } from "react-router-dom";

const PRODUCTS=[
    {id: 'p1',title:'Product 1'},
    {id: 'p2',title:'Product 2'},
    {id: 'p3',title:'Product 3'},
]
function Products(){
    return(
        <div>
            <h2>Products page</h2>
            <ul style={{listStyle:'none'}} >

                {PRODUCTS.map((prod)=>{
                    return(
                        <li key={prod.id}>
                        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                    </li>
                    )
                })}
            {/* <li><Link to='/products/product-1'>Product 1</Link></li>
            <li><Link to='/products/product-2'>Product 2</Link></li>
            <li><Link to='/products/product-3'>Product 3</Link></li> */}

            </ul>
        </div>
    )
};
export default Products;    