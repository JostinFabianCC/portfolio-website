# Changelog

All significant changes made to this project will be documented here.

## [Unreleased]

## [v1.0.0-Sprint1] - 12th October 2024

### What’s been added

- **Multi-language support**:
    - Set up `react-i18next` to allow users to switch between English, Spanish, and Catalan seamlessly (`feature/setup-multilanguage`).
    - Added the `LanguageSwitcher` component, which lets users choose their preferred language in real time.
    - Created separate translation files (`en.json`, `es.json`, and `ca.json`) for each language, ensuring all content is dynamically translated.

- **Tailwind CSS for styling**:
    - Integrated **Tailwind CSS** to ensure the site is responsive, modern, and easy to style (`feature/2-setup-tailwind-css`).
    - Applied Tailwind’s utility classes in `App.jsx` to keep the design consistent and the layout responsive across devices.
    - Styled the `LanguageSwitcher` component with Tailwind, ensuring that the language buttons are responsive, with smooth hover effects.

- **Dynamic language buttons**:
    - Made the language buttons dynamic, so their text changes based on the current language (`feature/dynamic-language-buttons`).
    - For example, when the site is in Spanish, the buttons now show "Inglés", "Español", and "Catalán", making it more intuitive for users.

- **Project documentation (README.md)**:
    - Added a clear and detailed **README.md** file (`feature/v1.0.0-Sprint1-ADD-BASIC-README`) to guide users and recruiters through the project.
    - The README covers key features, technologies used, setup instructions, and follows best practices like clean code and GitFlow.

- **Testing and validation**:
    - Thoroughly tested the integration of Tailwind CSS and the language switcher on the main page. All styles and functionality were confirmed to work correctly across all supported languages.

### Future improvements

- Add new sections, such as **About Me**, **Projects**, and **Experience**, to make the portfolio more comprehensive.
- Improve accessibility and introduce subtle animations to enhance the user experience and make the site feel more polished.
