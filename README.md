# Product List Template

## Description
This project is a product listing web application built with React.js and Material-UI. The application fetches product data from a PHP backend API and allows users to view, sort, and add products to a shopping basket. The sorting functionality enables users to sort products by price, review score, name, and savings.

---

## Features

- **Product Listing:** Displays a grid of product cards, each showing the product name, price, reviews, and an optional "was" price.
- **Sorting Options:** Sort products by price, review score, name, or savings.
- **Add to Basket:** Allows users to add products to a shopping basket.
- **Responsive Design:** Ensures optimal usability across devices.

---

## Technology Stack

### Frontend
- **React.js**
- **Material-UI (MUI)**

### Backend
- **PHP** (for the API to serve product data)

---

## Installation

### Prerequisites
- Node.js
- PHP (to serve the backend API)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React development server:
   ```bash
   npm start
   ```
5. Serve the backend API:
   - Move to the backend directory if applicable.
   - Start your PHP server, e.g.:
     ```bash
     php -S localhost:8000
     ```

---

## API
The PHP backend serves product data through the endpoint:
- `GET /api/products.php`

Example response:
```json
{
  "product_arr": [
    {
      "name": "Product Name",
      "price": 100,
      "reviews": 85,
      "was_price": 120,
      "img": "image_name"
    }
  ]
}
```

---

## Project Structure
```
project-root
├── src
│   ├── components
│   │   ├── ProductList.jsx
│   │   ├── Basket.jsx
│   ├── hooks
│   │   ├── useProducts.js
│   │   ├── useBasket.js
│   ├── utils
│   │   ├── basketUtils.js
│   │   ├── filterUtils.js
│   ├── App.js
│   ├── app.css
│   └── index.js
├── public
│   └── img
├── api
│   └── products.php
└── README.md
```

---

## Usage

1. Access the app in your browser at `http://localhost:3000/`.
2. View the product list and use the sorting options to arrange products.
3. Add desired products to the basket using the "Add to Basket" button.

---

## Future Enhancements
- Integrate with a database for persistent product storage.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
