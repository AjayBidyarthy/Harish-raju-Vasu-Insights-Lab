import { Warehouse } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import "./Toolbar.scss";

export const Toolbar = () => {
  const location = useLocation();
  const params = useParams();

  // Define static page titles
  const pageTitles = {
    "/products": "My Products",
    "/projects": "My Projects",
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const basePath = `/${pathSegments[0]}`;
  const currentPage = pageTitles[basePath] || "";
  const itemId = pathSegments[1] ? `#${pathSegments[1]}` : "";

  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <button className="icon-button">
          <Warehouse className="icon" />
        </button>
        <div className="breadcrumb">
          <button className="breadcrumb-home">Insights Lab</button>
          {currentPage && (
            <>
              <span className="separator"> | </span>
              <span className="breadcrumb-current">{currentPage}</span>
            </>
          )}
          {itemId && (
            <>
              <span className="separator"> &gt; </span>
              <span className="breadcrumb-item">{itemId}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
