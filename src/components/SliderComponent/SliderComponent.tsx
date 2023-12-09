import "./SliderComponent.css";

interface SliderComponentProps {
  setValue: (value: React.SetStateAction<number>) => void;
  label: string;
  min: number;
  max: number;
  value: number;
}

const SliderComponent = ({
  setValue,
  label,
  min,
  max,
  value,
}: SliderComponentProps) => {
  const onChange = (value: string) => {
    setValue(+value);
  };

  return (
    <div className="SliderComponent-slider-container ">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="range"
        min={min}
        max={max}
      />
      <div className="SliderComponent-slider-minmax">
        <p>
          {min} {label}
        </p>
        <p>
          {max} {label}
        </p>
      </div>
    </div>
  );
};

export default SliderComponent;
