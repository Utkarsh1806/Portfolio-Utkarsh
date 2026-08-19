import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import {
  MdArrowOutward,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tools: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Ecoshop",
    tagline: "E-commerce Backend",
    description:
      "A production-grade e-commerce API powering product catalog, orders, and user management — secured with JWT and paired with an AI-driven recommendation engine.",
    highlights: [
      "15+ REST APIs for catalog, order & user management",
      "JWT authentication + role-based authorization via Spring Security",
      "Docker Compose slashed local setup from 30 min to under 2 min",
      "Claude AI recommendation engine driven by purchase history",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "PostgreSQL",
      "Docker",
    ],
    image: "/images/ecoshop.svg",
    link: "https://github.com/Utkarsh1806/EcoShop",
  },
  {
    name: "HealthBridge",
    tagline: "Healthcare Microservices",
    description:
      "Distributed microservices platform modernizing a legacy JavaEE healthcare system into scalable Spring Boot services with caching and async messaging.",
    highlights: [
      "Migrated monolith into 10+ Spring Boot microservices",
      "Redis caching cut average API latency by 150ms",
      "JMS-based async messaging across multi-tenant modules",
      "200+ Liquibase changesets managed across environments",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Redis",
      "JMS",
      "PostgreSQL",
      "AWS",
    ],
    image: "/images/healthbridge.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "EventStream",
    tagline: "Event Processing",
    description:
      "High-throughput event-driven service that ingests and distributes real-time events across distributed systems using Kafka and AWS SQS.",
    highlights: [
      "Processes 10,000+ daily events via async queues",
      "Kafka producers/consumers with idempotent delivery",
      "AWS SQS webhook ingestion with retry & DLQ",
      "Horizontally scaled stateless consumers",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Kafka",
      "AWS SQS",
      "Redis",
      "Docker",
    ],
    image: "/images/eventstream.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "BatchPilot",
    tagline: "Data Pipeline",
    description:
      "Spring Batch-based ETL pipeline for high-volume record processing, scheduled reporting, and reliable bulk data movement.",
    highlights: [
      "50,000+ records per run at 25% faster throughput",
      "Chunk-oriented processing with skip & retry policies",
      "Scheduled jobs via Spring Scheduler and cron",
      "PostgreSQL partitioning for large datasets",
    ],
    tools: [
      "Java",
      "Spring Batch",
      "PostgreSQL",
      "JPA",
      "Docker",
      "Jenkins",
    ],
    image: "/images/batchpilot.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "AuthGuard",
    tagline: "SSO & Identity",
    description:
      "Centralized authentication service delivering Single Sign-On, JWT, and role-based access control across multi-service platforms.",
    highlights: [
      "Single Sign-On across 5+ microservices",
      "JWT with refresh-token rotation",
      "Role-based + method-level authorization",
      "OAuth2 / OIDC integration for third-party login",
    ],
    tools: [
      "Java",
      "Spring Security",
      "JWT",
      "OAuth2",
      "PostgreSQL",
      "Redis",
    ],
    image: "/images/authguard.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "ShortLink",
    tagline: "URL Shortener",
    description:
      "High-performance URL shortening service with Redis caching, click analytics, and built-in rate limiting.",
    highlights: [
      "Base62 encoding with collision-free keys",
      "Redis caching for sub-10ms redirects",
      "Click analytics with time-series aggregation",
      "Rate limiting & expiration policies",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Redis",
      "PostgreSQL",
      "Docker",
      "JUnit",
    ],
    image: "/images/shortlink.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "PayFlow",
    tagline: "Payments",
    description:
      "Payment gateway integration service with secure, idempotent transaction processing and a full reconciliation ledger.",
    highlights: [
      "Idempotent transaction processing",
      "Webhook verification with signature checks",
      "Transaction ledger with audit trail",
      "Reader-writer DB separation for high-throughput reads",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    image: "/images/payflow.svg",
    link: "https://github.com/Utkarsh1806",
  },
  {
    name: "BookShelf",
    tagline: "Library Management",
    description:
      "RESTful library management system covering catalog, borrowing, reservations, and member management.",
    highlights: [
      "15+ REST APIs for catalog & circulation",
      "JWT auth with librarian/member roles",
      "Hibernate/JPA with PostgreSQL",
      "Docker Compose one-command setup",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    image: "/images/bookshelf.svg",
    link: "https://github.com/Utkarsh1806",
  },
];

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });

  const scrollBy = (dir: number) => {
    const el = flexRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".work-box");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 32;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) return;
    const el = flexRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const el = flexRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-head">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nav">
            <button
              className="work-arrow"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              data-cursor="disable"
            >
              <MdChevronLeft />
            </button>
            <button
              className="work-arrow"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              data-cursor="disable"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>

        <div
          className="work-flex"
          ref={flexRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <span className="work-index">0{index + 1}</span>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
              <div className="work-info">
                <div className="work-title">
                  <div>
                    <p className="work-tagline">{project.tagline}</p>
                    <h4>{project.name}</h4>
                  </div>
                </div>
                <p className="work-desc">{project.description}</p>
                <ul className="work-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="work-tags">
                  {project.tools.map((tool) => (
                    <span className="work-tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  className="work-cta"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  View Project <MdArrowOutward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
