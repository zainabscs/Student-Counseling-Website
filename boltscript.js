// Data
const universities = [
    {
        name: "University of Auckland",
        qsRanking: "68",
        location: "Auckland",
        established: "1883",
        programs: ["Engineering", "Business", "Medicine", "Arts", "Science"]
    },
    {
        name: "University of Otago",
        qsRanking: "206",
        location: "Dunedin",
        established: "1869",
        programs: ["Health Sciences", "Business", "Humanities", "Sciences"]
    },
    {
        name: "Victoria University of Wellington",
        qsRanking: "241",
        location: "Wellington",
        established: "1897",
        programs: ["Law", "Business", "Engineering", "Creative Arts"]
    },
    {
        name: "University of Canterbury",
        qsRanking: "256",
        location: "Christchurch",
        established: "1873",
        programs: ["Engineering", "Fine Arts", "Forestry", "Music"]
    },
    {
        name: "Massey University",
        qsRanking: "292",
        location: "Palmerston North",
        established: "1927",
        programs: ["Agriculture", "Business", "Creative Arts", "Health"]
    },
    {
        name: "University of Waikato",
        qsRanking: "373",
        location: "Hamilton",
        established: "1964",
        programs: ["Computer Science", "Management", "Education", "Maori Studies"]
    },
    {
        name: "Lincoln University",
        qsRanking: "368",
        location: "Canterbury",
        established: "1878",
        programs: ["Agriculture", "Commerce", "Environment", "Landscape Architecture"]
    },
    {
        name: "Auckland University of Technology",
        qsRanking: "407",
        location: "Auckland",
        established: "2000",
        programs: ["Design", "Engineering", "Health Sciences", "Business"]
    }
];

const polytechnics = [
    { name: "Auckland Institute of Technology", location: "Auckland", specialization: "Technology & Design", established: "1895" },
    { name: "Bay of Plenty Polytechnic", location: "Tauranga", specialization: "Trades & Applied Sciences", established: "1997" },
    { name: "Eastern Institute of Technology", location: "Napier", specialization: "Wine & Viticulture", established: "1974" },
    { name: "Manukau Institute of Technology", location: "Auckland", specialization: "Business & Computing", established: "1970" },
    { name: "Nelson Marlborough Institute", location: "Nelson", specialization: "Arts & Aquaculture", established: "1904" },
    { name: "Northland Polytechnic", location: "Whangarei", specialization: "Primary Industries", established: "1978" },
    { name: "Otago Polytechnic", location: "Dunedin", specialization: "Applied Sciences", established: "1870" },
    { name: "Southern Institute of Technology", location: "Invercargill", specialization: "Engineering & Trades", established: "1971" },
    { name: "Tairawhiti Polytechnic", location: "Gisborne", specialization: "Forestry & Horticulture", established: "1980" },
    { name: "Taranaki Polytechnic", location: "New Plymouth", specialization: "Energy & Engineering", established: "1957" },
    { name: "Unitec Institute of Technology", location: "Auckland", specialization: "Architecture & Construction", established: "1976" },
    { name: "Universal College of Learning", location: "Palmerston North", specialization: "Health & Social Services", established: "1902" },
    { name: "Waikato Institute of Technology", location: "Hamilton", specialization: "Agriculture & Technology", established: "1924" },
    { name: "Wellington Institute of Technology", location: "Wellington", specialization: "Information Technology", established: "1904" },
    { name: "Western Institute of Technology", location: "Taranaki", specialization: "Offshore & Marine", established: "1972" },
    { name: "Whitireia Community Polytechnic", location: "Porirua", specialization: "Health & Community Services", established: "1986" }
];

const courses = [
    {
        name: "Information Technology",
        duration: "1-3 years",
        averageSalary: "NZ$55,000 - 85,000",
        demandLevel: "Very High",
        jobGrowth: "15% annually"
    },
    {
        name: "Healthcare & Nursing",
        duration: "2-4 years",
        averageSalary: "NZ$50,000 - 75,000",
        demandLevel: "Very High",
        jobGrowth: "12% annually"
    },
    {
        name: "Engineering",
        duration: "3-4 years",
        averageSalary: "NZ$60,000 - 90,000",
        demandLevel: "High",
        jobGrowth: "10% annually"
    },
    {
        name: "Business & Management",
        duration: "1-2 years",
        averageSalary: "NZ$45,000 - 80,000",
        demandLevel: "High",
        jobGrowth: "8% annually"
    },
    {
        name: "Agriculture & Food Science",
        duration: "2-4 years",
        averageSalary: "NZ$48,000 - 70,000",
        demandLevel: "High",
        jobGrowth: "9% annually"
    },
    {
        name: "Tourism & Hospitality",
        duration: "1-3 years",
        averageSalary: "NZ$35,000 - 60,000",
        demandLevel: "Moderate",
        jobGrowth: "7% annually"
    },
    {
        name: "Education & Teaching",
        duration: "1-4 years",
        averageSalary: "NZ$50,000 - 70,000",
        demandLevel: "High",
        jobGrowth: "6% annually"
    },
    {
        name: "Creative Arts & Design",
        duration: "2-3 years",
        averageSalary: "NZ$40,000 - 65,000",
        demandLevel: "Moderate",
        jobGrowth: "5% annually"
    }
];

