import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaBolt,
  FaBuilding,
  FaCamera,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaFileSignature,
  FaGuitar,
  FaLayerGroup,
  FaLocationDot,
  FaPhone,
  FaPrint,
  FaRegCircleCheck,
  FaTrophy,
} from "react-icons/fa6";

import hero from "../assets/hero.png";
import "./ResumePage.css";
import { useEffect, useRef, useState } from "react";

const tenderSkills = [
  "Bangladesh e-GP",
  "Tender Analysis",
  "Bid Planning",
  "Techno-Commercial Bidding",
  "GTP & Compliance",
  "BOQ / Price Schedule",
  "OEM Coordination",
  "Contract Documentation",
  "Business Development",
];

const developmentSkills = [
  "Excel / VBA",
  "Laravel",
  "React",
  "Next.js",
  "JavaScript",
  "Python",
  "WordPress",
  "HTML / CSS",
];

const tenderExposure = [
  "PGB PLC",
  "BR Powergen",
  "BPDB",
  "DPDC",
  "BREB",
  "Meghnaghat Power Plant",
];

const impact = [
  {
    number: "9",
    label: "Tenders / Month",
    text: "e-GP and manual tender submissions completed within a single month.",
  },
  {
    number: "৳5 Cr+",
    label: "Highest Bid",
    text: "High-value techno-commercial tender bid handled and coordinated.",
  },
  {
    number: "42+",
    label: "Consignments",
    text: "Electrical equipment consignments managed for 33/11 kV substations.",
  },
  {
    number: "48",
    label: "Close-Outs",
    text: "Substation project close-outs and final handover documentation managed.",
  },
  {
    number: "7.4 MW",
    label: "Solar Bid",
    text: "Kaptai Solar Power Plant bid documentation prepared within 9 days.",
  },
  {
    number: "6",
    label: "Grid Substations",
    text: "Installation, testing and commissioning activities coordinated.",
  },
];

