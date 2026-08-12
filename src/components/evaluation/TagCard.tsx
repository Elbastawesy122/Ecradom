"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export type TagCardTone = "green" | "neutral";

const TONE_CLASSES: Record<TagCardTone, string> = {
  green: "bg-green-400/15 text-green-300",
  neutral: "bg-white/10 text-white/80",
};

interface TagCardProps {
  title: string;
  initialTags: string[];
  tone: TagCardTone;
  placeholder: string;
}

export default function TagCard({ title, initialTags, tone, placeholder }: TagCardProps) {
  const [tags, setTags] = useState(initialTags);
  const [draft, setDraft] = useState("");

  function handleAdd(event: FormEvent) {
    event.preventDefault();
    const value = draft.trim();
    if (!value) return;
    setTags((prev) => [...prev, value]);
    setDraft("");
  }

  function handleRemove(tag: string) {
    setTags((prev) => prev.filter((item) => item !== tag));
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${TONE_CLASSES[tone]}`}
          >
            {tag}
            <button type="button" onClick={() => handleRemove(tag)} aria-label={`Remove ${tag}`} className="opacity-60 transition hover:opacity-100">
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}
      </div>

      <form onSubmit={handleAdd} className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8414]/40"
        />
        <button
          type="submit"
          aria-label="Add tag"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF8414] text-white transition hover:brightness-95"
        >
          <Plus className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
