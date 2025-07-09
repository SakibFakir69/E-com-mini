# Mini E-Commerce SPA

A full-stack single-page e-commerce application with separate **client** (React/CSS) and **server** (Express/MongoDB) components.

---

## 🔗 Links


* **Live Demo (Vercel): https://minishopecom.netlify.app/

---

## 🚀 Project Overview

This project is divided into two directories:

1. **client/** – React SPA built using Vite
2. **server/** – Node.js API built with Express, MongoDB, following the **MVC** (Model-View-Controller) pattern

Users can browse products, add to cart, adjust quantities, and perform a mock checkout. The server exposes a `GET /products` endpoint to fetch product data.

---

## 📦 Tech Stack

| Component  | Technology                    |
| ---------- | ----------------------------- |
| Client     | React.js (Vite), React Router |
| Styling    | Tailwind CSS, DaisyUI, Swiper |
| Data Fetch | Axios, React Query            |
| Server     | Node.js, Express.js, Mongoose |
| Database   | MongoDB                       |
| Tools      | pnpm, ESLint, Vite            |
| Deployment | Vercel (Client), Render (API) |

---

## 📁 Directory Structure

```bash
E-com-mini/
├─ client/            # React front-end
│  ├─ public/
│  ├─ src/
│  ├─ index.html
│  └─ package.json
│
├─ server/            # Express back-end (MVC structure)
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ server.js
│  ├─ .env.example
│  └─ package.json
└─ README.md          # You are here
```

│  ├─ src/
│  ├─ .env.example
│  └─ package.json
└─ README.md          # You are here

````

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/SakibFakir69/E-com-mini.git
cd E-com-mini
````

