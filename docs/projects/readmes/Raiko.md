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

## Screenshot and module walkthrough

Expand a screen below to see the capture and an explanation of the module, its visible controls, and its role in the application.

<details open>
<summary><strong>01 · Brand story and positioning</strong></summary>

The About page combines a brand headline, supporting statement, illustration, and story text. It explains the label identity alongside the storefront instead of presenting only product listings.

<p><img src="screenshots/about.png" alt="Brand story and positioning" width="960"></p>

</details>

<details>
<summary><strong>02 · Editorial article listing</strong></summary>

Image-led article cards display titles, dates, excerpts, and Continue Reading links. The blog module provides style and brand content that complements the shopping pages.

<p><img src="screenshots/blog.png" alt="Editorial article listing" width="960"></p>

</details>

<details>
<summary><strong>03 · Contact and inquiry form</strong></summary>

An address and phone block sits beside name, email, subject, and message fields. Visitors can compose an inquiry through Send message; the screenshot does not demonstrate successful delivery.

<p><img src="screenshots/contact.png" alt="Contact and inquiry form" width="960"></p>

</details>

<details>
<summary><strong>04 · Storefront landing page</strong></summary>

A campaign photograph, headline, Shop the collection button, and story link introduce the label. The hero offers a direct path to products while keeping brand information accessible.

<p><img src="screenshots/home.png" alt="Storefront landing page" width="960"></p>

</details>

<details>
<summary><strong>05 · Filtered product catalog</strong></summary>

Category, price, and size filters sit beside product cards with names, prices, stock badges, and bag controls. This shopping module helps customers narrow the catalog and inspect available pieces.

<p><img src="screenshots/shop.png" alt="Filtered product catalog" width="960"></p>

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
