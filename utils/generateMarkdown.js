// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "") { 
    return " "
  } else {
    if (license.includes("MIT License")) {
      const mitBadge = '[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)'
      return mitBadge;
    }
    if (license.includes('Apache License 2.0')) {
      const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      return apacheBadge;
    }
    if (license.includes('GNU General Public License v3.0')) {
      const gnuBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      return gnuBadge;
  } return;
}
}


function renderLicenseLink(license) {
  if (license == "") { 
    return " "
  } else {
    return `**[Installation](#installation)**<br>`
  }
}


function renderLicenseSection(license) {
  if (license == "") { 
    return " "
  } else {
    return `## License \n This program uses ${license}`
  }
}


function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${renderLicenseBadge(data.license)}

  ### Table of Contents
  **[Discription](#discription)**<br>
  ${renderLicenseLink(data.license)}
  **[Usage](#usage)**<br>
  **[License](#license)**<br>
  **[Contributing](#contributing)**<br>
  **[Tests](#tests)**<br>
  **[Questions](#Questions)**<br>
  

  ## Discription 

  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ${renderLicenseSection(data.license)}

  ## Test
 
  ${data.tests}

  ## Questions
  github: ${data.username}
  email: ${data.email}

  ## Example
  ![screenshot](utils/images/TestReadMe.PNG)


  
`;
}

module.exports = generateMarkdown;
