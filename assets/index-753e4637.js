(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const c={_origin:"https://api.emailjs.com"},f=(t,e="https://api.emailjs.com")=>{c._userID=t,c._origin=e},u=(t,e,s)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const m=(t,e,s={})=>new Promise((i,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const d=new l(n);d.status===200||d.text==="OK"?i(d):r(d)}),o.addEventListener("error",({target:n})=>{r(new l(n))}),o.open("POST",c._origin+t,!0),Object.keys(s).forEach(n=>{o.setRequestHeader(n,s[n])}),o.send(e)}),p=(t,e,s,i)=>{const r=i||c._userID;return u(r,t,e),m("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:r,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},g=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},h=(t,e,s,i)=>{const r=i||c._userID,o=g(s);u(r,t,e);const n=new FormData(o);return n.append("lib_version","3.10.0"),n.append("service_id",t),n.append("template_id",e),n.append("user_id",r),m("/api/v1.0/email/send-form",n)},y={init:f,send:p,sendForm:h},b=document.getElementById("burger-toggler"),_=document.getElementById("sm-menu-ref-1"),E=document.getElementById("sm-menu-ref-2"),v=document.getElementById("sm-menu-ref-3"),L=document.getElementById("sm-menu-ref-4");function a(){const t=document.getElementById("sm-menu-ref");t.classList.toggle("hidden"),t.classList.toggle("come-front-menu")}b.onclick=a;_.onclick=a;E.onclick=a;v.onclick=a;L.onclick=a;window.onload=function(){const t=document.getElementById("contact-form");t.addEventListener("submit",function(e){e.preventDefault(),this.contact_number.value=Math.random()*1e5|0,y.sendForm("service_6m0dxxd","template_leql0vj","#contact-form","PLBc_dlxma86zACkP").then(function(){console.log("SUCCESS!"),t&&t.reset()},function(s){console.log("FAILED...",s)})})};
