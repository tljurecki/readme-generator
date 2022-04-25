# README Generator

  # README Generator
  https://github.com/tljurecki/README Generator

  ## Description
  An application to help developers creaete a professional README.md for their portfolio

  ## Table of Contents
  * [Installation] (#installation)
  * [Use] (#use)
  * [License] (#license) function renderLicenseBadge(license) {
  if (license === 'None') {
    return ' ';
  } if (license === 'MIT') {
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
  * [Contributors] (#contributors)
  * [Test] (#test)
  * [Questions] (#email)
  
  ## Installation
  The following need to be installed in order to run this application: $Node.js, inquirer

  ## Use
  In order to use this application, Install node.js and inquirer.  Run node index.js from the command line and  answer the prompts to create a README.md 

  # License
  function renderLicenseSection(license) {
  if (!license) {
    return '';
  } return `
  # [License] (#table-of-contents)
  This project is licensed under the ${renderLicenseLink(license)}
  `;
    
  
} function renderLicenseBadge(license) {
  if (license === 'None') {
    return ' ';
  } if (license === 'MIT') {
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

  # Contributors
  Contributors to this application: 

  # Tests
  The following is needed to run tests on this application: Run node index.js from the command line

  # Questions
  If you have any questions about this repository or the application, please contact tljurecki at tljurecki@github.com 
