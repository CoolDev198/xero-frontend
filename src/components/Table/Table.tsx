import React from 'react';
import styles from './Table.module.css';

interface TableProps {
  rows: any[]; // Accepts rows as an array of objects
}

const Table: React.FC<TableProps> = ({ rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.cell}>Account</th>
          <th className={styles.cell}>Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) =>
          row.RowType === 'Row' ? (
            <tr key={index}>
              <td className={styles.cell}>{row.Cells[0]?.Value}</td>
              <td className={styles.cell}>{row.Cells[1]?.Value}</td>
            </tr>
          ) : row.RowType === 'SummaryRow' ? (
            <tr key={index} className={styles.summaryRow}>
              <td className={styles.cell}><strong>{row.Cells[0]?.Value}</strong></td>
              <td className={styles.cell}><strong>{row.Cells[1]?.Value}</strong></td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default Table;
