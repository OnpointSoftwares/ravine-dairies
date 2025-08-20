# Ravine Dairies Cooperative Website

A modern, responsive website for a dairy cooperative built with HTML5, Bootstrap 5, and vanilla JavaScript.

## Features

- **Modern Design**: Clean, professional design with a nature-inspired color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Shopping cart, product filters, contact forms
- **Accessibility**: Good contrast ratios and semantic HTML
- **Performance**: Optimized images and efficient code

## Pages

### Main Pages
- `index.html` - Homepage with hero section, products overview, and company highlights
- `about.html` - About us page with company story, mission, vision, and team
- `products.html` - Product catalog with filtering and detailed product information
- `shop.html` - E-commerce page with shopping cart functionality
- `contact.html` - Contact page with forms, business information, and FAQ

### Additional Content
- `additional-content.html` - Extended content sections for the homepage
- `styles.css` - Custom CSS with the cooperative's branding and responsive design
- `script.js` - Main JavaScript functionality for interactive elements
- `shop.js` - E-commerce specific JavaScript for shopping cart and product management

## Color Palette

- **Primary Green**: #4CAF50 (Fresh, natural)
- **Cream White**: #FFFDE7 (Warm, organic)
- **Sky Blue**: #00B0FF (Clean, fresh)
- **Milk White**: #FFFFFF (Pure, clean)

## Typography

- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Key Features

### Homepage
- Hero section with compelling messaging
- Product showcase cards
- Farmer carousel
- Company timeline
- Sustainability highlights
- Customer testimonials
- News/blog section

### About Page
- Company story and history
- Mission, vision, and values
- Leadership team profiles
- Statistics and achievements
- Awards and certifications

### Products Page
- Product catalog with filtering
- Detailed product information
- Category-based organization
- Quality assurance information

### Shop Page
- Interactive shopping cart
- Product filtering and sorting
- Price range slider
- Responsive product grid
- Checkout simulation

### Contact Page
- Contact information
- Interactive contact form
- Business hours
- FAQ section
- Map placeholder

## Technical Details

### Dependencies
- Bootstrap 5.3.0 (CSS Framework)
- Bootstrap Icons (Icon library)
- Google Fonts (Poppins typography)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

### File Structure
```
ravinedairies/
├── index.html              # Homepage
├── about.html              # About us page
├── products.html           # Products catalog
├── shop.html               # E-commerce page
├── contact.html            # Contact page
├── additional-content.html # Extended homepage content
├── styles.css              # Custom CSS styles
├── script.js               # Main JavaScript functionality
├── shop.js                 # Shopping cart functionality
└── README.md               # This documentation
```

## Setup Instructions

1. **Local Development**: 
   - Open any HTML file in a web browser
   - For full functionality, serve files through a local web server
   - Python: `python3 -m http.server 8000`
   - Node.js: `npx serve .`

2. **Deployment**:
   - Upload all files to a web server
   - Ensure all relative links are maintained
   - No server-side processing required

## Customization

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary-green: #4CAF50;
    --cream-white: #FFFDE7;
    --sky-blue: #00B0FF;
    --milk-white: #FFFFFF;
}
```

### Content
- Update text content in HTML files
- Replace placeholder images with actual photos
- Modify product data in `shop.js`

### Functionality
- Extend shopping cart features in `shop.js`
- Add form submission handling
- Integrate with payment systems
- Add content management system

## Future Enhancements

- **Backend Integration**: Connect forms and shopping cart to server
- **Payment Processing**: Integrate payment gateway
- **User Accounts**: Add customer registration and login
- **Inventory Management**: Real-time stock tracking
- **Blog System**: Dynamic news and blog content
- **Multi-language Support**: Internationalization
- **Analytics**: User behavior tracking
- **SEO Optimization**: Meta tags and structured data

## License

This website template is created for Ravine Dairies Cooperative. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.
