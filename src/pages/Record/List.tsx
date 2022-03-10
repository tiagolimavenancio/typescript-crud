import { Record } from "../../interfaces/RecordEntities";
import { RecordListProps } from "../../interfaces/PageProps";
import { usePage } from "../../contexts/Page";

const RecordList = <T extends Record>({
  ListItem,
  records,
}: RecordListProps<T>) => {
  const { page } = usePage();

  return (
    <div className="list">
      <h2>{page}</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <ListItem record={record} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
