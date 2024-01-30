import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputNumberProps {
  label: string;
  id: string;
  value: number;
  onChange?: (value: number) => void;
}

export function InputNumber(props: InputNumberProps) {
  const { label, id, value, onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(Number(e.target.value));
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input onChange={handleChange} id={id} type="number" value={value} />
    </div>
  );
}
