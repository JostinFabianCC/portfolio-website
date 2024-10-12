# Portfolio Website - v1.0.0-Sprint1

## Overview

Welcome to my personal portfolio website! This project is designed to showcase my expertise as a Full Stack Developer.
The website is a multi-language, dynamic application where all content adjusts to the language chosen by the user,
making it highly adaptable for diverse audiences.

Built using **Vite** for fast builds, **React** for a flexible, component-driven UI, **Tailwind CSS** for modern and
efficient styling, and **i18next** for seamless internationalisation (i18n), this portfolio is designed to be scalable,
maintainable, and professional.

## What's New in v1.0.0 (Sprint 1)

This first sprint lays the foundation of the portfolio with core functionality, including:

- **Multi-language Support**: The site supports English, Spanish, and Catalan through `i18next`, allowing users to
  switch between languages effortlessly.
- **Dynamic Language Switching**: The `LanguageSwitcher` component updates not just the content but also the language
  labels themselves, providing a more intuitive user experience.
- **Tailwind CSS Styling**: A fully responsive design achieved through Tailwind CSS, ensuring the website looks great on
  all devices.
- **Clean Code with SOLID Principles**: The code has been crafted following SOLID principles to ensure scalability and
  maintainability.
- **Changelog**: A dedicated `CHANGELOG.md` is in place to track all significant changes across different versions and
  sprints.

## Technologies

- **Vite**: A lightning-fast build tool for modern web applications.
- **React**: A JavaScript library for building user interfaces through reusable components.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development without writing custom CSS.
- **i18next**: A robust internationalisation library that powers the multi-language support in the app.
- **GitFlow**: A branching strategy used to manage development, ensuring features are developed in isolation and merged
  cleanly.

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/JostinFabianCC/portfolio-website.git
cd portfolio-website
```

### 2. Install the project dependencies:

```bash
npm install
```

### 3. Run the development server:

```bash
npm run dev
```

### 4. Build for production:

```bash
npm run build
```

## Branching Strategy

We are following the **GitFlow** strategy to manage our development process. The key branches are:

- **main**: Contains production-ready code.
- **hotfix/**: Branches created to fix critical issues in production.
- **release/**: Branches created for each release to prepare for deployment.
- **develop**: The primary branch for ongoing development.
- **feature/**: Dedicated branches for specific features or tasks.

## Changelog

We are maintaining a detailed `CHANGELOG.md` to track progress and changes.