const processSteps = [
    {
        step: 1,
        title: "Research & Course Selection",
        description: "Explore universities, programs, and requirements. Get personalized counseling.",
        timeframe: "2-3 months before"
    },
    {
        step: 2,
        title: "Prepare Documents",
        description: "Gather academic transcripts, English test scores, and supporting documents.",
        timeframe: "2-3 months before"
    },
    {
        step: 3,
        title: "Submit Applications",
        description: "Apply to chosen universities with complete documentation and fees.",
        timeframe: "6-12 months before"
    },
    {
        step: 4,
        title: "Receive Offer Letter",
        description: "Universities review applications and send conditional/unconditional offers.",
        timeframe: "4-8 weeks later"
    },
    {
        step: 5,
        title: "Accept Offer & Pay Fees",
        description: "Accept your preferred offer and pay initial tuition fees and deposits.",
        timeframe: "2-4 weeks"
    },
    {
        step: 6,
        title: "Apply for Student Visa",
        description: "Submit visa application with offer letter and financial documents.",
        timeframe: "4-6 weeks"
    },
    {
        step: 7,
        title: "Pre-Departure Preparation",
        description: "Arrange accommodation, travel insurance, and flight bookings.",
        timeframe: "2-4 weeks before"
    },
    {
        step: 8,
        title: "Arrive & Commence Studies",
        description: "Attend orientation, complete enrollment, and begin your New Zealand journey.",
        timeframe: "Upon arrival"
    }
];

const faqs = [
    {
        question: "What are the English language requirements for studying in New Zealand?",
        answer: "Most universities require IELTS 6.0-6.5 (with no band less than 5.5-6.0) or equivalent TOEFL scores (550+ paper-based, 213+ computer-based, or 80+ internet-based). Some programs may have higher requirements, particularly for postgraduate courses and specific fields like medicine or law."
    },
    {
        question: "How much does it cost to study in New Zealand?",
        answer: "Tuition fees range from NZ$22,000-45,000 per year for universities and NZ$18,000-25,000 for polytechnics. Living costs are approximately NZ$15,000-18,000 per year, depending on the city and lifestyle. Auckland and Wellington tend to be more expensive than smaller cities."
    },
    {
        question: "Can I work while studying in New Zealand?",
        answer: "Yes, international students can work up to 20 hours per week during studies and full-time during scheduled breaks (Christmas holidays, semester breaks). After graduation, you may be eligible for a Post-Study Work Visa allowing full-time employment for up to 3 years."
    },
    {
        question: "What is the application process timeline?",
        answer: "Applications should be submitted 6-12 months before the intended start date. University admission typically takes 4-8 weeks, and student visa processing takes 4-6 weeks. We recommend starting the process at least 8-10 months in advance to allow for document preparation and potential delays."
    },
    {
        question: "Are there scholarships available for international students?",
        answer: "Yes, New Zealand offers various scholarships including New Zealand Excellence Awards (up to NZ$10,000), university-specific scholarships, and government-funded programs for certain countries. Many universities also offer merit-based scholarships for high-achieving students."
    },
    {
        question: "What is the Post-Study Work Visa policy?",
        answer: "Graduates can apply for a Post-Study Work Visa allowing them to work in New Zealand for up to 3 years, depending on their qualification level (1 year for certificates/diplomas, 2 years for bachelor's, 3 years for master's/PhD) and study duration in New Zealand."
    },
    {
        question: "What are the popular study destinations in New Zealand?",
        answer: "Auckland (largest city with most universities), Wellington (capital city with government opportunities), Christchurch (rebuilt modern city), Hamilton (student-friendly atmosphere), Dunedin (traditional university town), and Palmerston North (central location with lower living costs)."
    },
    {
        question: "Is health insurance mandatory for international students?",
        answer: "Yes, international students must have appropriate health and travel insurance for the duration of their stay. This typically costs NZ$600-900 per year. Many universities offer group health insurance schemes for international students at competitive rates."
    }
];

