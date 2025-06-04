import{a as E,S as P,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const R="50573196-0c5162e61d19a838e32427977",B="https://pixabay.com/api/",$=15;async function f(o,s=1){const r={key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:$};return(await E.get(B,{params:r})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const s=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:S,downloads:q})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${e}" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${S}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${q}</p>
          </div>
        </div>
      </li>`).join("");h.insertAdjacentHTML("beforeend",s),M.refresh()}function O(){h.innerHTML=""}function L(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}function b(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}const p=document.querySelector(".form"),x=p.elements["search-text"],A=document.querySelector(".load-more");let u=1,m="",c=0,l=0;p.addEventListener("submit",async o=>{o.preventDefault();const s=x.value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}m=s,u=1,c=0,l=0,O(),w(),L();try{const r=await f(m,u);if(c=r.totalHits,l=r.hits.length,d(),r.hits.length===0){n.error({title:"Error",message:"No images found. Please try another query.",position:"topRight"});return}v(r.hits),l<c&&b()}catch{d(),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}p.reset()});A.addEventListener("click",async()=>{u+=1,L(),w();try{const o=await f(m,u);l+=o.hits.length,v(o.hits),d(),I(),l>=c?n.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b()}catch{d(),n.error({title:"Error",message:"Failed to load more images.",position:"topRight"})}});function I(){const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
