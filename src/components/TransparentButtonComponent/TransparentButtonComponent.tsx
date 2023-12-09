import "./TransparentButtonComponent.css";

interface TransparentButtonComponentProps {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}
// blue #28b5e0
const TransparentButtonComponent = ({
  onClick,
  icon,
  text,
}: TransparentButtonComponentProps) => {
  return (
    <button
      className="TransparentButtonComponent-button"
      onClick={() => onClick()}
    >
      <div className="TransparentButtonComponent-icon">{icon}</div>
      <p>{text}</p>
    </button>
  );
};

export default TransparentButtonComponent;
