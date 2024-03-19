import Search from "./component/Search";
import TableComp from "./component/Table";

const Product = () => {
    return (
        <div>
            <Search></Search>
           <div className="mt-5">
           <TableComp />
           </div>
        </div>
    );
}

export default Product;