"use client";

import { Star } from "lucide-react";
import { useState } from "react";

import type { EvaluationGrade } from "@/types/evaluation";

const GRADES: EvaluationGrade[] = ["Poor", "Average", "Good", "Excellent"];

const GRADE_LABELS: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

export default function TeacherEvaluationCard() {
  const [rating, setRating] = useState(4);
  const [grade, setGrade] = useState<EvaluationGrade>("Good");
  const [notes, setNotes] = useState("");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#001069] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">Teacher Evaluation</h3>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              aria-label={`Rate ${star} out of 5`}
              className="text-[#FF8414]"
            >
              <Star className={`h-5 w-5 ${star <= rating ? "fill-[#FF8414] text-[#FF8414]" : "fill-transparent text-white/25"}`} />
            </button>
          ))}
        </div>
        <span className="text-sm font-semibold text-white">{rating}/5</span>
      </div>
      <p className="mt-1 text-sm text-white/60">{GRADE_LABELS[rating]}</p>

      <div className="mt-5">
        <p className="text-sm font-medium text-white/80">Overall Grade</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {GRADES.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setGrade(option)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                grade === option ? "bg-[#FF8414] text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="teacher-notes" className="text-sm font-medium text-white/80">
          Teacher Notes
        </label>
        <textarea
          id="teacher-notes"
          rows={4}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Add notes about this student's performance..."
          className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF8414]/40"
        />
      </div>
    </div>
  );
}
