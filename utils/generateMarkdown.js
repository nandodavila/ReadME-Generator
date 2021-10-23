// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "") { 
    return " "
  } else {
    if (license === "MIT License") {
      return `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)`
    }
  }

  
// [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
// [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) 
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

  ${renderLicenseBadge}

  ### Table of Contents
  **[Discription](#discription)**<br>
  ${renderLicenseLink}
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
 
  ${data.test}

  ## Questions
  github: ${data.username}
  email: ${data.email}


  
`;
}

module.exports = generateMarkdown;
