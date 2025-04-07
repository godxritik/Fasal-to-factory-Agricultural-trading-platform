// import express, { application, json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash } from "bcryptjs";
// import axios from "axios";


// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String
// });

// // Farmer Model
// const Farmer = model("Farmer", farmerSchema);

// //Trader Schema
// const traderSchema = new Schema({
//   fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST:String
// })

// // Trader Model 
// const Trader = model("Trader",traderSchema);


// // Trader Registration Route (Without PAN Verification)
// app.post("/register-trader", async (req, res) => {
//   try {
//       const { fullname, email, pass, mobile, PAN, GST } = req.body;

//       // Check if email already exists
//       const existingTrader = await Trader.findOne({ email });
//       if (existingTrader) {
//           return res.status(400).json({ message: "Email already registered" });
//       }

//       // Save Trader in MongoDB
//       const newTrader = new Trader({ fullname, email, password: pass, mobile, PAN, GST });
//       await newTrader.save();

//       res.status(201).json({ message: "Trader registered successfully" });
//   } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ message: "Server Error" });
//   }
// });


// // Register Route
// app.post("/register-farmer", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN } = req.body;

//         // Check if email already exists
//         const existingFarmer = await Farmer.findOne({ email });
//         if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

//         // Hash Password
//         const hashedPassword = await hash(pass, 10);
//         const hashedPAN = await hash(PAN,10);

//         // Save to Database
//         const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN : hashedPAN });
//         await newFarmer.save();

//         res.status(201).json({ message: "Registration successful" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String
// });
// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST: String
// });
// const Trader = model("Trader", traderSchema);

// // Trader Registration Route
// app.post("/register-trader", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN, GST } = req.body;

//         const existingTrader = await Trader.findOne({ email });
//         if (existingTrader) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST });
//         await newTrader.save();

//         res.status(201).json({ message: "Trader registered successfully" });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Farmer Registration Route
// app.post("/register-farmer", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN } = req.body;

//         const existingFarmer = await Farmer.findOne({ email });
//         if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN });
//         await newFarmer.save();

//         res.status(201).json({ message: "Farmer registered successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Login Route (for both Farmers and Traders)
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         let user;

//         if (role === "farmer") {
//             user = await Farmer.findOne({ email });
//         } else if (role === "trader") {
//             user = await Trader.findOne({ email });
//         } else {
//             return res.status(400).json({ message: "Invalid role" });
//         }

//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Counter Schema (for ID tracking)
// const counterSchema = new Schema({
//     userType: { type: String, required: true, unique: true },
//     count: { type: Number, default: 0 }
// });
// const Counter = model("Counter", counterSchema);

// // Helper function to generate sequential userId
// const generateSequentialId = async (userType) => {
//     const prefix = userType === "farmer" ? "F" : "T";

//     const counter = await Counter.findOneAndUpdate(
//         { userType },
//         { $inc: { count: 1 } },
//         { new: true, upsert: true }
//     );

//     const number = String(counter.count).padStart(6, "0");
//     return `${prefix}${number}`;
// };

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     userId: { type: String, unique: true } // F000001
// });
// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST: String,
//     userId: { type: String, unique: true } // T000001
// });
// const Trader = model("Trader", traderSchema);

// // Trader Registration Route
// app.post("/register-trader", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN, GST } = req.body;

//         const existingTrader = await Trader.findOne({ email });
//         if (existingTrader) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const traderId = await generateSequentialId("trader");

//         const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST, userId: traderId });
//         await newTrader.save();

//         res.status(201).json({ message: "Trader registered successfully", userId: traderId });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Farmer Registration Route
// app.post("/register-farmer", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN } = req.body;

//         const existingFarmer = await Farmer.findOne({ email });
//         if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const farmerId = await generateSequentialId("farmer");

//         const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN, userId: farmerId });
//         await newFarmer.save();

//         res.status(201).json({ message: "Farmer registered successfully", userId: farmerId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Login Route (for both Farmers and Traders)
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         let user;

//         if (role === "farmer") {
//             user = await Farmer.findOne({ email });
//         } else if (role === "trader") {
//             user = await Trader.findOne({ email });
//         } else {
//             return res.status(400).json({ message: "Invalid role" });
//         }

//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Counter Schema (for ID tracking)
// const counterSchema = new Schema({
//     userType: { type: String, required: true, unique: true },
//     count: { type: Number, default: 0 }
// });
// const Counter = model("Counter", counterSchema);

