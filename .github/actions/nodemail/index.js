var nodemailer = require('nodemailer');
const core = require("@actions/core");

const user_email = core.getInput("user_email");
const email = core.getInput("email");
const password = core.getInput("pass");
const syntax_check_job = core.getInput("syntax_check_job");
const test_execution_job = core.getInput("test_execution_job");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rmenendezaction@gmail.com',
        pass: password
    }
});

var mailOptions = {
  from: "<rmenendezaction@gmail.com>",
  to: user_email,
  subject: 'Resultado del workflow ejecutado',
  text:` Se ha realizado un push en la rama githubActions_improvement 
  que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados: \n
  \n test_execution_job: ${test_execution_job}
  \n syntax_check_job: ${syntax_check_job}
  \n build_statics_job: ${build_statics_job}
  \n deploy_job: ${deploy_job}`,
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  } 
});