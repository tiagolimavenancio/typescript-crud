import { Record } from "../../interfaces/RecordEntities";
import { RecordFormProps } from "../../interfaces/PageProps";
import useForm from "../../hooks/useForm";

const RecordForm = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordFormProps<T>) => {
  const { formState, handleChange } = useForm<T>(activeRecord);

  return (
    <div>
      <form>
        <FormFields formState={formState} handleChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RecordForm;
