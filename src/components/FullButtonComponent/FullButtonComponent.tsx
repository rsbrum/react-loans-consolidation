import "./FullButtonComponent.css";

interface FullButtonComponentProps {
  text: string;
  onClick: () => void;
}

const FullButtonComponent = ({ text, onClick }: FullButtonComponentProps) => {
  return (
    <button className="FullButtonComponent-button" onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default FullButtonComponent;
