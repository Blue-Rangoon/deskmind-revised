"""Canonical widget theme ids shared by the API and the embeddable widget.

``classic`` is the default and reproduces the original look: a light chat
window tinted with the bot's ``widget_color``. The richer themes only change
how the widget renders — no chat behaviour is affected. Bots created before
themes existed have ``widget_theme = NULL`` and are treated as ``classic``.
"""

from __future__ import annotations

DEFAULT_WIDGET_THEME = "classic"

WIDGET_THEMES = frozenset(
    {
        "classic",
        "cyber",   # Cyber: near-black surfaces, cyan accent
        "aurora",  # deep indigo surfaces, violet gradient accents
        "sunrise", # warm light surfaces, orange accents
    }
)


def normalize_widget_theme(value: str | None) -> str:
    """Return a safe theme id — unknown/missing values fall back to classic."""
    if value and value in WIDGET_THEMES:
        return value
    return DEFAULT_WIDGET_THEME
