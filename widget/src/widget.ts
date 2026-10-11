export interface DeskMindConfig {
  botId: string
  apiUrl: string
}

export interface BotConfig {
  id: string
  name: string
  avatar: string | null
  widget_color: string
  widget_theme?: string
  widget_name: string
  welcome_message: string
  suggested_questions: string[]
}

export interface ChatRequest {
  message: string
  conversation_id: string | null
}

export interface SourceChunk {
  document_filename: string
  chunk_content: string
  similarity_score: number
}

export interface ChatResponse {
  conversation_id: string
  message_id: string
  answer: string
  sources: SourceChunk[]
  prompt_for_email?: boolean
  retrieval_details?: {
    query: string
    query_rewritten: boolean
    hybrid_enabled: boolean
    vector_candidates: number
    keyword_candidates: number
    combined_candidates: number
    final_chunks: number
    relevance_scores: number[]
    duration_ms: number
    refusal: boolean
    refusal_reason: string
  }
}

const WIDGET_ID = 'deskmind-widget-root'
const DEFAULT_COLOR = '#2563eb'

// ---------------------------------------------------------------------------
// Widget themes
//
// A theme drives the launcher button (icon + background) and the whole chat
// window through CSS custom properties set on :host inside the shadow root.
// `classic` is generated per bot from widget_color and reproduces the original
// look, so bots created before themes existed render exactly as they did
// before. Unknown ids fall back to classic.
// ---------------------------------------------------------------------------
export interface WidgetTheme {
  id: string
  /** Inner SVG markup for the launcher icon (inherits currentColor). */
  launcherIcon: string
  /** CSS custom properties applied to :host inside the shadow root. */
  variables: Record<string, string>
}

// Stroke-friendly 24x24 icons; each inherits currentColor from the launcher.
const CHAT_ICON = `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />`
const BOLT_ICON = `<path d="M13 2 4.5 13.5H11l-1.5 8.5L19.5 10H13l1.5-8z" />`
const SPARKLE_ICON = `<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />`
const SUN_ICON = `<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />`

/**
 * The original look: a light window tinted with the bot's widget_color.
 */
function classicTheme(color: string): WidgetTheme {
  return {
    id: 'classic',
    launcherIcon: CHAT_ICON,
    variables: {
      '--dm-accent': color,
      '--dm-on-accent': '#fff',
      '--dm-launcher-bg': color,
      '--dm-launcher-icon': '#fff',
      '--dm-window-bg': '#fff',
      '--dm-window-border': '#e5e7eb',
      '--dm-window-radius': '12px',
      '--dm-header-bg': color,
      '--dm-header-text': '#fff',
      '--dm-close-hover': 'rgba(255,255,255,0.2)',
      '--dm-line': '#e5e7eb',
      '--dm-text': '#111827',
      '--dm-text-soft': '#374151',
      '--dm-muted': '#6b7280',
      '--dm-bubble-bg': '#f3f4f6',
      '--dm-user-bg': color,
      '--dm-user-text': '#fff',
      '--dm-error-bg': '#fee2e2',
      '--dm-error-text': '#991b1b',
      '--dm-input-bg': '#fff',
      '--dm-input-border': '#d1d5db',
      '--dm-input-text': '#111827',
      '--dm-send-bg': color,
      '--dm-send-text': '#fff',
      '--dm-surface-2': '#f9fafb',
      '--dm-chip-bg': '#fff',
      '--dm-chip-border': color,
      '--dm-chip-text': color,
      '--dm-chip-hover-bg': color,
      '--dm-chip-hover-text': '#fff',
      '--dm-lead-bg': '#fffbeb',
      '--dm-lead-text': '#78350f',
      '--dm-lead-input-bg': '#fff',
      '--dm-lead-input-border': '#d1d5db',
      '--dm-lead-input-text': '#111827',
      '--dm-lead-status': '#166534',
      '--dm-typing': '#9ca3af',
    },
  }
}

/**
 * CyberAtlas — near-black surfaces, hairline borders, cyan accent.
 * Built from the same tokens as the CyberAtlas design system.
 */
