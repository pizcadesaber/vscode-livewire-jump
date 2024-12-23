/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerCommands = registerCommands;
const vscode_1 = __webpack_require__(2);
const livewire_1 = __webpack_require__(3);
/**
 * Registers all commands for the extension.
 *
 * This function registers commands that the extension provides, adding them to the
 * extension's command subscriptions to ensure they are properly disposed of when the extension is deactivated.
 * In this case, it registers the command to jump from a Blade view to its associated Livewire PHP class.
 *
 * @param {ExtensionContext} context The context of the extension, used to manage subscriptions and commands.
 */
function registerCommands(context) {
    context.subscriptions.push(goToLivewireClass());
}
/**
 * Registers the command to jump to the corresponding Livewire PHP class file.
 *
 * This command allows quick navigation from a Blade view to its associated Livewire
 * PHP class file. It works by converting the relative path of a Blade view into
 * the corresponding Livewire PHP class file URI and opening the file in the editor.
 *
 * @returns {Disposable} A disposable object that can be used to manage the subscription,
 *                       which can be added to a list of subscriptions to be disposed of later.
 */
function goToLivewireClass() {
    return vscode_1.commands.registerTextEditorCommand('php.livewire.goToClass', async (textEditor) => {
        const view = livewire_1.blade.getView(textEditor.document.uri);
        if (!view) {
            vscode_1.window.showWarningMessage('The file path does not contain "/livewire/".');
            return;
        }
        const phpUri = view.getUri();
        vscode_1.workspace.openTextDocument(phpUri)
            .then(document => {
            vscode_1.window.showTextDocument(document);
        }, () => {
            vscode_1.window.showInformationMessage('PHP Class File not found: ' + phpUri.fsPath);
        });
    });
}


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.blade = void 0;
const vscode_1 = __webpack_require__(2);
const path_1 = __webpack_require__(4);
const change_case_1 = __webpack_require__(5);
/**
 * Namespace for handling Livewire Blade views.
 *
 * This namespace contains functions related to Livewire views, specifically for extracting
 * the relative path of a Blade view within the Livewire directory and converting that path
 * into the corresponding Livewire PHP class file URI.
 */
var blade;
(function (blade) {
    const LIVEWIRE_DIR = 'livewire';
    const COMPONENTS_DIR = 'components';
    class BladeView {
        type;
        path;
        constructor(path, type = 'view') {
            this.path = path;
            this.type = type;
        }
        /**
        * Gets the URI of the PHP class file corresponding to a Livewire Blade view.
        *
        * This function converts a Blade view's relative path to the corresponding Livewire PHP
        * class file URI. The PHP class is located under the "app/Livewire" directory.
        * The relative path of the Blade view is converted into PascalCase to match the PHP class naming convention.
        *
        * @param {blade.BladeView} bladeView The relative path of the Blade view inside the Livewire directory.
        * @returns {Uri} The URI of the corresponding Livewire PHP class file.
        */
        getUri() {
            let basePath = '';
            if (this.type === 'livewire') {
                basePath = 'app/Livewire';
            }
            else if (this.type === 'component') {
                basePath = 'app/View/Components';
            }
            else {
                vscode_1.window.showErrorMessage('Invalid Blade view type');
                return vscode_1.Uri.parse('');
            }
            return vscode_1.Uri.file((0, path_1.join)(vscode_1.workspace.workspaceFolders?.[0].uri.fsPath || '', basePath, ...this.path
                .slice(0, this.path.length - '.blade.php'.length)
                .split(path_1.sep)
                .map(part => (0, change_case_1.pascalCase)(part))
                ?? '') + '.php');
        }
    }
    blade.BladeView = BladeView;
    /**
     * Gets the relative path of a Blade view from its URI.
     *
     * This function extracts the relative path of a Livewire view file based on its URI.
     * It assumes that Blade views are stored in a directory called "livewire".
     * If the view is not part of the Livewire directory, an error message will be shown.
     *
     * @param {Uri} viewUri The URI of the Blade view.
     * @returns {BladeView | undefined} The relative path of the Blade view inside the Livewire directory,
     *                              or undefined if the view is not part of Livewire.
     */
    function getView(viewUri) {
        const viewFilePath = viewUri.fsPath;
        // Livewire
        const livewirePath = path_1.sep + LIVEWIRE_DIR + path_1.sep;
        const livewireIndex = viewFilePath.indexOf(livewirePath);
        if (livewireIndex !== -1) {
            const path = viewFilePath.slice(livewireIndex + livewirePath.length);
            return new BladeView(path, 'livewire');
        }
        // Blade
        const componentsPath = path_1.sep + COMPONENTS_DIR + path_1.sep;
        const componentsIndex = viewFilePath.indexOf(componentsPath);
        if (componentsIndex !== -1) {
            const path = viewFilePath.slice(componentsIndex + componentsPath.length);
            return new BladeView(path, 'component');
        }
        vscode_1.window.showErrorMessage('The file does not belong to a Livewire view or a Blade component.');
        return undefined;
    }
    blade.getView = getView;
})(blade || (exports.blade = blade = {}));


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kebabCase = kebabCase;
exports.camelCase = camelCase;
exports.pascalCase = pascalCase;
/**
 * Converts a string to kebab-case.
 * @param input The input string.
 * @returns The string converted to kebab-case.
 */
function kebabCase(input) {
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Inserts a hyphen between lowercase and uppercase letters
        .replace(/[^a-zA-Z0-9]+/g, '-') // Replaces non-alphanumeric characters with a hyphen
        .toLowerCase(); // Converts everything to lowercase
}
/**
 * Converts a string to camelCase.
 * @param input The input string.
 * @returns The string converted to camelCase.
 */
