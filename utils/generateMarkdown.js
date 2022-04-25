// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${data.title}
  https://github.com/${data.github}/${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation] (#installation)
  * [Use] (#use)
  * [License] (#license)
  * [Contributors] (#contributors)
  * [Test] (#test)
  * [Questions] (#email)
  
  ## Installation
  The following need to be installed in order to run this application: $${data.installation}

  ## Use
  In order to use this application, ${data.use}

  # License
  This project is licensed under the ${data.license} license.

  # Contributors
  Contributors to this application: ${data.contributors}

  # Tests
  The following is needed to run tests on this application: ${data.test}

  # Questions
  If you have any questions about this repository or the application, please contact ${data.github} at ${data.email} 
`;
}

module.exports = generateMarkdown;
