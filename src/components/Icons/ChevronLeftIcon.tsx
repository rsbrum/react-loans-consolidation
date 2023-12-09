export default function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.70711 9.70711C6.09763 9.31658 6.09763 8.68342 5.70711 8.29289L2.41421 5L5.70711 1.70711C6.09763 1.31658 6.09763 0.683418 5.70711 0.292894C5.31658 -0.0976312 4.68342 -0.0976312 4.29289 0.292894L0.292893 4.29289C-0.0976315 4.68342 -0.0976314 5.31658 0.292893 5.70711L4.29289 9.70711C4.68342 10.0976 5.31658 10.0976 5.70711 9.70711Z"
        fill={props.fill || "currentColor"}
      />
    </svg>
  );
}
