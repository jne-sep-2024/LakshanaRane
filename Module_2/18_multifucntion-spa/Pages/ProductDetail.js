import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailPage(){
    const params=useParams();
    // params.productId;            //yeha pr wohi name ayega jo dyanamic url k liye app.js m likha hai :productId in this case

    return(
        <div>
            <h1>Product detail Page</h1>
            <p>{params.productId}</p>
            <p><Link to='..'>Back</Link></p>
        </div>
    )

}
export default ProductDetailPage;