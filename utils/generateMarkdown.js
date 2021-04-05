// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return `## License 
![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""; 
}

function renderCollab(credits) {
  if (credits) {
    return `## Collaborators
${credits}`
  }
  return "";
}

function renderTests(testsConfirm) {
  if (testsConfirm) {
    return `## Tests
${testsConfirm}`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name}

## About 
${data.about}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Questions](#questions)

    

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseBadge(data.license)}

${renderCollab(data.credits)}

${renderTests(data.testsConfirm)}

## Questions?
[Github](www.github.com/${data.github})

Or contact me at: ${data.email}

  `;
}

module.exports = generateMarkdown;