const certifications = [
  {
    title: "Bangladesh e-GP Tender Management",
    type: "Certification",
    subtitle: "Certified Training Program",
    year: "2024",
    institute: "AllTender, Bangladesh",
    pdf: "/certificates/e-GP Training - Certificate.pdf",
    icon: <FaTrophy />,
  },
  {
    title: "Electrical Machine Maintenance",
    type: "Training",
    subtitle: "Technical Training Program",
    year: "2016",
    institute: "BKTTC, Chattogram",
    pdf: "/certificates/EMM Training - Certificate.pdf",
    icon: <FaBolt />,
  },
  {
    title: "Electrical Power Internship",
    type: "Internship",
    subtitle: "Industrial Training",
    year: "2015",
    institute: "S. Alam Cold Rolled Steels Ltd.",
    pdf: "/certificates/Industrial Training Certificate.pdf",
    icon: <FaBuilding />,
  },
];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const numericMatch = value.match(/[\d.]+/);

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice(
      numericMatch.index + numericMatch[0].length
    );

    const isDecimal = numericMatch[0].includes(".");
    const duration = 1300;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = target * easedProgress;

      const formattedValue = isDecimal
        ? currentValue.toFixed(1)
        : Math.floor(currentValue);

      setDisplayValue(`${prefix}${formattedValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return <strong ref={ref}>{displayValue}</strong>;
}

const controlware = [
  "Lead tender-sales activities for electrical and power-sector opportunities from tender analysis and bid strategy through submission and post-tender coordination.",
  "Prepare and review e-GP and manual tender submissions, technical schedules, GTPs, compliance matrices, commercial offers and mandatory qualification documents.",
  "Coordinate with international and local manufacturers and suppliers for compliant offers, competitive pricing, delivery commitments and documentary support.",
  "Communicate with government utilities, power-sector organizations and private clients regarding tender clarification, documentation, billing and contract execution matters.",
  "Support business development, market intelligence, bid strategy and cross-functional coordination with management, finance, project and technical teams.",
  "Develop Excel/VBA-based tracking and billing tools to improve workflow, reporting accuracy and management follow-up.",
];

const becc = [
  "Prepared bidding proposals, technical particulars, BOQs and project documentation for power plant, substation and transmission-line projects.",
  "Coordinated with equipment manufacturers, vendors and suppliers for pricing, technical documentation and project requirements.",
  "Supported port clearance, equipment inspection, delivery, installation, testing and commissioning in accordance with drawings and technical specifications.",
  "Prepared as-built, close-out and handover documents and coordinated with project and commissioning teams.",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="resume-section-title">
      <div className="resume-section-index" />
      <div>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function ExperienceItem({
  company,
  period,
  role,
  progression,
  items,
  current,
}) {
  return (
    <article
        className={`experience-item resume-reveal ${
            current ? "current" : ""
        }`}
    >
      <div className="experience-rail">
        <span className="experience-dot" />
        <span className="experience-line" />
      </div>

      <div className="experience-content">
        <div className="experience-heading">
          <div>
            {current && <span className="current-badge">Current Position</span>}
            <h3>{company}</h3>
            <p>{role}</p>
          </div>

          <time>{period}</time>
        </div>

        {progression && (
          <div className="career-progression">
            <span>Assistant Engineer</span>
            <i>→</i>
            <strong>Senior Engineer</strong>
          </div>
        )}

        <ul className="experience-list">
          {items.map((item) => (
            <li key={item}>
              <FaRegCircleCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ResumePage() {
  const portraitRef = useRef(null);

  const handlePrint = () => window.print();

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".resume-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("resume-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const portrait = portraitRef.current;

    if (!portrait) return;

    const handleMouseMove = (event) => {
      if (window.innerWidth < 900) return;

      const rect = portrait.getBoundingClientRect();

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((mouseY - centerY) / centerY) * -2.5;
      const rotateY = ((mouseX - centerX) / centerX) * 2.5;

      portrait.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-3px)
      `;
    };

    const handleMouseLeave = () => {
      portrait.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    };

    portrait.addEventListener("mousemove", handleMouseMove);
    portrait.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      portrait.removeEventListener("mousemove", handleMouseMove);
      portrait.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".expertise-card");

    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="premium-resume-page">
      <div className="resume-ambient ambient-one" />
      <div className="resume-ambient ambient-two" />

      <nav className="resume-topbar">
        <a href="/" className="resume-back">
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </a>

        <div className="resume-actions">
          
          <button
            type="button"
            onClick={handlePrint}
            className="resume-action primary"
          >
            <FaPrint />
            <span>Print Resume</span>
          </button>
        </div>
      </nav>

      <main className="resume-container">
        <section className="resume-hero">
          <div className="resume-hero-grid">
            <div className="resume-hero-copy">
              <div className="resume-status">
                <span className="status-dot" />
                Available for professional opportunities
              </div>

              <p className="resume-overline">
                POWER SECTOR / TENDER LEADERSHIP / AUTOMATION
              </p>

              <h1>
                Shamsul Arafat
                <span>Chowdhury.</span>
              </h1>

              <div className="resume-role">
                <span>Senior Engineer</span>
                <i />
                <span>Tender & Techno-Commercial</span>
              </div>

              <p className="resume-intro">
                Electrical engineering professional combining{" "}
                <strong>power-sector tender leadership</strong>, commercial
                strategy, workflow automation and creative problem solving.
              </p>

              <div className="resume-contact-grid">
                <a href="mailto:arafat.dip.ee@gmail.com">
                  <FaEnvelope />
                  <div>
                    <small>Email</small>
                    <span>arafat.dip.ee@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+8801515221433">
                  <FaPhone />
                  <div>
                    <small>Phone</small>
                    <span>+88 01515 221433</span>
                  </div>
                </a>

                <div>
                  <FaLocationDot />
                  <div>
                    <small>Based in</small>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-portrait-area">
              <div className="portrait-code">01 / PROFILE</div>

                <div
                    className="resume-portrait-frame"
                    ref={portraitRef}
                >
                <div className="portrait-corner corner-one" />
                <div className="portrait-corner corner-two" />

                <img src={hero} alt="Shamsul Arafat Chowdhury" />
              </div>

              <div className="portrait-caption">
                <span>10+</span>
                <p>
                  Years of progressive
                  <br />
                  professional experience
                </p>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line">
            <span>Engineering precision.</span>
            <span>Commercial strategy.</span>
            <span>Creative thinking.</span>
          </div>
        </section>

        <section className="resume-profile-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="01 — Profile"
            title="Professional Profile"
            description="Engineering foundation. Commercial leadership. Digital mindset."
          />

          <div className="profile-layout">
            <div className="profile-main">
              <p className="profile-large">
                Tender & Techno-Commercial and electrical engineering professional with{" "}
                <strong>10 years of progressive experience</strong> in
                Bangladesh&apos;s power and infrastructure sector.
              </p>

              <p>
                Currently serving as{" "}
                <strong>Senior Engineer (Tender & Techno-Commercial)</strong> at Controlware
                Engineering Limited. Experienced in Bangladesh e-GP, public and
                private tendering, techno-commercial bid preparation, technical
                compliance, OEM and manufacturer coordination, client
                communication and post-award commercial support.
              </p>

              <p>
                Tender-sales responsibilities began during the first year at
                Controlware and progressively expanded into bid leadership,
                business development and tender-sales management.
              </p>
            </div>

            <div className="profile-quote">
              <FaFileSignature />

              <blockquote>
                “I work where engineering requirements, commercial strategy and
                practical execution meet.”
              </blockquote>

              <span>Professional approach</span>
            </div>
          </div>
        </section>

        <section className="resume-impact-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="02 — Impact"
            title="Measured Career Impact"
            description="Selected numbers that represent scale, delivery and responsibility."
          />

          <div className="impact-grid">
            {impact.map((item, index) => (
              <article
                className="impact-item resume-reveal"
                key={item.label}
                style={{
                    "--reveal-delay": `${index * 90}ms`,
                }}
                >
                <span className="impact-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <AnimatedNumber value={item.number} />
                <h3>{item.label}</h3>
                <p>{item.text}</p>

                <div className="impact-arrow">
                  <FaArrowUpRightFromSquare />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-experience-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="03 — Experience"
            title="Professional Journey"
            description="Progressive responsibility across engineering projects, Tender & Techno-Commercial and commercial leadership."
          />

          <div className="experience-wrapper">
            <ExperienceItem
              company="Controlware Engineering Limited"
              period="DEC 2020 — PRESENT"
              role="Senior Engineer — Tender & Techno-Commercial"
              progression
              current
              items={controlware}
            />

            <ExperienceItem
              company="Bangladesh Engineering & Construction Corporation Ltd."
              period="JUL 2016 — NOV 2020"
              role="Trainee Engineer → Assistant Engineer"
              items={becc}
            />
          </div>
        </section>

        <section className="resume-expertise-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="04 — Expertise"
            title="Professional Capabilities"
            description="A multidisciplinary skill set built around power-sector business and execution."
          />

          <div className="expertise-grid">
            <article className="expertise-card tender-card">
              <div className="expertise-icon">
                <FaFileSignature />
              </div>

              <span>01</span>
              <h3>Tender & Commercial</h3>

              <div className="expertise-tags">
                {tenderSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>

            <article className="expertise-card">
              <div className="expertise-icon">
                <FaBolt />
              </div>

              <span>02</span>
              <h3>Electrical & Power</h3>

              <ul>
                <li>Power Generation</li>
                <li>Grid Substations</li>
                <li>Transmission Lines</li>
                <li>Distribution Utilities</li>
                <li>Electrical Equipment Supply</li>
                <li>Project Close-Out & Handover</li>
              </ul>
            </article>

            <article className="expertise-card">
              <div className="expertise-icon">
                <FaCode />
              </div>

              <span>03</span>
              <h3>Automation & Development</h3>

              <div className="expertise-tags">
                {developmentSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>

            <article className="expertise-card creative-card">
              <div className="expertise-icon">
                <FaCamera />
              </div>

              <span>04</span>
              <h3>Creative & Visual</h3>

              <div className="creative-list">
                <div>
                  <FaCamera />
                  <span>
                    <b>Photography</b>
                    Visual storytelling, wedding and street photography.
                  </span>
                </div>

                <div>
                  <FaGuitar />
                  <span>
                    <b>Music</b>
                    Guitar, singing and creative expression.
                  </span>
                </div>

                <div>
                  <FaLayerGroup />
                  <span>
                    <b>Digital Creation</b>
                    Practical products, web experiences and visual systems.
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="resume-exposure-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="05 — Industry"
            title="Key Tender Exposure"
            description="Organizations and power-sector environments represented in my tender experience."
          />

          <div className="exposure-track">
            {tenderExposure.map((company, index) => (
              <div className="exposure-item" key={company}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-certification-section resume-block resume-reveal">

          <SectionTitle
              eyebrow="06 — PROFESSIONAL CREDENTIALS"
              title="Training & Certifications"
              description="Industry training and certifications that strengthen my engineering knowledge and support my tender management experience."
          />

          <div className="certificate-wrapper">

              {certifications.map((item) => (

                  <article className="certificate-card" key={item.title}>

                      <div className="certificate-icon">
                          {item.icon}
                      </div>

                      <div className="certificate-body">

                          <span className="certificate-type">
                              {item.type}
                          </span>

                          <h3>{item.title}</h3>

                          <p>{item.subtitle}</p>

                          <div className="certificate-meta">

                              <span>
                                  📅 {item.year}
                              </span>

                              <span>
                                  🏢 {item.institute}
                              </span>

                          </div>

                      </div>

                      <div className="certificate-action">

                          <a
                              href={item.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              View Certificate
                              <FaArrowUpRightFromSquare />
                          </a>

                          <small>{item.year}</small>

                      </div>

                  </article>

              ))}

          </div>

      </section>

        <section className="resume-reference-section resume-block resume-reveal">
          <SectionTitle
            eyebrow="07 — References"
            title="Professional References"
          />

          <div className="reference-grid">
            <article>
              <span className="reference-number">01</span>
              <h3>Engr. Arafat Ullah Chowdhury</h3>
              <p>
                Superintending Engineer (C.C)
                <br />
                Dhaka-North Zone
                <br />
                Bangladesh Rural Electrification Board, Savar
              </p>

              <a href="tel:+8801760509282">+88 01760 509282</a>
              <a href="mailto:arafatreb83@gmail.com">
                arafatreb83@gmail.com
              </a>
            </article>

            <article>
              <span className="reference-number">02</span>
              <h3>Engr. Shamim Hossain</h3>
              <p>
                Executive Engineer, Tender & Techno-Commercial
                <br />
                Controlware Engineering Limited
                <br />
                Dhaka, Bangladesh
              </p>

              <a href="tel:+8801942763961">+88 01942 763961</a>
            </article>
          </div>
        </section>

        <footer className="resume-footer">
          <div>
            <span>SHAMSUL ARAFAT CHOWDHURY</span>
            <p>Engineering precision. Creative thinking.</p>
          </div>

          <a href="mailto:arafat.dip.ee@gmail.com">
            Let&apos;s connect
            <FaArrowUpRightFromSquare />
          </a>
        </footer>
      </main>
    </div>
  );
}