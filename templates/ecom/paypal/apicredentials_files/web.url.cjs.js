(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1872],{60285:function(e,r,t){"use strict";t(78783);var n,a=t(82109),s=t(19781),i=t(590),u=t(17854),o=t(36048),f=t(31320),l=t(25787),h=t(86656),c=t(21574),p=t(48457),m=t(28710).codeAt,g=t(33197),v=t(58003),d=t(41637),y=t(29909),A=u.URL,L=d.URLSearchParams,b=d.getState,w=y.set,U=y.getterFor("URL"),q=Math.floor,R=Math.pow,B="Invalid scheme",S="Invalid host",k="Invalid port",_=/[A-Za-z]/,j=/[\d+\-.A-Za-z]/,P=/\d/,D=/^(0x|0X)/,I=/^[0-7]+$/,O=/^\d+$/,C=/^[\dA-Fa-f]+$/,E=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,F=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,$=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,N=/[\u0009\u000A\u000D]/g,T=function(e,r){var t,n,a;if("["==r.charAt(0)){if("]"!=r.charAt(r.length-1))return S;if(!(t=H(r.slice(1,-1))))return S;e.host=t}else if(Q(e)){if(r=g(r),E.test(r))return S;if(null===(t=z(r)))return S;e.host=t}else{if(F.test(r))return S;for(t="",n=p(r),a=0;a<n.length;a++)t+=X(n[a],M);e.host=t}},z=function(e){var r,t,n,a,s,i,u,o=e.split(".");if(o.length&&""==o[o.length-1]&&o.pop(),(r=o.length)>4)return e;for(t=[],n=0;n<r;n++){if(""==(a=o[n]))return e;if(s=10,a.length>1&&"0"==a.charAt(0)&&(s=D.test(a)?16:8,a=a.slice(8==s?1:2)),""===a)i=0;else{if(!(10==s?O:8==s?I:C).test(a))return e;i=parseInt(a,s)}t.push(i)}for(n=0;n<r;n++)if(i=t[n],n==r-1){if(i>=R(256,5-r))return null}else if(i>255)return null;for(u=t.pop(),n=0;n<t.length;n++)u+=t[n]*R(256,3-n);return u},H=function(e){var r,t,n,a,s,i,u,o=[0,0,0,0,0,0,0,0],f=0,l=null,h=0,c=function(){return e.charAt(h)};if(":"==c()){if(":"!=e.charAt(1))return;h+=2,l=++f}for(;c();){if(8==f)return;if(":"!=c()){for(r=t=0;t<4&&C.test(c());)r=16*r+parseInt(c(),16),h++,t++;if("."==c()){if(0==t)return;if(h-=t,f>6)return;for(n=0;c();){if(a=null,n>0){if(!("."==c()&&n<4))return;h++}if(!P.test(c()))return;for(;P.test(c());){if(s=parseInt(c(),10),null===a)a=s;else{if(0==a)return;a=10*a+s}if(a>255)return;h++}o[f]=256*o[f]+a,2!=++n&&4!=n||f++}if(4!=n)return;break}if(":"==c()){if(h++,!c())return}else if(c())return;o[f++]=r}else{if(null!==l)return;h++,l=++f}}if(null!==l)for(i=f-l,f=7;0!=f&&i>0;)u=o[f],o[f--]=o[l+i-1],o[l+--i]=u;else if(8!=f)return;return o},K=function(e){var r,t,n,a;if("number"==typeof e){for(r=[],t=0;t<4;t++)r.unshift(e%256),e=q(e/256);return r.join(".")}if("object"==typeof e){for(r="",n=function(e){for(var r=null,t=1,n=null,a=0,s=0;s<8;s++)0!==e[s]?(a>t&&(r=n,t=a),n=null,a=0):(null===n&&(n=s),++a);return a>t&&(r=n,t=a),r}(e),t=0;t<8;t++)a&&0===e[t]||(a&&(a=!1),n===t?(r+=t?":":"::",a=!0):(r+=e[t].toString(16),t<7&&(r+=":")));return"["+r+"]"}return e},M={},Z=c({},M,{" ":1,'"':1,"<":1,">":1,"`":1}),x=c({},Z,{"#":1,"?":1,"{":1,"}":1}),J=c({},x,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),X=function(e,r){var t=m(e,0);return t>32&&t<127&&!h(r,e)?e:encodeURIComponent(e)},G={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(e){return h(G,e.scheme)},V=function(e){return""!=e.username||""!=e.password},W=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Y=function(e,r){var t;return 2==e.length&&_.test(e.charAt(0))&&(":"==(t=e.charAt(1))||!r&&"|"==t)},ee=function(e){var r;return e.length>1&&Y(e.slice(0,2))&&(2==e.length||"/"===(r=e.charAt(2))||"\\"===r||"?"===r||"#"===r)},re=function(e){var r=e.path,t=r.length;!t||"file"==e.scheme&&1==t&&Y(r[0],!0)||r.pop()},te=function(e){return"."===e||"%2e"===e.toLowerCase()},ne={},ae={},se={},ie={},ue={},oe={},fe={},le={},he={},ce={},pe={},me={},ge={},ve={},de={},ye={},Ae={},Le={},be={},we={},Ue={},qe=function(e,r,t,a){var s,i,u,o,f,l=t||ne,c=0,m="",g=!1,v=!1,d=!1;for(t||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,r=r.replace($,"")),r=r.replace(N,""),s=p(r);c<=s.length;){switch(i=s[c],l){case ne:if(!i||!_.test(i)){if(t)return B;l=se;continue}m+=i.toLowerCase(),l=ae;break;case ae:if(i&&(j.test(i)||"+"==i||"-"==i||"."==i))m+=i.toLowerCase();else{if(":"!=i){if(t)return B;m="",l=se,c=0;continue}if(t&&(Q(e)!=h(G,m)||"file"==m&&(V(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=m,t)return void(Q(e)&&G[e.scheme]==e.port&&(e.port=null));m="","file"==e.scheme?l=ve:Q(e)&&a&&a.scheme==e.scheme?l=ie:Q(e)?l=le:"/"==s[c+1]?(l=ue,c++):(e.cannotBeABaseURL=!0,e.path.push(""),l=be)}break;case se:if(!a||a.cannotBeABaseURL&&"#"!=i)return B;if(a.cannotBeABaseURL&&"#"==i){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,l=Ue;break}l="file"==a.scheme?ve:oe;continue;case ie:if("/"!=i||"/"!=s[c+1]){l=oe;continue}l=he,c++;break;case ue:if("/"==i){l=ce;break}l=Le;continue;case oe:if(e.scheme=a.scheme,i==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==i||"\\"==i&&Q(e))l=fe;else if("?"==i)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",l=we;else{if("#"!=i){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),l=Le;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Ue}break;case fe:if(!Q(e)||"/"!=i&&"\\"!=i){if("/"!=i){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,l=Le;continue}l=ce}else l=he;break;case le:if(l=he,"/"!=i||"/"!=m.charAt(c+1))continue;c++;break;case he:if("/"!=i&&"\\"!=i){l=ce;continue}break;case ce:if("@"==i){g&&(m="%40"+m),g=!0,u=p(m);for(var y=0;y<u.length;y++){var A=u[y];if(":"!=A||d){var L=X(A,J);d?e.password+=L:e.username+=L}else d=!0}m=""}else if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&Q(e)){if(g&&""==m)return"Invalid authority";c-=p(m).length+1,m="",l=pe}else m+=i;break;case pe:case me:if(t&&"file"==e.scheme){l=ye;continue}if(":"!=i||v){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&Q(e)){if(Q(e)&&""==m)return S;if(t&&""==m&&(V(e)||null!==e.port))return;if(o=T(e,m))return o;if(m="",l=Ae,t)return;continue}"["==i?v=!0:"]"==i&&(v=!1),m+=i}else{if(""==m)return S;if(o=T(e,m))return o;if(m="",l=ge,t==me)return}break;case ge:if(!P.test(i)){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&Q(e)||t){if(""!=m){var b=parseInt(m,10);if(b>65535)return k;e.port=Q(e)&&b===G[e.scheme]?null:b,m=""}if(t)return;l=Ae;continue}return k}m+=i;break;case ve:if(e.scheme="file","/"==i||"\\"==i)l=de;else{if(!a||"file"!=a.scheme){l=Le;continue}if(i==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==i)e.host=a.host,e.path=a.path.slice(),e.query="",l=we;else{if("#"!=i){ee(s.slice(c).join(""))||(e.host=a.host,e.path=a.path.slice(),re(e)),l=Le;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Ue}}break;case de:if("/"==i||"\\"==i){l=ye;break}a&&"file"==a.scheme&&!ee(s.slice(c).join(""))&&(Y(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),l=Le;continue;case ye:if(i==n||"/"==i||"\\"==i||"?"==i||"#"==i){if(!t&&Y(m))l=Le;else if(""==m){if(e.host="",t)return;l=Ae}else{if(o=T(e,m))return o;if("localhost"==e.host&&(e.host=""),t)return;m="",l=Ae}continue}m+=i;break;case Ae:if(Q(e)){if(l=Le,"/"!=i&&"\\"!=i)continue}else if(t||"?"!=i)if(t||"#"!=i){if(i!=n&&(l=Le,"/"!=i))continue}else e.fragment="",l=Ue;else e.query="",l=we;break;case Le:if(i==n||"/"==i||"\\"==i&&Q(e)||!t&&("?"==i||"#"==i)){if(".."===(f=(f=m).toLowerCase())||"%2e."===f||".%2e"===f||"%2e%2e"===f?(re(e),"/"==i||"\\"==i&&Q(e)||e.path.push("")):te(m)?"/"==i||"\\"==i&&Q(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Y(m)&&(e.host&&(e.host=""),m=m.charAt(0)+":"),e.path.push(m)),m="","file"==e.scheme&&(i==n||"?"==i||"#"==i))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==i?(e.query="",l=we):"#"==i&&(e.fragment="",l=Ue)}else m+=X(i,x);break;case be:"?"==i?(e.query="",l=we):"#"==i?(e.fragment="",l=Ue):i!=n&&(e.path[0]+=X(i,M));break;case we:t||"#"!=i?i!=n&&("'"==i&&Q(e)?e.query+="%27":e.query+="#"==i?"%23":X(i,M)):(e.fragment="",l=Ue);break;case Ue:i!=n&&(e.fragment+=X(i,Z))}c++}},Re=function(e){var r,t,n=l(this,Re,"URL"),a=arguments.length>1?arguments[1]:void 0,i=String(e),u=w(n,{type:"URL"});if(void 0!==a)if(a instanceof Re)r=U(a);else if(t=qe(r={},String(a)))throw TypeError(t);if(t=qe(u,i,null,r))throw TypeError(t);var o=u.searchParams=new L,f=b(o);f.updateSearchParams(u.query),f.updateURL=function(){u.query=String(o)||null},s||(n.href=Se.call(n),n.origin=ke.call(n),n.protocol=_e.call(n),n.username=je.call(n),n.password=Pe.call(n),n.host=De.call(n),n.hostname=Ie.call(n),n.port=Oe.call(n),n.pathname=Ce.call(n),n.search=Ee.call(n),n.searchParams=Fe.call(n),n.hash=$e.call(n))},Be=Re.prototype,Se=function(){var e=U(this),r=e.scheme,t=e.username,n=e.password,a=e.host,s=e.port,i=e.path,u=e.query,o=e.fragment,f=r+":";return null!==a?(f+="//",V(e)&&(f+=t+(n?":"+n:"")+"@"),f+=K(a),null!==s&&(f+=":"+s)):"file"==r&&(f+="//"),f+=e.cannotBeABaseURL?i[0]:i.length?"/"+i.join("/"):"",null!==u&&(f+="?"+u),null!==o&&(f+="#"+o),f},ke=function(){var e=U(this),r=e.scheme,t=e.port;if("blob"==r)try{return new URL(r.path[0]).origin}catch(e){return"null"}return"file"!=r&&Q(e)?r+"://"+K(e.host)+(null!==t?":"+t:""):"null"},_e=function(){return U(this).scheme+":"},je=function(){return U(this).username},Pe=function(){return U(this).password},De=function(){var e=U(this),r=e.host,t=e.port;return null===r?"":null===t?K(r):K(r)+":"+t},Ie=function(){var e=U(this).host;return null===e?"":K(e)},Oe=function(){var e=U(this).port;return null===e?"":String(e)},Ce=function(){var e=U(this),r=e.path;return e.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):""},Ee=function(){var e=U(this).query;return e?"?"+e:""},Fe=function(){return U(this).searchParams},$e=function(){var e=U(this).fragment;return e?"#"+e:""},Ne=function(e,r){return{get:e,set:r,configurable:!0,enumerable:!0}};if(s&&o(Be,{href:Ne(Se,(function(e){var r=U(this),t=String(e),n=qe(r,t);if(n)throw TypeError(n);b(r.searchParams).updateSearchParams(r.query)})),origin:Ne(ke),protocol:Ne(_e,(function(e){var r=U(this);qe(r,String(e)+":",ne)})),username:Ne(je,(function(e){var r=U(this),t=p(String(e));if(!W(r)){r.username="";for(var n=0;n<t.length;n++)r.username+=X(t[n],J)}})),password:Ne(Pe,(function(e){var r=U(this),t=p(String(e));if(!W(r)){r.password="";for(var n=0;n<t.length;n++)r.password+=X(t[n],J)}})),host:Ne(De,(function(e){var r=U(this);r.cannotBeABaseURL||qe(r,String(e),pe)})),hostname:Ne(Ie,(function(e){var r=U(this);r.cannotBeABaseURL||qe(r,String(e),me)})),port:Ne(Oe,(function(e){var r=U(this);W(r)||(""==(e=String(e))?r.port=null:qe(r,e,ge))})),pathname:Ne(Ce,(function(e){var r=U(this);r.cannotBeABaseURL||(r.path=[],qe(r,e+"",Ae))})),search:Ne(Ee,(function(e){var r=U(this);""==(e=String(e))?r.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),r.query="",qe(r,e,we)),b(r.searchParams).updateSearchParams(r.query)})),searchParams:Ne(Fe),hash:Ne($e,(function(e){var r=U(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),r.fragment="",qe(r,e,Ue)):r.fragment=null}))}),f(Be,"toJSON",(function(){return Se.call(this)}),{enumerable:!0}),f(Be,"toString",(function(){return Se.call(this)}),{enumerable:!0}),A){var Te=A.createObjectURL,ze=A.revokeObjectURL;Te&&f(Re,"createObjectURL",(function(e){return Te.apply(A,arguments)})),ze&&f(Re,"revokeObjectURL",(function(e){return ze.apply(A,arguments)}))}v(Re,"URL"),a({global:!0,forced:!i,sham:!s},{URL:Re})}}]);
//# sourceMappingURL=web.url.cjs.js.map