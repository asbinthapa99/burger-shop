# 🍔 Burger Shop Website

Welcome to our Burger Shop project — a modern, responsive, and aesthetically designed website built as part of COM109 Client-Side Development coursework. This interactive, user-friendly platform allows customers to browse menus, order burgers online, and contact us with ease.

## ✨ Features

- **Multi-Page Layout** — Home, Menu, Contact, and Order pages with seamless navigation
- **Fully Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — CSS transitions and JavaScript effects for an engaging user experience
- **Form Validation** — Ensures accurate and complete order information
- **Light/Dark Mode Toggle** — Users can switch between light and dark themes
- **Cookie & LocalStorage Support** — User preferences and choices are saved locally
- **Accessible Design** — ALT text, ARIA labels, and keyboard navigation support
- **Professional Styling** — Gradient effects, hover states, and modern UI/UX

## 📁 Project Structure

```
burger-shop/
├── contact.html          # Contact page with form
├── index.html            # Homepage with hero section and recipe showcase
├── menu.html             # Menu page displaying all burger options
├── order.html            # Order form for placing burger orders
├── README.md             # This file
│
├── css/
│   ├── common.css        # Shared styles and theme variables
│   ├── contact.css       # Contact page specific styles
│   ├── menu.css          # Menu page specific styles
│   ├── order.css         # Order form specific styles
│   ├── sharedcss.css     # Additional shared styles
│   └── style.css         # Homepage specific styles
│
├── js/
│   ├── cokkie.js         # Cookie and localStorage handling
│   ├── darkmode.js       # Light/Dark mode toggle functionality
│   ├── main.js           # Navigation system and general interactions
│   ├── query.js          # jQuery-based form interactions
│   └── validation.js     # Form validation logic
│
└── images/               # Images and icons directory
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - static website

### Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asbinthapa99/burger-shop.git
   cd burger-shop
   ```

2. **Open in browser:**
   - Double-click `index.html` or
   - Use a local server:
     ```bash
     python3 -m http.server 8000
     # Then visit http://localhost:8000
     ```

## 📄 Pages Overview

### Home (index.html)
- Hero section with call-to-action
- Secret recipe showcase with ingredient cards
- Featured burger highlights
- Smooth animations and floating effects
- Cookie consent popup

### Menu (menu.html)
- Display all available burgers with prices
- Chicken, Meat, Grill, Classic, and Big burgers
- Add to cart button functionality
- Responsive grid layout (3-5 columns depending on screen size)
- Staggered card animations

### Contact (contact.html)
- Professional contact form with validation
- Dark gradient background
- Form field animations and transitions
- Email submission via Formspree
- Contact image and decorative stickers

### Order (order.html)
- Complete burger ordering system
- Email and name input fields
- Burger selection dropdown
- Quantity input with real-time validation
- Special notes textarea for delivery instructions
- Form submission with feedback messages

## 🎨 Design Features

- **Modern Gradient Effects** — Beautiful linear gradients on buttons, headers, and backgrounds
- **Smooth Transitions** — Cubic-bezier transitions for natural, professional animations
- **Interactive Hover States** — Scale, translate, rotate, and color effects on user interactions
- **Professional Color Scheme** — Golden yellow (#FDD64F) accents with dark text for optimal contrast
- **Custom Animations** — Float, fade-in, slide-in, pulse, and rotate effects throughout

## 🔧 Technologies Used

- **HTML5** — Semantic markup for accessibility
- **CSS3** — Advanced styling with animations, gradients, and transitions
- **JavaScript (ES6+)** — Interactive functionality and state management
- **jQuery 3.6.0** — DOM manipulation and simplified form handling
- **Bootstrap 5.3.3** — Responsive navigation component and grid system
- **Remixicon 4.5.0** — Consistent iconography across all pages
- **Formspree** — Backend API for email form submissions

## 👥 Contributors

- **Asbin Thapa** — Project lead, navigation system, dark mode implementation, form validation, CSS enhancements and animations
- **Jahid Hasan** — Menu page development (menu.html) and responsive styling (menu.css)
- **Ritesh Chaudhary** — Contact page development (contact.html) and jQuery-based form handling

## 📸 Website Screenshots

*Homepage with hero section and animations*
![Homepage](https://github.com/user-attachments/assets/3c976974-6d65-49b5-81ed-f82da93d58e8)

*Menu page with burger cards and animations*
![Menu](https://github.com/user-attachments/assets/c3f08613-75b7-46f7-875a-bdbba55b57c8)

*Secret recipe section with ingredient highlights*
![Recipe](https://github.com/user-attachments/assets/c6b9670f-b89c-4aae-9fd1-9b9527f7005a)

*Contact form with professional styling*
![Contact](https://github.com/user-attachments/assets/faad5651-b708-43e9-9b4b-64c7864a0a05)

*Order form for burger selection*
![Order](https://github.com/user-attachments/assets/6525a7a6-a42e-40b5-8195-360dbe249cee)

*Dark mode toggle feature*
![Dark Mode](https://github.com/user-attachments/assets/dadd07ea-3b39-43d3-abd0-3cee2eaa203e)

## 💡 Key Features Breakdown

### Navigation System
- Fixed header with responsive Bootstrap navbar
- Smooth scrolling to sections
- Dark mode toggle button
- Mobile-friendly hamburger menu

### Form Validation
- Real-time input validation
- Required field checking
- Email format validation
- Success/error feedback messages

### Dark Mode
- LocalStorage persistence
- Smooth theme transitions
- Applied across all pages
- Icon changes (moon → sun)

### Cookie Management
- Cookie consent popup on first visit
- 30-day expiration
- LocalStorage for theme preferences

## 🐛 Known Issues

- `cokkie.js` filename has a typo (intentional for now, can be renamed if needed)

## 📝 Notes

- The website uses localStorage to save user preferences
- Cookies are used for tracking and enhanced user experience
- Form submissions are handled via Formspree API (requests go to formspree.io)
- All CSS animations are GPU-accelerated for optimal performance
- The site is optimized for modern browsers (ES6+ support required)
- Mobile-first responsive design with breakpoints at 330px, 540px, 768px, and 1150px

## 📄 License

This project is open-source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests with improvements, bug fixes, or new features.

## 📞 Contact & Support

For questions or feedback, please use the contact form on the website or create an issue on GitHub.

---

**Built with ❤️ for burger lovers everywhere. Happy ordering! 🍔✨**




