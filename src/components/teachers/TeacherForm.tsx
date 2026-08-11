"use client";

import { Plus, Users } from "lucide-react";
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
import { teacherLevels, teacherSubjects } from "@/data/teachers";

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
            Fill in the details below to onboard a new teacher on the platform.
          </p>
        </div>
      </div>

      <FormSection title="PERSONAL INFORMATION">
        <Input id="full-name" label="Full name" placeholder="e.g. Ahmed Hassan" required />
        <Input id="email" type="email" label="Email address" placeholder="teacher@example.com" required />
        <Input id="phone" type="tel" label="Phone number" placeholder="+20 100 0000000" />
        <Input id="address" label="Home address" placeholder="Street, city, country" />
        <div className="sm:col-span-2">
          <span className="text-sm font-medium text-black">Teacher Photo</span>
          <div className="mt-1.5">
            <FileUpload label="Teacher Photo" hint="JPG, PNG - max 5 MB" />
          </div>
        </div>
      </FormSection>

      <FormSection title="PROFESSIONAL INFORMATION">
        <Select id="subject" label="Course / Subject" placeholder="Select course" options={teacherSubjects} />
        <Select id="level" label="Teaching Level" placeholder="Select level" options={teacherLevels} />
        <Input id="experience" label="Years of experience" placeholder="e.g. 5 yrs" />
      </FormSection>

      <FormSection title="SECURITY">
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

      <FormSection title="PROFILE PHOTO UPLOAD">
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <UploadButton label="Upload Photo" />
          <UploadButton label="Upload Documents" />
        </div>
      </FormSection>

      <section className="border-t border-black/5 px-6 py-6 sm:px-8">
        <h3 className="text-xs font-semibold tracking-wide text-[#001069]">ACCOUNT SETTINGS</h3>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-black/5 bg-[#F9F9FB] px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-black">Account Status</p>
            <p className="text-sm text-gray-500">Teacher can log in and manage classes</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#001069]">{active ? "Active" : "Inactive"}</span>
            <Toggle checked={active} onChange={setActive} label="Account status" />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 border-t border-black/5 px-6 py-6 sm:flex-row sm:px-8">
        <Button type="submit" variant="primary">
          Save Teacher
        </Button>
        <Button variant="outline" onClick={() => router.push("/teachers")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
