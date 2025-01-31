"use strict";var Q=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var Ve=Object.getOwnPropertyNames;var Be=Object.prototype.hasOwnProperty;var De=(e,t)=>{for(var n in t)Q(e,n,{get:t[n],enumerable:!0})},Fe=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ve(t))!Be.call(e,o)&&o!==n&&Q(e,o,{get:()=>t[o],enumerable:!(i=Ee(t,o))||i.enumerable});return e};var Re=e=>Fe(Q({},"__esModule",{value:!0}),e);var He={};De(He,{activate:()=>$e,deactivate:()=>je});module.exports=Re(He);var f=require("vscode");var k=require("vscode");var W=require("path"),g=require("vscode");var se=require("path"),P=require("vscode"),X=0;function z(){X=performance.now()}function Ue(){return X!==0?Math.round(performance.now()-X):0}function G(e=!1){let t=Ue();return t=t>1e3?(t/1e3).toFixed(2)+" s":t+" ms",e?`(${t})`:`${t}`}function y(...e){if(!P.workspace.workspaceFolders)return;let t=P.workspace.workspaceFolders[0].uri;return e?P.Uri.file((0,se.join)(t.path,...e.filter(n=>!!n))):t}function Y(e,t){let n=e.indexOf(t),i=n>0;return i&&(e.splice(n,1),e.unshift(t)),i}async function le(e){return new TextDecoder("utf-8").decode(await P.workspace.fs.readFile(e))}function ee(e){e?P.workspace.openTextDocument(e).then(t=>{P.window.showTextDocument(t)},()=>{P.window.showInformationMessage("File not found: "+e?.fsPath)}):P.window.showInformationMessage("File Not found.")}function m(e,t){let n=P.workspace.getConfiguration("livewire-jump");return e?t?n.get(e,t):n.get(e):n}function L(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace("_","-").toLowerCase()}var B,te=0,pe=[];async function ne(e){let t=m("blade.icon.dirs",{});if(t){z(),B=[],te=0,pe=Object.entries(t).filter(([n,i])=>!!n).map(([n,i])=>Se(n,i));for(let n of pe)if(n.group){let i=y(n.path);if(i){let o=await he(n.group,i);o&&B.push(o)}}await e.workspaceState.update(ie(e),B),g.window.showInformationMessage("Icons Refreshed: "+te+" icons "+G(!0))}}function ce(e){if(B===void 0)try{B=e.workspaceState.get(ie(e),[])}catch{return g.window.showInformationMessage("Upgrading icons..."),ne(e),[]}return B}async function de(e){B=[],await e.workspaceState.update(ie(e),void 0),g.window.showInformationMessage("Icons Cleared")}function ue(e,t){return fe(ce(e),[],"",t)}function fe(e,t,n,i){let o=[];return e.forEach(r=>{o.push(...fe(r.groups,r.icons,n+r.tag,i))}),t.forEach(r=>{let s=n+r.tag,a=new g.CompletionItem(s,g.CompletionItemKind.Snippet);a.detail="Blade Icon",a.insertText=new g.SnippetString(`${s} $0`),a.documentation=new g.MarkdownString(`Inserts a blade icon: 

\`\`\`html
<${s} />
\`\`\``),a.range=i,o.push(a)}),o}function me(e,t){let n=ce(e);if(n.length===0)return;let i=y();return i?ge(n,[],i,t):void 0}function ge(e,t,n,i){for(let o of e)if(i.startsWith(o.tag))return ge(o.groups,o.icons,n.with({path:(0,W.join)(n.path,o.path)}),i.substring(o.tag.length));for(let o of t)if(o.tag===i)return{...o,uri:n.with({path:(0,W.join)(n.path,o.name)})}}function ie(e){return`${e.extension.id}.blade.icons`}function Se(e,t){return{path:e,tag:t,group:e&&t?{path:e,tag:t,groups:[],icons:[]}:void 0}}async function he(e,t){let n=[];try{n=await g.workspace.fs.readDirectory(t)}catch{return}for(let[i,o]of n)if(o===g.FileType.Directory){let r=await he({path:i,tag:L(i)+".",groups:[],icons:[]},t.with({path:(0,W.join)(t.path,i)}));r&&e.groups.push(r)}else o===g.FileType.File&&i.endsWith(".svg")&&(te+=1,e.icons.push({name:i,tag:L(i.replace(/\.svg$/,""))}));return e.groups.length>0||e.icons.length>0?e:void 0}var K=class{constructor(t){this.context=t}linkedIcons=[];getLinkRE(){return/<\/?(x-[a-z0-9][a-z0-9-\.:]*)[\s\/>$]/g}provideCompletionItems(t,n){if(!m("blade.icon.completion",!0))return[];let o=t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.:]*)$/i);if(!o)return[];let r=new k.Range(new k.Position(n.line,o.index+1),new k.Position(n.line,n.character));return ue(this.context,r)}provideDocumentLinks(t,n){if(!m("blade.icon.link",!0))return[];this.linkedIcons=[];let i=[],o=100;for(let r=0;r<t.lineCount;r++){if(n.isCancellationRequested)return[];let s=t.lineAt(r),a=this.getLinkRE(),l,u=0;for(;(l=a.exec(s.text))!==null&&u<o;){if(n.isCancellationRequested)return[];if(u++,l){let c=l[1],p=this.linkedIcons.find(Z=>Z.tag===c);if(!p){if(p=me(this.context,c),!p)continue;this.linkedIcons.push(p)}if(!p.uri)continue;let I=l[0],V=l.index+I.indexOf(c),F=new k.Position(s.lineNumber,V),S=new k.Position(s.lineNumber,V+c.length);i.push(new k.DocumentLink(new k.Range(F,S),p.uri)),a.lastIndex===l.index&&a.lastIndex++}}}return i}};var d=require("vscode");var D=require("path"),x=require("vscode");var xe=require("path"),v=require("vscode");var w,A,E=[];function oe(e){E.length===1?ee(E[0].uri):E.length>1&&v.window.showQuickPick(E,{placeHolder:"Choose an option"}).then(t=>{t?.uri&&(A==="php"?(w=w,Y(w.aliases,t.label)&&Pe(e)):A==="blade"&&(w=w,Y(w.phpReferences,t.label)&&Ce(e)),ee(t.uri))})}function $(){w=void 0,A=void 0,E=[],v.commands.executeCommand("setContext","livewire-jump.hasView",!1),v.commands.executeCommand("setContext","livewire-jump.hasClass",!1)}function U(e,t){if(!m("view.navigation",!0)||($(),!t))return;let n=v.workspace.asRelativePath(t.document.uri.path,!1);t.document.languageId==="blade"||t.document.uri.path.endsWith(".blade.php")?(w=R(e).find(i=>i.bladePath===n),w?.phpReferences&&w.phpReferences.length>0&&(A="blade",w.phpReferences.forEach(i=>{let o=y(i);o&&E.push({label:i,description:"PHP",uri:o})})),E.length>0&&v.commands.executeCommand("setContext","livewire-jump.hasClass",!0)):(t.document.languageId==="php"||t.document.uri.path.endsWith(".php"))&&(w=ve(e).find(i=>i.path===n),A="php",w?.aliases.forEach(i=>{let o=R(e).find(r=>r.alias===i);if(o){let r=y(o.bladePath);r&&E.push({label:i,description:"View",uri:r})}}),E.length>0&&v.commands.executeCommand("setContext","livewire-jump.hasView",!0))}function re(e,t){let n=v.workspace.getWorkspaceFolder(t);if(!n)return;let i;if(e.bladePath)i=e.bladePath;else if(e.phpPath)i=e.phpPath;else return;return v.Uri.file((0,xe.join)(n.uri.path,i))}function we(e,t,n){let i=j(e).find(o=>o.tag===t);return i?re(i,n):void 0}async function Te(e){if(!e)return[];let t=/\bview\s*\(\s*[\'"]([a-z0-9\.-]+)[\'"]/g,n=[],i=t.exec(e);for(;i;){let o=i[1];n.includes(o)||n.push(i[1]),i=t.exec(e)}return n}var M=[],C,h,T,H=[];function R(e){return C===void 0&&(C=e.workspaceState.get(N(e),[])),C}function Ce(e){e.workspaceState.update(N(e),C)}function Pe(e){e.workspaceState.update(O(e),T)}function j(e){return h===void 0&&(h=e.workspaceState.get(ae(e),[])),h}function ve(e){return T===void 0&&(T=e.workspaceState.get(O(e),[])),T}async function be(e,t){let n=m("view.dirs",{});if(!n)return;z(),M=Object.entries(n).map(([o,r])=>Le(o,r)),C=[],h=[],T=[];let i=x.workspace.getWorkspaceFolder(t.document.uri);if(i){H=[];for(let o of M)await ke(o,"",i.uri);for(let o of M)await ye(o,"",i.uri),C!==void 0&&T.forEach(r=>{r.aliases=r.aliases.filter(s=>{let a=!1;return C?.forEach(l=>{l.alias===s&&(l.phpReferences.includes(r.path)||l.phpReferences.push(r.path),a=!0)}),a})}),h!==void 0&&h.forEach(r=>{C?.some(s=>s.alias===r.alias?(r.bladePath=s.bladePath,!0):!1)});if(h===void 0)H=[];else for(;H.length>0;){let o=H.pop();o&&!h.some(r=>r.alias===o.alias)&&h.push(o)}}await e.workspaceState.update(N(e),C),await e.workspaceState.update(ae(e),h),await e.workspaceState.update(O(e),T),x.window.showInformationMessage(`Refreshed Views: ${C.length} views, ${h.length} components, ${T.length} classes `+G(!0)),U(e,t)}async function Ie(e){C=[],h=[],T=[],await e.workspaceState.update(N(e),void 0),await e.workspaceState.update(ae(e),void 0),await e.workspaceState.update(O(e),void 0),$(),x.window.showInformationMessage("Cleared Views")}function Le(e,t){let n=e.split(/\||:|\s/g),i=t.split(/\||\s/g),o=i[1],r;return o?.startsWith("x-")?r=1:o?.startsWith("livewire:")?r=2:o&&(r=3),{bladePath:n[0],phpPath:n[1],alias:i[0]??"",tag:o,componentType:r}}function N(e){return`${e.extension.id}.views`}function ae(e){return`${e.extension.id}.components`}function O(e){return`${e.extension.id}.phpFiles`}async function ye(e,t,n){if(T===void 0&&h===void 0||!e.phpPath)return;let i=[];try{i=await x.workspace.fs.readDirectory(n.with({path:(0,D.join)(n.path,e.phpPath,t)}))}catch{return}for(let[o,r]of i){let s=(0,D.join)(t,o),a=(0,D.join)(e.phpPath,s);if(r===x.FileType.Directory&&!M.some(l=>a===l.phpPath))await ye(e,s,n);else if(r===x.FileType.File&&o.endsWith(".php")){let l=y(a),u=L(s.replace(/\//g,".").replace(/\.php$/,"")),c=l?await Te(await le(l)):[];if(c.length===0&&c.push(e.alias+u),T!==void 0){let p={aliases:c,path:a};T.push(p)}if(h!==void 0&&e.componentType&&e.tag){let p={phpPath:a,tag:e.tag+Ae(u),alias:c[0],type:e.componentType};h.push(p)}}}}function Ae(e){let t=e.split(".");if(t.length<2)return e;let n=t.pop(),i=t.join(".");return t[t.length-1]===n?i:e}async function ke(e,t,n){if(C===void 0||!e.bladePath)return;let i=[];try{i=await x.workspace.fs.readDirectory(n.with({path:(0,D.join)(n.path,e.bladePath,t)}))}catch{return}let o=!1,r="";if(e.componentType===1&&(o=!t,!o&&(o=i.some(([s,a])=>a===x.FileType.File&&s==="index.blade.php"),i=i.filter(([s])=>s!=="index.blade.php"),!o))){let a=t.split("/").pop();a&&(a+=".blade.php",o=i.some(([l,u])=>u===x.FileType.File&&l===a),r=a)}for(let[s,a]of i){let l=(0,D.join)(t,s),u=(0,D.join)(e.bladePath,l);if(a===x.FileType.Directory&&!M.some(c=>u===c.bladePath))ke(e,l,n);else if(a===x.FileType.File&&s.endsWith(".blade.php")){let c=l.replace(/\//g,".").replace(/\.blade\.php$/,""),p=e.alias+c,I={bladePath:u,alias:p,phpReferences:[]};if(C.push(I),o&&h!==void 0&&e.componentType&&e.tag){let V={bladePath:u,tag:e.tag+(s===r?c.substring(0,c.length-r.length+9):c),alias:p,type:e.componentType};H.push(V)}}}}var _=class{constructor(t){this.context=t}linkedComponents=[];getLinkRE(){return/<\/?([a-z0-9][a-z0-9-\.:]{3,}[a-z0-9])[\s\/>$]/g}provideCompletionItems(t,n){if(!m("blade.tag.completion",!0))return[];let o=t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.:]*)$/);return o?j(this.context).map(s=>{let a=new d.CompletionItem(s.tag,d.CompletionItemKind.Snippet);return a.detail="Component",a.insertText=new d.SnippetString(`${s.tag} $0`),a.documentation=new d.MarkdownString(`Inserts a component: 

\`\`\`html
<${s.tag} />
\`\`\``),o.index&&(a.range=new d.Range(new d.Position(n.line,o.index+1),new d.Position(n.line,n.character))),a}):[]}provideDocumentLinks(t,n){if(!m("blade.tag.link",!0))return[];let i=[],o=100;for(let r=0;r<t.lineCount;r++){let s=t.lineAt(r),a=this.getLinkRE(),l,u=0;for(;(l=a.exec(s.text))!==null&&u<o;){if(n.isCancellationRequested)return[];if(u++,l){let c=l[1],p=this.linkedComponents.find(J=>J.tag===c);if(a.lastIndex===l.index&&a.lastIndex++,!p){if(p=j(this.context).find(J=>J.tag===c),!p)continue;this.linkedComponents.push(p)}let I=re(p,t.uri);if(!I)continue;let V=l[0],F=l.index+V.indexOf(c),S=new d.Position(s.lineNumber,F),Z=new d.Position(s.lineNumber,F+c.length);i.push(new d.DocumentLink(new d.Range(S,Z),I))}}}return i}provideHover(t,n,i){if(!m("blade.tag.hover",!0))return null;let o=t.lineAt(n.line).text,r,s=this.getLinkRE();for(;(r=s.exec(o))!==null;){if(i.isCancellationRequested)return null;let a=r[1],l=r.index,u=l+a.length;if(n.character>=l&&n.character<=u){let c=new d.Range(new d.Position(n.line,l),new d.Position(n.line,u)),p=we(this.context,a,t.uri);if(!p)continue;if(p){let I=d.workspace.asRelativePath(p.fsPath);return new d.Hover(`Component: **${a}**

Path: ${I}`,c)}}}return null}};var b=require("vscode");var q=class e{constructor(t){this.context=t}loadedViews=[];static regex="(?:"+["(?:"+["#\\[Layout","@(?:"+["each","extends","include","includeIf"].join("|")+")","(?:^|[^A-Za-z0-9_:])(?:"+["view","links","layout","withView"].join("|")+")"].join("|")+`)\\(['"]([a-zA-Z0-9\\.-:]*)`].join("|")+")";provideCompletionItems(t,n,i,o){if(m("view.completion",!0)===!1)return[];let r=t.lineAt(n).text,s=RegExp(e.regex+"$").exec(r.slice(0,n.character));if(!s)return[];let a=new b.Position(n.line,s.index+s[0].length-s[1].length),l=new b.Position(n.line,s.index+s[0].length),u=new b.Range(a,l);return(R(this.context)||[]).map(c=>{let p=new b.CompletionItem(`${c.alias}`,b.CompletionItemKind.File);return p.detail="Blade View",p.documentation=`View: ${c.alias}`,p.range=u,p})}provideDocumentLinks(t,n){if(this.loadedViews=[],!m("view.link",!0))return[];let i=[],o=t.getText(),r=100,s=0,a,l=RegExp(e.regex+`['"]`,"g");for(;(a=l.exec(o))!==null&&s<r;){if(n.isCancellationRequested)return[];let u=a[1];if(u){let c=this.findView(u),p=c?y(c.bladePath):void 0;if(p){let I=a.index+a[0].indexOf(u),V=I+u.length,F=t.positionAt(I),S=t.positionAt(V);i.push(new b.DocumentLink(new b.Range(F,S),p))}l.lastIndex===a.index&&l.lastIndex++}s++}return i}provideHover(t,n,i){m("view.hover",!0)}findView(t){let n=this.loadedViews.find(i=>i.alias===t);if(!n){let i=R(this.context).filter(o=>!!o.bladePath).find(o=>o.alias===t);return i&&this.loadedViews.push(i),i}return n}};function $e(e){let t={scheme:"file",language:"blade"},n={scheme:"file",language:"php",pattern:"**/*.blade.php"},i={scheme:"file",language:"php"},o=new _(e),r=new q(e),s=new K(e);e.subscriptions.push(f.languages.registerCompletionItemProvider([t,n],o,"<"),f.languages.registerDocumentLinkProvider([t,n],o),f.languages.registerHoverProvider([t,n],o),f.languages.registerCompletionItemProvider([t,i],r,"'",'"'),f.languages.registerDocumentLinkProvider([t,i],r),f.commands.registerTextEditorCommand("livewire-jump.refreshViews",a=>{be(e,a)}),f.commands.registerCommand("livewire-jump.goToClass",()=>{oe(e)}),f.commands.registerCommand("livewire-jump.goToView",()=>{oe(e)}),f.commands.registerCommand("livewire-jump.clearViews",async()=>{await Ie(e)}),f.languages.registerCompletionItemProvider([t,n],s,"<"),f.languages.registerDocumentLinkProvider([t,n],s),f.commands.registerCommand("livewire-jump.refreshBladeIcons",async()=>{await ne(e)}),f.commands.registerCommand("livewire-jump.clearBladeIcons",async()=>{await de(e)}),f.window.onDidChangeActiveTextEditor(a=>{U(e,a)}),f.workspace.onDidChangeConfiguration(a=>{a.affectsConfiguration("livewire-jump.view.navigation")&&(m("view.navigation",!0)?U(e,void 0):$())})),U(e,f.window.activeTextEditor),console.log("Livewire Jump up")}function je(){}0&&(module.exports={activate,deactivate});
