# My Portfolio

## Overview
This project is a personal portfolio website showcasing my skills, projects, and achievements. It is built using modern web technologies with a focus on clean design and responsiveness.

## Live Demo
[View Portfolio](https://Binoyde12.github.io/My_Portfolio/)


## Features
- Interactive and responsive design
- Showcases projects with live links
- Contact form with EmailJS integration
- Docker support for containerized deployment

## Tech Stack
- **Frontend:** TypeScript, React, Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Vercel

## Installation
```bash
# Clone the repository
git clone https://github.com/Binoyde12/My_Portfolio.git

# Navigate to the project directory
cd My_Portfolio

# Install dependencies
npm install

# Run the application
npm run dev
```

## Docker Setup
```bash
# Build Docker image
docker build -t my-portfolio .

# Run Docker container
docker run -p 5173:5173 my-portfolio
```

## Project Structure
```
My_Portfolio/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page-level components
│   └── assets/          # Static files and images
├── public/              # Public assets
├── Dockerfile
├── docker-compose.yml
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Environment Variables
Create a `.env` file in the root directory and add the following:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment
This project is deployed on Github pages. For manual deployment:
- Push code to GitHub
- Deploy automatically from the main branch

## Contributing
Feel free to submit pull requests. For major changes, please open an issue first.

## License
This project is open-source and available under the [MIT License](LICENSE).


