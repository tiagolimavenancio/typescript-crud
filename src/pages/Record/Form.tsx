import { useEffect } from "react";
import { Record } from "interfaces/RecordEntities";
import { RecordFormProps } from "interfaces/PageProps";
import useForm from "hooks/useForm";

const RecordForm = <T extends Record>({
  FormFields,
  activeRecord,
  submitAction,
}: RecordFormProps<T>) => {
  const { formState, setFormState, handleChange, handleSubmit } = useForm<T>(
    activeRecord,
    submitAction
  );

  useEffect(() => {
    if (activeRecord) {
      setFormState(activeRecord);
    }
  }, [setFormState, activeRecord]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RecordForm;
