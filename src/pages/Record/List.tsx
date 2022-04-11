import { Record } from "interfaces/RecordEntities";
import { RecordListProps } from "interfaces/PageProps";
import { usePage } from "contexts/Page";
import Status from "components/Status";
import Error from "components/Error";

const RecordList = <T extends Record>({
  ListItem,
  records,
  emptyRecord,
  activeRecord,
  loading,
  error,
  setActiveRecord,
}: RecordListProps<T>) => {
  const { page } = usePage();

  return (
    <div className="list">
      {error && <Error error={error} />}
      <h2>{page}</h2>
      <button className="bt-new" onClick={() => setActiveRecord(emptyRecord)}>
        New
      </button>
      <ul>
        {records.map((record) => (
          <li
            key={record.id}
            className={record.id === activeRecord?.id ? "active" : ""}
            onClick={() => setActiveRecord(record)}
          >
            <ListItem record={record} />
          </li>
        ))}
      </ul>
      {loading && <Status text="Loading..." />}
    </div>
  );
};

export default RecordList;
