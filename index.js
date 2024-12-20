const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { authenticateUser, authenticateAdmin } = require("./middleware/authmiddleware");

// Route imports
const userRoutes = require("./api/routes/userroutes");
const adminRoutes = require("./api/routes/adminroutes");
const productRoutes = require("./api/routes/productroutes");
const produkDetailsRoutes = require("./api/routes/produk_detailsroutes");
const kritikSaranRoutes = require("./api/routes/kritik_saranroutes");

const app = express();
const PORT = 3001;

// Middleware setup
app.use(cors({
  allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// Route setup
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/product", productRoutes);
app.use("/api/produk_details", produkDetailsRoutes);
app.use("/api/kritik_saran", kritikSaranRoutes);

// // Authentication middleware (ensure this is applied to the appropriate routes)
// app.use(authenticateUser);
// app.use(authenticateAdmin);

// Root route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Server listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
