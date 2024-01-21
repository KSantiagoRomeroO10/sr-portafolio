import './Button2.css';

interface Button2Props {
  text: string;
  preText: string;
}

const Button2: React.FC<Button2Props> = ({ text, preText }) => {
  return (
    <div className="conection">
      <br />
      <p className="preText">{preText}</p>
      <p className="button2">{text}</p>
    </div>
  );
};

export default Button2;
