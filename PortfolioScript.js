// Glowing light effect
const glow = document.getElementById("glow")

document.addEventListener("mousemove", (e) => {
  const x = e.clientX
  const y = e.clientY
  glow.style.left = x + "px"
  glow.style.top = y + "px"
})

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add intersection observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections and task elements
document.querySelectorAll("section, .task").forEach((element) => {
  observer.observe(element)
})

// Add hover effect for task titles with arrows
document.querySelectorAll(".task h3").forEach((title) => {
  title.addEventListener("mouseenter", () => {
    title.style.color = "var(--green)"
  })

  title.addEventListener("mouseleave", () => {
    title.style.color = "var(--lightest-slate)"
  })
})


// Make social icons clickable
document.querySelectorAll(".social-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default behavior
  
      const url = icon.getAttribute("href"); // Get the href attribute
      if (url) {
        window.open(url, "_blank"); // Open in a new tab
      } else {
        console.warn("No URL found for:", icon);
      }
    });
  });
  

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Project title hover effects
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.color = 'var(--green)';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.color = 'var(--lightest-slate)';
    });
});
