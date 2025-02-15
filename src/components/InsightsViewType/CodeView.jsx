
import "./CodeView.scss";

const CodeView = () => {
  return (
      <div className="code-view">
          <pre>
              <span className="keyword">sql_query</span>
              <span className="operator"> = </span>
              <span className="string">
                  'SELECT DISTINCT n_name FROM "data_market"."supplychain"."customerinsights";'
              </span>
              {"\n"}
              <span className="variable">df</span>
              <span className="operator"> = query_to_dataframe(sql_query)</span>
              {"\n"}
              <span className="variable">list_dict_result</span>
              <span className="operator"> = []</span>
              {"\n"}
              <span className="variable">list_dict_result</span>
              <span className="operator">.append(df.to_dict())</span>
              {"\n"}
              <span className="function">print</span>
              <span className="parentheses">(</span>
              <span className="string">"Here are the details of the countries:"</span>
              <span className="parentheses">)</span>
          </pre>
      </div>
  );
};

export default CodeView;
