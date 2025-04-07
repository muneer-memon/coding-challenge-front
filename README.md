# Coding Challenge Front

A responsive web application for viewing and managing incidents, with both table and list views that adapt to screen size. Built with React.js and designed for production deployment.

## Features

- **Responsive Design**: Automatically switches between table (desktop) and list (mobile) views
- **Real-time Data**: Fetches incident data from API endpoints
- **Priority Handling**: Visual indicators for High/Medium/Low priority incidents
- **Sorting**: Incidents sorted by priority and timestamp
- **Dark Theme**: Modern dark UI with hover effects
- **Production Ready**: Includes tests, error handling, and optimized build

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS Modules
- Jest + React Testing Library (Testing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/muneer-memon/coding-challenge-front.git
```

## Deployment
### Static Hosting
1. Build the app:
```bash
npm run build
```
2. Deploy the dist folder to:

Netlify

Vercel

AWS S3 + CloudFront

Azure Blob Storage

### Docker

```bash
docker build -t coding-challenge-front .
docker run -p 80:80 coding-challenge-front
```



