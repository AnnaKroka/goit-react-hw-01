import s from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
  return (
    <div className={s.container}>
        <table className={s.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item, index) => (
     <tr key={index} id={item.id}>
        <td className={s.type}>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
     </tr>
    ))} 
    
  </tbody>
</table>
    </div>
  );
};

export default TransactionHistory