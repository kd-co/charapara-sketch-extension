var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: generateSingleLine, generateParagraph, generateMultipleParagraph, generateCharapara */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSingleLine", function() { return generateSingleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateParagraph", function() { return generateParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMultipleParagraph", function() { return generateMultipleParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCharapara", function() { return generateCharapara; });
var words = ['കുറാപ്പുകെ', 'പിണി', 'ശുഭലീപക്ഷം', 'പന്തല', 'പകാങ്കില', 'തരുമുരു', 'കരുക്കിത', 'പൂപ്പ', 'കിന്നെ', 'പൈനാകുറ്റൂര്', 'തുണെരി', 'പിര്യന്ത്ര', 'തുരേമ', 'നിപ്ര', 'ലോപന', 'തോമാങ്ങാ', 'തിണതാനം', 'ധമപദടക്ഷം', 'പ്രവാലം', 'ചുറാഗി', 'ഒലാക്കി', 'സിട്ടു', 'മോച', 'മിപ്രസാര', 'സതാ', 'ബിറ', 'വൽമന്നിയം', 'ഓസ്സോട്', 'പിലെ', 'ചാപ്പചിങ്കു', 'ദേബേർ', 'മുട്ടാച്ചി', 'ചിറ്ററാകാനി', 'സൂനര്യടി', 'ഗൾസമ്പ്', 'ബില്ലായി', 'ഉൻസ', 'ഉളഗ്', 'അവലു', 'അലവളപിശകി', 'കുലോം', 'എന്നവ്യാ', 'പാടുമുടി', 'ലംബോണി', 'വസ്തി', 'ഉമാരെ', 'ല', 'കീഗ', 'യേദു', 'കലേദു', 'ദേജ', 'പുൾ', 'യാസോസി', 'പിസാപ്പി', 'ഹാർപവർബ്', 'ഈടപ്പൂ', 'കുദിമ', 'വളവൊളി', 'മാർക്കത്തി', 'വിസികെ', 'കാകിതൻ', 'മെണ്ടി', 'പാർകിസിമിതം', 'അഴിക്ഷെയി', 'മന്തലിക', 'ജനിപാൻ', 'സുമാരി', 'എപകടെ', 'തിങ്ങര', 'വെഭാരം', 'സുതിന്ന', 'ചുപരണ', 'വൃനിമ', 'വിരാദ', 'ചനാമ', 'ഗഗ', 'വാനിണേലം', 'ചയാമത്', 'വയപാലിമന', 'കമെസ്സായിണു', 'ഹിമ്പാമ', 'സെച്ചിന്തയാ', 'പലകുമും', 'വിസ്സപ്പണ്ടു', 'വൊളിയാ', 'കറ്റക്കൻ', 'ബിയോഹമസ്സം', 'ഹിമോചിനി', 'ഹൂചിമൻ', 'വടത', 'കേടി', 'ഹുംബ്രനാ', 'ചേമ്പക്കത്ത', 'ഗിംഗർ', 'പോടുത്താന്', 'മാശാ', 'നങ്ങു', 'ജുൻസാവ', 'പ്രധിബന്ന', 'മാഷിഹ്', 'ലമ്മാനാണ്', 'കാക്കൾട്ടും', 'കാണാകുള', 'ക്രിമീരവമാ', 'കണസ', 'കുണുങ്ങ', 'വെളക്കിലി', 'ചാഹിക്യമപ്പി', 'റാൻപാമ്പി', 'അലാകിരി', 'സിരിവകിര', 'ആരികി', 'നാമാവിശികു', 'ഷാരോമില', 'ഛാഗി', 'സാംനന്മാ', 'റൂ', 'ഇല്ലാപിക്യു', 'വിന്നജായു', 'ഏഹിമാ', 'നലസാഹി', 'ളാഹജ', 'ദിരിക്ഷാ', 'വോദർകദ്ധാ', 'സുമാളി', 'പോദിരി', 'വീദോസയ', 'പീദത', 'ബാസയ', 'ശയചിവി', 'സായിം', 'മേഹനാകിച്ചതാം', 'ലരിത്', 'മാന്തിര', 'ചപില', 'കോന്തുരാ', 'ആലമറുവർ', 'ഘടോൽക്കനവ്', 'കൗസ്‌ജെക്കി', 'മാറുവാതോ', 'ഉർഥാസി', 'അമു', 'കിടന്നരി', 'ലകും', 'വെർസെലെസ്സ', 'വിണ്ടി', 'ദന', 'വിഴിക്കുർമ', 'ദസേ', 'പിയാം', 'പൂപ്പകുമഗ്രി', 'യാടാപ്പങ്കും', 'ബീക്ക', 'കീകരിപ്പാടിച്ചക്കി', 'വകിഡ്', 'കശ്‌മീശ', 'കിങ്ങി', 'പകരതപ്പുക', 'കെപ്രാപിച്ച', 'ദീയഷീം', 'ലോപാമു', 'ആബി', 'എന്നൊച്ചി', 'ബീക്ക', 'കൃബേര', 'മടിപോസ്', 'പലവാണി', 'ബലക്കോ', 'പരിമാനാം', 'പസര്യ', 'ഇടിവെ', 'കലത്രിപാൻ', 'തഗൃഷ്യ', 'ചതുത', 'സബ്മസ', 'ബേഷനോ', 'ലേറി', 'ക്വാൻ', 'ഹമ്പസി', 'വിലമാലോ', 'ചൈതുറ', 'ശബഷാ', 'പ്യാരി', 'മനോ', 'ഹെയ്‌യാം', 'ശലപായ്ക', 'തിലവിക', 'ത്രികബ', 'പ്രമൻസാദ്', 'പ്രിലോക', 'ചക്വാ', 'ചിലസ്‌കാ', 'ഹമ്പറിത്തെ', 'അമ്പൂളീശ്', 'അവമിത്തിൽ', 'കുമ്പാമ്പിലി', 'പ്രിത്തോണെ', 'പിക്കിരിപ്പാപ്പി', 'വിലാക്കിനി', 'ചും', 'സിലരിതിൽ', 'ചുമ്മാരേച്ചും', 'സിലനിലെ', 'ശോമാ', 'ഹയമ്മതി', 'ചിച്ചുമ്മാ', 'അന്നരെ', 'പൂഞ്ചി', 'ലമ്പുരം', 'കഞ്ചി', 'കുന്ദരം', 'കുലകളം', 'കുശ്‌ചകം', 'സുണ്ടയാം', 'ബിംബ്ര', 'കണ്ണ', 'നച്ചതോ', 'സുപ്രിധം', 'താളാവ്', 'ലവലാസ്', 'അന്ദ്ര', 'കയറാക', 'ലിങ്കണി', 'ലുഡ്‌കെ', 'വെകളി', 'വുങ്ക', 'ജുനമ്പരെ', 'മിസ്ത', 'കണ്ടാല്പി', 'നാജുംന', 'ജംബൂസ', 'യുബില', 'ഹൈശി', 'പിതാക്ക', 'ലൂംഞ്ഞ', 'സുംബാ', 'തുംനേ', 'കുപില', 'ലുവികം', 'കജം', 'ദുശ്ചിഗ', 'തദസ്തി', 'മറാ', 'പാനതാനി', 'ധും', 'മാദരനു', 'എളിയിച്ച', 'മറെ', 'വിശ്വഗാ', 'കരിലേന്തി', 'കന്തവെ', 'കിണി', 'പഴിത്തേടി', 'പേറോമനെ', 'കിനാട്‌', 'സഹഫർണോ', 'പാന്തേച്ചി', 'കുസാബി', 'സുമസി', 'ചുക്കാര്ഥ്യം', 'മർജലയം', 'ബ്ലാക്കൊലത്തി', 'സിരി', 'അക്ത', 'ഗൊണോ', 'ഹിരാടി', 'വിജകി', 'ലോലു', 'ഫാവു', 'നാക്കി', 'പ്ളാങ്കിൽ', 'കീച്ചു', 'കുമ്മകാങ്കോടി', 'കീബുഷ്‌ക', 'ഒക്കാക്ക', 'ക്ലച്ചി', 'പിക്കെ', 'പീനക്കടി', 'കുയമേ', 'കേർട്ടി', 'ആബിശാക്കി', 'കീഴ്നട്ട', 'നിഗ്ഗലുണ്ടി', 'തീഡ്രത്തി', 'ജിംഗ്രത', 'മേപ്രസ്വരൂപിണി', 'വർത്തിതം', 'എന്നാമിസ', 'ജിംബ്രൻസേന', 'തുണ്ടിത്തേ', 'പച്ചളിച്ചു', 'പുൽത്തരി', 'സാദൂഹരിണ', 'പള്ളത്തി', 'മർക്കശ്ശേന', 'പിച്ചിളിപ്പോ', 'സുടുവിസ്താ', 'ശ്ലേഷിപ്പു', 'തോജ്ജിക്കെട്ടി', 'പരിഞ്ഞു', 'കളത്തിപ്പോ', 'ഗോയ', 'നച്ചതോ', 'ഹൈശി', 'സെയ്താലി', 'ടൂർക്കൊണ്ടി', 'എയ്ഷാലി', 'സൊറടി', 'കോപാലുഗോ', 'ത്രകടം', 'ചലർണമായ', 'പലനം', 'ചാകുടം', 'ഗാണ്ടറ്റം', 'ഡാംണ്ട്സ്‌കി', 'ആംസാംരിൽ', 'ഖംനോവ്', 'ഉർണചം', 'രാമന്ദി', 'പൗലഞ്ഞ', 'ഷൂഖ്രതൻ', 'ലിംസിതം', 'ഡ്രിംണ്ടോ', 'നാകോ', 'പൂക്കോ', 'കോഴീതാപൊത്തിക്കോ', 'കിംബജിനരിയാരവം', 'കൂപ്പാൻകായ', 'വിക്ലങ്കൻ', 'തുംബി', 'കുലോൽകുലോം', 'പൊറകേച്ചി', 'ദുഷ്മേളിത', 'പശ്‌മളിത', 'ഗിൽവാഹന', 'കടക്തി', 'പതൽ', 'ശകടൻ', 'ഗോത്രീഹ', 'കുന്ദതിയ', 'ഗോവൽ', 'കവീത്ര', 'ബോജിത', 'പുതിയറ', 'ആറേഞ്ച്', 'ആയിഗ', 'ത്രവർസ', 'കംണചാ', 'മാച്ചിക്ക്', 'നിഷിക്കേറായ', 'കേസിത്തമാക്കാർ', 'ഒറിസൽ', 'പോമണികെയില', 'പുക്കബല', 'കലാപാലെ', 'ചെർണോസോപ്പ', 'സഹിലാക്ഷി', 'ജപ്പാളി', 'കിതരോ', 'കഥിനെതി', 'പിജലോ', 'കിളിമാര', 'ചേരനണ്ട', 'ഡോണാല', 'തിങ്ക്രാസോൽഖുദ', 'ഉൾട്ടോസം', 'കാലിമ്പി', 'ചെറാങ്കി', 'ഉപല', 'മാലകരൂപ്പച്ചി', 'പിജല', 'ടീകമാണ്ട', 'ഓത്തി', 'മദസ്തു', 'കാലിമ്പി', 'കിരണ്ട', 'സുഗാപ്പ', 'ചിമ്മത്തോ', 'സയോഗഫർത്ത', 'നിസ്‌മാർണിതം', 'ഉധീകരമറി', 'അക്രോണിപക', 'പാകതി', 'ഇൻമാതുള', 'മഴലി', 'പെൻമിറക്ക്', 'ആഞ്ഞിളംഞ്ഞാഴിക്കുട', 'ആക്‌സിച്ചില', 'ബാനി', 'കുടമലക്കിട', 'കൊച്ചാലിണ്ടര', 'ജോലിമമ്പാ', 'കസ്ഗമില്ല', 'ജിമ്പലക്കടി', 'ടിമലച്ചിടക്കുള', 'വിസ്ക്കിലാമിച്ച', 'കിവിളുടേഷ്', 'ബകമിച്ചുലസ്‌കി', 'ചിമ്മിഷ', 'അമെത്', 'സുസ്പെംദിഷ', 'ഉറസ്സാകേപ്പിക്ക', 'കാർക്കേറ്റതെയിട്ട', 'കുടാങ്', 'അപ്പിസ്ഥവത്ക്കരിക്കപ്പെട്ട', 'മാര്‍ക്കിസര്‍', 'കോസി', 'ജെരിയാം', 'സിലാണ്ട്രി', 'ദിഗോല്പ്പി', 'ഡോരാര്‍', 'തീപ്പാസ്‌തി', 'മെറുകെയിൽ', 'ആറുമേടി', 'വൻസ്മാല്യം', 'മണ്ണാത്തി', 'പിരഷ്മി', 'പുസത്തിനോക്കാൻ', 'പിഞ്ഞാണത്തി', 'മാലിച്ചു', 'പരാന്തി', 'ആഡോയിഴിഞ്ഞു', 'മ്പോയുറാപന്നു', 'സ്വാമതംബ', 'ലക്കിടി', 'മാമണ്ടി', 'ഗോളപ്പ്', 'ടംസറ്', 'ചവലോടി', 'സസിയ', 'വ്യോളി', 'ഭടികി', 'ദുക്കള', 'ഫ്രാള്ളിപ്പി', 'രബിജെസി', 'മിമ്മിചം', 'ധാടുത്താ', 'മിച്ച', 'നികുള്ളല്', 'തുവ', 'ചാണോ', 'ചാപ്പനൂയി', 'പോക്ക', 'മിന്ന', 'ടിക്ക', 'മിന്ന', 'സിനോതു', 'സിലുയ', 'ജിങ്കാസ്തു', 'മിന', 'സീസു', 'മിനാസ്‌ഥ', 'മിന്ത്', 'ന', 'നാ', 'ഡാപ്പീ', 'കിനായൈസ്ഥ', 'സുകാണുമ', 'സിക്കാനിമ', 'എന്താലി', 'തൊല്ല', 'ന്നിക്കു', 'മിക്കു', 'സംബതി', 'ജബുകളിടാ', 'ടഷ്കോ', 'ഈമാരാകുലെയ', 'സൂരികുടി', 'മാലാടികുലച്ചന്‍', 'മക്രിതല്പന', 'സിനോനദീയം', 'ജെലൂപ്', 'ഗൂടിതോമ', 'മതരപ്', 'അദിലൂമാ', 'മണ്ടാകിനീയമ്പ്രതി', 'കുഡോക്കിലാസി', 'താനീലിക്കറൂസി', 'കുജവാഹക്കനു', 'ബ്ലിഗോദുസ്ഥിതൻ', 'പ്ലാറ', 'പ്ലൂങ്ങോത്തരം', 'നികമ്മനം', 'സംയതോന', 'വകന്ന', 'സുമലീനം', 'സിലമാതു', 'അധോഗലം', 'ചിണിമാവരായം', 'സുലോ', 'സന്തുണി', 'ടൈലോമുതുഖ്യം', 'പർത്തിവ', 'കൽട', 'കേഡിക്കോ', 'അലോയ്', 'തെസ്ത്', 'കിൽപത', 'കാശയ', 'യായപ്രതി', 'പുഷ്യത്തെ', 'ദംബടോസ്കി', 'കുകുടച്ച', 'കിക്ടിവാ', 'മകജെ', 'വാളകൃത', 'തെരുമാനവ', 'ഡങ്കളിയാക്കി', 'കൂട്ടാല', 'മൂട്ടാല', 'കുന്തിലാന്തി', 'കുലക്കിമ', 'സുന്തക', 'കുസല', 'അംബുസക', 'പങ്കലിപ്പുലിയ', 'യൊരുകാലി', 'ദ്രുതന്തുമലെ', 'മാപ്രേഷ്ട', 'റണ്ടിനി', 'മക്രിന്ത', 'പുലരോന്തു', 'വിലമയകാരം', 'സോംബിജി'];
var paragraph_word_count = 50;
var paragraph_line_count = 3;
var line_word_count = [6, 8, 10];
var num_paragraphs = 1;
var num_lines = 0;
var temp_paragraph = '',
    temp_line = '',
    temp_markup;