const CYBER_THEME: WidgetTheme = {
  id: 'cyber',
  launcherIcon: BOLT_ICON,
  variables: {
    '--dm-accent': '#06b6d4',
    '--dm-on-accent': '#04121a',
    '--dm-launcher-bg': 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 60%, #0e7490 100%)',
    '--dm-launcher-icon': '#04121a',
    '--dm-window-bg': '#0c121c',
    '--dm-window-border': '#1d2a3a',
    '--dm-window-radius': '14px',
    '--dm-header-bg': 'linear-gradient(135deg, #101925 0%, #0c121c 100%)',
    '--dm-header-text': '#f1f5f9',
    '--dm-close-hover': 'rgba(6,182,212,0.18)',
    '--dm-line': '#1d2a3a',
    '--dm-text': '#f1f5f9',
    '--dm-text-soft': '#94a3b8',
    '--dm-muted': '#64748b',
    '--dm-bubble-bg': '#151f2d',
    '--dm-user-bg': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    '--dm-user-text': '#04121a',
    '--dm-error-bg': 'rgba(239,68,68,0.16)',
    '--dm-error-text': '#fca5a5',
    '--dm-input-bg': '#0c121c',
    '--dm-input-border': '#293a4e',
    '--dm-input-text': '#f1f5f9',
    '--dm-send-bg': '#06b6d4',
    '--dm-send-text': '#04121a',
    '--dm-surface-2': '#101925',
    '--dm-chip-bg': 'transparent',
    '--dm-chip-border': '#0e7490',
    '--dm-chip-text': '#22d3ee',
    '--dm-chip-hover-bg': '#06b6d4',
    '--dm-chip-hover-text': '#04121a',
    '--dm-lead-bg': '#101925',
    '--dm-lead-text': '#94a3b8',
    '--dm-lead-input-bg': '#0c121c',
    '--dm-lead-input-border': '#293a4e',
    '--dm-lead-input-text': '#f1f5f9',
    '--dm-lead-status': '#22c55e',
    '--dm-typing': '#22d3ee',
  },
}

/**
 * Aurora — deep indigo night surfaces with violet gradient accents.
 */
const AURORA_THEME: WidgetTheme = {
  id: 'aurora',
  launcherIcon: SPARKLE_ICON,
  variables: {
    '--dm-accent': '#8b5cf6',
    '--dm-on-accent': '#ffffff',
    '--dm-launcher-bg': 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
    '--dm-launcher-icon': '#ffffff',
    '--dm-window-bg': '#0b1020',
    '--dm-window-border': '#263463',
    '--dm-window-radius': '16px',
    '--dm-header-bg': 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
    '--dm-header-text': '#f5f3ff',
    '--dm-close-hover': 'rgba(167,139,250,0.25)',
    '--dm-line': '#263463',
    '--dm-text': '#f5f3ff',
    '--dm-text-soft': '#c4b5fd',
    '--dm-muted': '#94a3c8',
    '--dm-bubble-bg': '#151d3d',
    '--dm-user-bg': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    '--dm-user-text': '#ffffff',
    '--dm-error-bg': 'rgba(244,63,94,0.16)',
    '--dm-error-text': '#fda4af',
    '--dm-input-bg': '#0b1020',
    '--dm-input-border': '#334377',
    '--dm-input-text': '#f5f3ff',
    '--dm-send-bg': '#8b5cf6',
    '--dm-send-text': '#ffffff',
    '--dm-surface-2': '#121a35',
    '--dm-chip-bg': 'transparent',
    '--dm-chip-border': '#7c3aed',
    '--dm-chip-text': '#c4b5fd',
    '--dm-chip-hover-bg': '#8b5cf6',
    '--dm-chip-hover-text': '#ffffff',
    '--dm-lead-bg': '#1a2342',
    '--dm-lead-text': '#c4b5fd',
    '--dm-lead-input-bg': '#0b1020',
    '--dm-lead-input-border': '#334377',
    '--dm-lead-input-text': '#f5f3ff',
    '--dm-lead-status': '#6ee7b7',
    '--dm-typing': '#a78bfa',
  },
}

/**
 * Sunrise — warm white surfaces with an orange sunrise gradient.
 */