// DOM Elements
let activeSection = 'why-study';
let expandedFAQ = null;

// Navigation functionality
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });
}

function scrollToSection(sectionId) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    activeSection = sectionId;
}

// Populate Universities Table
function populateUniversities() {
    const tbody = document.getElementById('universities-tbody');

    universities.forEach(university => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <span class="ranking-badge">#${university.qsRanking}</span>
            </td>
            <td style="font-weight: 600; color: #1f2937;">${university.name}</td>
            <td>
                <div class="location-cell">
                    <i class="fas fa-map-marker-alt" style="color: #6b7280;"></i>
                    <span style="color: #6b7280;">${university.location}</span>
                </div>
            </td>
            <td style="color: #6b7280;">${university.established}</td>
            <td>
                <div class="programs-tags">
                    ${university.programs.slice(0, 3).map(program =>
            `<span class="program-tag">${program}</span>`
        ).join('')}
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Populate Polytechnics
function populatePolytechnics() {
    const grid = document.getElementById('polytechnics-grid');

    polytechnics.forEach(polytechnic => {
        const card = document.createElement('div');
        card.className = 'polytechnic-card';
        card.innerHTML = `
            <div class="polytechnic-header">
                <i class="fas fa-building"></i>
                <span class="established-badge">Est. ${polytechnic.established}</span>
            </div>
            <h3>${polytechnic.name}</h3>
            <p class="specialization">${polytechnic.specialization}</p>
            <p class="polytechnic-location">
                <i class="fas fa-map-marker-alt"></i>
                ${polytechnic.location}
            </p>
        `;
        grid.appendChild(card);
    });
}

// Populate Courses
function populateCourses() {
    const grid = document.getElementById('courses-grid');

    courses.forEach(course => {
        const demandClass = course.demandLevel.toLowerCase().replace(' ', '-');
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-header">
                <h3>${course.name}</h3>
                <span class="demand-badge demand-${demandClass}">${course.demandLevel}</span>
            </div>
            <div class="course-details">
                <div class="course-detail">
                    <i class="fas fa-clock"></i>
                    <span>${course.duration}</span>
                </div>
                <div class="course-detail growth">
                    <i class="fas fa-chart-line"></i>
                    <span>${course.jobGrowth}</span>
                </div>
            </div>
            <div class="course-salary">
                <span>Average Salary:</span>
                <span>${course.averageSalary}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Populate Process Timeline
function populateProcess() {
    const timeline = document.getElementById('process-timeline');

    processSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'process-step';
        stepElement.innerHTML = `
            <div class="process-content">
                <div class="process-timeframe">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${step.timeframe}</span>
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
            <div class="process-number">${step.step}</div>
        `;
        timeline.appendChild(stepElement);
    });
}

// Populate FAQ
function populateFAQ() {
    const container = document.getElementById('faq-container');

    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.className = 'faq-item';
        faqElement.innerHTML = `
            <button class="faq-question" data-index="${index}">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${faq.answer}
                </div>
            </div>
        `;
        container.appendChild(faqElement);
    });

    // Add click handlers for FAQ items
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'));
            toggleFAQ(index);
        });
    });
}

function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];

    if (expandedFAQ === index) {
        // Close the currently expanded FAQ
        clickedItem.classList.remove('active');
        expandedFAQ = null;
    } else {
        // Close any previously expanded FAQ
        if (expandedFAQ !== null) {
            faqItems[expandedFAQ].classList.remove('active');
        }

        // Open the clicked FAQ
        clickedItem.classList.add('active');
        expandedFAQ = index;
    }
}

// Intersection Observer for navigation highlighting
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Update active nav item
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-section') === sectionId) {
                        item.classList.add('active');
                    }
                });

                activeSection = sectionId;
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    populateUniversities();
    populatePolytechnics();
    populateCourses();
    populateProcess();
    populateFAQ();
    initScrollSpy();

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add some interactive animations
function addInteractiveAnimations() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and animated elements
    const animatedElements = document.querySelectorAll('.feature-card, .fact-card, .course-card, .polytechnic-card, .process-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations after a short delay
setTimeout(addInteractiveAnimations, 500);

// Upadted hero section slides shifting
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-slide every 6 seconds
setInterval(showNextSlide, 4000);

// hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});


// backend of form

const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      const res = await fetch("http://localhost:4000/submit-form", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      alert(data.message);
    });
