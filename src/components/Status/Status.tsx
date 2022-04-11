interface IProps {
  text: string;
}

const Status: React.FC<IProps> = ({ text }) => {
  return (
    <div className="status">
      <span className="status-text">{text}</span>
    </div>
  );
};

export default Status;