function camelCase(input) {
    // Converts text to lowercase and then converts the first letter of each word after the first underscore to uppercase
    return input
        .replace(/_./g, match => match.charAt(1).toUpperCase()) // Converts the letter after the underscore to uppercase
        .replace(/[^a-zA-Z0-9]+/g, '') // Removes non-alphanumeric characters
        .replace(/^./, match => match.toLowerCase()); // Converts the first letter to lowercase
}
/**
 * Converts a string to PascalCase.
 * @param input The input string.
 * @returns The string converted to PascalCase.
 */
function pascalCase(input) {
    // Converts text to lowercase and then converts the first letter of each word after the underscore to uppercase
    return input
        .toLowerCase()
        .replace(/[-_]\w/g, match => match.charAt(1).toUpperCase())
        .replace(/[^a-zA-Z0-9\\.]+/g, '')
        .replace(/^./, match => match.toUpperCase());
}


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDefinitionProviders = registerDefinitionProviders;
const path_1 = __importDefault(__webpack_require__(4));
const vscode_1 = __webpack_require__(2);
function registerDefinitionProviders(context) {
    const config = vscode_1.workspace.getConfiguration('livewire-jump');
    const isGoToBladeComponentEnabled = config.get('enableGoToBladeComponent', true);
    // Jump to component from HTML tags (Blade and Livewire support)
    const definitionProvider = vscode_1.languages.registerDefinitionProvider({ scheme: 'file', language: 'blade' }, {
        provideDefinition(document, position) {
            const regex = isGoToBladeComponentEnabled
                ? /<\/?(livewire:|x-)([a-z0-9\-\.]+)/i
                : /<\/?(livewire:)([a-z0-9\-\.]+)/i; // prefix + componentName
            const range = document.getWordRangeAtPosition(position, regex);
            if (!range) {
                return null;
            }
            const match = document.getText(range).match(regex);
            if (!match || (match[1] + match[2] === 'x-slot')) {
                return null;
            }
            const relativePath = match[2].replace(/\./g, '/');
            const filePath = path_1.default.join(vscode_1.workspace.workspaceFolders?.[0].uri.path || '', 'resources', 'views', match[1] === 'x-' ? 'components' : 'livewire', relativePath + '.blade.php');
            const uri = vscode_1.Uri.file(filePath);
            const fs = __webpack_require__(7);
            if (!fs.existsSync(filePath)) {
                vscode_1.window.showErrorMessage(`Component not found: ${filePath}`);
                return null;
            }
            return new vscode_1.Location(uri, new vscode_1.Position(0, 0));
        }
    });
    context.subscriptions.push(definitionProvider);
}


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerReferenceProviders = registerReferenceProviders;
const vscode_1 = __webpack_require__(2);
function registerReferenceProviders(context) {
    context.subscriptions.push(
    //livewireBladeReferences()
    );
}
function livewireBladeReferences() {
    vscode_1.window.showInformationMessage('Register Blade References');
    return vscode_1.languages.registerReferenceProvider({ pattern: '**/app/Livewire/**/*.php', scheme: 'file' }, {
        provideReferences(document, position, context, token) {
            const wordRange = document.getWordRangeAtPosition(position);
            const word = wordRange
                ? document.getText(wordRange)
                : '';
            if (!word) {
                return Promise.resolve([]);
            }
            const text = document.getText();
            const classRegex = /class\s+([a-zA-Z0-9_]+)\s+/;
            const className = classRegex.exec(text)?.[1] || '';
            if (className !== word) {
                return Promise.resolve([]);
            }
            const namespaceRegex = /namespace\s+([a-zA-Z0-9_\\]+);/;
            const namespace = text.match(namespaceRegex)?.[1].replace(/^App\\Livewire\\?/, '') || '';
            if (!namespace) {
                return Promise.resolve([]);
            }
            const componentName = `${namespace}\\${className}`
                .replace(/\\/g, '.')
                .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                .toLowerCase();
            vscode_1.window.showInformationMessage(componentName);
            return findBladeReferences(word).then(bladeReferences => {
                return bladeReferences;
            });
        }
    });
}
function findBladeReferences(className) {
    const locations = [];
    return vscode_1.workspace.findFiles('resources/views/**/*.blade.php').then(bladeUris => {
        const bladeSearchPromises = bladeUris.map(bladeUri => {
            return vscode_1.workspace.openTextDocument(bladeUri).then(document => {
                const text = document.getText();
                const regex = new RegExp(`<livewire:${className}\\b`, 'g');
                let match;
                while ((match = regex.exec(text)) !== null) {
                    const position = document.positionAt(match.index);
                    const range = new vscode_1.Range(position, position.translate(0, match[0].length));
                    locations.push(new vscode_1.Location(bladeUri, range));
                }
            });
        });
        return Promise.all(bladeSearchPromises).then(() => locations);
    });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = activate;
exports.deactivate = deactivate;
const commands_1 = __webpack_require__(1);
const definitions_1 = __webpack_require__(6);
const references_1 = __webpack_require__(8);
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    (0, commands_1.registerCommands)(context);
    (0, definitions_1.registerDefinitionProviders)(context);
    (0, references_1.registerReferenceProviders)(context);
    //workspace.onDidChangeTextDocument(event => {
    //	const document = event.document;
    //	const className = /class\s+([A-Za-z0-9_]+)/.exec(document.getText())?.[1];
    //	if (className) {
    //		const currentFileName = document.uri.fsPath;
    //		if (curr)
    //	}
    //})
}
// This method is called when your extension is deactivated
function deactivate() { }

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map