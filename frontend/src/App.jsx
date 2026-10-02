import { useState } from "react";
import "./App.css";

// ==================== COMPANIES ====================

const companies = [
  {
    name: "Google",
    description: "Technology and software company",
    skills: "Java, Python, C++, AI, Cloud, Software Development",
  },
  {
    name: "Microsoft",
    description: "Software and technology company",
    skills: "Java, C++, .NET, Azure, AI, Software Development",
  },
  {
    name: "Amazon",
    description: "E-commerce and cloud technology company",
    skills: "Java, AWS, Python, Cloud, Backend Development",
  },
  {
    name: "Infosys",
    description: "IT services and consulting company",
    skills: "Java, Python, Web Development, Cloud, DevOps",
  },
  {
    name: "TCS",
    description: "IT services and consulting company",
    skills: "Java, Testing, Web Development, Data, Cloud",
  },
  {
    name: "Wipro",
    description: "Information technology company",
    skills: "Python, Cyber Security, Cloud, Software Testing",
  },
  {
    name: "IBM",
    description: "Technology and cloud computing company",
    skills: "Python, AI, Data Science, Cloud, Blockchain",
  },
  {
    name: "Accenture",
    description: "Technology and consulting company",
    skills: "Java, Data, Cloud, Digital Marketing, Analytics",
  },
  {
    name: "Deloitte",
    description: "Consulting and professional services company",
    skills: "Data Analytics, SQL, Marketing, Business Analytics",
  },
  {
    name: "Cisco",
    description: "Networking and technology company",
    skills: "Networking, Cyber Security, Cloud, Network Security",
  },
  {
    name: "Oracle",
    description: "Database and cloud technology company",
    skills: "SQL, Database, Java, Cloud",
  },
  {
    name: "Adobe",
    description: "Digital media and software company",
    skills: "UI/UX, Design, Web Development, Software",
  },
  {
    name: "Apple",
    description: "Consumer technology and software company",
    skills: "Swift, iOS, Software Development, UI/UX",
  },
  {
    name: "Bosch",
    description: "Engineering and technology company",
    skills: "IoT, C++, Embedded Systems, Electronics",
  },
];

// ==================== INTERNSHIPS ====================