const SUNRISE_THEME: WidgetTheme = {
  id: 'sunrise',
  launcherIcon: SUN_ICON,
  variables: {
    '--dm-accent': '#f97316',
    '--dm-on-accent': '#ffffff',
    '--dm-launcher-bg': 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    '--dm-launcher-icon': '#ffffff',
    '--dm-window-bg': '#ffffff',
    '--dm-window-border': '#fed7aa',
    '--dm-window-radius': '14px',
    '--dm-header-bg': 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    '--dm-header-text': '#fff7ed',
    '--dm-close-hover': 'rgba(255,255,255,0.25)',
    '--dm-line': '#fed7aa',
    '--dm-text': '#431407',
    '--dm-text-soft': '#7c2d12',
    '--dm-muted': '#9a3412',
    '--dm-bubble-bg': '#ffedd5',
    '--dm-user-bg': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    '--dm-user-text': '#ffffff',
    '--dm-error-bg': '#fee2e2',
    '--dm-error-text': '#991b1b',
    '--dm-input-bg': '#ffffff',
    '--dm-input-border': '#fdba74',
    '--dm-input-text': '#431407',
    '--dm-send-bg': '#f97316',
    '--dm-send-text': '#ffffff',
    '--dm-surface-2': '#fff7ed',
    '--dm-chip-bg': '#ffffff',
    '--dm-chip-border': '#fdba74',
    '--dm-chip-text': '#c2410c',
    '--dm-chip-hover-bg': '#f97316',
    '--dm-chip-hover-text': '#ffffff',
    '--dm-lead-bg': '#fef3c7',
    '--dm-lead-text': '#92400e',
    '--dm-lead-input-bg': '#ffffff',
    '--dm-lead-input-border': '#fdba74',
    '--dm-lead-input-text': '#431407',
    '--dm-lead-status': '#15803d',
    '--dm-typing': '#fb923c',
  },
}

function resolveTheme(themeId: string | undefined, color: string): WidgetTheme {
  switch (themeId) {
    case 'cyber':
      return CYBER_THEME
    case 'aurora':
      return AURORA_THEME
    case 'sunrise':
      return SUNRISE_THEME
    default:
      return classicTheme(color)
  }
}

// How long to wait for a chat answer before giving up. RAG retrieval plus LLM
// generation can legitimately take a while, but a request that never settles
// (flaky mobile connection, dropped socket) must not leave the widget spinning
// forever with no feedback.
const REQUEST_TIMEOUT_MS = 60_000
const EMPTY_ANSWER_FALLBACK =
  "I'm sorry, I couldn't generate an answer just now. Please try again."

// Conversation ids are scoped per bot. A single global key meant a stored id
// from one bot (or a conversation deleted server-side) was reused for another
// bot, which the API rejects with 404 — permanently breaking that browser tab.
const CONVERSATION_KEY_PREFIX = 'deskmind_conversation_id:'

function findWidgetScript(): HTMLScriptElement | null {
  const scripts = Array.from(document.querySelectorAll<HTMLScriptElement>('script'))
  return scripts.find((s) => /widget(\.iife)?\.js/.test(s.src || '')) || null
}

function getConfig(): DeskMindConfig {
  // 1. Explicit global config (window.DeskMindConfig) wins.
  const globalConfig = (window as unknown as { DeskMindConfig?: DeskMindConfig }).DeskMindConfig
  if (globalConfig && globalConfig.botId) {
    return {
      botId: globalConfig.botId,
      apiUrl: globalConfig.apiUrl || window.location.origin,
    }
  }

  // 2. Fall back to data attributes on the loading <script> tag, e.g.
  //    <script src="https://api.example.com/widget.js" data-bot-id="..."></script>
  const script = findWidgetScript()
  const botId = script?.getAttribute('data-bot-id')
  if (botId) {
    const apiUrl =
      script?.getAttribute('data-api-url') ||
      (script?.src ? new URL(script.src).origin : window.location.origin)
    return { botId, apiUrl }
  }

  throw new Error('DeskMindConfig or data-bot-id is required to initialize the widget')
}

/**
 * Fetch the bot's public configuration (widget name, color, welcome message,
 * suggested questions) so the widget renders with the owner's settings.
 */
