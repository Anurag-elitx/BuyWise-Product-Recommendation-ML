const mongoose = require('mongoose');
const Product = require('./models/ProductModel');

const mongoURI = "mongodb://localhost:27017/Foode1?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const dummyProducts = [
    // Category 1: Vegetables
    { title: "Potato", description: "Fresh organic potatoes, perfect for curries and fries", price: 30, category: "1", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Tomato", description: "Juicy red tomatoes, farm fresh and ripe", price: 40, category: "1", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Onion", description: "Premium quality onions, essential for every kitchen", price: 35, category: "1", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Cabbage", description: "Fresh green cabbage, crispy and nutritious", price: 25, category: "1", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Carrot", description: "Crunchy orange carrots, rich in vitamins", price: 45, category: "1", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 2: Fruits
    { title: "Apple", description: "Crisp Shimla apples, sweet and delicious", price: 150, category: "2", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Banana", description: "Ripe yellow bananas, naturally sweet", price: 40, category: "2", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Mango", description: "Alphonso mangoes, the king of fruits", price: 200, category: "2", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Grapes", description: "Seedless green grapes, fresh and juicy", price: 80, category: "2", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Orange", description: "Nagpur oranges, tangy and vitamin C rich", price: 60, category: "2", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 3: Spices
    { title: "Turmeric Powder", description: "Pure organic turmeric powder, vibrant color", price: 55, category: "3", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Cumin Seeds", description: "Aromatic cumin seeds for authentic flavor", price: 70, category: "3", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Coriander Powder", description: "Freshly ground coriander, fragrant and pure", price: 45, category: "3", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Red Chilli Powder", description: "Kashmiri red chilli, perfect heat and color", price: 90, category: "3", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Black Pepper", description: "Whole black peppercorns, bold and spicy", price: 120, category: "3", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 4: Snacks & Beverages
    { title: "Lays Classic Chips", description: "Crispy salted potato chips, party pack", price: 30, category: "4", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Marie Gold Biscuits", description: "Crunchy tea-time biscuits, family pack", price: 35, category: "4", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Butter Popcorn", description: "Microwave butter popcorn, movie night special", price: 50, category: "4", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Nachos Salsa", description: "Crunchy nachos with tangy salsa dip", price: 75, category: "4", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Choco Chip Cookies", description: "Premium chocolate chip cookies, freshly baked", price: 60, category: "4", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 5: Dairy
    { title: "Full Cream Milk", description: "Fresh full cream milk, 1 litre pack", price: 60, category: "5", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Amul Butter", description: "Creamy salted butter, 500g pack", price: 250, category: "5", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Cheddar Cheese", description: "Rich cheddar cheese slices, 200g", price: 180, category: "5", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Greek Yogurt", description: "Thick and creamy Greek yogurt, plain", price: 90, category: "5", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Fresh Paneer", description: "Soft and fresh cottage cheese, 200g", price: 100, category: "5", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 6: Dry Fruits
    { title: "Almonds", description: "California almonds, crunchy and nutritious", price: 350, category: "6", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Cashews", description: "Whole cashew nuts, premium W320 grade", price: 400, category: "6", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Walnuts", description: "Chilean walnuts, brain-boosting superfood", price: 380, category: "6", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Raisins", description: "Golden seedless raisins, naturally sweet", price: 150, category: "6", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Pistachios", description: "Roasted and salted pistachios, premium", price: 450, category: "6", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 7: Beverages
    { title: "Coca Cola", description: "Classic Coca Cola, chilled 750ml bottle", price: 40, category: "7", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Mango Juice", description: "Real mango juice, no added sugar, 1L", price: 80, category: "7", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Green Tea", description: "Organic green tea bags, 25 sachets", price: 150, category: "7", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Instant Coffee", description: "Nescafe classic instant coffee, 100g jar", price: 200, category: "7", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Fresh Lemonade", description: "Ready to drink lemonade, refreshing 500ml", price: 35, category: "7", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },

    // Category 8: Cooking & Baking
    { title: "Wheat Flour", description: "Premium whole wheat flour (atta), 5kg pack", price: 220, category: "8", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Sugar", description: "Refined white sugar, 1kg pack", price: 45, category: "8", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Baking Powder", description: "Double acting baking powder, 100g", price: 50, category: "8", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Extra Virgin Olive Oil", description: "Cold pressed olive oil, 500ml bottle", price: 450, category: "8", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
    { title: "Vanilla Extract", description: "Pure vanilla extract for baking, 60ml", price: 120, category: "8", countInStock: 50, delivery: 1, image: ["uploads/placeholder.jpg"] },
];

async function seedDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        // Clear existing products
        const deleted = await Product.deleteMany({});
        console.log(`Cleared ${deleted.deletedCount} existing products`);

        // Insert dummy products
        const result = await Product.insertMany(dummyProducts);
        console.log(`Successfully inserted ${result.length} dummy products!`);

        console.log("\nProducts by category:");
        const categories = {
            "1": "Vegetables", "2": "Fruits", "3": "Spices",
            "4": "Snacks & Beverages", "5": "Dairy", "6": "Dry Fruits",
            "7": "Beverages", "8": "Cooking & Baking"
        };
        for (const [code, name] of Object.entries(categories)) {
            const count = result.filter(p => p.category === code).length;
            console.log(`  ${name} (cat ${code}): ${count} products`);
        }

        await mongoose.disconnect();
        console.log("\nDone! Database seeded successfully.");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error.message);
        process.exit(1);
    }
}

seedDatabase();
