import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";


const fake_products = [
    {
        id: "1",
        title: "Yuhoo",
        img_src: "product-img-1.jpg",
        price: 3000
    },
    {
        id: "2",
        title: "zoho",
        img_src: "product-img-2.jpg",
        price: 4000
    },
    {
        id: "3",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    },
    {
        id: "4 ",
        title: "yoho",
        img_src: "product-img-3.jpg",
        price: 4000
    }
]

const Home = () => {
    return (
        <>
            <Carousel />
            <section className="row row-cols-1 row-cols-md-2 g-2 mx-1 mt-2">
                {
                    fake_products.map((prod) => {
                        return <ProductCard key={prod.id} product={prod} />
                    })
                }

            </section>

        </>

    )
}

export default Home;