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
![Screenshot 2024-11-17 at 8 35 36 PM](https://github.com/user-attachments/assets/f870111f-01e3-435c-8f47-8e04ba139038)
![Screenshot 2024-11-17 at 8 35 47 PM](https://github.com/user-attachments/assets/e0dfe31f-1524-4cf8-9051-ba57e62daab2)
![Screenshot 2024-11-17 at 8 36 19 PM](https://github.com/user-attachments/assets/721517fe-d273-45f1-b183-7e3c436d0738)
![Screenshot 2024-11-17 at 8 36 28 PM](https://github.com/user-attachments/assets/16da8b4c-194c-4619-8717-e3da63137a62)