async function fetchBotConfig(config: DeskMindConfig): Promise<BotConfig | null> {
  const url = `${config.apiUrl}/bots/${encodeURIComponent(config.botId)}/config`
  try {
    const response = await fetch(url)
    if (!response.ok) return null
    return (await response.json()) as BotConfig
  } catch {
    // Appears offline — fall back to defaults so the widget still renders.
    return null
  }
}

function getConversationId(botId: string): string | null {
  try {
    return sessionStorage.getItem(`${CONVERSATION_KEY_PREFIX}${botId}`)
  } catch {
    return null
  }
}

function setConversationId(botId: string, id: string | null): void {
  try {
    const key = `${CONVERSATION_KEY_PREFIX}${botId}`
    if (id) {
      sessionStorage.setItem(key, id)
    } else {
      sessionStorage.removeItem(key)
    }
  } catch {
    // ignore storage errors (private browsing / storage disabled)
  }
}

function buildWidgetHTML(launcherIcon: string): string {
  return `
    <button id="deskmind-launcher" aria-label="Open chat">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        ${launcherIcon}
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
  `
}

function buildWidgetStyles(theme: WidgetTheme): string {
  const vars = Object.entries(theme.variables)
    .map(([name, value]) => `      ${name}: ${value};`)
    .join('\n')
  return `
    :host {
${vars}
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
  `
}

function createMessageBubble(role: 'user' | 'assistant' | 'error', text: string, sources?: SourceChunk[]): HTMLElement {
  const bubble = document.createElement('div')
  bubble.className = `deskmind-message deskmind-message-${role}`

  const textNode = document.createElement('div')
  textNode.textContent = text
  bubble.appendChild(textNode)

  if (sources && sources.length > 0) {
    const toggle = document.createElement('button')
    toggle.className = 'deskmind-sources-toggle'
    toggle.textContent = `View sources (${sources.length})`
    bubble.appendChild(toggle)

    const list = document.createElement('div')
    list.className = 'deskmind-sources-list'
    list.hidden = true

    for (const source of sources) {
      const card = document.createElement('div')
      card.className = 'deskmind-source-card'

      const filename = document.createElement('div')
      filename.className = 'deskmind-source-filename'
      filename.textContent = source.document_filename

      const content = document.createElement('div')
      content.className = 'deskmind-source-content'
      content.textContent = source.chunk_content

      const score = document.createElement('div')
      score.className = 'deskmind-source-score'
      score.textContent = `${Math.round(source.similarity_score * 100)}% match`

      card.appendChild(filename)
      card.appendChild(content)
      card.appendChild(score)
      list.appendChild(card)
    }

    bubble.appendChild(list)

    toggle.addEventListener('click', () => {
      const isHidden = list.hidden
      list.hidden = !isHidden
      toggle.textContent = isHidden ? 'Hide sources' : `View sources (${sources.length})`
    })
  }

  return bubble
}

function appendMessage(container: HTMLElement, role: 'user' | 'assistant' | 'error', text: string, sources?: SourceChunk[]): void {
  const bubble = createMessageBubble(role, text, sources)
  container.appendChild(bubble)
  container.scrollTop = container.scrollHeight
}

function buildLeadPrompt(
  config: DeskMindConfig,
  question: string,
): HTMLElement {
  const container = document.createElement('div')
  container.className = 'deskmind-lead'
  container.setAttribute('data-question', question)

  const label = document.createElement('p')
  label.className = 'deskmind-lead-label'
  label.textContent = "Didn't find what you needed? Leave your email and we'll follow up."
  container.appendChild(label)

  const row = document.createElement('div')
  row.className = 'deskmind-lead-row'

  const emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.placeholder = 'you@example.com'
  emailInput.className = 'deskmind-lead-email'

  const submitBtn = document.createElement('button')
  submitBtn.type = 'button'
  submitBtn.className = 'deskmind-lead-submit'
  submitBtn.textContent = 'Send'
  submitBtn.disabled = true

  const status = document.createElement('p')
  status.className = 'deskmind-lead-status'
  status.hidden = true

  row.appendChild(emailInput)
  row.appendChild(submitBtn)
  container.appendChild(row)
  container.appendChild(status)

  const validate = () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())
    submitBtn.disabled = !ok
  }
  emailInput.addEventListener('input', validate)

  submitBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim()
    if (!email) return
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    try {
      const url = `${config.apiUrl}/bots/${encodeURIComponent(config.botId)}/leads`
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, question }),
      })
      if (!response.ok) throw new Error('Request failed')
      status.textContent = 'Thanks! We\u2019ll follow up by email.'
      status.hidden = false
      row.hidden = true
    } catch {
      status.textContent = 'Something went wrong. Please try again.'
      status.hidden = false
      submitBtn.disabled = false
      submitBtn.textContent = 'Send'
    }
  })

  return container
}

