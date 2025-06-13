 document.addEventListener('DOMContentLoaded', function () {
            // Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const isOpen = navLinks.classList.contains('active');
                hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Close menu when a link is clicked (on mobile)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            });

            // Form submission handling
            const contactForm = document.getElementById('helpwaleContactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    let isValid = true;
                    contactForm.querySelectorAll('[required]').forEach(input => {
                        if (!input.value.trim()) {
                            isValid = false;
                            input.style.borderColor = 'red';
                        } else {
                            input.style.borderColor = 'var(--clr-border)';
                        }
                    });

                    if (isValid) {
                        alert('Thank you for your message! We will get back to you soon.');
                        contactForm.reset();
                        contactForm.querySelectorAll('[required]').forEach(input => {
                            input.style.borderColor = 'var(--clr-border)';
                        });
                    } else {
                        alert('Please fill in all required fields.');
                    }
                });
            }

            // Update copyright year
            document.getElementById('currentYear').textContent = new Date().getFullYear();

            // Active navigation link highlighting
            const navLinksItems = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('section[id]');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinksItems.forEach(link => {
                    link.parentElement.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href && href.substring(1) === current) {
                        link.parentElement.classList.add('active');
                    }
                });

                if ((pageYOffset < sections[0].offsetTop - (sections[0].clientHeight / 3)) || !current) {
                    navLinksItems.forEach(link => link.parentElement.classList.remove('active'));
                    const homeLink = document.querySelector('nav a[href="#"]');
                    if (homeLink) {
                        homeLink.parentElement.classList.add('active');
                    }
                }
            });
        });
    
// Auth Modal Logic
document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const modal = document.getElementById('authModal');
  const closeBtn = document.getElementById('authClose');
  const toggleForm = document.getElementById('toggleForm');
  const formTitle = document.getElementById('formTitle');
  const authSubmit = document.getElementById('authSubmit');
  const toggleText = document.getElementById('toggleText');
  const nameField = document.getElementById('nameField');
  let isLogin = true;

  function showModal(login = true) {
    isLogin = login;
    modal.classList.remove('hidden');
    if (isLogin) {
      formTitle.textContent = 'Login';
      authSubmit.value = 'Log in';
      toggleText.innerHTML = `Don't have an account? <a href="#" id="toggleForm">Sign up</a>`;
      nameField.style.display = 'none';
    } else {
      formTitle.textContent = 'Sign Up';
      authSubmit.value = 'Sign up';
      toggleText.innerHTML = `Already have an account? <a href="#" id="toggleForm">Log in</a>`;
      nameField.style.display = 'flex';
    }
    // Reattach toggle listener
    document.getElementById('toggleForm').addEventListener('click', (e) => {
      e.preventDefault();
      showModal(!isLogin);
    });
  }

  loginBtn.addEventListener('click', e => {
    e.preventDefault();
    showModal(true);
  });

  signupBtn.addEventListener('click', e => {
    e.preventDefault();
    showModal(false);
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Dummy Auth Handler
  document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const pass = document.getElementById('authPassword').value.trim();
    if (isLogin) {
      if (email === "user@example.com" && pass === "1234") {
        alert("Login successful!");
        location.reload();
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Signup successful! You can now log in.");
      showModal(true);
    }
  });
});
