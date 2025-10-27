import WomenCard from "../components/women-section/WomenCard";

const women_products = [
    {
        id: "1",
        title: "Elegance Floral Maxi Dress",
        img_src: "women-product-1.jpg",
        price: 1899,
        discount: 20,
        offer: "Flat ₹380 Off",
        description: "Beautiful floral printed maxi dress made of soft chiffon fabric, perfect for parties and outings."
    },
    {
        id: "2",
        title: "GlowMate Matte Lipstick Set",
        img_src: "women-product-2.jpg",
        price: 999,
        discount: 15,
        offer: "Buy 2 Get 1 Free",
        description: "Set of long-lasting matte lipsticks with rich pigmentation and smooth finish."
    },
    {
        id: "3",
        title: "Luxe Pearl Earrings",
        img_src: "women-product-3.jpg",
        price: 749,
        discount: 10,
        offer: "Flat ₹75 Off",
        description: "Elegant pearl stud earrings that add a touch of class to every outfit."
    },
    {
        id: "4",
        title: "Velvet Touch Foundation",
        img_src: "women-product-4.jpg",
        price: 1399,
        discount: 18,
        offer: "Flat ₹250 Off",
        description: "Lightweight liquid foundation that gives a flawless matte finish and all-day coverage."
    },
    {
        id: "5",
        title: "Charm Leather Handbag",
        img_src: "women-product-5.jpg",
        price: 2899,
        discount: 25,
        offer: "Flat ₹725 Off",
        description: "Trendy leather handbag with spacious compartments and premium metal detailing."
    },
    {
        id: "6",
        title: "Silk Comfort Nightwear Set",
        img_src: "women-product-6.jpg",
        price: 1599,
        discount: 12,
        offer: "Flat ₹190 Off",
        description: "Soft and breathable silk nightwear set that ensures comfort and style while you sleep."
    },
    {
        id: "7",
        title: "Radiant Glow Skincare Kit",
        img_src: "women-product-7.jpg",
        price: 2499,
        discount: 20,
        offer: "Flat ₹500 Off",
        description: "Complete skincare kit including cleanser, toner, and moisturizer for glowing skin."
    },
    {
        id: "8",
        title: "Trendy Sunglasses for Women",
        img_src: "women-product-8.jpg",
        price: 1299,
        discount: 10,
        offer: "Flat ₹130 Off",
        description: "UV-protected stylish sunglasses that enhance your look and protect your eyes."
    },
    {
        id: "9",
        title: "Velora High-Heel Sandals",
        img_src: "women-product-9.jpg",
        price: 1999,
        discount: 22,
        offer: "Flat ₹440 Off",
        description: "Chic high-heel sandals perfect for parties and formal occasions."
    },
    {
        id: "10",
        title: "Rose Essence Perfume",
        img_src: "women-product-10.jpg",
        price: 2299,
        discount: 15,
        offer: "Flat ₹345 Off",
        description: "Long-lasting floral fragrance with hints of rose and jasmine for an elegant touch."
    },
    {
        id: "11",
        title: "Classic Denim Jacket",
        img_src: "women-product-11.jpg",
        price: 2499,
        discount: 18,
        offer: "Flat ₹450 Off",
        description: "Trendy denim jacket with a slim fit design, perfect for casual wear."
    },
    {
        id: "12",
        title: "Crystal Charm Bracelet",
        img_src: "women-product-12.jpg",
        price: 899,
        discount: 10,
        offer: "Flat ₹90 Off",
        description: "Delicate bracelet with shining crystals and gold-plated chain."
    },
    {
        id: "13",
        title: "Velvet Luxe Lip Gloss",
        img_src: "women-product-13.jpg",
        price: 699,
        discount: 8,
        offer: "Flat ₹50 Off",
        description: "Non-sticky lip gloss for a glossy, hydrated finish and long-lasting shine."
    },
    {
        id: "14",
        title: "Grace Fit Kurti Set",
        img_src: "women-product-14.jpg",
        price: 1799,
        discount: 20,
        offer: "Flat ₹360 Off",
        description: "Comfortable cotton kurti set with beautiful embroidery and soft fabric."
    },
    {
        id: "15",
        title: "Pure Radiance Face Serum",
        img_src: "women-product-15.jpg",
        price: 1349,
        discount: 12,
        offer: "Flat ₹160 Off",
        description: "Vitamin C infused face serum for glowing and youthful skin."
    },
    {
        id: "16",
        title: "Comfy Trend Sneakers",
        img_src: "women-product-16.jpg",
        price: 2199,
        discount: 25,
        offer: "Flat ₹550 Off",
        description: "Lightweight and stylish sneakers suitable for daily casual wear."
    },
    {
        id: "17",
        title: "Beauty Bloom Eye Shadow Palette",
        img_src: "women-product-17.jpg",
        price: 1199,
        discount: 15,
        offer: "Flat ₹180 Off",
        description: "Vibrant 12-shade eyeshadow palette perfect for bold and subtle looks."
    },
    {
        id: "18",
        title: "Luxury Spa Bath Set",
        img_src: "women-product-18.jpg",
        price: 1899,
        discount: 18,
        offer: "Flat ₹340 Off",
        description: "Relaxing bath set with bath salts, body wash, and essential oils."
    },
    {
        id: "19",
        title: "Elegant Hair Straightener",
        img_src: "women-product-19.jpg",
        price: 2599,
        discount: 22,
        offer: "Flat ₹570 Off",
        description: "Professional ceramic straightener that smoothens and shines your hair instantly."
    },
    {
        id: "20",
        title: "BlushBerry Nail Polish Set",
        img_src: "women-product-20.jpg",
        price: 899,
        discount: 10,
        offer: "Flat ₹90 Off",
        description: "Set of 5 premium nail polishes with vibrant colors and glossy finish."
    },
    {
        id: "21",
        title: "Diamond Cut Wristwatch",
        img_src: "women-product-21.jpg",
        price: 3199,
        discount: 25,
        offer: "Flat ₹800 Off",
        description: "Stylish analog wristwatch with a diamond-inspired glass design and leather strap."
    },
    {
        id: "22",
        title: "Soft Touch Cashmere Scarf",
        img_src: "women-product-22.jpg",
        price: 1599,
        discount: 20,
        offer: "Flat ₹320 Off",
        description: "Luxurious cashmere scarf with a soft texture and elegant pattern."
    }
];



const Women = () => {
    return (
        <>
            <section className="row row-cols-1 row-cols-md-2 g-2 mx-2 mt-2">
                {
                    women_products.map((product) => {
                        return <WomenCard key={product.id} products={product} />
                    })
                }

            </section>
        </>
    )

}
export default Women