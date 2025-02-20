# Setting Up a Local Git Repository and Pushing to GitHub

Follow these steps to set up a local Git repository and push your project files to GitHub.

## Step 1: Initialize a Local Git Repository

Open your terminal or command prompt and navigate to your project directory:

```sh
cd "C:/Users/uwagb/Documents/Prince/Personal/codes/True North Bites"
```

Initialize a new Git repository:

```sh
git init
```

## Step 2: Organize Your Files

Ensure your files are organized correctly for a Next.js project. Typically, you should have a `pages` directory for routing. Your project structure should look like this:

```
True North Bites/
├── pages/
│   ├── about/
│   │   └── page.tsx
│   ├── locations/
│   │   └── page.tsx
│   ├── loyalty/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── promotions/
│   │   └── page.tsx
│   ├── reviews/
│   │   └── page.tsx
│   └── index.tsx
├── components/
│   ├── ContactForm.tsx
│   ├── Header.tsx
│   └── MenuHighlights.tsx
├── styles/
│   └── globals.css
├── layout.tsx
├── package.json
├── tsconfig.json
├── next.config.js
├── netlify.toml
├── .gitignore
```

## Step 3: Stage and Commit Your Files

Stage all your files:

```sh
git add .
```

Commit the staged files with a message:

```sh
git commit -m "Initial commit"
```

## Step 4: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in to your account.
2. Click the "+" icon in the top right corner and select "New repository".
3. Enter a repository name (e.g., `True-North-Bites`), add a description, and choose whether the repository should be public or private.
4. Click "Create repository".

## Step 5: Link the Local Repository to GitHub

Copy the repository URL from GitHub (e.g., `https://github.com/your-username/True-North-Bites.git`).

In your terminal, link the local repository to the GitHub repository:

```sh
git remote add origin https://github.com/your-username/True-North-Bites.git
```

## Step 6: Push the Changes to GitHub

Push your changes to the main branch on GitHub:

```sh
git push -u origin main
```

Your project files are now pushed to GitHub!