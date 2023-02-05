import { useSimpleDarkMode } from "hooks/useSimpleDarkMode";

const DarkModeButton: React.FC = () => {
  const { isDarkMode, toggle } = useSimpleDarkMode();

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" onClick={() => toggle()}></span>
    </label>
  );
};

export default DarkModeButton;
