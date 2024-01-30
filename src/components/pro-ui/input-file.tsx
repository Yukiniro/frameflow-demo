import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFileProps {
  label: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputFile(props: InputFileProps) {
  const { label, id, onChange } = props;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input onChange={onChange} id={id} type="file" />
    </div>
  );
}
