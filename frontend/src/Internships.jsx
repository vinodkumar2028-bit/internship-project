function Internships({ search }) {
  const internships = [
    {
      title: "Java Developer Intern",
      company: "Google",
      location: "Bangalore",
    },
    {
      title: "Web Development Intern",
      company: "Microsoft",
      location: "Hyderabad",
    },
    {
      title: "Data Science Intern",
      company: "Amazon",
      location: "Bangalore",
    },
  ];

  const filteredInternships = internships.filter((internship) =>
    internship.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Internships</h2>

      {filteredInternships.map((internship, index) => (
        <div key={index}>
          <h3>{internship.title}</h3>
          <p>Company: {internship.company}</p>
          <p>Location: {internship.location}</p>
          <hr />
        </div>
      ))}

      {filteredInternships.length === 0 && (
        <p>No internships found.</p>
      )}
    </div>
  );
}

export default Internships;