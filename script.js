/* =================================
   CURRENT YEAR
================================= */

const yearElements = document.querySelectorAll("#year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


/* =================================
   LIVE CLOCK
================================= */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) {
        return;
    }

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.textContent =
        hours + ":" +
        minutes + ":" +
        seconds + " " +
        period;
}

setInterval(updateClock, 1000);

updateClock();


/* =================================
   DYNAMIC GREETING
================================= */

function setGreeting() {

    const greeting = document.getElementById("greeting");

    if (!greeting) {
        return;
    }

    const hour = new Date().getHours();

    if (hour < 12) {

        greeting.textContent =
            "Good morning! Have a productive day.";

    } else if (hour < 17) {

        greeting.textContent =
            "Good afternoon! Welcome to my portfolio.";

    } else {

        greeting.textContent =
            "Good evening! Thanks for visiting.";

    }
}

setGreeting();


/* =================================
   DARK / LIGHT MODE
================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);

    updateThemeIcon();
}


function updateThemeIcon() {

    const button =
        document.querySelector(".theme-btn i");

    if (!button) {
        return;
    }

    if (document.body.classList.contains("dark")) {

        button.className = "fas fa-sun";

    } else {

        button.className = "fas fa-moon";

    }
}


if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark");

}

updateThemeIcon();


/* =================================
   PRINT RESUME
================================= */

function printResume() {

    window.print();

}


/* =================================
   PRINT BIO-DATA
================================= */

function printBioData() {

    window.print();

}


/* =================================
   PROJECT FILTER
================================= */

function filterProjects(category) {

    const cards =
        document.querySelectorAll(".project-card");

    const buttons =
        document.querySelectorAll(".filter");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    cards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =================================
   SKILL CALCULATOR
================================= */

function calculateSkill() {

    const html =
        Number(document.getElementById("htmlSkill").value);

    const css =
        Number(document.getElementById("cssSkill").value);

    const javascript =
        Number(document.getElementById("jsSkill").value);

    const python =
        Number(document.getElementById("pythonSkill").value);

    const ml =
        Number(document.getElementById("mlSkill").value);

    const database =
        Number(document.getElementById("databaseSkill").value);


    const skills = [
        html,
        css,
        javascript,
        python,
        ml,
        database
    ];


    /* Check values */

    for (let i = 0; i < skills.length; i++) {

        if (
            skills[i] < 0 ||
            skills[i] > 100 ||
            isNaN(skills[i])
        ) {

            alert(
                "Please enter values between 0 and 100."
            );

            return;
        }

    }


    /* Calculate average */

    const total =
        html +
        css +
        javascript +
        python +
        ml +
        database;


    const average =
        Math.round(total / skills.length);


    let grade;
    let message;


    /* Determine grade */

    if (average >= 90) {

        grade = "Excellent";
        message =
            "Outstanding technical performance!";

    } else if (average >= 80) {

        grade = "Very Good";
        message =
            "You have strong technical skills.";

    } else if (average >= 70) {

        grade = "Good";
        message =
            "You have a good technical foundation.";

    } else if (average >= 60) {

        grade = "Average";
        message =
            "Keep practising to improve your skills.";

    } else {

        grade = "Beginner";
        message =
            "Keep learning and building projects.";

    }


    /* Display result */

    document.getElementById("score")
        .textContent = average;

    document.getElementById("skillGrade")
        .textContent = grade;

    document.getElementById("skillMessage")
        .textContent = message;


    /* Animate result */

    const result =
        document.getElementById("skillResult");

    result.style.transform = "scale(0.95)";

    setTimeout(function() {

        result.style.transform = "scale(1)";

    }, 150);

}


/* =================================
   CONTACT FORM VALIDATION
================================= */

function submitForm() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "") {

        alert("Please enter your name.");

        return false;
    }


    if (email === "") {

        alert("Please enter your email.");

        return false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;
    }


    if (subject === "") {

        alert("Please enter a subject.");

        return false;
    }


    if (message === "") {

        alert("Please enter your message.");

        return false;
    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    document.querySelector(".contact-form").reset();

    return false;
}


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(
        ".resume-card, .info-card, .project-card, " +
        ".education-card, .hobby-card, .contact-item"
    );


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(function(element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop <
            windowHeight - 70) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "all 0.6s ease";

});


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =================================
   CONSOLE MESSAGE
================================= */

console.log(
    "Welcome to Celina Das's Portfolio Website!"
);

console.log(
    "Website created using HTML, CSS and JavaScript."
);