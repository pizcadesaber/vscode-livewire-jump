"use strict";var j=Object.defineProperty;var ie=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var re=Object.prototype.hasOwnProperty;var ae=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})},se=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of oe(t))!re.call(e,i)&&i!==n&&j(e,i,{get:()=>t[i],enumerable:!(o=ie(t,i))||o.enumerable});return e};var pe=e=>se(j({},"__esModule",{value:!0}),e);var fe={};ae(fe,{activate:()=>ce,deactivate:()=>ue});module.exports=pe(fe);var c=require("vscode");var l=require("vscode");var V=require("path"),w=require("vscode");var K=require("path"),x=require("vscode");function y(...e){if(!x.workspace.workspaceFolders)return;let t=x.workspace.workspaceFolders[0].uri;return e?x.Uri.file((0,K.join)(t.path,...e.filter(n=>!!n))):t}function H(e,t){let n=e.indexOf(t),o=n>0;return o&&(e.splice(n,1),e.unshift(t)),o}async function M(e){return new TextDecoder("utf-8").decode(await x.workspace.fs.readFile(e))}function W(e){e?x.workspace.openTextDocument(e).then(t=>{x.window.showTextDocument(t)},()=>{x.window.showInformationMessage("File not found: "+e?.fsPath)}):x.window.showInformationMessage("File Not found.")}function P(e,t){let n=x.workspace.getConfiguration("livewire-jump");return e?t?n.get(e,t):n.get(e):n}function X(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var N=require("path"),C=require("vscode");var m,F,T=[];function _(e){T.length===1?W(T[0].uri):T.length>1&&C.window.showQuickPick(T,{placeHolder:"Choose an option"}).then(t=>{t?.uri&&(F==="php"?(m=m,H(m.aliases,t.label)&&Z(e)):F==="blade"&&(m=m,H(m.phpReferences,t.label)&&O(e)),W(t.uri))})}function U(){m=void 0,F=void 0,T=[],C.commands.executeCommand("setContext","livewire-jump.hasView",!1),C.commands.executeCommand("setContext","livewire-jump.hasClass",!1)}function k(e,t){if(!P("view.navigation",!0)||(U(),!t))return;let n=t.document.languageId,o=C.workspace.asRelativePath(t.document.uri.path,!1);n==="blade"?(m=E(e).find(i=>i.bladePath===o),m?.phpReferences&&m.phpReferences.length>0&&(F="blade",m.phpReferences.forEach(i=>{let r=y(i);r&&T.push({label:i,description:"PHP",uri:r})})),T.length>0&&C.commands.executeCommand("setContext","livewire-jump.hasClass",!0)):n==="php"&&(m=J(e).find(i=>i.path===o),F="php",m?.aliases.forEach(i=>{let r=E(e).find(a=>a.alias===i);if(r){let a=y(r.bladePath);a&&T.push({label:i,description:"View",uri:a})}}),T.length>0&&C.commands.executeCommand("setContext","livewire-jump.hasView",!0))}function le(e,t){let n=C.workspace.getWorkspaceFolder(t);if(!n)return;let o;if(e.bladePath)o=e.bladePath;else if(e.phpPath)o=e.phpPath;else return;return C.Uri.file((0,N.join)(n.uri.path,o))}function G(e,t,n){let o=S(e).find(i=>i.tag===t);return o?le(o,n):void 0}async function Q(e){if(!e)return[];let t=/\bview\s*\(\s*[\'"]([a-z0-9\.-]+)[\'"]/g,n=[],o=t.exec(e);for(;o;){let i=o[1];n.includes(i)||n.push(o[1]),o=t.exec(e)}return n}var I=[],h,f,g,D=[];function E(e){return h===void 0&&(h=e.workspaceState.get(R(e),[])),h}function O(e){e.workspaceState.update(R(e),h)}function Z(e){e.workspaceState.update(L(e),g)}function S(e){return f===void 0&&(f=e.workspaceState.get(z(e),[])),f}function J(e){return g===void 0&&(g=e.workspaceState.get(L(e),[])),g}async function q(e,t){let o=w.workspace.getConfiguration("livewire-jump").get("view.dirs",{});I=Object.entries(o).map(([r,a])=>de(r,a)),h=[],f=[],g=[];let i=w.workspace.getWorkspaceFolder(t.document.uri);if(i){D=[];for(let r of I)await te(r,"",i.uri);for(let r of I)await ee(r,"",i.uri),h!==void 0&&g.forEach(a=>{a.aliases=a.aliases.filter(s=>{let p=!1;return h?.forEach(d=>{d.alias===s&&(d.phpReferences.includes(a.path)||d.phpReferences.push(a.path),p=!0)}),p})});if(f===void 0)D=[];else for(;D.length>0;){let r=D.pop();r&&!f.some(a=>a.alias===r.alias)&&f.push(r)}}await e.workspaceState.update(R(e),h),await e.workspaceState.update(z(e),f),await e.workspaceState.update(L(e),g),w.window.showInformationMessage(`Refreshed Views: ${h.length} views, ${f.length} components, ${g.length} classes`),k(e,t)}async function Y(e){h=void 0,f=void 0,g=void 0,await e.workspaceState.update(R(e),h),await e.workspaceState.update(z(e),f),await e.workspaceState.update(L(e),g),U(),w.window.showInformationMessage("Cleared Views")}function de(e,t){let n=e.split(/\||:|\s/g),o=t.split(/\||\s/g),i=o[1],r;return i?.startsWith("x-")?r=1:i?.startsWith("livewire:")&&(r=2),{bladePath:n[0],phpPath:n[1],alias:o[0]??"",tag:i,componentType:r}}function R(e){return`${e.extension.id}.views`}function z(e){return`${e.extension.id}.components`}function L(e){return`${e.extension.id}.phpFiles`}async function ee(e,t,n){if(g===void 0&&f===void 0||!e.phpPath)return;let o=[];try{o=await w.workspace.fs.readDirectory(n.with({path:(0,V.join)(n.path,e.phpPath,t)}))}catch{return}for(let[i,r]of o){let a=(0,V.join)(t,i),s=(0,V.join)(e.phpPath,a);if(r===w.FileType.Directory&&!I.some(p=>s===p.phpPath))await ee(e,a,n);else if(r===w.FileType.File&&i.endsWith(".php")){let p=y(s),d=X(a.replace(/\//g,".").replace(/\.php$/,"")),u=p?await Q(await M(p)):[];if(u.length===0&&u.push(e.alias+d),g!==void 0){let v={aliases:u,path:s};g.push(v)}if(f!==void 0&&e.componentType&&e.tag){let v={phpPath:s,tag:e.tag+d,alias:u[0],type:e.componentType};f.push(v)}}}}async function te(e,t,n,o=!0){if(h===void 0||!e.bladePath)return;let i=[];try{i=await w.workspace.fs.readDirectory(n.with({path:(0,V.join)(n.path,e.bladePath,t)}))}catch{return}let r=e.componentType===1&&i.some(([a])=>a==="index.blade.php");r&&(i=i.filter(([a])=>a!=="index.blade.php"));for(let[a,s]of i){let p=(0,V.join)(t,a),d=(0,V.join)(e.bladePath,p);if(s===w.FileType.Directory&&!I.some(u=>d===u.bladePath))te(e,p,n,r);else if(s===w.FileType.File&&a.endsWith(".blade.php")){let u=p.replace(/\//g,".").replace(/\.blade\.php$/,""),v=e.alias+u,B={bladePath:d,alias:v,phpReferences:[]};if(h.push(B),e.componentType&&f!==void 0&&o&&e.componentType===1&&e.tag){let ne={bladePath:d,tag:e.tag+u,alias:v,type:e.componentType};D.push(ne)}}}}var A=class e{static TAG_REGEX=/<\/?((?:livewire:|x-)[a-z0-9][a-z0-9-\.]*)[\s\/$>]/g;context;constructor(t){this.context=t}provideCompletionItems(t,n){return P("blade.tag.completion",!0)?t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.\:]*)$/i)?S(this.context).filter(r=>!!r.tag).map(r=>{let a=r.tag??"unknown",s=new l.CompletionItem(a,l.CompletionItemKind.Snippet);return a&&(s.detail="Component",s.insertText=new l.SnippetString(`${a} $0`),s.documentation=new l.MarkdownString(`Inserts a component: 

\`\`\`html
<${a} />
\`\`\``)),s}):[]:[]}provideDocumentLinks(t){if(!P("blade.tag.link",!0))return[];let n=[];for(let o=0;o<t.lineCount;o++){let i=t.lineAt(o),r;do if(r=e.TAG_REGEX.exec(i.text),r){let a=r[1],s=G(this.context,a,t.uri);if(!s)continue;let p=r[0],d=r.index+p.indexOf(a),u=new l.Position(i.lineNumber,d),v=new l.Position(i.lineNumber,d+a.length);n.push(new l.DocumentLink(new l.Range(u,v),s))}while(r)}return n}provideHover(t,n){if(!P("blade.tag.hover",!0))return null;let o=t.lineAt(n.line).text,i;for(;(i=e.TAG_REGEX.exec(o))!==null;){let r=i[1],a=i.index,s=a+r.length;if(n.character>=a&&n.character<=s){let p=new l.Range(new l.Position(n.line,a),new l.Position(n.line,s)),d=G(this.context,r,t.uri);if(!d)continue;if(d){let u=l.workspace.asRelativePath(d.fsPath);return new l.Hover(`Livewire Component: **${r}**

Path: ${u}`,p)}}}return null}};var b=require("vscode");var $=class e{static VIEW_REGEX=/(?:view|layout|#\[Layout)\(['"]([^'"]*)['"]/g;context;loadedViews=[];constructor(t){this.context=t}provideCompletionItems(t,n,o,i){return P("view.completion",!0)?t.lineAt(n).text.substring(0,n.character).match(/\b(?:view|layout|#\[Layout|links)\(['"][^'"]*$/)?E(this.context).filter(s=>!!s.bladePath).map(s=>{let p=new b.CompletionItem(s.alias,b.CompletionItemKind.File);return p.detail="Laravel View",p.documentation=`View file: ${s.alias}`,p}):[]:[]}provideDocumentLinks(t,n){if(this.loadedViews=[],!P("view.link",!0))return[];let o=[],i=t.getText(),r;for(;(r=e.VIEW_REGEX.exec(i))!==null;){let a=r[1],s=this.findView(a),p=s?y(s.bladePath):void 0;if(p){let d=r.index+r[0].indexOf(a),u=d+a.length,v=t.positionAt(d),B=t.positionAt(u);o.push(new b.DocumentLink(new b.Range(v,B),p))}}return o}provideHover(t,n,o){P("view.hover",!0)}findView(t){let n=this.loadedViews.find(o=>o.alias===t);if(!n){let o=E(this.context).filter(i=>!!i.bladePath).find(i=>i.alias===t);return o&&this.loadedViews.push(o),o}return n}};function ce(e){let t={scheme:"file",language:"blade"},n={scheme:"file",language:"php"},o=new A(e),i=new $(e);e.subscriptions.push(c.languages.registerCompletionItemProvider(t,o,"<"),c.languages.registerDocumentLinkProvider(t,o),c.languages.registerHoverProvider(t,o),c.languages.registerCompletionItemProvider(t,i,"('"),c.languages.registerCompletionItemProvider(n,i,"('"),c.languages.registerDocumentLinkProvider(t,i),c.languages.registerDocumentLinkProvider(n,i),c.commands.registerTextEditorCommand("livewire-jump.refreshViews",r=>{q(e,r)}),c.commands.registerCommand("livewire-jump.goToClass",()=>{_(e)}),c.commands.registerCommand("livewire-jump.goToView",()=>{_(e)}),c.commands.registerCommand("livewire-jump.clearViews",async()=>{await Y(e)}),c.window.onDidChangeActiveTextEditor(r=>{k(e,r)}),c.workspace.onDidChangeConfiguration(r=>{r.affectsConfiguration("livewire-jump.view.navigation")&&(P("view.navigation",!0)?k(e,void 0):U())})),k(e,c.window.activeTextEditor),console.log("Livewire Jump up")}function ue(){}0&&(module.exports={activate,deactivate});
