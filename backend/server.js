const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary company data
let companies = [
  {
    id: 1,
    name: "TCS",
    location: "Bangalore",
    description: "IT services and consulting company"
  },
  {
    id: 2,
    name: "Infosys",
    location: "Bangalore",
    description: "Technology and consulting company"
  }
];

// Temporary internship data
let internships = [
  {
    id: 1,
    title: "Java Developer Intern",
    company: "TCS",
    location: "Bangalore",
    duration: "3 Months"
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Infosys",
    location: "Bangalore",
    duration: "6 Months"
  }
];

// GET /api/companies
app.get("/api/companies", (req, res) => {
  res.json(companies);
});

// POST /api/companies
app.post("/api/companies", (req, res) => {
  const newCompany = {
    id: companies.length + 1,
    ...req.body
  };

  companies.push(newCompany);

  res.status(201).json(newCompany);
});

// GET /api/internships
app.get("/api/internships", (req, res) => {
  res.json(internships);
});

// POST /api/internships
app.post("/api/internships", (req, res) => {
  const newInternship = {
    id: internships.length + 1,
    ...req.body
  };

  internships.push(newInternship);

  res.status(201).json(newInternship);
});

// Start backend server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});