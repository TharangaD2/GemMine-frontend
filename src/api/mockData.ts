export const SAMPLE_PRODUCTS = [
    {
        id: '1',
        name: 'Royal Emerald Ring',
        category: 'Rings',
        price: 4500,
        image_url: '/img/ring.jpg',
        is_new: true,
        material: '18K Gold, Emerald'
    },
    {
        id: '2',
        name: 'Diamond Solitaire Necklace',
        category: 'Necklaces',
        price: 8900,
        image_url: '/img/jewellery.jpg',
        material: 'Platinum, Diamond'
    },
    {
        id: '3',
        name: 'Sapphire Elegance Earrings',
        category: 'Earrings',
        price: 3200,
        image_url: '/img/earring.jpeg',
        material: 'White Gold, Sapphire'
    },
    {
        id: '4',
        name: 'Golden Heritage Bangle',
        category: 'Bracelets',
        price: 5600,
        image_url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        is_new: true,
        material: '22K Gold'
    }
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