// // Helper function to generate sequential userId
// const generateSequentialId = async (userType) => {
//     const prefix = userType === "farmer" ? "F" : "T";

//     const counter = await Counter.findOneAndUpdate(
//         { userType },
//         { $inc: { count: 1 } },
//         { new: true, upsert: true }
//     );

//     const number = String(counter.count).padStart(6, "0");
//     return `${prefix}${number}`;
// };

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     userId: { type: String, unique: true }
// });
// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST: String,
//     userId: { type: String, unique: true }
// });
// const Trader = model("Trader", traderSchema);

// // Trader Registration Route
// app.post("/register-trader", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN, GST } = req.body;

//         if (await Trader.findOne({ email })) {
//             return res.status(400).json({ message: "Email already registered" });
//         }

//         const hashedPassword = await hash(pass, 10);
//         const traderId = await generateSequentialId("trader");

//         const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST, userId: traderId });
//         await newTrader.save();

//         res.status(201).json({ message: "Trader registered successfully", userId: traderId });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Farmer Registration Route
// app.post("/register-farmer", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN } = req.body;

//         if (await Farmer.findOne({ email })) {
//             return res.status(400).json({ message: "Email already registered" });
//         }

//         const hashedPassword = await hash(pass, 10);
//         const farmerId = await generateSequentialId("farmer");

//         const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN, userId: farmerId });
//         await newFarmer.save();

//         res.status(201).json({ message: "Farmer registered successfully", userId: farmerId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Login Route
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         let user = role === "farmer" ? await Farmer.findOne({ email }) : await Trader.findOne({ email });

//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token, userId: user.userId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Counter Schema (for ID tracking)
// const counterSchema = new Schema({
//     userType: { type: String, required: true, unique: true },
//     count: { type: Number, default: 0 }
// });
// const Counter = model("Counter", counterSchema);

// // Helper function to generate sequential userId
// const generateSequentialId = async (userType) => {
//     const prefix = userType === "farmer" ? "F" : "T";

//     const counter = await Counter.findOneAndUpdate(
//         { userType },
//         { $inc: { count: 1 } },
//         { new: true, upsert: true }
//     );

//     return `${prefix}${String(counter.count).padStart(6, "0")}`;
// };

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     userId: { type: String, unique: true }
// });
// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST: String,
//     userId: { type: String, unique: true }
// });
// const Trader = model("Trader", traderSchema);

// // Login Route
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         const user = role === "farmer" ? await Farmer.findOne({ email }) : await Trader.findOne({ email });

//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token, userId: user.userId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Load environment variables
// config();

// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error("MongoDB Connection Failed:", err));

// // Counter Schema (for ID tracking)
// const counterSchema = new Schema({
//     userType: { type: String, required: true, unique: true },
//     count: { type: Number, default: 0 }
// });
// const Counter = model("Counter", counterSchema);

// // Helper function to generate sequential userId
// const generateSequentialId = async (userType) => {
//     const prefix = userType === "farmer" ? "F" : "T";

//     const counter = await Counter.findOneAndUpdate(
//         { userType },
//         { $inc: { count: 1 } },
//         { new: true, upsert: true }
//     );

//     const number = String(counter.count).padStart(6, "0");
//     return `${prefix}${number}`;
// };

// // Farmer Schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     userId: { type: String, unique: true } // F000001
// });
// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     GST: String,
//     userId: { type: String, unique: true } // T000001
// });
// const Trader = model("Trader", traderSchema);

// // Trader Registration Route
// app.post("/register-trader", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN, GST } = req.body;

//         const existingTrader = await Trader.findOne({ email });
//         if (existingTrader) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const traderId = await generateSequentialId("trader");

//         const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST, userId: traderId });
//         await newTrader.save();

//         res.status(201).json({ message: "Trader registered successfully", userId: traderId });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Farmer Registration Route
// app.post("/register-farmer", async (req, res) => {
//     try {
//         const { fullname, email, pass, mobile, PAN } = req.body;

//         const existingFarmer = await Farmer.findOne({ email });
//         if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

//         const hashedPassword = await hash(pass, 10);
//         const farmerId = await generateSequentialId("farmer");

//         const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN, userId: farmerId });
//         await newFarmer.save();

//         res.status(201).json({ message: "Farmer registered successfully", userId: farmerId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Login Route (for both Farmers and Traders)
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
//         let user;

//         if (role === "farmer") {
//             user = await Farmer.findOne({ email });
//         } else if (role === "trader") {
//             user = await Trader.findOne({ email });
//         } else {
//             return res.status(400).json({ message: "Invalid role" });
//         }

