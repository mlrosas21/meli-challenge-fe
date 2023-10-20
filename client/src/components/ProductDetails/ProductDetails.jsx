import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "@service/items"

function ProductDetails() {
  const {id} = useParams()

  useEffect(()=>{
    getItem(id)
  },[id])

  return (
    <h3>Product details - {id}</h3>
  )
}

export default ProductDetails