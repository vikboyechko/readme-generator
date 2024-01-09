// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badgeBaseUrl = "https://img.shields.io/badge/License-";
    const licenseWithUnderscore = license.replace(/ /g, "_"); // Replaces spaces with underscores to model the badge formatting
    const licenseBadge = `${badgeBaseUrl}${licenseWithUnderscore}-blue`;
    return `![Static Badge](${licenseBadge})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "Apache License 2.0":
            return `[${license}](https://opensource.org/license/apache-2-0/)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        const licenseElements = [
            `## License
${renderLicenseBadge(license)}

This project is licensed under ${renderLicenseLink(license)}`,
        ];
        return licenseElements;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const title = data.title ? `# ${data.title}` : "";
    return `${title}
${renderLicenseSection(data.license)}

## Project Description
${data.description}

## Table of Contents

## Installation Instructions
${data.installation}

## Usage Instructions
${data.usage}

## Contribution Instructions
${data.contributing}

## Testing Instructions
${data.tests}

## Questions


`;
}

module.exports = generateMarkdown;
