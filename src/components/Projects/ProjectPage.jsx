import { BrowserRouter as Router } from "react-router-dom"
import MainSection from "./MainSection";
import SideNav from "./SideNav";

export const insights = [
  { id: 1, name: "Project 1", insights: 10, insights_workbook: 5, added_products: 5 },
  { id: 2, name: "Project 2", insights: 8, insights_workbook: 3, added_products: 4 },
  { id: 3, name: "Project 3", insights: 12, insights_workbook: 7, added_products: 6 },
  { id: 4, name: "Project 4", insights: 15, insights_workbook: 10, added_products: 8 },
  { id: 5, name: "Project 5", insights: 6, insights_workbook: 2, added_products: 3 },
];

export function ProjectPage() {
  return (
  
      <div className="flex min-h-screen bg-gray-50">
        <SideNav insights={insights} />
        <main className="flex-1">
          <MainSection insights={insights} />
        </main>
      </div>
    
  );
}


