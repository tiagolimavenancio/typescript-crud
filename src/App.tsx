import Header from "components/Header";
import ArticleIndex from "pages/Article";
import AuthorIndex from "pages/Author";
import { Page, usePage } from "contexts/Page";

const App = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Articles:
        return <ArticleIndex />;
      case Page.Authors:
        return <AuthorIndex />;
      default:
        return "";
    }
  };

  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
};

export default App;
