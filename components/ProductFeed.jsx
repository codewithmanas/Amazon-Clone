
function ProductFeed({products}) {
  return (
    <div>
        <h1>Product Feed</h1>
        {products.map(item => (
          <p key={item.id}>{item.id}.{"  "}{item.title}</p>
        ))}
    </div>
  )
}

export default ProductFeed