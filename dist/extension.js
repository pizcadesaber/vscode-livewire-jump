"use strict";var O=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var Pe=Object.prototype.hasOwnProperty;var ve=(e,t)=>{for(var n in t)O(e,n,{get:t[n],enumerable:!0})},Te=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ce(t))!Pe.call(e,o)&&o!==n&&O(e,o,{get:()=>t[o],enumerable:!(i=we(t,o))||i.enumerable});return e};var be=e=>Te(O({},"__esModule",{value:!0}),e);var De={};ve(De,{activate:()=>Ee,deactivate:()=>Ve});module.exports=be(De);var f=require("vscode");var g=require("vscode");var H=require("path"),D=require("vscode");var te=require("path"),C=require("vscode");function k(...e){if(!C.workspace.workspaceFolders)return;let t=C.workspace.workspaceFolders[0].uri;return e?C.Uri.file((0,te.join)(t.path,...e.filter(n=>!!n))):t}function Z(e,t){let n=e.indexOf(t),i=n>0;return i&&(e.splice(n,1),e.unshift(t)),i}async function ne(e){return new TextDecoder("utf-8").decode(await C.workspace.fs.readFile(e))}function J(e){e?C.workspace.openTextDocument(e).then(t=>{C.window.showTextDocument(t)},()=>{C.window.showInformationMessage("File not found: "+e?.fsPath)}):C.window.showInformationMessage("File Not found.")}function m(e,t){let n=C.workspace.getConfiguration("livewire-jump");return e?t?n.get(e,t):n.get(e):n}function ie(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var I,oe=[];async function re(e){let t=m("blade.icon.dirs",{});if(t){I=[],oe=Object.entries(t).filter(([n,i])=>!!n).map(([n,i])=>ye(n,i));for(let n of oe)await se(n,"",D.workspace.workspaceFolders[0].uri);await e.workspaceState.update(G(e),I),D.window.showInformationMessage("Refreshed Icons: "+I.length+" icons.")}}function Q(e){return I===void 0&&(I=e.workspaceState.get(G(e),[])),I}async function ae(e){I=[],await e.workspaceState.update(G(e),void 0)}function G(e){return`${e.extension.id}.blade.icons`}function ye(e,t){return{path:e,tag:t}}async function se(e,t,n){if(I===void 0||!e.path||!e.tag)return;let i=[];try{i=await D.workspace.fs.readDirectory(n.with({path:(0,H.join)(n.path,e.path,t)}))}catch{return}for(let[o,r]of i){let a=(0,H.join)(t,o),s=(0,H.join)(e.path,a);r===D.FileType.Directory?se(e,a,n):r===D.FileType.File&&o.endsWith(".svg")&&I.push({path:s,tag:e.tag+a.replace(/\//g,".").replace(/\.svg$/,"")})}}var z=class{constructor(t){this.context=t}linkedIcons=[];getLinkRE(){return/<\/?(x-[a-z0-9][a-z0-9-\.:]*)[\s\/>$]/g}provideCompletionItems(t,n){if(!m("blade.icon.completion",!0))return[];let o=t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.:]*)$/i);return o?Q(this.context).map(r=>{let a=r.tag??"unknown",s=new g.CompletionItem(a,g.CompletionItemKind.Snippet);return a&&(s.detail="Blade Icon",s.insertText=new g.SnippetString(`${a} $0`),s.documentation=new g.MarkdownString(`Inserts a blade icon: 

\`\`\`html
<${a} />
\`\`\``),o.index&&(s.range=new g.Range(new g.Position(n.line,o.index+1),new g.Position(n.line,n.character)))),s}):[]}provideDocumentLinks(t,n){if(!m("blade.icon.link",!0))return[];this.linkedIcons=[];let i=[],o=100;for(let r=0;r<t.lineCount;r++){if(n.isCancellationRequested)return[];let a=t.lineAt(r),s=this.getLinkRE(),l,u=0;for(;(l=s.exec(a.text))!==null&&u<o;){if(n.isCancellationRequested)return[];if(l){let p=l[1],c=this.linkedIcons.find(q=>q.tag===p);if(!c){if(c=Q(this.context).find(q=>q.tag===p),!c)continue;this.linkedIcons.push(c)}let y=k(c.path);if(!y)continue;let V=l[0],S=l.index+V.indexOf(p),U=new g.Position(a.lineNumber,S),xe=new g.Position(a.lineNumber,S+p.length);i.push(new g.DocumentLink(new g.Range(U,xe),y)),s.lastIndex===l.index&&s.lastIndex++}u++}}return i}};var d=require("vscode");var F=require("path"),T=require("vscode");var le=require("path"),P=require("vscode");var x,L,E=[];function X(e){E.length===1?J(E[0].uri):E.length>1&&P.window.showQuickPick(E,{placeHolder:"Choose an option"}).then(t=>{t?.uri&&(L==="php"?(x=x,Z(x.aliases,t.label)&&pe(e)):L==="blade"&&(x=x,Z(x.phpReferences,t.label)&&ce(e)),J(t.uri))})}function $(){x=void 0,L=void 0,E=[],P.commands.executeCommand("setContext","livewire-jump.hasView",!1),P.commands.executeCommand("setContext","livewire-jump.hasClass",!1)}function B(e,t){if(!m("view.navigation",!0)||($(),!t))return;let n=P.workspace.asRelativePath(t.document.uri.path,!1);t.document.languageId==="blade"||t.document.uri.path.endsWith(".blade.php")?(x=R(e).find(i=>i.bladePath===n),x?.phpReferences&&x.phpReferences.length>0&&(L="blade",x.phpReferences.forEach(i=>{let o=k(i);o&&E.push({label:i,description:"PHP",uri:o})})),E.length>0&&P.commands.executeCommand("setContext","livewire-jump.hasClass",!0)):(t.document.languageId==="php"||t.document.uri.path.endsWith(".php"))&&(x=de(e).find(i=>i.path===n),L="php",x?.aliases.forEach(i=>{let o=R(e).find(r=>r.alias===i);if(o){let r=k(o.bladePath);r&&E.push({label:i,description:"View",uri:r})}}),E.length>0&&P.commands.executeCommand("setContext","livewire-jump.hasView",!0))}function ke(e,t){let n=P.workspace.getWorkspaceFolder(t);if(!n)return;let i;if(e.bladePath)i=e.bladePath;else if(e.phpPath)i=e.phpPath;else return;return P.Uri.file((0,le.join)(n.uri.path,i))}function Y(e,t,n){let i=M(e).find(o=>o.tag===t);return i?ke(i,n):void 0}async function ue(e){if(!e)return[];let t=/\bview\s*\(\s*[\'"]([a-z0-9\.-]+)[\'"]/g,n=[],i=t.exec(e);for(;i;){let o=i[1];n.includes(o)||n.push(i[1]),i=t.exec(e)}return n}var j=[],w,h,v,A=[];function R(e){return w===void 0&&(w=e.workspaceState.get(W(e),[])),w}function ce(e){e.workspaceState.update(W(e),w)}function pe(e){e.workspaceState.update(K(e),v)}function M(e){return h===void 0&&(h=e.workspaceState.get(ee(e),[])),h}function de(e){return v===void 0&&(v=e.workspaceState.get(K(e),[])),v}async function fe(e,t){let n=m("view.dirs",{});if(!n)return;j=Object.entries(n).map(([o,r])=>Ie(o,r)),w=[],h=[],v=[];let i=T.workspace.getWorkspaceFolder(t.document.uri);if(i){A=[];for(let o of j)await he(o,"",i.uri);for(let o of j)await ge(o,"",i.uri),w!==void 0&&v.forEach(r=>{r.aliases=r.aliases.filter(a=>{let s=!1;return w?.forEach(l=>{l.alias===a&&(l.phpReferences.includes(r.path)||l.phpReferences.push(r.path),s=!0)}),s})}),h!==void 0&&h.forEach(r=>{w?.some(a=>a.alias===r.alias?(r.bladePath=a.bladePath,!0):!1)});if(h===void 0)A=[];else for(;A.length>0;){let o=A.pop();o&&!h.some(r=>r.alias===o.alias)&&h.push(o)}}await e.workspaceState.update(W(e),w),await e.workspaceState.update(ee(e),h),await e.workspaceState.update(K(e),v),T.window.showInformationMessage(`Refreshed Views: ${w.length} views, ${h.length} components, ${v.length} classes`),B(e,t)}async function me(e){w=[],h=[],v=[],await e.workspaceState.update(W(e),void 0),await e.workspaceState.update(ee(e),void 0),await e.workspaceState.update(K(e),void 0),$(),T.window.showInformationMessage("Cleared Views")}function Ie(e,t){let n=e.split(/\||:|\s/g),i=t.split(/\||\s/g),o=i[1],r;return o?.startsWith("x-")?r=1:o?.startsWith("livewire:")&&(r=2),{bladePath:n[0],phpPath:n[1],alias:i[0]??"",tag:o,componentType:r}}function W(e){return`${e.extension.id}.views`}function ee(e){return`${e.extension.id}.components`}function K(e){return`${e.extension.id}.phpFiles`}async function ge(e,t,n){if(v===void 0&&h===void 0||!e.phpPath)return;let i=[];try{i=await T.workspace.fs.readDirectory(n.with({path:(0,F.join)(n.path,e.phpPath,t)}))}catch{return}for(let[o,r]of i){let a=(0,F.join)(t,o),s=(0,F.join)(e.phpPath,a);if(r===T.FileType.Directory&&!j.some(l=>s===l.phpPath))await ge(e,a,n);else if(r===T.FileType.File&&o.endsWith(".php")){let l=k(s),u=ie(a.replace(/\//g,".").replace(/\.php$/,"")),p=l?await ue(await ne(l)):[];if(p.length===0&&p.push(e.alias+u),v!==void 0){let c={aliases:p,path:s};v.push(c)}if(h!==void 0&&e.componentType&&e.tag){let c={phpPath:s,tag:e.tag+u,alias:p[0],type:e.componentType};h.push(c)}}}}async function he(e,t,n,i=!0){if(w===void 0||!e.bladePath)return;let o=[];try{o=await T.workspace.fs.readDirectory(n.with({path:(0,F.join)(n.path,e.bladePath,t)}))}catch{return}let r=e.componentType===1&&o.some(([a])=>a==="index.blade.php");r&&(o=o.filter(([a])=>a!=="index.blade.php"));for(let[a,s]of o){let l=(0,F.join)(t,a),u=(0,F.join)(e.bladePath,l);if(s===T.FileType.Directory&&!j.some(p=>u===p.bladePath))he(e,l,n,r);else if(s===T.FileType.File&&a.endsWith(".blade.php")){let p=l.replace(/\//g,".").replace(/\.blade\.php$/,""),c=e.alias+p,y={bladePath:u,alias:c,phpReferences:[]};if(w.push(y),e.componentType&&h!==void 0&&i&&e.componentType===1&&e.tag){let V={bladePath:u,tag:e.tag+p,alias:c,type:e.componentType};A.push(V)}}}}var N=class{constructor(t){this.context=t}getLinkRE(){return/<\/?((?:livewire:|x-)[a-z0-9][a-z0-9-\.:]*)[\s\/>$]/g}provideCompletionItems(t,n){if(!m("blade.tag.completion",!0))return[];let o=t.lineAt(n).text.slice(0,n.character).match(/<([a-z0-9-\.:]*)$/);return o?M(this.context).map(a=>{let s=new d.CompletionItem(a.tag,d.CompletionItemKind.Snippet);return s.detail="Component",s.insertText=new d.SnippetString(`${a.tag} $0`),s.documentation=new d.MarkdownString(`Inserts a component: 

\`\`\`html
<${a.tag} />
\`\`\``),o.index&&(s.range=new d.Range(new d.Position(n.line,o.index+1),new d.Position(n.line,n.character))),s}):[]}provideDocumentLinks(t,n){if(!m("blade.tag.link",!0))return[];let i=[],o=100;for(let r=0;r<t.lineCount;r++){let a=t.lineAt(r),s=this.getLinkRE(),l,u=0;for(;(l=s.exec(a.text))!==null&&u<o;){if(n.isCancellationRequested)return[];if(l){let p=l[1],c=Y(this.context,p,t.uri);if(!c)continue;let y=l[0],V=l.index+y.indexOf(p),S=new d.Position(a.lineNumber,V),U=new d.Position(a.lineNumber,V+p.length);i.push(new d.DocumentLink(new d.Range(S,U),c)),s.lastIndex===l.index&&s.lastIndex++}u++}}return i}provideHover(t,n,i){if(!m("blade.tag.hover",!0))return null;let o=t.lineAt(n.line).text,r,a=this.getLinkRE();for(;(r=a.exec(o))!==null;){if(i.isCancellationRequested)return null;let s=r[1],l=r.index,u=l+s.length;if(n.character>=l&&n.character<=u){let p=new d.Range(new d.Position(n.line,l),new d.Position(n.line,u)),c=Y(this.context,s,t.uri);if(!c)continue;if(c){let y=d.workspace.asRelativePath(c.fsPath);return new d.Hover(`Component: **${s}**

Path: ${y}`,p)}}}return null}};var b=require("vscode");var _=class e{constructor(t){this.context=t}loadedViews=[];static regex="(?:"+["(?:"+["#\\[Layout","@(?:"+["each","extends","include","includeIf"].join("|")+")","(?:^|[^A-Za-z0-9_:])(?:"+["view","links","layout","withView"].join("|")+")"].join("|")+`)\\(['"]([a-zA-Z0-9\\.-:]*)`].join("|")+")";provideCompletionItems(t,n,i,o){if(m("view.completion",!0)===!1)return[];let r=t.lineAt(n).text,a=RegExp(e.regex+"$").exec(r.slice(0,n.character));if(!a)return[];let s=new b.Position(n.line,a.index+a[0].length-a[1].length),l=new b.Position(n.line,a.index+a[0].length),u=new b.Range(s,l);return(R(this.context)||[]).map(p=>{let c=new b.CompletionItem(`${p.alias}`,b.CompletionItemKind.File);return c.detail="Blade View",c.documentation=`View: ${p.alias}`,c.range=u,c})}provideDocumentLinks(t,n){if(this.loadedViews=[],!m("view.link",!0))return[];let i=[],o=t.getText(),r=100,a=0,s,l=RegExp(e.regex+`['"]`,"g");for(;(s=l.exec(o))!==null&&a<r;){if(n.isCancellationRequested)return[];let u=s[1];if(u){let p=this.findView(u),c=p?k(p.bladePath):void 0;if(c){let y=s.index+s[0].indexOf(u),V=y+u.length,S=t.positionAt(y),U=t.positionAt(V);i.push(new b.DocumentLink(new b.Range(S,U),c))}l.lastIndex===s.index&&l.lastIndex++}a++}return i}provideHover(t,n,i){m("view.hover",!0)}findView(t){let n=this.loadedViews.find(i=>i.alias===t);if(!n){let i=R(this.context).filter(o=>!!o.bladePath).find(o=>o.alias===t);return i&&this.loadedViews.push(i),i}return n}};function Ee(e){let t={scheme:"file",language:"blade"},n={scheme:"file",language:"php",pattern:"**/*.blade.php"},i={scheme:"file",language:"php"},o=new N(e),r=new _(e),a=new z(e);e.subscriptions.push(f.languages.registerCompletionItemProvider([t,n],o,"<"),f.languages.registerDocumentLinkProvider([t,n],o),f.languages.registerHoverProvider([t,n],o),f.languages.registerCompletionItemProvider([t,i],r,"'",'"'),f.languages.registerDocumentLinkProvider([t,i],r),f.commands.registerTextEditorCommand("livewire-jump.refreshViews",s=>{fe(e,s)}),f.commands.registerCommand("livewire-jump.goToClass",()=>{X(e)}),f.commands.registerCommand("livewire-jump.goToView",()=>{X(e)}),f.commands.registerCommand("livewire-jump.clearViews",async()=>{await me(e)}),f.languages.registerCompletionItemProvider([t,n],a,"<"),f.languages.registerDocumentLinkProvider([t,n],a),f.commands.registerCommand("livewire-jump.refreshBladeIcons",async()=>{await re(e)}),f.commands.registerCommand("livewire-jump.clearBladeIcons",async()=>{await ae(e)}),f.window.onDidChangeActiveTextEditor(s=>{B(e,s)}),f.workspace.onDidChangeConfiguration(s=>{s.affectsConfiguration("livewire-jump.view.navigation")&&(m("view.navigation",!0)?B(e,void 0):$())})),B(e,f.window.activeTextEditor),console.log("Livewire Jump up")}function Ve(){}0&&(module.exports={activate,deactivate});
