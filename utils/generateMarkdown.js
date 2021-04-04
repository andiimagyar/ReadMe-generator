// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "None"; 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

    # ${data.name}

    ## About 
    ${data.about}

    ## Installation]
     ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseBadge(data.license)}

  `;
}

module.exports = generateMarkdown;
