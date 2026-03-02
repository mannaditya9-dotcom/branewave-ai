// ===== SMOOTH SCROLL =====
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SCROLL EVENTS =====
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTop');
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
        navbar.classList.add('scrolled');
    } else {
        scrollBtn.classList.remove('visible');
        navbar.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU =====
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// ===== SYLLABUS DATA =====
const syllabusData = {
    cad: {
        title: "📘 CAD – Computer Aided Design",
        units: [
            {
                name: "Unit 1: Introduction to CAD",
                topics: ["Introduction to CAD software", "CAD applications in engineering", "Coordinate systems", "Basic drawing setup"]
            },
            {
                name: "Unit 2: 2D Drawing Commands",
                topics: ["Line, Circle, Arc", "Trim, Extend, Offset", "Layers and properties", "Dimensioning"]
            },
            {
                name: "Unit 3: Editing Tools",
                topics: ["Move, Copy, Rotate", "Mirror, Scale", "Hatch and text"]
            },
            {
                name: "Unit 4: 3D Modeling Basics",
                topics: ["3D primitives", "Extrude and Revolve", "Basic rendering"]
            }
        ]
    },
    cloud: {
        title: "☁️ Cloud Computing",
        units: [
            {
                name: "Unit 1: Introduction to Cloud",
                topics: ["Cloud computing concepts", "Advantages & challenges", "NIST characteristics"]
            },
            {
                name: "Unit 2: Cloud Architecture",
                topics: ["NIST reference architecture", "Virtualization basics", "Hypervisors"]
            },
            {
                name: "Unit 3: Service Models",
                topics: ["IaaS", "PaaS", "SaaS"]
            },
            {
                name: "Unit 4: Deployment Models",
                topics: ["Public cloud", "Private cloud", "Hybrid cloud"]
            },
            {
                name: "Unit 5: DevOps & Security",
                topics: ["DevOps basics", "Cloud security fundamentals"]
            }
        ]
    },
    dsa: {
        title: "💻 Data Structures & Algorithms",
        units: [
            {
                name: "Unit 1: Introduction",
                topics: ["Basic concepts", "Time and space complexity"]
            },
            {
                name: "Unit 2: Arrays and Strings",
                topics: ["Operations on arrays", "Searching techniques"]
            },
            {
                name: "Unit 3: Linked Lists",
                topics: ["Singly linked list", "Doubly linked list"]
            },
            {
                name: "Unit 4: Stack and Queue",
                topics: ["Stack operations", "Queue operations", "Applications"]
            },
            {
                name: "Unit 5: Trees and Graphs",
                topics: ["Binary trees", "Traversals", "Graph basics"]
            }
        ]
    },
    os: {
        title: "🖥️ Operating System",
        units: [
            {
                name: "Unit 1: Introduction to OS",
                topics: ["Functions of OS", "Types of OS"]
            },
            {
                name: "Unit 2: Process Management",
                topics: ["Process states", "Scheduling algorithms"]
            },
            {
                name: "Unit 3: Memory Management",
                topics: ["Paging", "Segmentation", "Virtual memory"]
            },
            {
                name: "Unit 4: File System",
                topics: ["File operations", "Directory structure"]
            },
            {
                name: "Unit 5: Deadlocks",
                topics: ["Deadlock conditions", "Prevention and avoidance"]
            }
        ]
    },
    toc: {
        title: "🔢 Theory of Computation",
        units: [
            {
                name: "Unit 1: Automata Theory",
                topics: ["Finite automata", "DFA & NFA"]
            },
            {
                name: "Unit 2: Regular Expressions",
                topics: ["Regular languages", "Conversions"]
            },
            {
                name: "Unit 3: Context Free Grammar",
                topics: ["CFG basics", "Parse trees"]
            },
            {
                name: "Unit 4: Turing Machine",
                topics: ["Concept", "Applications"]
            },
            {
                name: "Unit 5: Decidability",
                topics: ["Recursive languages", "Undecidable problems"]
            }
        ]
    },
    dbms: {
        title: "🗄️ Database Management System",
        units: [
            {
                name: "Unit 1: Introduction to DBMS",
                topics: ["Database concepts & architecture", "Data models (ER Model)", "Schema & instances"]
            },
            {
                name: "Unit 2: Relational Model",
                topics: ["Relational algebra", "Tuple & domain calculus", "Keys (Primary, Foreign, Candidate)"]
            },
            {
                name: "Unit 3: SQL",
                topics: ["DDL, DML, DCL commands", "Joins & subqueries", "Views & indexes"]
            },
            {
                name: "Unit 4: Normalization",
                topics: ["Functional dependencies", "1NF, 2NF, 3NF, BCNF", "Decomposition"]
            },
            {
                name: "Unit 5: Transaction Management",
                topics: ["ACID properties", "Concurrency control", "Recovery techniques"]
            }
        ]
    }
};

// ===== OPEN SYLLABUS MODAL =====
function openSyllabus(subject) {
    const data = syllabusData[subject];
    const modal = document.getElementById('syllabusModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = data.title;

    let html = '';
    data.units.forEach(unit => {
        html += `<h4>${unit.name}</h4><ul>`;
        unit.topics.forEach(topic => {
            html += `<li>${topic}</li>`;
        });
        html += '</ul>';
    });

    body.innerHTML = html;
    modal.classList.add('active');
}

// ===== CLOSE MODAL =====
function closeModal() {
    document.getElementById('syllabusModal').classList.remove('active');
}

// Close modal on overlay click
document.getElementById('syllabusModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ===== FORM SUBMIT =====
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting BrainWave AI! We will get back to you soon. 🧠');
    event.target.reset();
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.course-card, .material-card, .feature-item, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});