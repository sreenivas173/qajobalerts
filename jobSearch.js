const jobs = [
  {
    portal: "LinkedIn",
    role: "QA Manager",
    link: "https://www.linkedin.com/jobs/search/?keywords=QA%20Manager&location=India"
  },
  {
    portal: "LinkedIn",
    role: "Test Manager",
    link: "https://www.linkedin.com/jobs/search/?keywords=Test%20Manager&location=India"
  },
  {
    portal: "Naukri",
    role: "QA Manager",
    link: "https://www.naukri.com/qa-manager-jobs"
  },
  {
    portal: "Naukri",
    role: "Test Manager",
    link: "https://www.naukri.com/test-manager-jobs"
  },
  {
    portal: "Foundit",
    role: "QA Engineering Manager",
    link: "https://www.foundit.in"
  }
];

let html = `
<h2>QA Manager / Test Manager Daily Search Links</h2>
`;

jobs.forEach(job => {
  html += `
    <p>
      <b>${job.portal}</b><br>
      ${job.role}<br>
      <a href="${job.link}">Open Jobs</a>
    </p>
    <hr>
  `;
});

module.exports = html;