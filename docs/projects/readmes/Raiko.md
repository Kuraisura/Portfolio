# Raiko

A streetwear storefront with product filters, a persistent shopping cart, and a multi-page brand experience.

**Web showcase** · **Design Showcase** · 2024

[Portfolio](https://kuraisler.xyz) · [Website demo](https://raiko-three.vercel.app/)

## Purpose

Raiko gives a small clothing label a branded storefront for product discovery and shopping. Its live front end connects a landing page, filtered catalog, product pages, cart, checkout form, editorial content, and contact pages in one visual system.

## Intended users

Streetwear shoppers browsing a small label and small brands looking for a visual storefront concept.

## Main capabilities

- Browse products and filter by category, price, and size.
- Choose items and keep a shopping cart in browser storage.
- Review the cart and enter checkout details.
- Explore brand stories, editorial pages, and contact information.

## How it was built

### Static multi-page interface

The deployed website serves HTML pages with a shared CSS stylesheet and JavaScript file. It does not depend on a client-side React application.

### Browser interactions

JavaScript handles product filters, responsive navigation, and cart state. The cart is serialized to localStorage so it survives page changes.

### Form integration

Checkout, contact, and newsletter forms call API routes from the front end. Their server implementations are not included in the linked public showcase repository.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Verified live front end | HTML, CSS, JavaScript |
| Browser storage | localStorage |
| Showcase hosting | Vercel |

## Project scope and current state

The live storefront front end was inspected directly. The linked public repository contains screenshots and documentation, so server-side order processing, payments, and form delivery cannot be verified from its source.

## Repository contents

This repository currently contains documentation and screenshots. Application source and a reproducible build are not included. Technology details are limited to what the project documentation supports.

## Screenshots

<table>
<tr>
<td align="center"><img src="screenshots/home.png" alt="First impression" width="440"><br>First impression</td>
<td align="center"><img src="screenshots/shop.png" alt="Product discovery" width="440"><br>Product discovery</td>
</tr>
</table>

<details>
<summary>View all 5 screenshots</summary>

### 1. First impression

![First impression](screenshots/home.png)

### 2. Product discovery

![Product discovery](screenshots/shop.png)

### 3. Brand storytelling

![Brand storytelling](screenshots/about.png)

### 4. Content marketing

![Content marketing](screenshots/blog.png)

### 5. Customer support channel

![Customer support channel](screenshots/contact.png)

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
