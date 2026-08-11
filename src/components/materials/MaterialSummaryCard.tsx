import { MessageCircle, Paperclip, Star } from "lucide-react";

import type { MaterialSummary } from "@/types/material";

const AVATAR_COLORS = ["#001069", "#4577EF", "#FF8414"];

export default function MaterialSummaryCard({
  title,
  description,
  progress,
  attachments,
  comments,
}: MaterialSummary) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>

      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-[#FF8414] text-[#FF8414]" />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/5">
          <div
            className="h-full rounded-full bg-[#4577EF]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-black">{progress}%</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          {AVATAR_COLORS.map((color) => (
            <span
              key={color}
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white first:ml-0"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-black/5 text-xs font-medium text-black">
            +4
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Paperclip className="h-4 w-4" />
            {attachments}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
}
