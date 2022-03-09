import { Page, usePage } from "../../contexts/Page";

const Header: React.FC = () => {
  const { page, setPage } = usePage();

  const pageButton = (pageName: Page) => {
    return (
      <button
        className={pageName === page ? "active" : ""}
        onClick={() => setPage(pageName)}
      >
        {pageName}
      </button>
    );
  };

  return (
    <header>
      <h1>
        <div className="title">Typescript CRUD</div>
        <div className="subtitle">With React and TypeORM</div>
      </h1>
      <div className="navigation">
        <div className="internal">
          {pageButton(Page.Articles)}
          {pageButton(Page.Authors)}
        </div>
      </div>
    </header>
  );
};

export default Header;