const internships = [
  // SOFTWARE / PROGRAMMING

  {
    title: "Java Developer Intern",
    company: "Google",
    location: "Bangalore",
    skills: "Java, OOP, DSA",
    duration: "3 Months",
    domain: "Java Development",
  },
  {
    title: "Python Developer Intern",
    company: "Microsoft",
    location: "Hyderabad",
    skills: "Python, Django, REST API",
    duration: "3 Months",
    domain: "Python Development",
  },
  {
    title: "C++ Developer Intern",
    company: "Amazon",
    location: "Bangalore",
    skills: "C++, OOP, DSA",
    duration: "6 Months",
    domain: "C++ Development",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Infosys",
    location: "Pune",
    skills: "HTML, CSS, JavaScript, React, Node.js",
    duration: "6 Months",
    domain: "Full Stack Development",
  },

  // WEB DEVELOPMENT

  {
    title: "Frontend Developer Intern",
    company: "Microsoft",
    location: "Hyderabad",
    skills: "HTML, CSS, JavaScript",
    duration: "3 Months",
    domain: "Web Development",
  },
  {
    title: "React Developer Intern",
    company: "Google",
    location: "Bangalore",
    skills: "React, JavaScript, HTML, CSS",
    duration: "3 Months",
    domain: "React Development",
  },
  {
    title: "Node.js Developer Intern",
    company: "Amazon",
    location: "Bangalore",
    skills: "Node.js, Express, MongoDB",
    duration: "6 Months",
    domain: "Backend Development",
  },
  {
    title: "Web Development Intern",
    company: "TCS",
    location: "Chennai",
    skills: "HTML, CSS, JavaScript, Bootstrap",
    duration: "3 Months",
    domain: "Web Development",
  },

  // AI / MACHINE LEARNING

  {
    title: "Artificial Intelligence Intern",
    company: "Google",
    location: "Bangalore",
    skills: "Python, Machine Learning, AI",
    duration: "6 Months",
    domain: "Artificial Intelligence",
  },
  {
    title: "Machine Learning Intern",
    company: "Microsoft",
    location: "Hyderabad",
    skills: "Python, ML, TensorFlow",
    duration: "6 Months",
    domain: "Machine Learning",
  },
  {
    title: "Generative AI Intern",
    company: "Amazon",
    location: "Bangalore",
    skills: "Python, LLM, Prompt Engineering",
    duration: "6 Months",
    domain: "Generative AI",
  },
  {
    title: "Computer Vision Intern",
    company: "Wipro",
    location: "Bangalore",
    skills: "Python, OpenCV, Deep Learning",
    duration: "4 Months",
    domain: "Computer Vision",
  },

  // DATA

  {
    title: "Data Science Intern",
    company: "IBM",
    location: "Bangalore",
    skills: "Python, Pandas, NumPy, ML",
    duration: "6 Months",
    domain: "Data Science",
  },
  {
    title: "Data Analyst Intern",
    company: "Deloitte",
    location: "Hyderabad",
    skills: "Excel, SQL, Power BI",
    duration: "3 Months",
    domain: "Data Analytics",
  },
  {
    title: "Business Analytics Intern",
    company: "Accenture",
    location: "Bangalore",
    skills: "Excel, SQL, Power BI, Tableau",
    duration: "3 Months",
    domain: "Business Analytics",
  },

  // CLOUD / DEVOPS

  {
    title: "Cloud Computing Intern",
    company: "Amazon",
    location: "Bangalore",
    skills: "AWS, Cloud, Linux",
    duration: "6 Months",
    domain: "Cloud Computing",
  },
  {
    title: "Azure Cloud Intern",
    company: "Microsoft",
    location: "Hyderabad",
    skills: "Azure, Cloud Computing, Linux",
    duration: "3 Months",
    domain: "Cloud Computing",
  },
  {
    title: "DevOps Intern",
    company: "Infosys",
    location: "Pune",
    skills: "Docker, Jenkins, Git, Linux",
    duration: "6 Months",
    domain: "DevOps",
  },

  // CYBER SECURITY

  {
    title: "Cyber Security Intern",
    company: "Cisco",
    location: "Bangalore",
    skills: "Networking, Linux, Cyber Security",
    duration: "6 Months",
    domain: "Cyber Security",
  },
  {
    title: "Ethical Hacking Intern",
    company: "Wipro",
    location: "Hyderabad",
    skills: "Kali Linux, Networking, Security",
    duration: "3 Months",
    domain: "Ethical Hacking",
  },

  // MOBILE DEVELOPMENT

  {
    title: "Android Developer Intern",
    company: "Google",
    location: "Bangalore",
    skills: "Java, Kotlin, Android Studio",
    duration: "6 Months",
    domain: "Android Development",
  },
  {
    title: "Flutter Developer Intern",
    company: "TCS",
    location: "Chennai",
    skills: "Flutter, Dart, Firebase",
    duration: "3 Months",
    domain: "Mobile Development",
  },
  {
    title: "iOS Developer Intern",
    company: "Apple",
    location: "Bangalore",
    skills: "Swift, SwiftUI, Xcode",
    duration: "6 Months",
    domain: "iOS Development",
  },

  // DATABASE

  {
    title: "SQL Developer Intern",
    company: "Oracle",
    location: "Bangalore",
    skills: "SQL, MySQL, Oracle Database",
    duration: "3 Months",
    domain: "Database",
  },
  {
    title: "Database Administrator Intern",
    company: "IBM",
    location: "Hyderabad",
    skills: "SQL, MySQL, Database Administration",
    duration: "6 Months",
    domain: "Database",
  },

  // TESTING

  {
    title: "Software Testing Intern",
    company: "TCS",
    location: "Pune",
    skills: "Manual Testing, Test Cases, SDLC",
    duration: "3 Months",
    domain: "Software Testing",
  },
  {
    title: "Automation Testing Intern",
    company: "Infosys",
    location: "Bangalore",
    skills: "Selenium, Java, Testing",
    duration: "6 Months",
    domain: "Automation Testing",
  },

  // UI / UX

  {
    title: "UI/UX Design Intern",
    company: "Adobe",
    location: "Bangalore",
    skills: "Figma, UI Design, UX Research",
    duration: "3 Months",
    domain: "UI/UX Design",
  },
  {
    title: "Product Design Intern",
    company: "Microsoft",
    location: "Hyderabad",
    skills: "Figma, Prototyping, UX",
    duration: "6 Months",
    domain: "Product Design",
  },

  // MARKETING

  {
    title: "Digital Marketing Intern",
    company: "Accenture",
    location: "Bangalore",
    skills: "SEO, Google Ads, Social Media",
    duration: "3 Months",
    domain: "Digital Marketing",
  },
  {
    title: "Social Media Marketing Intern",
    company: "Deloitte",
    location: "Hyderabad",
    skills: "Instagram, Content, Analytics",
    duration: "3 Months",
    domain: "Marketing",
  },

  // IoT

  {
    title: "IoT Developer Intern",
    company: "Bosch",
    location: "Bangalore",
    skills: "Arduino, Sensors, C++",
    duration: "6 Months",
    domain: "Internet of Things",
  },

  // BLOCKCHAIN

  {
    title: "Blockchain Developer Intern",
    company: "IBM",
    location: "Bangalore",
    skills: "Blockchain, Solidity, Ethereum",
    duration: "6 Months",
    domain: "Blockchain",
  },

  // NETWORKING

  {
    title: "Network Engineer Intern",
    company: "Cisco",
    location: "Bangalore",
    skills: "Networking, Cisco, Routing, Switching",
    duration: "6 Months",
    domain: "Networking",
  },
  {
    title: "Network Security Intern",
    company: "Cisco",
    location: "Hyderabad",
    skills: "Networking, Firewalls, Security",
    duration: "3 Months",
    domain: "Network Security",
  },
];

