# Career Assessment Tool

This is a web-based career assessment tool designed for students to evaluate their skills, interests, and personality traits. The application provides a full assessment and weekly check-ins to help users track their career development over time.

## Features

- Full career assessment with skill, personality, and interest evaluations.
- Weekly mini assessments to track changes and progress.
- User-friendly interface with responsive design.
- Local storage for saving user data and assessment results.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool and development server for modern web applications.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for styling.
- PostCSS: A tool for transforming CSS with JavaScript plugins.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd career-assessment-vite
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
career-assessment-vite
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.cjs
├── postcss.config.cjs
├── .gitignore
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── assets
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   └── assessment
│   │       ├── FullAssessment.tsx
│   │       ├── WeeklyAssessment.tsx
│   │       ├── ReviewPanel.tsx
│   │       └── ResultCard.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   └── Profile.tsx
│   ├── hooks
│   │   └── useLocalStorage.ts
│   ├── lib
│   │   └── scoring.ts
│   ├── data
│   │   └── questions.ts
│   ├── types
│   │   └── index.d.ts
│   └── utils
│       └── export.ts
├── public
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.