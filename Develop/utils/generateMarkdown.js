function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
 ![Make it look like this](${data.avatarUrl})
 # ${data.email}
`;
}

module.exports = generateMarkdown;
