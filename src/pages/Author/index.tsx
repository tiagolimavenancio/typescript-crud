import { Author } from "interfaces/RecordEntities";
import RecordIndex from "pages/Record";
import AuthorListItem from "./ListItem";
import AuthorFormFields from "./FormFields";

const AuthorIndex: React.FC = () => {
  const apiOptions = {};

  const emptyRecord = {
    name: "",
  };

  return (
    <RecordIndex<Author>
      apiPath="authors"
      apiOptions={apiOptions}
      emptyRecord={emptyRecord}
      ListItem={AuthorListItem}
      FormFields={AuthorFormFields}
    />
  );
};

export default AuthorIndex;
