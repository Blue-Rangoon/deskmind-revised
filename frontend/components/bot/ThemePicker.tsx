"use client";

import React from "react";
import { WIDGET_THEMES, getWidgetTheme } from "@/lib/api";

interface ThemePickerProps {
  value: string;
  onChange: (themeId: string) => void;
  /** Used to tint the Classic preview with the bot's widget colour. */
  widgetColor?: string | null;
}

/**
 * Miniature live preview of the embedded widget: a launcher bubble in the
 * corner of a small "page" plus a chat window header and two message bubbles,
 * all painted with the theme's real colours. Non-interactive by design — it is
 * a picture, not a nested widget.
 */
function ThemePreviewCard({
  theme,
}: {
  theme: ReturnType<typeof getWidgetTheme>;
}) {
  return (
    <div
      className="rounded-lg overflow-hidden border"
      style={{
        borderColor: theme.windowBorder,
        background: theme.windowBg,
      }}
    >
      {/* Window header */}
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ background: theme.headerBg }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: theme.launcherBg }}
        />
        <span
          className="text-[10px] font-semibold"
          style={{ color: theme.headerText }}
        >
          Chat
        </span>
      </div>
      {/* Bubbles */}
      <div className="flex flex-col gap-1.5 p-2.5">
        <div
          className="self-start text-[9px] px-2 py-1 rounded-md rounded-bl-sm max-w-[70%]"
          style={{
            background: theme.assistantBubbleBg,
            color: theme.assistantBubbleText,
          }}
        >
          Hi! How can I help?
        </div>
        <div
          className="self-end text-[9px] px-2 py-1 rounded-md rounded-br-sm max-w-[70%]"
          style={{
            background: theme.userBubbleBg,
            color: theme.userBubbleText,
          }}
        >
          What are your plans?
        </div>
      </div>
    </div>
  );
}

export function ThemePicker({ value, onChange, widgetColor }: ThemePickerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {WIDGET_THEMES.map((t) => {
        const theme = getWidgetTheme(t.id, widgetColor);
        const selected = value === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            aria-pressed={selected}
            className={`text-left rounded-xl border p-4 transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              selected
                ? "border-primary-500 ring-2 ring-primary-200 bg-primary-50/50"
                : "border-border bg-white hover:border-primary-300 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {/* Launcher swatch — mirrors the real launcher button */}
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm"
                  style={{ background: theme.launcherBg }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke={theme.launcherIcon}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {t.name}
                </span>
              </div>
              {selected && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary-700">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Active
                </span>
              )}
            </div>
            <ThemePreviewCard theme={theme} />
            <p className="mt-2.5 text-xs text-gray-500">{t.description}</p>
          </button>
        );
      })}
    </div>
  );
}