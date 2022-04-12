import { Record } from "../../interfaces/RecordEntities";
import { RecordNewProps } from "../../interfaces/PageProps";
import RecordForm from "./Form";

const RecordNew = <T extends Record>({
  FormFields,
  activeRecord,
  success,
  create,
}: RecordNewProps<T>) => {
  return (
    <div className="new">
      <h2>New</h2>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        success={success}
        submitAction={create}
      />
    </div>
  );
};

export default RecordNew;
