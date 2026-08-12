"use client";

import { Briefcase, Check, FileText, Lock, Plus, Settings, User, Users, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import type { FormEvent } from "react";

import Button from "@/components/ui/Button";
import FileUpload from "@/components/ui/FileUpload";
import FormSection from "@/components/ui/FormSection";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Select from "@/components/ui/Select";
import Toggle from "@/components/ui/Toggle";
import { teacherEducationQualifications, teacherLevels, teacherSubjects } from "@/data/teachers";

function UploadButton({ label }: { label: string }) {
  const inputId = useId();
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <label
      htmlFor={inputId}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#001069] shadow-sm transition hover:shadow-md"
    >
      <Plus className="h-4 w-4" />
      {fileName ?? label}
      <input
        id={inputId}
        type="file"
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
      />
    </label>
  );
}

export default function TeacherForm() {
  const router = useRouter();
  const [active, setActive] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError(null);
    router.push("/teachers");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="flex items-center gap-4 rounded-t-2xl bg-[#001069] px-6 py-6 sm:px-8">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF8414]/20 text-[#FF8414]">
          <Users className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-white">Add New Teacher</h2>
          <p className="mt-1 text-sm text-white/70">
            Fill in the details below to register a new teacher on the platform.
          </p>
        </div>
      </div>

      <FormSection title="PERSONAL INFORMATION" icon={User}>
        <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row">
          <div className="shrink-0">
            <FileUpload label="Profile Photo" hint="JPG, PNG · max 5 MB" compact />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            <Input id="full-name" label="Full name" placeholder="e.g. Ahmed Hassan" required />
            <Input id="email" type="email" label="Email address" placeholder="teacher@example.com" required />
            <Input id="phone" type="tel" label="Phone number" placeholder="+20 100 0000000" />
            <Input id="national-id" label="National ID" placeholder="e.g. 29001010123456" />
          </div>
        </div>
      </FormSection>

      <FormSection title="PROFESSIONAL INFORMATION" icon={Briefcase} accent="orange">
        <Input id="specialization" label="Specialization" placeholder="e.g. Computer Science" />
        <Select id="subject" label="Subject" placeholder="Select subject" options={teacherSubjects} />
        <Select id="level" label="Academic Level" placeholder="Select level" options={teacherLevels} />
        <Input id="experience" label="Years of experience" placeholder="e.g. 5 yrs" />
        <div className="sm:col-span-2">
          <Select
            id="education"
            label="Education Qualification"
            placeholder="Select qualification"
            options={teacherEducationQualifications}
          />
        </div>
      </FormSection>

      <FormSection title="SECURITY" icon={Lock}>
        <PasswordInput
          id="password"
          label="Password"
          placeholder="Create a password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <PasswordInput
          id="confirm-password"
          label="Confirm password"
          placeholder="Re-enter the password"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {passwordError ? (
          <p className="text-sm text-red-600 sm:col-span-2">{passwordError}</p>
        ) : null}
      </FormSection>

      <FormSection title="DOCUMENTS" icon={FileText} accent="orange">
        <div className="flex flex-wrap gap-3 sm:col-span-2">
          <UploadButton label="Upload Certificates" />
          <UploadButton label="Upload CV" />
          <UploadButton label="Upload ID Copy" />
        </div>
      </FormSection>

      <section className="border-t border-black/5 px-6 py-6 sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#001069]/10 text-[#001069]">
            <Settings className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-xs font-semibold tracking-wide text-[#001069]">ACCOUNT SETTINGS</h3>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-black/5 bg-[#F9F9FB] px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-black">Account Status</p>
            <p className="text-sm text-gray-500">Teacher can log in and access the platform</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${active ? "text-green-600" : "text-gray-400"}`}>
              {active ? "Active" : "Inactive"}
            </span>
            <Toggle checked={active} onChange={setActive} label="Account status" />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 border-t border-black/5 px-6 py-6 sm:flex-row sm:px-8">
        <Button type="submit" variant="primary">
          <Check className="h-4 w-4" />
          Save Teacher
        </Button>
        <Button variant="outline" onClick={() => router.push("/teachers")}>
          <X className="h-4 w-4" />
          Cancel
        </Button>
      </div>
    </form>
  );
}
