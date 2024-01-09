// Function to create a license badge based on the input
function renderLicenseBadge(license) {
    const badgeBaseUrl = "https://img.shields.io/badge/License-";
    const licenseWithUnderscore = license.replace(/ /g, "_"); // Replaces spaces with underscores to model the badge formatting
    const licenseBadge = `${badgeBaseUrl}${licenseWithUnderscore}-blue`;
    return `![Static Badge](${licenseBadge})`;
}

// Function to create the license link based on the input, using switch cases.
function renderLicenseLink(license) {
    switch (license) {
        case "Apache License 2.0":
            return `[${license}](https://opensource.org/license/apache-2-0/)`;
        case "GNU General Public License v3.0":
            return `[${license}](https://opensource.org/license/gpl-3-0/)`;
        case "MIT License":
            return `[${license}](https://opensource.org/license/mit/)`;
        case "BSD 2-Clause Simplified License":
            return `[${license}](https://opensource.org/license/bsd-2-clause/)`;
        case "BSD 3-Clause New or Revised License":
            return `[${license}](https://opensource.org/license/bsd-3-clause/)`;
        case "Boost Software License 1.0":
            return `[${license}](https://opensource.org/license/bsl-1-0/)`;
        case "Creative Commons Zero v1.0 Universal":
            return `[${license}](https://creativecommons.org/publicdomain/zero/1.0/)`;
        case "Eclipse Public License 2.0":
            return `[${license}](https://opensource.org/license/epl-2-0/)`;
        case "GNU General Public License v2.0":
            return `[${license}](https://opensource.org/license/gpl-2-0/)`;
        case "GNU Lesser General Public License v2.1":
            return `[${license}](https://opensource.org/license/lgpl-2-1/)`;
        case "Mozilla Public License 2.0":
            return `[${license}](https://opensource.org/license/mpl-2-0/)`;
        case "The Unlicense":
            return `[${license}](https://opensource.org/license/unlicense/)`;
        default:
            return "";
    }
}

// Function that combines the license badge, link, and text. Returns empty string if none is selected. Left indenting anything within the backtick because template literals will include the indents.
function renderLicenseSection(license) {
    if (license) {
        const licenseElements = `## License
${renderLicenseBadge(license)}

This project is licensed under ${renderLicenseLink(license)}`;
        return licenseElements;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // If title input exists, generate title
    const title = data.title ? `# ${data.title}` : "";

    // Initalize Table of Contents section with line break. If inputs exist, they'll be added individually.
    let tableOfContents = `## Table of Contents

`;

    // If description input exists, generate description header, content, and Table of Contents listing
    let description = "";
    if (data.description) {
        description = `## Project Description\n${data.description}\n`;
        tableOfContents += `- [Project Description](#project-description)\n`;
    }

    // If installation input exists, generate installation header, content, and Table of Contents listing
    let installation = "";
    if (data.installation) {
        installation = `## Installation Instructions\n${data.installation}\n`;
        tableOfContents += `- [Installation Instructions](#installation-instructions)\n`;
    }

    // If usage input exists, generate usage header, content, and Table of Contents listing
    let usage = "";
    if (data.usage) {
        usage = `## Usage Instructions\n${data.usage}\n`;
        tableOfContents += `- [Usage Instructions](#usage-instructions)\n`;
    }

    // If contributing input exists, generate contributing header, content, and Table of Contents listing
    let contributing = "";
    if (data.contributing) {
        contributing = `## Contributing Instructions\n${data.contributing}\n`;
        tableOfContents += `- [Contributing Instructions](#contributing-instructions)\n`;
    }

    // If testing input exists, generate testing header, content, and Table of Contents listing
    let test = "";
    if (data.test) {
        test = `## Testing Instructions\n${data.test}\n`;
        tableOfContents += `- [Testing Instructions](#testing-instructions)\n`;
    }

    const username = `github.com/${data.username}`; // get the username input
    const email = data.email; // get the email input

    // Begin to generate the README with one long template literal
    return `${title}
${renderLicenseSection(data.license)}

${tableOfContents}
${description}
${installation}
${usage}
${contributing}
${test}

## Questions
My GitHub profile: [${username}](${username})

My Email Address: [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
