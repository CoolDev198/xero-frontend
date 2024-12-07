Xero Balance Sheet Frontend
This is a React-based frontend application that fetches and displays balance sheet data from a backend API. The app is built with TypeScript and uses Axios for API calls.

Features
Fetches and displays balance sheet data in a tabular format.
Displays loading and error states.
Written in React with TypeScript.
Unit tests using React Testing Library and Jest.
Prerequisites
Ensure you have the following installed on your system:

Node.js (version 16 or above) - Download Node.js
npm or yarn (Node Package Manager)
Git (optional, for cloning the repository)
Installation
Clone the repository:

bash
Copy code
git clone git@github.com:CoolDev198/xero-frontend.git
Navigate to the project directory:

bash
Copy code
cd xero_balance_sheet_frontend
Install dependencies:

bash
Copy code
npm install
Configuration
Ensure your backend API is running and accessible at http://127.0.0.1:8000/balance-sheet.

If the API URL is different, update it in the src/services/api.ts file:
ts
Copy code
export const fetchBalanceSheet = async () => {
  const response = await axios.get('YOUR_API_ENDPOINT_HERE');
  return response.data;
};
Running the Application
To start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.
Running Tests
To run the unit tests for the application:

bash
Copy code
npm test
This will execute all test cases using Jest and React Testing Library.

Project Structure
css
Copy code
xero_balance_sheet_frontend/
│
├── src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.tsx
│   │   │   ├── App.module.css
│   │   ├── Table/
│   │       ├── Table.tsx
│   │       ├── Table.module.css
│   ├── services/
│   │   └── api.ts
│   ├── index.tsx
│   └── setupTests.ts
│
├── public/
│   └── index.html
│
├── package.json
└── README.md
Scripts
Start the application:

bash
Copy code
npm start
Build the application:

bash
Copy code
npm run build
Run tests:

bash
Copy code
npm test
Eject configuration (optional):

bash
Copy code
npm run eject
Testing
The project includes tests for the App component to ensure:

The loading state renders correctly.
The error message is displayed when API calls fail.
The balance sheet data is rendered successfully.
To add more tests, write them in src/components/App/App.test.tsx or similar test files.
