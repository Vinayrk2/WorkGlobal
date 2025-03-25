# WorkGlobal - International Client Task & Holiday Manager

## Overview
WorkGlobal is a web application designed to help manage international clients' tasks efficiently while checking public holidays across different countries. The application provides a **modern UI**, seamless **task management**, and **holiday tracking** to ensure better scheduling.

## Features
- **Task Management**: Add, delete, and manage tasks with priority levels.
- **Holiday Checking**: Fetch public holidays for selected countries and dates.
- **Modern UI**: A clean and responsive design using React-Bootstrap.
- **State Management**: Uses Redux for efficient state handling.
- **Timezone Adjustments**: Ensures accurate date selection.

## Tech Stack
- **Frontend**: React, React-Bootstrap, Redux
- **Backend**: Uses a holiday API for fetching public holidays
- **State Management**: Redux, Redux Thunk

## Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/workglobal.git
   cd workglobal
   ```

2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev 
   ```
   The app will be available at `http://localhost:3000`

## Project Structure
```
workglobal/
│── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── HolidayInfo.jsx
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   ├── App.jsx
│   ├── store.js
│── public/
│── package.json
│── README.md
```

## API Integration
- The application fetches holidays using `https://openholidaysapi.org`.
- Ensure you have an internet connection while checking for holidays.

## Developer
- Vinay Koshti - [GitHub Profile](https://github.com/Vinayrk2)

## Support
For issues, please open a ticket on GitHub or contact the maintainer.

Happy Coding! 🚀

