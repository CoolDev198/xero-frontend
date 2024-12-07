import httpClient from './httpClient';

// Fetch the balance sheet data
export const fetchBalanceSheet = async () => {
  try {
    const response = await httpClient.get('/balance-sheet');
    console.log(response.data); // Log data for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    throw error;
  }
};
