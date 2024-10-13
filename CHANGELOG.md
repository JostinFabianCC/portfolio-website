# Changelog

All significant changes made to this project will be documented here.

## [Unreleased]

## [v1.1.0-Sprint2] - 13th October 2024

### What’s been added

- **Professional Footer Component**:
    - **[feature/footer]** Implemented a fully responsive footer for the portfolio.
    - Modularized the social media links into the `SocialLink` component.
    - Enhanced accessibility by adding `aria-labels` to social media links.
    - Integrated the `LanguageSwitcher` component in a more structured layout for better user experience.
    - Included copyright information dynamically based on the current year.

- **Hamburger Menu for Mobile Devices**:
    - **[feature/hamburger-menu]** Implemented a responsive hamburger menu for mobile devices.
    - The hamburger menu smoothly toggles open/close with a modern transition effect.
    - A semi-transparent background is applied to the menu for enhanced design on mobile screens.
    - Links inside the hamburger menu close the menu automatically when clicked, improving user experience.
    - Added `aria-expanded` attributes to improve accessibility for screen readers and provide a more inclusive
      experience.
    - Integrated the `LanguageSwitcher` inside the hamburger menu to maintain multi-language support on mobile devices.

- **Clean Code Refactor for Navbar**:
    - Refactored the `Navbar.jsx` component to follow clean code principles.
    - **Extracted `NavLink` and `NavigationLinks` components** to simplify and modularize the code, enhancing
      readability and maintainability.
    - Centralized the navigation link structure in the `NAV_LINKS` array, reducing duplication and making future changes
      easier.
    - The overall structure of the navigation system is now more scalable and easier to update.


- **Sticky, accessible, and responsive navbar**:
    - Implemented a sticky navbar that remains fixed at the top of the page while the user scrolls (
      `feature/sticky-navbar`).
    - Improved accessibility by adding `aria-label` attributes for better navigation with screen readers.
    - Enhanced visual appeal by adding smooth hover transitions and a shadow effect to the navbar.
    - Ensured the navbar is fully responsive across all devices, providing a consistent user experience.

### What’s been changed

- Improved the user experience across all devices by ensuring consistency in navigation and multi-language
  functionality.
- Enhanced code quality with better structure, modular components, and clean code practices.

### Future improvements

- Continue to improve the user interface with additional **animations** and further enhance **accessibility** features.
- Plan to introduce more advanced sections, such as **Experience** and **Contact**, with enhanced content and design.

---

## [v1.0.0] - 12th October 2024

### What’s been added

- **Multi-language support**:
    - Set up `react-i18next` to allow users to switch between English, Spanish, and Catalan seamlessly (
      `feature/setup-multilanguage`).
    - Added the `LanguageSwitcher` component, which lets users choose their preferred language in real time.
    - Created separate translation files (`en.json`, `es.json`, and `ca.json`) for each language, ensuring all content
      is dynamically translated.

- **Tailwind CSS for styling**:
    - Integrated **Tailwind CSS** to ensure the site is responsive, modern, and easy to style (
      `feature/2-setup-tailwind-css`).
    - Applied Tailwind’s utility classes in `App.jsx` to keep the design consistent and the layout responsive across
      devices.
    - Styled the `LanguageSwitcher` component with Tailwind, ensuring that the language buttons are responsive, with
      smooth hover effects.

- **Dynamic language buttons**:
    - Made the language buttons dynamic, so their text changes based on the current language (
      `feature/dynamic-language-buttons`).
    - For example, when the site is in Spanish, the buttons now show "Inglés", "Español", and "Catalán", making it more
      intuitive for users.

- **Project documentation (README.md)**:
    - Added a clear and detailed **README.md** file (`feature/v1.0.0-Sprint1-ADD-BASIC-README`) to guide users and
      recruiters through the project.
    - The README covers key features, technologies used, setup instructions, and follows best practices like clean code
      and GitFlow.

- **Testing and validation**:
    - Thoroughly tested the integration of Tailwind CSS and the language switcher on the main page. All styles and
      functionality were confirmed to work correctly across all supported languages.

- **Home layout and navigation** (`feature/home-layout-and-navigation`):
    - Added a fully responsive **home page layout** with a dynamic **header** that includes a placeholder image.
    - Integrated **dynamic text translation** in the header using `react-i18next` for multilingual support.
    - Created a modular and scalable navigation bar that works across the entire site.
    - Ensured the **language switcher** is available across all pages for a consistent user experience.
    - Applied Tailwind CSS to style the entire layout, ensuring responsiveness and clean design across devices.

---**