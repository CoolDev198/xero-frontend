import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { fetchBalanceSheet } from '../../services/api';

jest.mock('../../services/api', () => ({
  fetchBalanceSheet: jest.fn(),
}));

describe('App Component', () => {
  it('should render the loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display error message on fetch failure', async () => {
    (fetchBalanceSheet as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('An error occurred while fetching data')).toBeInTheDocument();
    });
  });

  it('should render reports when fetched successfully', async () => {
    const mockResponse = {
      Reports: [
        {
          ReportID: 'BalanceSheet',
          ReportName: 'Balance Sheet',
          ReportTitles: ['Balance Sheet', 'Demo Org', 'As at 07 December 2024'],
          ReportDate: '07 December 2024',
          Rows: [
            {
              RowType: 'Header',
              Cells: [
                { Value: '' },
                { Value: '07 December 2024' },
                { Value: '08 December 2023' },
              ],
            },
            {
              RowType: 'Section',
              Title: 'Assets',
              Rows: [
                {
                  RowType: 'Row',
                  Cells: [{ Value: 'Cash' }, { Value: '1000' }],
                },
              ],
            },
          ],
        },
      ],
    };
  
    (fetchBalanceSheet as jest.Mock).mockResolvedValueOnce(mockResponse);
  
    render(<App />);
  
    // Assertions for titles and content
    await waitFor(() => {
      expect(screen.getByText('Balance Sheet')).toBeInTheDocument();
      expect(screen.getByText('Demo Org')).toBeInTheDocument();
      expect(screen.getByText('As at 07 December 2024')).toBeInTheDocument();
      expect(screen.getByText('Assets')).toBeInTheDocument();
      expect(screen.getByText('Cash')).toBeInTheDocument();
      expect(screen.getByText('1000')).toBeInTheDocument();
    });
  });
  
});
