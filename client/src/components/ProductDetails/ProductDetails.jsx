import { useParams } from "react-router-dom"

function ProductDetails() {

  const {id} = useParams()

  return (
    <h3>Product details - {id}</h3>
  )
}

export default ProductDetails