function createTypingIndicator(): HTMLElement {
  const bubble = document.createElement('div')
  bubble.className = 'deskmind-message deskmind-message-assistant deskmind-typing'
  bubble.setAttribute('role', 'status')
  bubble.setAttribute('aria-label', 'Assistant is typing')
  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement('span')
    dot.className = 'deskmind-typing-dot'
    bubble.appendChild(dot)
  }
  return bubble
}

async function describeErrorResponse(response: Response): Promise<string> {
  try {
    const body = (await response.clone().json()) as { detail?: unknown }
    if (typeof body.detail === 'string' && body.detail.trim()) {
      return body.detail
    }
  } catch {
    // Not JSON (often an HTML gateway page) — fall through to a generic message.
  }
  return `The assistant is temporarily unavailable (HTTP ${response.status}). Please try again.`
}

// Guards against overlapping sends (double-tap on mobile, rapid Enter presses)
// which used to race the same conversation and produce spurious errors.
let sending = false

async function sendMessage(config: DeskMindConfig, messagesContainer: HTMLElement, input: HTMLInputElement, text: string): Promise<void> {
  const question = text.trim()
  if (!question || sending) return

  sending = true

  // Echo the question immediately and clear the composer *before* the request,
  // so the user's message never lingers in the input bar while the bot thinks.
  appendMessage(messagesContainer, 'user', question)
  input.value = ''

  const sendButton = input.form?.querySelector<HTMLButtonElement>('button[type="submit"]') ?? null
  if (sendButton) sendButton.disabled = true

  // Reassure the user the assistant is working instead of leaving a blank panel.
  const typing = createTypingIndicator()
  messagesContainer.appendChild(typing)
  messagesContainer.scrollTop = messagesContainer.scrollHeight

  const endpoint = `${config.apiUrl}/bots/${encodeURIComponent(config.botId)}/chat`

  const post = async (conversationId: string | null): Promise<Response> => {
    // Abort a request that never settles so the widget cannot spin forever on a
    // flaky mobile connection.
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    try {
      return await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, conversation_id: conversationId } satisfies ChatRequest),
        signal: controller.signal,
      })
    } finally {
      window.clearTimeout(timer)
    }
  }

  try {
    let response = await post(getConversationId(config.botId))

    // A stored conversation can be stale — it may belong to a different bot or
    // have been removed server-side. Recover by starting a fresh conversation
    // instead of failing every subsequent message.
    if (response.status === 400 || response.status === 404) {
      setConversationId(config.botId, null)
      response = await post(null)
    }

    if (!response.ok) {
      // The backend normally answers 200 even when a provider is down, so a
      // non-OK status here means an infrastructure failure (proxy/gateway page,
      // which is often HTML). Never dump that raw markup into the chat bubble.
      throw new Error(await describeErrorResponse(response))
    }

    const data = (await response.json()) as ChatResponse
    setConversationId(config.botId, data.conversation_id)
    appendMessage(messagesContainer, 'assistant', data.answer || EMPTY_ANSWER_FALLBACK, data.sources)
    // Only offer lead capture when the bot explicitly signals it is relevant.
    if (data.prompt_for_email) {
      messagesContainer.appendChild(buildLeadPrompt(config, question))
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  } catch (error) {
    const message =
      error instanceof DOMException && error.name === 'AbortError'
        ? 'That took longer than expected. Check your connection and try again.'
        : error instanceof Error
          ? error.message
          : 'Something went wrong'
    appendMessage(messagesContainer, 'error', `Error: ${message}`)
  } finally {
    typing.remove()
    sending = false
    if (sendButton) sendButton.disabled = false
    try {
      input.focus()
    } catch {
      // Focusing is best-effort (some embedded browsers block it).
    }
  }
}

