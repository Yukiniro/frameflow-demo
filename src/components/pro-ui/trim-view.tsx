import { useMemo, useState } from "react";
import { InputNumber } from "./input-number";
import { Button } from "../ui/button";

interface TrimViewProps {
  videoUrl: string;
}

export function TrimView(props: TrimViewProps) {
  const { videoUrl } = props;
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const videoStyle = useMemo(() => {
    return {
      width: "800px",
      marginTop: "2rem",
    };
  }, []);

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
          <Button>Trim and Export</Button>
        </div>
      </div>
    </div>
  );
}
