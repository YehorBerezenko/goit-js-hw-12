import{a as m,S as y,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="50573196-0c5162e61d19a838e32427977",h="https://pixabay.com/api/";async function v(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:r})).data}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
        <li class="gallery-item">
  <a href="${a}">
    <img src="${s}" alt="${e}" />
  </a>
  <div class="info">
    <div class="info-item">
      <p class="label">Likes</p>
      <p class="value">${t}</p>
    </div>
    <div class="info-item">
      <p class="label">Views</p>
      <p class="value">${i}</p>
    </div>
    <div class="info-item">
      <p class="label">Comments</p>
      <p class="value">${d}</p>
    </div>
    <div class="info-item">
      <p class="label">Downloads</p>
      <p class="value">${f}</p>
    </div>
  </div>
</li>`).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function q(){u.innerHTML=""}function w(){p.classList.add("visible")}function c(){p.classList.remove("visible")}const l=document.querySelector(".form"),P=l.elements["search-text"];l.addEventListener("submit",async o=>{o.preventDefault();const r=P.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}q(),w();try{const s=await v(r);if(c(),s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}catch(s){c(),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(s)}l.reset()});
//# sourceMappingURL=index.js.map
