var nodemailer = require('nodemailer');
const core = require("@actions/core");

const user_email = core.getInput("user_email");
const email = core.getInput("email");
const password = core.getInput("pass")
let syntax_check_job
let test_execution_job
let build_statics_job
let deploy_job

core.getInput("syntax_check_job") == 'success' ? syntax_check_job = 'success' : syntax_check_job = "error";
core.getInput("test_execution_job") == 'success' ? test_execution_job = 'success' : test_execution_job = "error";
core.getInput("build_statics_job") == 'success' ? build_statics_job = 'success' : build_statics_job = "error";
core.getInput("deploy_job") == 'success' ? deploy_job = 'success' : deploy_job = "error";

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