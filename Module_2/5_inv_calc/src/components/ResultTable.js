const ResultTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            {/* total savings of the year */}

            <td>{yearData.yearlyInterest}</td>
            {/* total interest gained in a year */}

            <td>
              {yearData.savingsEndOfYear -
                props.initialInvestment -
                (yearData.yearlyContribution * yearData.year)}
            </td>

              {/* total invested capital */}
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>x  
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ResultTable;
