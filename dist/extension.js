"use strict";var H=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var se=Object.prototype.hasOwnProperty;var le=(e,t)=>{for(var n in t)H(e,n,{get:t[n],enumerable:!0})},pe=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ae(t))!se.call(e,i)&&i!==n&&H(e,i,{get:()=>t[i],enumerable:!(o=re(t,i))||o.enumerable});return e};var de=e=>pe(H({},"__esModule",{value:!0}),e);var ge={};le(ge,{activate:()=>ue,deactivate:()=>me});module.exports=de(ge);var u=require("vscode");var l=require("vscode");var V=require("path"),w=require("vscode");var _=require("path"),C=require("vscode");function y(...e){if(!C.workspace.workspaceFolders)return;let t=C.workspace.workspaceFolders[0].uri;return e?C.Uri.file((0,_.join)(t.path,...e.filter(n=>!!n))):t}function z(e,t){let n=e.indexOf(t),o=n>0;return o&&(e.splice(n,1),e.unshift(t)),o}async function Z(e){return new TextDecoder("utf-8").decode(await C.workspace.fs.readFile(e))}function W(e){e?C.workspace.openTextDocument(e).then(t=>{C.window.showTextDocument(t)},()=>{C.window.showInformationMessage("File not found: "+e?.fsPath)}):C.window.showInformationMessage("File Not found.")}function P(e,t){let n=C.workspace.getConfiguration("livewire-jump");return e?t?n.get(e,t):n.get(e):n}function q(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var N=require("path"),v=require("vscode");var g,U,b=[];function K(e){b.length===1?W(b[0].uri):b.length>1&&v.window.showQuickPick(b,{placeHolder:"Choose an option"}).then(t=>{t?.uri&&(U==="php"?(g=g,z(g.aliases,t.label)&&X(e)):U==="blade"&&(g=g,z(g.phpReferences,t.label)&&O(e)),W(t.uri))})}function D(){g=void 0,U=void 0,b=[],v.commands.executeCommand("setContext","livewire-jump.hasView",!1),v.commands.executeCommand("setContext","livewire-jump.hasClass",!1)}function F(e,t){if(!P("view.navigation",!0)||(D(),!t))return;let n=t.document.languageId,o=v.workspace.asRelativePath(t.document.uri.path,!1);n==="blade"?(g=k(e).find(i=>i.bladePath===o),g?.phpReferences&&g.phpReferences.length>0&&(U="blade",g.phpReferences.forEach(i=>{let a=y(i);a&&b.push({label:i,description:"PHP",uri:a})})),b.length>0&&v.commands.executeCommand("setContext","livewire-jump.hasClass",!0)):n==="php"&&(g=J(e).find(i=>i.path===o),U="php",g?.aliases.forEach(i=>{let a=k(e).find(r=>r.alias===i);if(a){let r=y(a.bladePath);r&&b.push({label:i,description:"View",uri:r})}}),b.length>0&&v.commands.executeCommand("setContext","livewire-jump.hasView",!0))}function ce(e,t){let n=v.workspace.getWorkspaceFolder(t);if(!n)return;let o;if(e.bladePath)o=e.bladePath;else if(e.phpPath)o=e.phpPath;else return;return v.Uri.file((0,N.join)(n.uri.path,o))}function M(e,t,n){let o=I(e).find(i=>i.tag===t);return o?ce(o,n):void 0}async function Q(e){if(!e)return[];let t=/\bview\s*\(\s*[\'"]([a-z0-9\.-]+)[\'"]/g,n=[],o=t.exec(e);for(;o;){let i=o[1];n.includes(i)||n.push(o[1]),o=t.exec(e)}return n}var S=[],h,m,x,R=[];function k(e){return h===void 0&&(h=e.workspaceState.get(A(e),[])),h}function O(e){e.workspaceState.update(A(e),h)}function X(e){e.workspaceState.update(L(e),x)}function I(e){return m===void 0&&(m=e.workspaceState.get(G(e),[])),m}function J(e){return x===void 0&&(x=e.workspaceState.get(L(e),[])),x}async function Y(e,t){let o=w.workspace.getConfiguration("livewire-jump").get("view.dirs",{});S=Object.entries(o).map(([a,r])=>fe(a,r)),h=[],m=[],x=[];let i=w.workspace.getWorkspaceFolder(t.document.uri);if(i){R=[];for(let a of S)await ne(a,"",i.uri);for(let a of S)await te(a,"",i.uri),h!==void 0&&x.forEach(r=>{r.aliases=r.aliases.filter(s=>{let d=!1;return h?.forEach(c=>{c.alias===s&&(c.phpReferences.includes(r.path)||c.phpReferences.push(r.path),d=!0)}),d})});if(m===void 0)R=[];else for(;R.length>0;){let a=R.pop();a&&!m.some(r=>r.alias===a.alias)&&m.push(a)}}await e.workspaceState.update(A(e),h),await e.workspaceState.update(G(e),m),await e.workspaceState.update(L(e),x),w.window.showInformationMessage(`Refreshed Views: ${h.length} views, ${m.length} components, ${x.length} classes`),F(e,t)}async function ee(e){h=void 0,m=void 0,x=void 0,await e.workspaceState.update(A(e),h),await e.workspaceState.update(G(e),m),await e.workspaceState.update(L(e),x),D(),w.window.showInformationMessage("Cleared Views")}function fe(e,t){let n=e.split(/\||:|\s/g),o=t.split(/\||\s/g),i=o[1],a;return i?.startsWith("x-")?a=1:i?.startsWith("livewire:")&&(a=2),{bladePath:n[0],phpPath:n[1],alias:o[0]??"",tag:i,componentType:a}}function A(e){return`${e.extension.id}.views`}function G(e){return`${e.extension.id}.components`}function L(e){return`${e.extension.id}.phpFiles`}async function te(e,t,n){if(x===void 0&&m===void 0||!e.phpPath)return;let o=[];try{o=await w.workspace.fs.readDirectory(n.with({path:(0,V.join)(n.path,e.phpPath,t)}))}catch{return}for(let[i,a]of o){let r=(0,V.join)(t,i),s=(0,V.join)(e.phpPath,r);if(a===w.FileType.Directory&&!S.some(d=>s===d.phpPath))await te(e,r,n);else if(a===w.FileType.File&&i.endsWith(".php")){let d=y(s),c=q(r.replace(/\//g,".").replace(/\.php$/,"")),p=d?await Q(await Z(d)):[];if(p.length===0&&p.push(e.alias+c),x!==void 0){let f={aliases:p,path:s};x.push(f)}if(m!==void 0&&e.componentType&&e.tag){let f={phpPath:s,tag:e.tag+c,alias:p[0],type:e.componentType};m.push(f)}}}}async function ne(e,t,n,o=!0){if(h===void 0||!e.bladePath)return;let i=[];try{i=await w.workspace.fs.readDirectory(n.with({path:(0,V.join)(n.path,e.bladePath,t)}))}catch{return}let a=e.componentType===1&&i.some(([r])=>r==="index.blade.php");a&&(i=i.filter(([r])=>r!=="index.blade.php"));for(let[r,s]of i){let d=(0,V.join)(t,r),c=(0,V.join)(e.bladePath,d);if(s===w.FileType.Directory&&!S.some(p=>c===p.bladePath))ne(e,d,n,a);else if(s===w.FileType.File&&r.endsWith(".blade.php")){let p=d.replace(/\//g,".").replace(/\.blade\.php$/,""),f=e.alias+p,E={bladePath:c,alias:f,phpReferences:[]};if(h.push(E),e.componentType&&m!==void 0&&o&&e.componentType===1&&e.tag){let B={bladePath:c,tag:e.tag+p,alias:f,type:e.componentType};R.push(B)}}}}var $=class e{static TAG_REGEX=/<\/?((?:livewire:|x-)[a-z0-9][a-z0-9-\.]*)[\s\/$>]/g;context;constructor(t){this.context=t}provideCompletionItems(t,n){if(!P("blade.tag.completion",!0))return[];let i=t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.\:]*)$/i);return i?I(this.context).filter(a=>!!a.tag).map(a=>{let r=a.tag??"unknown",s=new l.CompletionItem(r,l.CompletionItemKind.Snippet);return r&&(s.detail="Component",s.insertText=new l.SnippetString(`${r} $0`),s.documentation=new l.MarkdownString(`Inserts a component: 

\`\`\`html
<${r} />
\`\`\``),i.index&&(s.range=new l.Range(new l.Position(n.line,i.index),new l.Position(n.line,n.character)))),s}):[]}provideDocumentLinks(t,n){if(!P("blade.tag.link",!0))return[];let o=[];for(let i=0;i<t.lineCount;i++){let a=t.lineAt(i),r;do{if(n.isCancellationRequested)return[];if(r=e.TAG_REGEX.exec(a.text),r){let s=r[1],d=M(this.context,s,t.uri);if(!d)continue;let c=r[0],p=r.index+c.indexOf(s),f=new l.Position(a.lineNumber,p),E=new l.Position(a.lineNumber,p+s.length);o.push(new l.DocumentLink(new l.Range(f,E),d))}}while(r)}return o}provideHover(t,n,o){if(!P("blade.tag.hover",!0))return null;let i=t.lineAt(n.line).text,a;for(;(a=e.TAG_REGEX.exec(i))!==null;){if(o.isCancellationRequested)return null;let r=a[1],s=a.index,d=s+r.length;if(n.character>=s&&n.character<=d){let c=new l.Range(new l.Position(n.line,s),new l.Position(n.line,d)),p=M(this.context,r,t.uri);if(!p)continue;if(p){let f=l.workspace.asRelativePath(p.fsPath);return new l.Hover(`Livewire Component: **${r}**

Path: ${f}`,c)}}}return null}};var T=require("vscode");var j=class e{context;loadedViews=[];static regex="(?:"+["#\\[Layout","(?:^|[^A-Za-z0-9_:])(?:"+["view","links","layout"].join("|")+")"].join("|")+`)\\(['"]([a-zA-Z0-9\\.-]*)`;constructor(t){this.context=t}provideCompletionItems(t,n,o,i){if(P("view.completion",!0)===!1)return[];let a=t.lineAt(n).text,r=RegExp(e.regex+"$").exec(a.slice(0,n.character));if(!r)return[];let s=new T.Position(n.line,r.index+r[0].length-r[1].length),d=new T.Position(n.line,r.index+r[0].length),c=new T.Range(s,d);return(k(this.context)||[]).filter(p=>!!p.bladePath).map(p=>{let f=new T.CompletionItem(`${p.alias}`,T.CompletionItemKind.File);return f.detail="Blade View",f.documentation=`View: ${p.alias}`,f.range=c,f})}provideDocumentLinks(t,n){if(this.loadedViews=[],!P("view.link",!0))return[];let o=[],i=t.getText(),a=100,r=0,s,d=RegExp(e.regex+`['"]`,"g");for(;(s=d.exec(i))!==null&&r<a;){if(n.isCancellationRequested)return[];let c=s[1],p=this.findView(c),f=p?y(p.bladePath):void 0;if(f){let E=s.index+s[0].indexOf(c),B=E+c.length,ie=t.positionAt(E),oe=t.positionAt(B);o.push(new T.DocumentLink(new T.Range(ie,oe),f))}d.lastIndex===s.index&&d.lastIndex++,r++}return console.log("Links:",o),o}provideHover(t,n,o){P("view.hover",!0)}findView(t){let n=this.loadedViews.find(o=>o.alias===t);if(!n){let o=k(this.context).filter(i=>!!i.bladePath).find(i=>i.alias===t);return o&&this.loadedViews.push(o),o}return n}};function ue(e){let t={scheme:"file",language:"blade"},n={scheme:"file",language:"php"},o=new $(e),i=new j(e);e.subscriptions.push(u.languages.registerCompletionItemProvider(t,o,"<"),u.languages.registerDocumentLinkProvider(t,o),u.languages.registerHoverProvider(t,o),u.languages.registerCompletionItemProvider([t,n],i,"'",'"'),u.languages.registerDocumentLinkProvider([t,n],i),u.commands.registerTextEditorCommand("livewire-jump.refreshViews",a=>{Y(e,a)}),u.commands.registerCommand("livewire-jump.goToClass",()=>{K(e)}),u.commands.registerCommand("livewire-jump.goToView",()=>{K(e)}),u.commands.registerCommand("livewire-jump.clearViews",async()=>{await ee(e)}),u.window.onDidChangeActiveTextEditor(a=>{F(e,a)}),u.workspace.onDidChangeConfiguration(a=>{a.affectsConfiguration("livewire-jump.view.navigation")&&(P("view.navigation",!0)?F(e,void 0):D())})),F(e,u.window.activeTextEditor),console.log("Livewire Jump up")}function me(){}0&&(module.exports={activate,deactivate});
