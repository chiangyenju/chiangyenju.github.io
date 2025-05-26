# Personal Portfolio Website

This is my personal portfolio website built with Next.js and deployed to GitHub Pages.

## Project Structure

- `source` branch: Contains all Next.js source code and development files
- `main` branch: Contains only the static files served by GitHub Pages

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/chiangyenju/chiangyenju.github.io.git
   cd chiangyenju.github.io
   ```

2. Switch to the source branch:
   ```bash
   git checkout source
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

## Making Changes

1. Make your changes to the source code
2. Test locally using `npm run dev`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin source
   ```

## Deployment

The site is automatically deployed to GitHub Pages whenever you push to the `source` branch. The deployment process:

1. GitHub Actions builds the Next.js site
2. The static files (from `out/` directory) are deployed to the `main` branch
3. GitHub Pages serves the site from the `main` branch

You can view the deployment status in the "Actions" tab of your GitHub repository.

## Important Notes

- Always work on the `source` branch
- Never manually modify the `main` branch
- The `main` branch is automatically updated by GitHub Actions
- Your site will be available at: https://chiangyenju.github.io/

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── projects/          # Projects page
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions workflow
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies
```

## Troubleshooting

If you encounter any issues:

1. Make sure you're on the `source` branch
2. Run `npm install` to ensure all dependencies are installed
3. Check the GitHub Actions tab for deployment errors
4. Verify your `next.config.js` settings

## Local Development

The development server (`npm run dev`) will run on `localhost:3000`. This is your local development environment where you can make and test changes before deploying.
