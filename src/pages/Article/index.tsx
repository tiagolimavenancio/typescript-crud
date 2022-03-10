import { Article } from "../../interfaces/RecordEntities";
import RecordIndex from "../Record";
import ArticleListItem from "./ListItem";

const ArticleIndex: React.FC = () => {
  const apiOptions = { relations: ["author"] };

  return (
    <RecordIndex<Article>
      ListItem={ArticleListItem}
      apiPath="articles"
      apiOptions={apiOptions}
    />
  );
};

export default ArticleIndex;
