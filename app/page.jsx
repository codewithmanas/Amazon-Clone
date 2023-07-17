import Banner from "@components/Banner";
import Header from "@components/Header";
import ProductFeed from "@components/ProductFeed";


export default async function Home() {

  const response = await  fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
      <div className="home bg-gray-100">
        {products[0].id}
        {products[0].title}
        <Header />

        <main className="max-w-screen-2xl mx-auto">
          {/* Banner Start */}
          <Banner />
          {/* Banner End */}


          {/* ProductFeed Start */}
          {/* <ProductFeed products={products} sampleprop = "Hello Guys" /> */}
          {/* ProductFeed End */}
          {products.map(product => {
            return (
              <p key={product.id}>{product.id} {product.title}</p>
            )
          })}
        </main>
      </div>
  )
}

// // Thought Note: Understanding Server Side Data Fetching in Page Router
// Below Methods are for Next Page Router

// First Way
// export async function getServerSideProps() {
//   const products = await fetchData();

//   return {props: products,
//   }
// }



// Second Way
// export async function getServerSideProps(context) {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     }
//   }
//   } catch (error) {
//     console.error(error);
//     // Handle error or return an error page
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// }

