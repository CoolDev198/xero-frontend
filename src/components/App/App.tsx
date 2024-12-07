import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { fetchBalanceSheet } from '../../services/api';
import Table from '../Table/Table';

const App = () => {
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBalanceSheet();
        setReport(response?.Reports[0] || null);
      } catch (err) {
        setError('An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!report) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Render Report Titles */}
      {report.ReportTitles && (
        <div className={styles.titles}>
          {report.ReportTitles.map((title: string, index: number) => (
            <h2 key={index} className={styles.subtitle}>
              {title}
            </h2>
          ))}
        </div>
      )}
      {/* Render Header Rows */}
      {report.Rows &&
        report.Rows.map((section: any, index: number) => {
          if (section.RowType === 'Header') {
            return (
              <div key={index} className={styles.header}>
                <h3>{section.Cells.map((cell: any) => cell.Value).join(' | ')}</h3>
              </div>
            );
          } else if (section.RowType === 'Section') {
            return (
              <div key={index} className={styles.section}>
                {section.Title && <h2 className={styles.subtitle}>{section.Title}</h2>}
                <Table rows={section.Rows || []} />
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default App;
