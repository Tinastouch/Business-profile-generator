
const generateTeam = team => {
    console.log(team);
// Generate Manager html
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <section class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h3><i class="fas fa-mug-hot"></i> ${manager.name}</h3>
        </div>
        <div class="card-body text-primary">
          <h5 class="card-title">Manager</h5>
           <div class="card-body">
               <ul class="list-group">
                   <li class="list-group-item">ID:${manager.id}</li>
                   <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                   <li class="list-group-item">Office number: ${manager.officeNumber}</li>
               </ul>
        </div>
      </section>
      `;
        html.push(managerHtml);
    }
// Generate html for Engineer
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        
        <section class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h3><i class="fas fa-glasses"></i> ${engineer.name}</h3>
        </div>
        <div class="card-body text-primary">
          <h5 class="card-title">Engineer</h5>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID:${engineer.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                  <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
              </ul>
       </div>
     </section>
     `;
        html.push(engineerHtml);
    }

    // Generate Html for Intern
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
    
    <section class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3><i class="fas fa-graduation-cap"> ${intern.name}</i></h3>
    </div>
    <div class="card-body text-primary">
      <h5 class="card-title">Intern</h5>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School:${intern.school}</li>
                </ul>
         </div>
       </section>
       `;
        html.push(internHtml);
    }

    // Create a for loop to loop through the options depending on choice
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }

    }
    // Join html blocks
    return html.join('');
}

// exports the function to create the entire page
module.exports = team => {
    return`<!DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Our Team</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
                        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                            <link rel="stylesheet" href="../dist/style.css">
                                <script src="https://kit.fontawsome/c502137733.js"></script>
                                <title>Team Profile Generator</title>
                            </head>
                            <header>
                            <div class="header">
                                      <h1>Our Team</h1>
                                      <p>"Alone we can do so little; together we can do so much."</p>
                                    </div>
                                  
                            </header>
                            <body>
                            <main>
                            <div class="container">${generateTeam(team)}</div>
                             </main>
                </body>
            </html>`
  }

