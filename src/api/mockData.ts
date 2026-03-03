export const SAMPLE_PRODUCTS = [
    {
        id: '1',
        name: 'Royal Emerald Ring',
        category: 'Rings',
        price: 4500,
        image_url: '/img/diamondring.jpeg',
        images: ['/img/diamondring.jpeg', '/img/r1.jpeg', '/img/r2.jpeg', '/img/r3.jpeg'],
        is_new: true,
        material: '18K Gold, Emerald'
    },
    {
        id: '2',
        name: 'Diamond Solitaire Necklace',
        category: 'Necklaces',
        price: 8900,
        image_url: '/img/jewellery.jpg',
        images: ['/img/jewellery.jpg', '/img/n1.jpeg', '/img/bridal.jpeg', '/img/gemstone.jpg'],
        material: 'Platinum, Diamond'
    },
    {
        id: '3',
        name: 'Sapphire Elegance Earrings',
        category: 'Earrings',
        price: 3200,
        image_url: '/img/earring.jpeg',
        images: ['/img/earring.jpeg', '/img/rounde1.jpeg', '/img/rounde2.jpeg'],
        material: 'White Gold, Sapphire'
    },
    {
        id: '4',
        name: 'Golden Heritage Bangle',
        category: 'Bracelets',
        price: 5600,
        image_url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800', '/img/img7.png', '/img/img1.png', '/img/img2.png'],
        is_new: true,
        material: '22K Gold'
    },
    {
        id: '5',
        name: 'Diamond Eternity Ring',
        category: 'Rings',
        price: 3800,
        image_url: '/img/r1.jpeg',
        images: ['/img/r1.jpeg', '/img/r2.jpeg', '/img/r3.jpeg', '/img/r4.jpeg'],
        is_new: true,
        material: '14K White Gold, Diamonds'
    },
    {
        id: '6',
        name: 'Rose Gold Minimalist Band',
        category: 'Rings',
        price: 1200,
        image_url: '/img/r2.jpeg',
        images: ['/img/r2.jpeg', '/img/r3.jpeg', '/img/r4.jpeg', '/img/r5.jpeg'],
        material: '18K Rose Gold'
    },
    {
        id: '7',
        name: 'Classic Solitaire Diamond Ring',
        category: 'Rings',
        price: 5200,
        image_url: '/img/r3.jpeg',
        images: ['/img/r3.jpeg', '/img/r4.jpeg', '/img/r5.jpeg', '/img/ringp.jpeg'],
        material: 'Platinum, Diamond'
    },
    {
        id: '8',
        name: 'Blush Pink Diamond Ring',
        category: 'Rings',
        price: 4900,
        image_url: '/img/ringp.jpeg',
        images: ['/img/ringp.jpeg', '/img/r4.jpeg', '/img/r5.jpeg', '/img/r1.jpeg'],
        is_new: true,
        material: '18K Rose Gold, Pink Diamond'
    },
    {
        id: '9',
        name: 'Gem Mine Sizing Guide',
        category: 'Accessories',
        price: 0,
        image_url: '/img/ringSize.jpg',
        images: ['/img/ringSize.jpg', '/img/clean.jpg', '/img/gemstone.jpg'],
        material: 'Reference Tool'
    },
    {
        id: '10',
        name: 'Vintage Emerald Ring',
        category: 'Rings',
        price: 4200,
        image_url: '/img/r4.jpeg',
        images: ['/img/r4.jpeg', '/img/r5.jpeg', '/img/r1.jpeg', '/img/r2.jpeg'],
        is_new: true,
        material: '18K Yellow Gold, Emerald'
    },
    {
        id: '11',
        name: 'Sapphire Halo Ring',
        category: 'Rings',
        price: 3500,
        image_url: '/img/r5.jpeg',
        images: ['/img/r5.jpeg', '/img/r1.jpeg', '/img/r2.jpeg', '/img/r3.jpeg'],
        material: 'White Gold, Sapphire'
    },
    {
        id: '12',
        name: 'Diamond Drop Earrings',
        category: 'Earrings',
        price: 2800,
        image_url: '/img/e1.jpeg',
        images: ['/img/e1.jpeg', '/img/earring.jpeg', '/img/img5.jpeg', '/img/img6.jpeg'],
        is_new: true,
        material: '14K Gold, Diamonds'
    },
    {
        id: '13',
        name: 'Elegant Pearl Necklace',
        category: 'Necklaces',
        price: 1900,
        image_url: '/img/n1.jpeg',
        images: ['/img/n1.jpeg', '/img/jewellery.jpg', '/img/bridal.jpeg', '/img/gemstone.jpg'],
        material: 'Silver, Freshwater Pearl'
    },
    {
        id: '14',
        name: 'Sapphire Elegance Earrings',
        category: 'Earrings',
        price: 3200,
        image_url: '/img/dote.jpeg',
        images: ['/img/dote.jpeg', '/img/rounde1.jpeg', '/img/rounde2.jpeg'],
        material: 'White Gold, Sapphire'
    },
];

export const INITIAL_CART_ITEMS = [
    {
        id: 'c1',
        product_id: '1',
        quantity: 1,
        user_email: 'user@example.com'
    },
    {
        id: 'c2',
        product_id: '2',
        quantity: 1,
        user_email: 'user@example.com'
    }
];

export const MOCK_USER = {
    email: 'user@example.com',
    name: 'Jane Doe'
};
