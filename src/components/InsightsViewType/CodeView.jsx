const CodeView = () => {
    return (
      <div className="bg-gray-50 rounded-lg p-4 h-[500px] overflow-auto font-mono text-sm">
        <pre className="whitespace-pre-wrap">
          <span className="text-black-600">sql_query</span>
          <span className="text-black"> = </span>
          <span className="text-red-600">
            'SELECT DISTINCT n_name FROM "data_market"."supplychain"."customerinsights";'
          </span>
          {"\n"}
          <span className="text-black-600">df</span>
          <span className="text-black"> = query_to_dataframe(sql_query)</span>
          {"\n"}
          <span className="text-black-600">list_dict_result</span>
          <span className="text-black"> = []</span>
          {"\n"}
          <span className="text-black-600">list_dict_result</span>
          <span className="text-black">.append(df.to_dict())</span>
          {"\n"}
          <span className="text-blue-600">print</span>
          <span className="text-black-600">(</span>
          <span className="text-red-600">"Here are the details of the countries:"</span>
          <span className="text-black">)</span>
        </pre>
      </div>
    )
  }
  
  export default CodeView
  
  