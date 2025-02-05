
import SideNav from "../Projects/SideNav";
import InsightsList from "./InsightsList";

// export const insights1 = [
//   { id: 1, name: "Project 1", insights: 10, insights_workbook: 5, added_products: 5 },
//   { id: 2, name: "Project 2", insights: 8, insights_workbook: 3, added_products: 4 },
//   { id: 3, name: "Project 3", insights: 12, insights_workbook: 7, added_products: 6 },
//   { id: 4, name: "Project 4", insights: 15, insights_workbook: 10, added_products: 8 },
//   { id: 5, name: "Project 5", insights: 6, insights_workbook: 2, added_products: 3 },
// ];
// export const insights2 = [
//     { id: 1, name: "Insights_1", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
//     { id: 2, name: "Insights_2", format: "Code, Text", source: "Python Code", datetime: "30/1/25 - 15:15" },
//     { id: 3, name: "Insights_3", format: "Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" },
//     { id: 4, name: "Insights_4", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
//     { id: 5, name: "Insights_5", format: "Text", source: "Python Code", datetime: "30/1/25 - 15:15" },
//     { id: 6, name: "Insights_6", format: "Code, Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" },
//     { id: 7, name: "Insights_7", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
//     { id: 8, name: "Insights_8", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" },
//     { id: 9, name: "Insights_9", format: "Text", source: "Albus AI", datetime: "30/1/25 - 15:15" },
//     { id: 10, name: "Insights_10", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
//   ];

  export const projectData = [
    {
      id: 1,
      projectInfo: {
        name: "Project 1",
        insights: 10,
        insights_workbook: 5,
        added_products: 5
      },
      insightsList: [
        { id: 1, name: "Insights_1", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 2, name: "Insights_2", format: "Code, Text", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 2,
      projectInfo: {
        name: "Project 2",
        insights: 8,
        insights_workbook: 3,
        added_products: 4
      },
      insightsList: [
        { id: 3, name: "Insights_3", format: "Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" },
        { id: 4, name: "Insights_4", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 3,
      projectInfo: {
        name: "Project 3",
        insights: 12,
        insights_workbook: 7,
        added_products: 6
      },
      insightsList: [
        { id: 5, name: "Insights_5", format: "Text", source: "Python Code", datetime: "30/1/25 - 15:15" },
        { id: 6, name: "Insights_6", format: "Code, Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 4,
      projectInfo: {
        name: "Project 4",
        insights: 15,
        insights_workbook: 10,
        added_products: 8
      },
      insightsList: [
        { id: 7, name: "Insights_7", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 8, name: "Insights_8", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 5,
      projectInfo: {
        name: "Project 5",
        insights: 6,
        insights_workbook: 2,
        added_products: 3
      },
      insightsList: [
        { id: 9, name: "Insights_9", format: "Text", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 10, name: "Insights_10", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    }
  ];

export function InsightsPage() {
  return (
  
      <div className="flex min-h-screen bg-white">
        <SideNav insights={projectData.map(project => project.projectInfo)}  />
        <main className="flex-1">
        <InsightsList insights={projectData.flatMap(project => project.insightsList)} />
        </main>
      </div>
    
  );
}