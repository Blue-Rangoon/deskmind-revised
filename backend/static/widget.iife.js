var DeskMindWidget=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=`deskmind-widget-root`,n=`#2563eb`,r=`<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />`,i=`<path d="M13 2 4.5 13.5H11l-1.5 8.5L19.5 10H13l1.5-8z" />`,a=`<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />`,o=`<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />`;function s(e){return{id:`classic`,launcherIcon:r,variables:{"--dm-accent":e,"--dm-on-accent":`#fff`,"--dm-launcher-bg":e,"--dm-launcher-icon":`#fff`,"--dm-window-bg":`#fff`,"--dm-window-border":`#e5e7eb`,"--dm-window-radius":`12px`,"--dm-header-bg":e,"--dm-header-text":`#fff`,"--dm-close-hover":`rgba(255,255,255,0.2)`,"--dm-line":`#e5e7eb`,"--dm-text":`#111827`,"--dm-text-soft":`#374151`,"--dm-muted":`#6b7280`,"--dm-bubble-bg":`#f3f4f6`,"--dm-user-bg":e,"--dm-user-text":`#fff`,"--dm-error-bg":`#fee2e2`,"--dm-error-text":`#991b1b`,"--dm-input-bg":`#fff`,"--dm-input-border":`#d1d5db`,"--dm-input-text":`#111827`,"--dm-send-bg":e,"--dm-send-text":`#fff`,"--dm-surface-2":`#f9fafb`,"--dm-chip-bg":`#fff`,"--dm-chip-border":e,"--dm-chip-text":e,"--dm-chip-hover-bg":e,"--dm-chip-hover-text":`#fff`,"--dm-lead-bg":`#fffbeb`,"--dm-lead-text":`#78350f`,"--dm-lead-input-bg":`#fff`,"--dm-lead-input-border":`#d1d5db`,"--dm-lead-input-text":`#111827`,"--dm-lead-status":`#166534`,"--dm-typing":`#9ca3af`}}}var c={id:`cyber`,launcherIcon:i,variables:{"--dm-accent":`#06b6d4`,"--dm-on-accent":`#04121a`,"--dm-launcher-bg":`linear-gradient(135deg, #22d3ee 0%, #06b6d4 60%, #0e7490 100%)`,"--dm-launcher-icon":`#04121a`,"--dm-window-bg":`#0c121c`,"--dm-window-border":`#1d2a3a`,"--dm-window-radius":`14px`,"--dm-header-bg":`linear-gradient(135deg, #101925 0%, #0c121c 100%)`,"--dm-header-text":`#f1f5f9`,"--dm-close-hover":`rgba(6,182,212,0.18)`,"--dm-line":`#1d2a3a`,"--dm-text":`#f1f5f9`,"--dm-text-soft":`#94a3b8`,"--dm-muted":`#64748b`,"--dm-bubble-bg":`#151f2d`,"--dm-user-bg":`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`,"--dm-user-text":`#04121a`,"--dm-error-bg":`rgba(239,68,68,0.16)`,"--dm-error-text":`#fca5a5`,"--dm-input-bg":`#0c121c`,"--dm-input-border":`#293a4e`,"--dm-input-text":`#f1f5f9`,"--dm-send-bg":`#06b6d4`,"--dm-send-text":`#04121a`,"--dm-surface-2":`#101925`,"--dm-chip-bg":`transparent`,"--dm-chip-border":`#0e7490`,"--dm-chip-text":`#22d3ee`,"--dm-chip-hover-bg":`#06b6d4`,"--dm-chip-hover-text":`#04121a`,"--dm-lead-bg":`#101925`,"--dm-lead-text":`#94a3b8`,"--dm-lead-input-bg":`#0c121c`,"--dm-lead-input-border":`#293a4e`,"--dm-lead-input-text":`#f1f5f9`,"--dm-lead-status":`#22c55e`,"--dm-typing":`#22d3ee`}},l={id:`aurora`,launcherIcon:a,variables:{"--dm-accent":`#8b5cf6`,"--dm-on-accent":`#ffffff`,"--dm-launcher-bg":`linear-gradient(135deg, #a855f7 0%, #6366f1 100%)`,"--dm-launcher-icon":`#ffffff`,"--dm-window-bg":`#0b1020`,"--dm-window-border":`#263463`,"--dm-window-radius":`16px`,"--dm-header-bg":`linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)`,"--dm-header-text":`#f5f3ff`,"--dm-close-hover":`rgba(167,139,250,0.25)`,"--dm-line":`#263463`,"--dm-text":`#f5f3ff`,"--dm-text-soft":`#c4b5fd`,"--dm-muted":`#94a3c8`,"--dm-bubble-bg":`#151d3d`,"--dm-user-bg":`linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)`,"--dm-user-text":`#ffffff`,"--dm-error-bg":`rgba(244,63,94,0.16)`,"--dm-error-text":`#fda4af`,"--dm-input-bg":`#0b1020`,"--dm-input-border":`#334377`,"--dm-input-text":`#f5f3ff`,"--dm-send-bg":`#8b5cf6`,"--dm-send-text":`#ffffff`,"--dm-surface-2":`#121a35`,"--dm-chip-bg":`transparent`,"--dm-chip-border":`#7c3aed`,"--dm-chip-text":`#c4b5fd`,"--dm-chip-hover-bg":`#8b5cf6`,"--dm-chip-hover-text":`#ffffff`,"--dm-lead-bg":`#1a2342`,"--dm-lead-text":`#c4b5fd`,"--dm-lead-input-bg":`#0b1020`,"--dm-lead-input-border":`#334377`,"--dm-lead-input-text":`#f5f3ff`,"--dm-lead-status":`#6ee7b7`,"--dm-typing":`#a78bfa`}},u={id:`sunrise`,launcherIcon:o,variables:{"--dm-accent":`#f97316`,"--dm-on-accent":`#ffffff`,"--dm-launcher-bg":`linear-gradient(135deg, #fb923c 0%, #ea580c 100%)`,"--dm-launcher-icon":`#ffffff`,"--dm-window-bg":`#ffffff`,"--dm-window-border":`#fed7aa`,"--dm-window-radius":`14px`,"--dm-header-bg":`linear-gradient(135deg, #fb923c 0%, #ea580c 100%)`,"--dm-header-text":`#fff7ed`,"--dm-close-hover":`rgba(255,255,255,0.25)`,"--dm-line":`#fed7aa`,"--dm-text":`#431407`,"--dm-text-soft":`#7c2d12`,"--dm-muted":`#9a3412`,"--dm-bubble-bg":`#ffedd5`,"--dm-user-bg":`linear-gradient(135deg, #f97316 0%, #ea580c 100%)`,"--dm-user-text":`#ffffff`,"--dm-error-bg":`#fee2e2`,"--dm-error-text":`#991b1b`,"--dm-input-bg":`#ffffff`,"--dm-input-border":`#fdba74`,"--dm-input-text":`#431407`,"--dm-send-bg":`#f97316`,"--dm-send-text":`#ffffff`,"--dm-surface-2":`#fff7ed`,"--dm-chip-bg":`#ffffff`,"--dm-chip-border":`#fdba74`,"--dm-chip-text":`#c2410c`,"--dm-chip-hover-bg":`#f97316`,"--dm-chip-hover-text":`#ffffff`,"--dm-lead-bg":`#fef3c7`,"--dm-lead-text":`#92400e`,"--dm-lead-input-bg":`#ffffff`,"--dm-lead-input-border":`#fdba74`,"--dm-lead-input-text":`#431407`,"--dm-lead-status":`#15803d`,"--dm-typing":`#fb923c`}};function d(e,t){switch(e){case`cyber`:return c;case`aurora`:return l;case`sunrise`:return u;default:return s(t)}}var f=6e4,p=`I'm sorry, I couldn't generate an answer just now. Please try again.`,m=`deskmind_conversation_id:`;function h(){return Array.from(document.querySelectorAll(`script`)).find(e=>/widget(\.iife)?\.js/.test(e.src||``))||null}function g(){let e=window.DeskMindConfig;if(e&&e.botId)return{botId:e.botId,apiUrl:e.apiUrl||window.location.origin};let t=h(),n=t?.getAttribute(`data-bot-id`);if(n)return{botId:n,apiUrl:t?.getAttribute(`data-api-url`)||(t?.src?new URL(t.src).origin:window.location.origin)};throw Error(`DeskMindConfig or data-bot-id is required to initialize the widget`)}async function _(e){let t=`${e.apiUrl}/bots/${encodeURIComponent(e.botId)}/config`;try{let e=await fetch(t);return e.ok?await e.json():null}catch{return null}}function v(e){try{return sessionStorage.getItem(`${m}${e}`)}catch{return null}}function y(e,t){try{let n=`${m}${e}`;t?sessionStorage.setItem(n,t):sessionStorage.removeItem(n)}catch{}}function b(e){return`
    <button id="deskmind-launcher" aria-label="Open chat">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        ${e}
      </svg>
    </button>
    <div id="deskmind-window" hidden>
      <div id="deskmind-header">
        <div style="display:flex;align-items:center;gap:8px;">
          <img id="deskmind-avatar" src="" alt="" style="width:24px;height:24px;border-radius:50%;object-fit:cover;display:none;" />
          <span id="deskmind-title">Chat</span>
        </div>
        <button id="deskmind-close" aria-label="Close chat">×</button>
      </div>
      <div id="deskmind-messages"></div>
      <form id="deskmind-form">
        <input id="deskmind-input" placeholder="Type a message..." autocomplete="off" />
        <button type="submit" id="deskmind-send">Send</button>
      </form>
    </div>
  `}function x(e){return`
    :host {
${Object.entries(e.variables).map(([e,t])=>`      ${e}: ${t};`).join(`
`)}
    }
    * { box-sizing: border-box; }
    #deskmind-launcher {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: var(--dm-launcher-bg);
      color: var(--dm-launcher-icon);
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #deskmind-launcher svg { display: block; }
    #deskmind-launcher:hover { transform: scale(1.06); box-shadow: 0 6px 16px rgba(0,0,0,0.22); }
    #deskmind-launcher:active { transform: scale(0.96); }
    #deskmind-window {
      position: fixed;
      bottom: 88px;
      right: 20px;
      width: 360px;
      max-width: calc(100vw - 40px);
      height: 480px;
      max-height: calc(100vh - 120px);
      background: var(--dm-window-bg);
      border-radius: var(--dm-window-radius);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      z-index: 99999;
      overflow: hidden;
      border: 1px solid var(--dm-window-border);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #deskmind-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--dm-header-bg);
      color: var(--dm-header-text);
      font-weight: 600;
    }
    #deskmind-close {
      background: transparent;
      border: none;
      color: inherit;
      font-size: 20px;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      border-radius: 4px;
    }
    #deskmind-close:hover { background: var(--dm-close-hover); }
    #deskmind-messages {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--dm-window-bg);
    }
    #deskmind-form {
      display: flex;
      gap: 8px;
      padding: 12px 16px;
      border-top: 1px solid var(--dm-line);
      background: var(--dm-window-bg);
    }
    #deskmind-input {
      flex: 1;
      padding: 10px 12px;
      border: 1px solid var(--dm-input-border);
      border-radius: 8px;
      font-size: 14px;
      outline: none;
      background: var(--dm-input-bg);
      color: var(--dm-input-text);
    }
    #deskmind-input:focus { border-color: var(--dm-accent); }
    #deskmind-send {
      padding: 10px 14px;
      background: var(--dm-send-bg);
      color: var(--dm-send-text);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
    }
    #deskmind-send:disabled { opacity: 0.55; cursor: not-allowed; }
    .deskmind-message { max-width: 85%; padding: 10px 12px; border-radius: 10px; font-size: 14px; line-height: 1.4; word-wrap: break-word; }
    .deskmind-message-user { align-self: flex-end; background: var(--dm-user-bg); color: var(--dm-user-text); border-bottom-right-radius: 2px; }
    .deskmind-message-assistant { align-self: flex-start; background: var(--dm-bubble-bg); color: var(--dm-text); border-bottom-left-radius: 2px; }
    .deskmind-message-error { align-self: flex-start; background: var(--dm-error-bg); color: var(--dm-error-text); border-bottom-left-radius: 2px; }
    .deskmind-sources { margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--dm-line); }
    .deskmind-sources-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--dm-muted); margin-bottom: 4px; }
    .deskmind-source { font-size: 12px; color: var(--dm-text-soft); }
    .deskmind-sources-toggle { background: none; border: none; padding: 0; color: var(--dm-accent); font-size: 12px; cursor: pointer; margin-top: 6px; }
    .deskmind-sources-toggle[hidden] { display: none; }
    .deskmind-sources-list { display: none; margin-top: 6px; }
  .deskmind-sources-list[open] { display: block; }
  .deskmind-source-card { border: 1px solid var(--dm-line); border-radius: 6px; padding: 6px 8px; background: var(--dm-surface-2); }
  .deskmind-source-filename { font-size: 11px; font-weight: 600; color: var(--dm-text); }
  .deskmind-source-content { font-size: 11px; color: var(--dm-text-soft); margin-top: 2px; font-style: italic; }
  .deskmind-source-score { font-size: 11px; color: var(--dm-muted); margin-top: 2px; }
  #deskmind-window[hidden] { display: none !important; }
  #deskmind-launcher[hidden] { display: none !important; }
  .deskmind-welcome {
    align-self: flex-start;
    background: var(--dm-bubble-bg);
    color: var(--dm-text);
    padding: 10px 12px;
    border-radius: 10px;
    border-bottom-left-radius: 2px;
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-wrap;
    max-width: 85%;
  }
  .deskmind-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .deskmind-chip {
    border: 1px solid var(--dm-chip-border);
    color: var(--dm-chip-text);
    background: var(--dm-chip-bg);
    border-radius: 9999px;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .deskmind-chip:hover { background: var(--dm-chip-hover-bg); color: var(--dm-chip-hover-text); }
  .deskmind-lead {
    align-self: flex-start;
    background: var(--dm-lead-bg);
    border: 1px solid var(--dm-accent);
    border-radius: 10px;
    padding: 10px 12px;
    max-width: 85%;
  }
  .deskmind-lead-label { font-size: 12px; color: var(--dm-lead-text); margin: 0 0 8px; }
  .deskmind-lead-row { display: flex; gap: 6px; }
  .deskmind-lead-email {
    flex: 1;
    min-width: 0;
    padding: 7px 10px;
    border: 1px solid var(--dm-lead-input-border);
    border-radius: 8px;
    font-size: 13px;
    outline: none;
    background: var(--dm-lead-input-bg);
    color: var(--dm-lead-input-text);
  }
  .deskmind-lead-email:focus { border-color: var(--dm-accent); }
  .deskmind-lead-submit {
    padding: 7px 12px;
    background: var(--dm-accent);
    color: var(--dm-on-accent);
    border: none;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
  }
  .deskmind-lead-submit:disabled { opacity: 0.5; cursor: not-allowed; }
  .deskmind-lead-status { font-size: 12px; color: var(--dm-lead-status); margin: 8px 0 0; }
  .deskmind-typing { display: inline-flex; align-items: center; gap: 5px; min-height: 18px; padding: 12px; }
  .deskmind-typing-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--dm-typing);
    animation: deskmind-bounce 1.2s infinite ease-in-out;
  }
  .deskmind-typing-dot:nth-child(2) { animation-delay: 0.15s; }
  .deskmind-typing-dot:nth-child(3) { animation-delay: 0.3s; }
  @keyframes deskmind-bounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.45; }
    40% { transform: translateY(-4px); opacity: 1; }
  }
  @media (max-width: 480px) {
    #deskmind-window {
      left: 12px;
      right: 12px;
      width: auto;
      max-width: none;
      bottom: calc(88px + env(safe-area-inset-bottom, 0px));
      height: calc(100dvh - 110px);
      max-height: calc(100dvh - 110px);
    }
    #deskmind-launcher { right: 16px; bottom: calc(16px + env(safe-area-inset-bottom, 0px)); }
    /* 16px prevents iOS Safari from auto-zooming (and shifting the layout)
       when the field receives focus. */
    #deskmind-input,
    .deskmind-lead-email { font-size: 16px; }
  }
  `}function S(e,t,n){let r=document.createElement(`div`);r.className=`deskmind-message deskmind-message-${e}`;let i=document.createElement(`div`);if(i.textContent=t,r.appendChild(i),n&&n.length>0){let e=document.createElement(`button`);e.className=`deskmind-sources-toggle`,e.textContent=`View sources (${n.length})`,r.appendChild(e);let t=document.createElement(`div`);t.className=`deskmind-sources-list`,t.hidden=!0;for(let e of n){let n=document.createElement(`div`);n.className=`deskmind-source-card`;let r=document.createElement(`div`);r.className=`deskmind-source-filename`,r.textContent=e.document_filename;let i=document.createElement(`div`);i.className=`deskmind-source-content`,i.textContent=e.chunk_content;let a=document.createElement(`div`);a.className=`deskmind-source-score`,a.textContent=`${Math.round(e.similarity_score*100)}% match`,n.appendChild(r),n.appendChild(i),n.appendChild(a),t.appendChild(n)}r.appendChild(t),e.addEventListener(`click`,()=>{let r=t.hidden;t.hidden=!r,e.textContent=r?`Hide sources`:`View sources (${n.length})`})}return r}function C(e,t,n,r){let i=S(t,n,r);e.appendChild(i),e.scrollTop=e.scrollHeight}function w(e,t){let n=document.createElement(`div`);n.className=`deskmind-lead`,n.setAttribute(`data-question`,t);let r=document.createElement(`p`);r.className=`deskmind-lead-label`,r.textContent=`Didn't find what you needed? Leave your email and we'll follow up.`,n.appendChild(r);let i=document.createElement(`div`);i.className=`deskmind-lead-row`;let a=document.createElement(`input`);a.type=`email`,a.placeholder=`you@example.com`,a.className=`deskmind-lead-email`;let o=document.createElement(`button`);o.type=`button`,o.className=`deskmind-lead-submit`,o.textContent=`Send`,o.disabled=!0;let s=document.createElement(`p`);return s.className=`deskmind-lead-status`,s.hidden=!0,i.appendChild(a),i.appendChild(o),n.appendChild(i),n.appendChild(s),a.addEventListener(`input`,()=>{let e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value.trim());o.disabled=!e}),o.addEventListener(`click`,async()=>{let n=a.value.trim();if(n){o.disabled=!0,o.textContent=`Sending...`;try{let r=`${e.apiUrl}/bots/${encodeURIComponent(e.botId)}/leads`;if(!(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:n,question:t})})).ok)throw Error(`Request failed`);s.textContent=`Thanks! We’ll follow up by email.`,s.hidden=!1,i.hidden=!0}catch{s.textContent=`Something went wrong. Please try again.`,s.hidden=!1,o.disabled=!1,o.textContent=`Send`}}}),n}function T(){let e=document.createElement(`div`);e.className=`deskmind-message deskmind-message-assistant deskmind-typing`,e.setAttribute(`role`,`status`),e.setAttribute(`aria-label`,`Assistant is typing`);for(let t=0;t<3;t+=1){let t=document.createElement(`span`);t.className=`deskmind-typing-dot`,e.appendChild(t)}return e}async function E(e){try{let t=await e.clone().json();if(typeof t.detail==`string`&&t.detail.trim())return t.detail}catch{}return`The assistant is temporarily unavailable (HTTP ${e.status}). Please try again.`}var D=!1;async function O(e,t,n,r){let i=r.trim();if(!i||D)return;D=!0,C(t,`user`,i),n.value=``;let a=n.form?.querySelector(`button[type="submit"]`)??null;a&&(a.disabled=!0);let o=T();t.appendChild(o),t.scrollTop=t.scrollHeight;let s=`${e.apiUrl}/bots/${encodeURIComponent(e.botId)}/chat`,c=async e=>{let t=new AbortController,n=window.setTimeout(()=>t.abort(),f);try{return await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({message:i,conversation_id:e}),signal:t.signal})}finally{window.clearTimeout(n)}};try{let n=await c(v(e.botId));if((n.status===400||n.status===404)&&(y(e.botId,null),n=await c(null)),!n.ok)throw Error(await E(n));let r=await n.json();y(e.botId,r.conversation_id),C(t,`assistant`,r.answer||p,r.sources),r.prompt_for_email&&(t.appendChild(w(e,i)),t.scrollTop=t.scrollHeight)}catch(e){C(t,`error`,`Error: ${e instanceof DOMException&&e.name===`AbortError`?`That took longer than expected. Check your connection and try again.`:e instanceof Error?e.message:`Something went wrong`}`)}finally{o.remove(),D=!1,a&&(a.disabled=!1);try{n.focus()}catch{}}}function k(e,t,n,r){let i=document.createElement(`div`);i.className=`deskmind-welcome`;let a=document.createElement(`div`),o=`Hi! I'm ${n}, your AI assistant. How can I help you today?`;if(a.textContent=e||o,i.appendChild(a),t.length>0){let e=document.createElement(`div`);e.className=`deskmind-chips`;for(let n of t){let t=document.createElement(`button`);t.type=`button`,t.className=`deskmind-chip`,t.textContent=n,t.addEventListener(`click`,()=>{r(n),i.remove()}),e.appendChild(t)}i.appendChild(e)}return i}var A=!1;async function j(e){if(A||document.getElementById(t))return;A=!0;let r=e??g(),i=await _(r),a=i?.widget_color||n,o=d(i?.widget_theme,a),s=i?.widget_name||i?.name||`Chat`,c=document.createElement(`div`);c.id=t;let l=c.attachShadow({mode:`open`});l.innerHTML=b(o.launcherIcon);let u=document.createElement(`style`);u.textContent=x(o),l.appendChild(u),document.body.appendChild(c);let f=l.querySelector(`#deskmind-launcher`),p=l.querySelector(`#deskmind-window`),m=l.querySelector(`#deskmind-close`),h=l.querySelector(`#deskmind-title`),v=l.querySelector(`#deskmind-form`),y=l.querySelector(`#deskmind-input`),S=l.querySelector(`#deskmind-messages`);if(h.textContent=s,i?.avatar){let e=l.querySelector(`#deskmind-avatar`);e.src=i.avatar,e.alt=s,e.style.display=`block`}let C=k(i?.welcome_message||``,i?.suggested_questions||[],s,e=>{O(r,S,y,e)});S.appendChild(C);let w=e=>{e?(p.hidden=!1,f.hidden=!0,y.focus()):(p.hidden=!0,f.hidden=!1)};f.addEventListener(`click`,()=>w(!0)),m.addEventListener(`click`,()=>w(!1)),v.addEventListener(`submit`,e=>{e.preventDefault();let t=y.value.trim();t&&O(r,S,y,t)})}function M(){try{if(typeof document>`u`)return;let e=()=>{j().catch(()=>{A=!1})};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,e):e()}catch{}}return M(),e.initWidget=j,e})({});