//         if (!user) return res.status(404).json({ message: "User not found" });

//         const isMatch = await compare(password, user.password);
//         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user._id, role, userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token, userId: user.userId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express, { json } from "express";
// import { connect, Schema, model } from "mongoose";
// import cors from "cors";
// import { config } from "dotenv";
// import { hash, compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// config();
// const app = express();
// app.use(cors());
// app.use(json());

// // MongoDB Connection
// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB Connection Failed:", err));

// // Counter Schema (for ID tracking)
// const counterSchema = new Schema({
//   userType: { type: String, required: true, unique: true },
//   count: { type: Number, default: 0 }
// });
// const Counter = model("Counter", counterSchema);

// // Helper to generate sequential userId
// const generateSequentialId = async (userType) => {
//   const prefix = userType === "farmer" ? "F" : "T";

//   const counter = await Counter.findOneAndUpdate(
//     { userType },
//     { $inc: { count: 1 } },
//     { new: true, upsert: true }
//   );

//   const number = String(counter.count).padStart(6, "0");
//   return `${prefix}${number}`;
// };

// // Farmer Schema
// // Add these fields to Farmer schema
// const farmerSchema = new Schema({
//     fullname: String,
//     email: { type: String, unique: true },
//     password: String,
//     mobile: String,
//     PAN: String,
//     userId: { type: String, unique: true },
//     // New profile fields
//     profilePhoto: String,
//     nickname: String,
//     dob: String,
//     gender: String,
//     city: String,
//     address: String,
// });

// const Farmer = model("Farmer", farmerSchema);

// // Trader Schema
// const traderSchema = new Schema({
//   fullname: String,
//   email: { type: String, unique: true },
//   password: String,
//   mobile: String,
//   PAN: String,
//   GST: String,
//   userId: { type: String, unique: true }
// });
// const Trader = model("Trader", traderSchema);

// // Register Trader
// app.post("/register-trader", async (req, res) => {
//   try {
//     const { fullname, email, pass, mobile, PAN, GST } = req.body;
//     const existingTrader = await Trader.findOne({ email });
//     if (existingTrader) return res.status(400).json({ message: "Email already registered" });

//     const hashedPassword = await hash(pass, 10);
//     const traderId = await generateSequentialId("trader");

//     const newTrader = new Trader({ fullname, email, password: hashedPassword, mobile, PAN, GST, userId: traderId });
//     await newTrader.save();

//     res.status(201).json({ message: "Trader registered successfully", userId: traderId });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // Register Farmer
// app.post("/register-farmer", async (req, res) => {
//   try {
//     const { fullname, email, pass, mobile, PAN } = req.body;
//     const existingFarmer = await Farmer.findOne({ email });
//     if (existingFarmer) return res.status(400).json({ message: "Email already registered" });

//     const hashedPassword = await hash(pass, 10);
//     const farmerId = await generateSequentialId("farmer");

//     const newFarmer = new Farmer({ fullname, email, password: hashedPassword, mobile, PAN, userId: farmerId });
//     await newFarmer.save();

//     res.status(201).json({ message: "Farmer registered successfully", userId: farmerId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // Login
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password, role } = req.body;
//     let user;

//     if (role === "farmer") {
//       user = await Farmer.findOne({ email });
//     } else if (role === "trader") {
//       user = await Trader.findOne({ email });
//     } else {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, role, userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ message: "Login successful", token, userId: user.userId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // Get Farmer by userId
// // Fetch farmer profile by userId
// app.get("/farmer/:userId", async (req, res) => {
//     try {
//         const farmer = await Farmer.findOne({ userId: req.params.userId });
//         if (!farmer) return res.status(404).json({ message: "Farmer not found" });
//         res.json(farmer);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// // Update farmer profile
// // Update farmer profile — now supports partial updates without overwriting required fields
// // Update farmer profile
// app.put("/farmer/:userId", async (req, res) => {
//   try {
//     const farmer = await Farmer.findOne({ userId: req.params.userId });
//     if (!farmer) return res.status(404).json({ message: "Farmer not found" });

//     // Update only the allowed fields
//     const fieldsToUpdate = ['nickname', 'dob', 'gender', 'city', 'address', 'profilePhoto'];
//     fieldsToUpdate.forEach(field => {
//       if (req.body[field] !== undefined) {
//         farmer[field] = req.body[field];
//       }
//     });

//     await farmer.save();
//     res.json({ message: "Profile updated successfully", farmer });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
