// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//license badge info found at https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (!license) {
    return ' ';
  } else {
    renderLicenseSection(license);
  }
   if (license === 'MIT') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] 
    `;
  } if (license === 'ISC') {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)] 
    `;
  } if (license === 'APACHE') {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] 
    `;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//license link info found at https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } if (license === 'MIT') {
    return `
    (https://opensource.org/licenses/MIT) 
    `;
  } if (license === 'ISC') {
    return `
    (https://opensource.org/licenses/ISC) 
    `;
  } if (license === 'APACHE') {
    return `
    (https://opensource.org/licenses/Apache-2.0)
`;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } return `
  # [License] (#table-of-contents)
  This project is licensed under the ${renderLicenseLink(license)} ${renderLicenseBadge(license)}
  `;
    
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.title}
  https://github.com/${data.github}/${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * Installation
  * Use
  * License
  * Contributors
  * Test
  * Questions
  
  ## Installation
  The following need to be installed in order to run this application: ${data.installation}

  ## Use
  In order to use this application, ${data.use}

  
  # Contributors
  Contributors to this application: ${data.contributors}

  # Tests
  The following is needed to run tests on this application: ${data.test}

  # Questions
  If you have any questions about this repository or the application, please contact ${data.github} at ${data.email} 
`;
}

module.exports = generateMarkdown;
