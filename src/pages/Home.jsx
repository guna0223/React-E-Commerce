import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";


const fake_products =
    [
        {
            id: "1",
            title: "Yuhoo Wireless Headphones",
            img_src: "product-img-1.jpg",
            price: 3000,
            discount: 10, // 10% off
            offer: "Flat ₹300 Off",
            description: "High-quality wireless headphones with noise cancellation and 20 hours battery life."
        },
        {
            id: "2",
            title: "Zoho Smartwatch",
            img_src: "product-img-2.jpg",
            price: 4000,
            discount: 15,
            offer: "Buy 1 Get 1 Half Price",
            description: "Stylish smartwatch with fitness tracking, heart rate monitor, and message notifications."
        },
        {
            id: "3",
            title: "Yoho Bluetooth Speaker",
            img_src: "product-img-3.jpg",
            price: 3500,
            discount: 12,
            offer: "Flat ₹400 Off",
            description: "Portable Bluetooth speaker with rich bass and 10 hours of playback."
        },
        {
            id: "4",
            title: "Nova Laptop Backpack",
            img_src: "product-img-4.jpg",
            price: 2500,
            discount: 20,
            offer: "Limited Time Offer",
            description: "Durable and spacious backpack with multiple compartments for laptops and accessories."
        },
        {
            id: "5",
            title: "Luma LED Desk Lamp",
            img_src: "product-img-5.jpg",
            price: 1200,
            discount: 10,
            offer: "Flat ₹100 Off",
            description: "Energy-efficient LED desk lamp with adjustable brightness and touch controls."
        },
        {
            id: "6",
            title: "Aero Gaming Mouse",
            img_src: "product-img-6.jpg",
            price: 2200,
            discount: 15,
            offer: "Buy 1 Get 1 Free",
            description: "High precision gaming mouse with customizable DPI and RGB lighting."
        },
        {
            id: "7",
            title: "SkyFit Yoga Mat",
            img_src: "product-img-7.jpg",
            price: 800,
            discount: 5,
            offer: "Flat ₹50 Off",
            description: "Non-slip yoga mat with extra cushioning for comfort and support."
        },
        {
            id: "8",
            title: "Pulse Fitness Tracker",
            img_src: "product-img-8.jpg",
            price: 1800,
            discount: 10,
            offer: "Flat ₹200 Off",
            description: "Fitness tracker with step counting, sleep monitoring, and calorie tracking."
        },
        {
            id: "9",
            title: "Glide Electric Scooter",
            img_src: "product-img-9.jpg",
            price: 15000,
            discount: 8,
            offer: "Limited Stock Offer",
            description: "Compact electric scooter with a top speed of 25 km/h and 20 km range."
        },
        {
            id: "10",
            title: "Echo Smart Speaker",
            img_src: "product-img-10.jpg",
            price: 3200,
            discount: 12,
            offer: "Flat ₹400 Off",
            description: "Voice-controlled smart speaker with high-fidelity sound and smart home integration."
        }
    ];

const Home = () => {
    document.title = "homepage"
    return (
        <>
            <Carousel />
            <section className="row row-cols-1 row-cols-md-2 g-2 mx-2 mt-2">
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