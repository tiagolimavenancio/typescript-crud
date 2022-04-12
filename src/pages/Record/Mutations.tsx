import { useEffect } from "react";
import { Record } from "interfaces/RecordEntities";
import { RecordMutationsProps } from "interfaces/PageProps";
import RecordNew from "./New";
import RecordEdit from "./Edit";
import Error from "components/Error";
import Status from "components/Status";
import { useMutation } from "hooks/useMutation";

const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
  apiPath,
  callback,
}: RecordMutationsProps<T>) => {
  const { processing, success, error, setError, create, update, remove } = useMutation<T>(
    apiPath,
    callback
  );

  useEffect(() => {
    if (activeRecord.id) {
      setError(undefined);
    }
  }, [activeRecord, setError]);

  return (
    <div className="mutations">
      {error && <Error error={error} />}
      {activeRecord.id ? (
        <RecordEdit<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
          success={success}
        />
      ) : (
        <RecordNew<T>
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
          success={success}
        />
      )}

      {processing && <Status text="Processing..." />}
    </div>
  );
};

export default RecordMutations;
