import { useCallback, useMemo, useState } from "react";
import { InputNumber } from "./input-number";
import { Button } from "../ui/button";
import fflow from "frameflow";
import { download } from "downloadmejs";

interface TrimViewProps {
  videoUrl: string;
  videoFile: File | null;
}

export function TrimView(props: TrimViewProps) {
  const { videoUrl, videoFile } = props;
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const videoStyle = useMemo(() => {
    return {
      width: "800px",
      marginTop: "2rem",
    };
  }, []);

  const handleClick = useCallback(async () => {
    const video = await fflow.source(videoFile as File);
    const trimVideo = video.trim({ start: startTime, duration: endTime - startTime });
    const newVideo = fflow.group([trimVideo]);
    const outBlob = await newVideo.exportTo(Blob, { format: "mp4" });
    download(outBlob, { name: "trim.mp4" });
  }, [endTime, startTime, videoFile]);

  return (
    <div>
      <h1 className="text-center text-6xl font-mono font-bold">Trim View</h1>
      <video style={videoStyle} src={videoUrl} controls />
      <div>
        <div className="flex items-center justify-between gap-4 my-12">
          <InputNumber value={startTime} onChange={setStartTime} label="Start Time" id="start-time" />
          <InputNumber value={endTime} onChange={setEndTime} label="End Time" id="start-time" />
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={handleClick}>Trim and Export</Button>
        </div>
      </div>
    </div>
  );
}
