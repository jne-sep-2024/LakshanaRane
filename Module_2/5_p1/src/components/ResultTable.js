const ResultTable = (props) => {
  console.log({props})
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
        {props.data.map((yearData) =>{
          console.log("initialInvestment",props.initialInvestment)

        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            {/* total savings of the year */}

            {/* total interest gained in a year */}

            <td>
              {yearData.savingsEndOfYear -
                props.initialInvestment -
                (yearData.yearlyContribution * yearData.year)}
            </td>

                <td>{yearData.yearlyInterest}</td>
              {/* total invested capital */}
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>
          </tr>
        )
      }
      )
        }
      </tbody>
    </table>
  );
};
export default ResultTable;