var empty_selection_message = "⚠️ Please select a text layer to update the content";
function generateSingleLine(context) {
  var selection = context.selection;
  log(selection);

  if (selection.count() === 0) {
    context.document.showMessage(empty_selection_message);
  } else {
    for (var i = 0; i < selection.count(); i++) {
      if (selection[i].class() == "MSTextLayer") {
        temp_line = generateCharapara('line', 1);
        log(selection[i].setStringValue(temp_line));

        if (temp_line.length > 0) {
          context.document.showMessage("Updated Charapara! 🎉");
        }
      }
    }
  }
}
function generateParagraph(context) {
  var selection = context.selection;
  log(selection);

  if (selection.count() === 0) {
    context.document.showMessage(empty_selection_message);
  } else {
    for (var i = 0; i < selection.count(); i++) {
      if (selection[i].class() == "MSTextLayer") {
        temp_line = generateCharapara('paragraph', 1);
        log(selection[i].setStringValue(temp_line));

        if (temp_line.length > 0) {
          context.document.showMessage("Updated Charapara! 🎉");
        }
      }
    }
  }
}
function generateMultipleParagraph(context) {
  var selection = context.selection;
  log(selection);

  if (selection.count() === 0) {
    context.document.showMessage(empty_selection_message);
  } else {
    for (var i = 0; i < selection.count(); i++) {
      if (selection[i].class() == "MSTextLayer") {
        temp_line = generateCharapara('multi-paragraph', 3);
        log(selection[i].setStringValue(temp_line));

        if (temp_line.length > 0) {
          context.document.showMessage("Updated Charapara! 🎉");
        }
      }
    }
  }
}
function generateCharapara(type, paragraph_count) {
  temp_markup = '';
  temp_line = '';
  temp_paragraph = '';
  num_paragraphs = paragraph_count;

  if (type === 'line') {
    paragraph_count = 1;
    paragraph_line_count = 0;
  }

  while (paragraph_count > 0) {
    temp_paragraph = '';
    console.log(paragraph_count);

    for (var j = 0; j <= paragraph_line_count; j++) {
      temp_line = '';
      var rand_line_word_count = line_word_count[Math.floor(Math.random() * line_word_count.length)];

      for (var i = 0; i <= rand_line_word_count; i++) {
        temp_line = temp_line + words[Math.floor(Math.random() * words.length)] + ' ';
      }

      temp_line = temp_line.slice(0, -1) + '. ';
      console.log("One line added: " + temp_paragraph);
      temp_paragraph = temp_paragraph + temp_line;
    }

    temp_markup = temp_markup + temp_paragraph;

    if (type === 'multi-paragraph') {
      temp_markup = temp_markup + '\n\n';
    }

    paragraph_count = paragraph_count - 1;
  }

  return temp_markup;
}

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['generateSingleLine'] = __skpm_run.bind(this, 'generateSingleLine');
that['onRun'] = __skpm_run.bind(this, 'default');
that['generateParagraph'] = __skpm_run.bind(this, 'generateParagraph');
that['generateMultipleParagraph'] = __skpm_run.bind(this, 'generateMultipleParagraph')

//# sourceMappingURL=my-command.js.map