function generateMarkdown(data) {
  return `
  ![Make it look like this](${data.avatarUrl})

  ## Project Title
   ${data.title}

  # Description
  ${data.description}

 ## Table of Contents 
 ${data.tableOfcontents}





 ## Contact
 Email:  ${data.email}

 # Instalation 
 ${data.installation}

  
 # Usage

 ${data.usage}



 # Licence
  ${data.licence}


 # Contibution 
 ${data.contribution}


 
 # Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
