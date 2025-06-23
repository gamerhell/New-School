# Vedic Wisdom School WordPress Theme

A modern, responsive WordPress theme designed specifically for educational institutions that want to combine traditional values with contemporary design.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Custom Post Types**: Built-in support for Faculty, Events, and Testimonials
- **Customizer Integration**: Easy customization through WordPress Customizer
- **SEO Optimized**: Clean, semantic HTML structure for better search engine visibility
- **Accessibility Ready**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Translation Ready**: Fully translatable with .pot file included
- **Custom Widgets**: Specialized widgets for school information
- **Contact Form**: Built-in contact form with spam protection
- **Social Media Integration**: Easy social media links management
- **Performance Optimized**: Lightweight and fast-loading

## Installation

1. Download the theme files
2. Upload the `vedic-wisdom` folder to `/wp-content/themes/`
3. Activate the theme through the WordPress admin panel
4. Go to Appearance > Customize to configure theme settings

## Setup Guide

### 1. Initial Configuration

After activating the theme, go to **Appearance > Customize** and configure:

- **Site Identity**: Upload your school logo and set the site title
- **School Information**: Add contact details, address, and Sanskrit tagline
- **Social Media**: Add your social media profile URLs
- **Colors**: Customize the color scheme to match your brand

### 2. Menu Setup

Create and assign menus:

1. Go to **Appearance > Menus**
2. Create a new menu for "Primary Menu"
3. Add pages like Home, About, Academics, Admissions, Faculty, Events, Contact
4. Assign to "Primary Menu" location
5. Create additional menus for footer sections if needed

### 3. Custom Post Types

The theme includes three custom post types:

#### Faculty Members
- Go to **Faculty > Add New**
- Add faculty member details including:
  - Name (title)
  - Bio (content)
  - Photo (featured image)
  - Position, Qualification, Experience (custom fields)

#### Events
- Go to **Events > Add New**
- Add event details including:
  - Event name (title)
  - Description (content)
  - Event image (featured image)
  - Date, Time, Location, Category (custom fields)

#### Testimonials
- Go to **Testimonials > Add New**
- Add testimonial content and author photo

### 4. Homepage Setup

1. Create a new page called "Home"
2. Go to **Settings > Reading**
3. Set "Your homepage displays" to "A static page"
4. Select "Home" as your homepage

The theme includes a custom front-page.php template that will automatically display:
- Hero section with school information
- About section
- Academics overview
- Faculty members
- Upcoming events
- Contact information

### 5. Required Plugins (Optional)

While the theme works standalone, these plugins enhance functionality:

- **Contact Form 7**: For advanced contact forms
- **Yoast SEO**: For enhanced SEO features
- **WP Super Cache**: For performance optimization

## Customization

### Colors and Fonts

The theme uses CSS custom properties for easy color customization:

```css
:root {
    --primary-color: #f97316;
    --secondary-color: #ef4444;
    --text-color: #374151;
    --background-color: #ffffff;
}
```

### Adding Custom CSS

Use **Appearance > Customize > Additional CSS** to add custom styles.

### Child Theme

For extensive customizations, create a child theme:

1. Create a new folder: `vedic-wisdom-child`
2. Add `style.css` with theme header
3. Add `functions.php` to enqueue parent styles

## File Structure

```
vedic-wisdom/
├── style.css                 # Main stylesheet
├── index.php                 # Main template
├── functions.php             # Theme functions
├── header.php                # Header template
├── footer.php                # Footer template
├── front-page.php            # Homepage template
├── single.php                # Single post template
├── page.php                  # Page template
├── archive.php               # Archive template
├── assets/
│   ├── css/
│   │   └── icons.css         # Icon styles
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   └── images/               # Theme images
├── languages/                # Translation files
└── README.md                 # This file
```

## Shortcodes

### Contact Form
```
[vedic_contact_form title="Contact Us"]
```

## Hooks and Filters

The theme provides several hooks for developers:

### Actions
- `vedic_wisdom_header_before`
- `vedic_wisdom_header_after`
- `vedic_wisdom_footer_before`
- `vedic_wisdom_footer_after`

### Filters
- `vedic_wisdom_excerpt_length`
- `vedic_wisdom_excerpt_more`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance

The theme is optimized for performance:

- Minified CSS and JavaScript
- Optimized images
- Lazy loading support
- Efficient database queries
- Caching-friendly structure

## Accessibility

The theme follows WCAG 2.1 guidelines:

- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## SEO Features

- Semantic HTML5 structure
- Schema.org markup
- Optimized meta tags
- Clean URL structure
- Fast loading times

## Support

For support and documentation:

- Theme documentation: [Link to documentation]
- Support forum: [Link to support]
- Email: support@vedicwisdomtheme.com

## Changelog

### Version 1.0.0
- Initial release
- Responsive design
- Custom post types
- Customizer integration
- Contact form functionality

## License

This theme is licensed under the GPL v2 or later.

## Credits

- Font Awesome icons
- Google Fonts (Inter, Crimson Text)
- Unsplash for demo images
- WordPress community for inspiration

---

**Note**: This theme is specifically designed for educational institutions. For commercial use or extensive modifications, please contact the theme author.