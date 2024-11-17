# Energy Consumption Chart with Authentication

This project visualizes energy consumption data (total_kwh) over time from a JSON file. The chart is only accessible to authenticated users, ensuring secure data access and meaningful insights into energy usage.

# Features
Authentication: Users must log in to view the chart data.
Dynamic Chart: Displays energy consumption versus time for better analysis.
JSON Data Integration: Fetches energy data from an external JSON file.

# Prerequisites
Ensure the following are installed:

Node.js (v14 or higher)
npm or yarn
MongoDB (if implementing data storage)


Set environment variables in a .env file:
## frontend
PORT=3000
REACT_APP_BACKEND_URL=http://localhost:4000

## Backend
DB_URL="Your mongodb path"
JWT_SECRET="Your JWT secret"
REACT_APP_FRONTEND_URL= http://localhost:3000
JWT_SECRET=your-secret-key

## Dependencies
# Backend
Express
Mongoose
JSON Web Token (JWT)
dotenv

# Frontend
React
Chart.js or a similar library
Axios

## Future Enhancements
Add role-based access for admins and users.
Enable data filtering by date range.
Implement caching for improved performance.


## ScreenShots
