

import express, { json } from "express";
import { connect, Schema, model } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";

config();
const app = express();
app.use(cors());
app.use(json({ limit: "10mb" }));

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed:", err));

const counterSchema = new Schema({
  userType: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 }
});
const Counter = model("Counter", counterSchema);

const generateSequentialId = async (userType) => {
  const prefix = userType === "farmer" ? "F" : "T";
  const counter = await Counter.findOneAndUpdate(
    { userType },
    { $inc: { count: 1 } },
    { new: true, upsert: true }
  );
  const number = String(counter.count).padStart(6, "0");
  return `${prefix}${number}`;
};

const farmerSchema = new Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  mobile: String,
  PAN: String,
  userId: { type: String, unique: true },
  profilePhoto: String,
  nickname: String,
  dob: String,
  gender: String,
  city: String,
  address: String,
});
const Farmer = model("Farmer", farmerSchema);

const traderSchema = new Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  mobile: String,
  PAN: String,
  GST: String,
  userId: { type: String, unique: true }
});
const Trader = model("Trader", traderSchema);

const itemSchema = new Schema({
  userId: { type: String, required: true },
  itemId: { type: String, required: true }, 
  productName: String,
  description: String,
  unit: String,
  quantity: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});
const Item = model("Item", itemSchema);

app.post("/register-farmer", async (req, res) => {
  try {
    const { fullname, email, pass, mobile, PAN } = req.body;
    const existingFarmer = await Farmer.findOne({ email });
    if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await hash(pass, 10);
    const farmerId = await generateSequentialId("farmer");

    const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN, userId: farmerId });
    await newFarmer.save();

    res.status(201).json({ message: "Farmer registered successfully", userId: farmerId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/register-trader", async (req, res) => {
  try {
    const { fullname, email, pass, mobile, PAN, GST } = req.body;
    const existingTrader = await Trader.findOne({ email });
    if (existingTrader) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await hash(pass, 10);
    const traderId = await generateSequentialId("trader");

    const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST, userId: traderId });
    await newTrader.save();

    res.status(201).json({ message: "Trader registered successfully", userId: traderId });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    let user;

    if (role === "farmer") {
      user = await Farmer.findOne({ email });
    } else if (role === "trader") {
      user = await Trader.findOne({ email });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role, userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token, userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/farmer/:userId", async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ userId: req.params.userId });
    if (!farmer) return res.status(404).json({ message: "Farmer not found" });
    res.json(farmer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.put("/farmer/:userId", async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ userId: req.params.userId });
    if (!farmer) return res.status(404).json({ message: "Farmer not found" });

    const fieldsToUpdate = ['nickname', 'dob', 'gender', 'city', 'address', 'profilePhoto'];
    fieldsToUpdate.forEach(field => {
      if (req.body[field] !== undefined) {
        farmer[field] = req.body[field];
      }
    });

    await farmer.save();
    res.json({ message: "Profile updated successfully", farmer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/add-item", async (req, res) => {
  try {
    const { userId, itemId, productName, description, unit, quantity, price } = req.body;

    if (!userId || !itemId || !productName || !description || !unit || !quantity || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Item({ userId, itemId, productName, description, unit, quantity, price });
    await newItem.save();

    res.status(201).json({ message: "Item added successfully", item: newItem });
  } catch (error) {
    console.error("Add item error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
