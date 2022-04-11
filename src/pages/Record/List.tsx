import { Record } from "../../interfaces/RecordEntities";
import { RecordListProps } from "../../interfaces/PageProps";
import { usePage } from "../../contexts/Page";

const RecordList = <T extends Record>({
  ListItem,
  records,
  emptyRecord,
  activeRecord,
  setActiveRecord,
}: RecordListProps<T>) => {
  const { page } = usePage();

  return (
    <div className="list">
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
    </div>
  );
};

export default RecordList;
