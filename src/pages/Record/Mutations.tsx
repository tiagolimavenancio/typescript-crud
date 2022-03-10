import { Record } from "../../interfaces/RecordEntities";
import { RecordMutationsProps } from "../../interfaces/PageProps";
import RecordNew from "./New";

const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordMutationsProps<T>) => {
  return (
    <div className="mutations">
      <RecordNew<T> FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};

export default RecordMutations;
