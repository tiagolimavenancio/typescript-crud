import { Article } from "../../interfaces/RecordEntities";
import { ListItemProps } from "../../interfaces/PageProps";

type IProps = ListItemProps<Article>;

const ArticleListItem: React.FC<IProps> = ({ record }) => {
  return (
    <div>
      <div className="title">{record.title}</div>
      <div className="author">By {record.author?.name || "Unknown"}</div>
    </div>
  );
};

export default ArticleListItem;
