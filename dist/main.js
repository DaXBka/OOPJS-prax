(()=>{"use strict";const e=e=>{const t=document.querySelector("tbody");t.innerHTML="",e.forEach((s=>{const a=e.findIndex((e=>e===s));t.insertAdjacentHTML("beforeend",`\n            <tr>\n                <td>${a+1}</td>\n                <td>${s._name}</td>\n                <td>${s._surname}</td>\n                <td>${s._age}</td>\n                <td>${s._hasChild?"Есть":"Нет"}</td>\n                <td>${s._job}</td>\n                <td>$${s._salary}</td>\n                <td>${s._language}</td>\n                <td><button id="${a}">Удалить</button></td>\n            </tr>\n        `)})),localStorage.users=JSON.stringify(e)};class t{constructor(e,t,s,a=!1){this._name=e,this._surname=t,this._age=s,this._hasChild=a}get name(){return this._name}set name(e){e.length<3&&(e="Unnamed"),this._name=e.trim()}get surname(){return this._surname}set surname(e){e.length<3&&(e="Unnamed"),this._surname=e.trim()}get age(){return this._age}set age(e){(e<0||e>100)&&(e=25),this._age=e}get hasChild(){return this._hasChild}set hasChild(e){"boolean"!=typeof e&&(e=!1),this._hasChild=e}}class s extends t{constructor(e,t,s,a=!1,r,n){super(e,t,s,a),this._salary=r,this._language=n,this._job="Frontend Developer"}get salary(){return this._salary}set salary(e){(e<0||e>1e4)&&(e=1e3),this._salary=e}get language(){return this._language}set language(e){this._language=e}get job(){return this._job}}class a extends t{constructor(e,t,s,a=!1,r,n){super(e,t,s,a),this._salary=r,this._language=n,this._job="Backend Developer"}get salary(){return this._salary}set salary(e){(e<0||e>1e4)&&(e=1e3),this._salary=e}get language(){return this._language}set language(e){this._language=e}get job(){return this._job}}const r=document.querySelector("form"),n=document.getElementById("checkbox"),u=document.getElementById("job"),l=document.querySelector("table"),g=localStorage.users?JSON.parse(localStorage.users):[];r.addEventListener("submit",(t=>{if(t.preventDefault(),u.value){const t={};let l;new FormData(r).forEach(((e,s)=>t[s]=e)),t["user-hasChild"]=n.checked,l="FE"===u.value?new s(t["user-name"],t["user-surname"],t["user-age"],t["user-hasChild"],t["user-salary"],t["user-language"]):new a(t["user-name"],t["user-surname"],t["user-age"],t["user-hasChild"],t["user-salary"],t["user-language"]),g.push(l),e(g),r.reset()}})),l.addEventListener("click",(t=>{var s;t.target.matches("button")&&(s=t.target.getAttribute("id"),g.splice(s,1),e(g))})),e(g)})();