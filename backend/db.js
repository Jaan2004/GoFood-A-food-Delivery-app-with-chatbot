const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood@cluster0.tkrnb.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");

    // Create a mongoose model for FoodItem
    const foodItemSchema = new mongoose.Schema({}, { collection: 'food_items' });
    const FoodItem = mongoose.model('FoodItem', foodItemSchema);
    const foodData = await FoodItem.find({}).exec();
    global.food_items = foodData;

    // Create a mongoose model for Restaurant
    const restaurantSchema = new mongoose.Schema({}, { collection: 'restaurants' });
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurantData = await Restaurant.find({}).exec();
    global.restaurants = restaurantData;

  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}

module.exports = connectDB;