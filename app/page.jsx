import Banner from "@components/Banner";
import Header from "@components/Header";
import ProductFeed from "@components/ProductFeed";


export default async function Home() {

  const response = await  fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
      <div className="home bg-gray-100">
        <Header />

        <main className="max-w-screen-2xl mx-auto">
          {/* Banner Start */}
          <Banner />
          {/* Banner End */}


          {/* ProductFeed Start */}
          <ProductFeed products={products} />
          {/* ProductFeed End */}
        </main>
      </div>
  )
}



