# Cypress SUHU - E2E Testing Project

Project testing automation menggunakan Cypress untuk UI testing (SauceDemo) dan API testing (ReqRes Collections).

## Prerequisites

- Node.js (v12 atau lebih tinggi)
- pnpm (atau npm)

## Installation

1. Clone atau download project

```bash
cd cypress-suhu
```

2. Install dependencies

```bash
pnpm install
```

## Project Structure

```
cypress-suhu/
├── cypress/
│   ├── e2e/
│   │   ├── spec.cy.js          # UI Tests
│   │   └── api-test.cy.js      # API Tests
│   ├── fixtures/
│   ├── support/
├── .github/workflows/
│   └── cypress-tests.yml       # GitHub Actions Schedule
├── cypress.config.js
├── package.json
└── README.md
```

## Test Files

**UI Tests (spec.cy.js)**
- Login dengan credentials valid
- Login gagal dengan username salah
- Login gagal dengan password kosong
- Add produk ke cart
- Checkout flow complete

Target: https://saucedemo.com/

**API Tests (api-test.cy.js)**
- GET - Ambil data products dari ReqRes
- POST - Create product

Target: https://reqres.in/api/collections/products

## Cara Menjalankan

Interactive mode (dengan UI):
```bash
pnpm cypress open
```

Headless mode (tanpa GUI):
```bash
pnpm cypress run
```

Run specific test file:
```bash
pnpm cypress run --spec "cypress/e2e/spec.cy.js"
pnpm cypress run --spec "cypress/e2e/api-test.cy.js"
```

Run di browser tertentu:
```bash
pnpm cypress run --browser chrome
pnpm cypress run --browser firefox
```

## Configuration

cypress.config.js:
- viewportWidth: 1280
- viewportHeight: 720
- browser: chrome

## API Configuration

ReqRes API Headers:
- x-api-key: pro_80663275fe305291cc4dfd33695b4e033854f51b5c901fe973ab38755847b8a0
- X-Reqres-Env: prod
- project_id: 31997

## GitHub Actions

Automatic tests run setiap hari jam 9.30 pagi Indonesia.

File: .github/workflows/cypress-tests.yml

Ubah schedule:
- Menit: 0-59
- Jam: 0-23 (UTC)
- Format: minute hour day_of_month month day_of_week
- Contoh jam 9 pagi Indo: 0 2 * * *

## Troubleshooting

Error: "pnpm: command not found"
```bash
npm install -g pnpm
pnpm install
```

Error: "401 Unauthorized"
Pastikan API key di api-test.cy.js sudah benar.

Error: Browser tidak membuka
Jalankan dengan: pnpm cypress run

## Documentation

- Cypress Docs: https://docs.cypress.io/
- ReqRes API: https://reqres.in/
- SauceDemo: https://saucedemo.com/

---

Cypress Version: 15.17.0

