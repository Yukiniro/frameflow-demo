"use client";

import GithubCorners from "@yukiniro/react-github-corners";
import "@yukiniro/react-github-corners/dist/style.css";
import { InputFile } from "@/components/pro-ui/input-file";
import { useState } from "react";
import { TrimView } from "@/components/pro-ui/trim-view";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) {
      return;
    }

    const file = e.target.files[0];

    if (!file) {
      return;
    }
    setVideoUrl(URL.createObjectURL(file));
  };

  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center p-12">
      <GithubCorners href="https://github.com/Yukiniro/next-starter" />
      {videoUrl ? (
        <TrimView videoUrl={videoUrl} />
      ) : (
        <InputFile onChange={handleFileChange} label="Upload Your Video" id="upload-video" />
      )}
    </main>
  );
}
