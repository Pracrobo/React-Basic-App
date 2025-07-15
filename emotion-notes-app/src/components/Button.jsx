import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      버튼
    </button>
  );
};

export default Button;