function buildWelcomeMessage(
  message: string,
  suggestedQuestions: string[],
  botName: string,
  onSubmitQuestion: (text: string) => void,
): HTMLElement {
  const container = document.createElement('div')
  container.className = 'deskmind-welcome'

  const text = document.createElement('div')
  const defaultGreeting = `Hi! I'm ${botName}, your AI assistant. How can I help you today?`
  text.textContent = message || defaultGreeting
  container.appendChild(text)

  if (suggestedQuestions.length > 0) {
    const chips = document.createElement('div')
    chips.className = 'deskmind-chips'
    for (const question of suggestedQuestions) {
      const chip = document.createElement('button')
      chip.type = 'button'
      chip.className = 'deskmind-chip'
      chip.textContent = question
      chip.addEventListener('click', () => {
        onSubmitQuestion(question)
        container.remove()
      })
      chips.appendChild(chip)
    }
    container.appendChild(chips)
  }

  return container
}

let initialized = false

export async function initWidget(cfg?: DeskMindConfig): Promise<void> {
  if (initialized) return
  if (document.getElementById(WIDGET_ID)) return
  initialized = true

  const config = cfg ?? getConfig()
  const botConfig = await fetchBotConfig(config)
  const color = botConfig?.widget_color || DEFAULT_COLOR
  const theme = resolveTheme(botConfig?.widget_theme, color)
  const displayName = botConfig?.widget_name || botConfig?.name || 'Chat'

  const container = document.createElement('div')
  container.id = WIDGET_ID

  const shadow = container.attachShadow({ mode: 'open' })
  shadow.innerHTML = buildWidgetHTML(theme.launcherIcon)

  const style = document.createElement('style')
  style.textContent = buildWidgetStyles(theme)
  shadow.appendChild(style)

  document.body.appendChild(container)

  const launcher = shadow.querySelector<HTMLButtonElement>('#deskmind-launcher')!
  const window_ = shadow.querySelector<HTMLElement>('#deskmind-window')!
  const closeBtn = shadow.querySelector<HTMLButtonElement>('#deskmind-close')!
  const title = shadow.querySelector<HTMLElement>('#deskmind-title')!
  const form = shadow.querySelector<HTMLFormElement>('#deskmind-form')!
  const input = shadow.querySelector<HTMLInputElement>('#deskmind-input')!
  const messagesContainer = shadow.querySelector<HTMLElement>('#deskmind-messages')!

  title.textContent = displayName

  if (botConfig?.avatar) {
    const avatarImg = shadow.querySelector<HTMLImageElement>('#deskmind-avatar')!
    avatarImg.src = botConfig.avatar
    avatarImg.alt = displayName
    avatarImg.style.display = 'block'
  }

  const greeting = buildWelcomeMessage(
    botConfig?.welcome_message || '',
    botConfig?.suggested_questions || [],
    displayName,
    (text) => {
      sendMessage(config, messagesContainer, input, text)
    },
  )
  messagesContainer.appendChild(greeting)

  const toggle = (show: boolean): void => {
    if (show) {
      window_.hidden = false
      launcher.hidden = true
      input.focus()
    } else {
      window_.hidden = true
      launcher.hidden = false
    }
  }

  launcher.addEventListener('click', () => toggle(true))
  closeBtn.addEventListener('click', () => toggle(false))

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const text = input.value.trim()
    if (!text) return
    sendMessage(config, messagesContainer, input, text)
  })
}

// Auto-initialize when the bundle is loaded directly in a browser, whether via
// window.DeskMindConfig or via a data-bot-id attribute on the <script> tag.
// In bundler-based usage (main.ts) initWidget() is called explicitly; the
// initialized guard keeps this from creating a duplicate widget.
function autoInit(): void {
  try {
    if (typeof document === 'undefined') return
    const run = () => {
      void initWidget().catch(() => {
        // Config missing / unavailable — allow a later explicit initWidget() call.
        initialized = false
      })
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run)
    } else {
      run()
    }
  } catch {
    // ignore
  }
}

autoInit()