// ==================== APP ====================

function App() {
  const [search, setSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const searchText = activeSearch.toLowerCase().trim();

  // Company search
  const filteredCompanies = companies.filter((company) => {
    if (!searchText) return true;

    return (
      company.name.toLowerCase().includes(searchText) ||
      company.description.toLowerCase().includes(searchText) ||
      company.skills.toLowerCase().includes(searchText)
    );
  });

  // Internship search
  const filteredInternships = internships.filter((internship) => {
    if (!searchText) return true;

    return (
      internship.title.toLowerCase().includes(searchText) ||
      internship.company.toLowerCase().includes(searchText) ||
      internship.location.toLowerCase().includes(searchText) ||
      internship.skills.toLowerCase().includes(searchText) ||
      internship.domain.toLowerCase().includes(searchText)
    );
  });

  const performSearch = () => {
    setActiveSearch(search);
  };

  const clearSearch = () => {
    setSearch("");
    setActiveSearch("");
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="header-content">
          <div>
            <h1>Internship Portal</h1>
            <p>Find internships and companies</p>
          </div>
        </div>
      </header>

      {/* ================= SEARCH ================= */}

      <main className="container">

        <div className="search-section">

          <div className="search-box">

            <input
              type="text"
              placeholder="Search internships, companies, skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  performSearch();
                }
              }}
            />

            {search && (
              <button
                className="clear-button"
                onClick={clearSearch}
              >
                ✕
              </button>
            )}

            <button
              className="search-button"
              onClick={performSearch}
            >
              Search
            </button>

          </div>

          {activeSearch && (
            <div className="search-result-text">
              Showing results for: <strong>"{activeSearch}"</strong>
            </div>
          )}

        </div>

        {/* ================= COMPANIES ================= */}

        <section className="section">

          <div className="section-title">
            <h2>Companies</h2>

            <span className="result-count">
              {filteredCompanies.length} results
            </span>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="no-results">
              <h3>No companies found</h3>
              <p>Try searching for another company or skill.</p>
            </div>
          ) : (
            <div className="company-grid">

              {filteredCompanies.map((company, index) => (
                <div
                  className="company-card"
                  key={index}
                >

                  <div className="company-logo">
                    {company.name.charAt(0)}
                  </div>

                  <div className="company-info">

                    <h3>{company.name}</h3>

                    <p className="company-description">
                      {company.description}
                    </p>

                    <div className="skills">
                      {company.skills.split(", ").map(
                        (skill, skillIndex) => (
                          <span
                            className="skill"
                            key={skillIndex}
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* ================= INTERNSHIPS ================= */}

        <section className="section">

          <div className="section-title">

            <h2>Internships</h2>

            <span className="result-count">
              {filteredInternships.length} results
            </span>

          </div>

          {filteredInternships.length === 0 ? (
            <div className="no-results">

              <h3>No internships found</h3>

              <p>
                Try searching for another domain, company,
                location, or skill.
              </p>

            </div>
          ) : (
            <div className="internship-grid">

              {filteredInternships.map(
                (internship, index) => (

                  <div
                    className="internship-card"
                    key={index}
                  >

                    <div className="internship-header">

                      <h3>{internship.title}</h3>

                      <span className="duration">
                        {internship.duration}
                      </span>

                    </div>

                    <p className="company-name">
                      🏢 {internship.company}
                    </p>

                    <p className="domain">
                      🎯 {internship.domain}
                    </p>

                    <p className="location">
                      📍 {internship.location}
                    </p>

                    <div className="skills">

                      {internship.skills
                        .split(", ")
                        .map(
                          (skill, skillIndex) => (

                            <span
                              className="skill"
                              key={skillIndex}
                            >
                              {skill}
                            </span>

                          )
                        )}

                    </div>

                    <button
                      className="view-button"
                      onClick={() =>
                        alert(
                          `You selected ${internship.title} at ${internship.company}`
                        )
                      }
                    >
                      View Internship
                    </button>

                  </div>

                )
              )}

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default App;