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
  return `
  # **${data.title}**

  ### Table of Contents
  **[Discription](#discription)**<br>
  **[Installation](#installation)**<br>
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

  ## License

  ## Test
 

  ## Questions


  
`;
}

module.exports = generateMarkdown;
