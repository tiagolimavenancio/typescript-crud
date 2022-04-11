import { AxiosError } from "axios";
import { ValidationError } from "class-validator";

interface IProps {
  error: AxiosError;
}

const Error: React.FC<IProps> = ({ error }) => {
  const validationErrors = error?.response?.data?.validation as ValidationError[];

  return (
    <div className="error">
      <div>
        <b>Message: </b> {error.message}
      </div>
      <div>
        <b>URL: </b> {error.config.url}
      </div>
      {error.response?.data.message && (
        <div>
          <b>Details: </b> {error.response?.data.message}
        </div>
      )}
      {validationErrors &&
        validationErrors.map((err, i) => (
          <ul key={i}>
            {err.constraints &&
              Object.values(err.constraints).map((constraint, j) => <li key={j}>{constraint}</li>)}
          </ul>
        ))}
    </div>
  );
};

export default Error;
