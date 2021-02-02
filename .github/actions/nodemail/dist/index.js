module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

var nodemailer = __nccwpck_require__(531);
const core = __nccwpck_require__(931);

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

/***/ }),

/***/ 931:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 531:
/***/ ((module) => {

module.exports = eval("require")("nodemailer");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(211);
/******/ })()
;