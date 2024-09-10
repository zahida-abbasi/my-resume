const profile = {
    name: "Zahida",
    jobTitle: "Frontend Web Developer",
    contact: {
        phone: "0316-2057552",
        location: "Karachi, Pakistan",
        website: "zaheda.abbasi@gmail.com"
    },
    socialLinks: [
        { name: "Instagram", url: "https://instagram.com", iconClass: "fa fa-instagram" },
        { name: "Twitter", url: "https://twitter.com", iconClass: "fa fa-twitter" },
        { name: "LinkedIn", url: "https://linkedin.com", iconClass: "fa fa-linkedin" },
        { name: "Behance", url: "https://behance.com", iconClass: "fa fa-behance" }
    ],
    aboutMe: `I'm a web developer at Code Lab, specializing in web development, graphic design, and Python. I have experience in video editing, responsive design, social media management, and prototyping. I am continuously learning new skills and technologies to enhance my expertise and actively engage with the professional community.`,
    experience: [
        { role: "Technical Consultant - Web Design", company: "code lab", period: "Apr 2018 - Now" },
        { role: "Web Designer", company: "soft code", period: "Jan 2018 - Apr 2018" },
        { role: "junior Web Developer", company: "industrial ltd", period: "Aug 2017 - Dec 2017" }
    ],
    education: [
        { degree: "Masters In Islamic Studies", school: "Karachi University ", period: "Jan 2006 - Apr 2008" },
        { degree: "Bachlor Of Arts", school: "Board Of Intermediat Karachi", period: "june 2002 - Dec 2004" },
        { degree: "High School", school: "Govt Girls Secondary School", period: "Jan 1999 - Jun 2000" }
    ],
    programmingSkills: ["HTML5", "CSS3", "JavaScript", "Typescript", "ReactJs", "BootStrap", "NextJs", "Python"],
    softwareSkills: [
        { name: "Video Editing", proficiency: "90%" },
        { name: "Photoshop", proficiency: "75%" },
        { name: "InDesign", proficiency: "85%" },
        { name: "Dreamweaver", proficiency: "65%" }
    ],
    interests: ["Art", "Books", "Movies", "Music", "Games"]
};
// Function to render the profile dynamically
function renderProfile(profile) {
    const container = document.getElementById('resume-container');
    container.innerHTML = `
        <div class="left-column">
            <div class="profile">
                <h2>${profile.name}</h2>
                <h3>${profile.jobTitle}</h3>
            </div>
            <div class="about-me">
                <h4>about me</h4>
                <p>${profile.aboutMe}</p>
            </div>
            <div class="contact">
                <h4>contact me</h4>
                <p>📞 ${profile.contact.phone}</p>
                <p>📍 ${profile.contact.location}</p>
                <p>🌐 ${profile.contact.website}</p>
            </div>
            <div class="social-links">
                <h4>follow me</h4>
                <ul>
                    ${profile.socialLinks.map(link => `<li><a href="${link.url}"><i class="${link.iconClass}"></i> ${link.name}</a></li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="right-column">
            <div class="section experience">
                <h4>experience</h4>
                <ul>
                    ${profile.experience.map(job => `<li><strong>${job.role}</strong><br>${job.company} (${job.period})</li>`).join('')}
                </ul>
            </div>
            <div class="section education">
                <h4>education</h4>
                <ul>
                    ${profile.education.map(edu => `<li><strong>${edu.degree}</strong><br>${edu.school} (${edu.period})</li>`).join('')}
                </ul>
            </div>
            <div class="section programming-skills">
                <h4>programming skills</h4>
                <ul>
                    ${profile.programmingSkills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="section software-skills">
                <h4>software skills</h4>
                <ul>
                    ${profile.softwareSkills.map(software => `<li>${software.name} - ${software.proficiency}</li>`).join('')}
                </ul>
            </div>
            <div class="section interests">
                <h4>interests</h4>
                <ul>
                    ${profile.interests.map(interest => `<li>${interest}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}
// Call the render function to display the resume
renderProfile(profile);
export {};
