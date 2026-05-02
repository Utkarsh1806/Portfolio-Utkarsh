import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Intern</h4>
                <h5>Glorious Insights</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Implemented custom authentication and authorization mechanisms
              for secure API access. Developed and deployed Spring Batch for
              batch processing, reducing data load times by 25%. Built and
              optimized RESTful APIs with Hibernate/JPA against PostgreSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>ABES Engineering College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with a CGPA of 7.99. Built strong foundations in
              data structures, object-oriented programming, databases, and
              distributed systems while exploring backend technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer — Java Backend</h4>
                <h5>Veersa Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Spearheaded migration of a legacy JavaEE monolith into 10+
              Spring Boot microservices, achieving 40% throughput improvement
              and 35% fewer DB hits. Built multi-tenant Redis caching, async
              JMS pipelines with Artemis, and 70+ JUnit tests at 85% coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
