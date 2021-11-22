// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license!='none') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of contents
  1. [description](#description)
  2. [installation](#installation)
  3. [github](#github)
  4. [usage](#usage)
  
  # Description <a name='description'></a>
  ## ${data.description}
  #
  # Installation <a name='installation'></a>
  ## ${data.installation}
  #
  # github <a name='github'></a>
  ## ${data.github}
  #
  # Usage <a name='usage'></a>
  ## ${data.usage}
  
# ${renderLicenseBadge(data.license)}
# ${renderLicenseLink(data.license)}
 ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
