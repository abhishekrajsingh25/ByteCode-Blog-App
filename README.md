# 📝 BlogApp

A modern full-stack blogging platform built with **Next.js**, **Prisma**, **NeonDB (PostgreSQL)**, **Cloudinary**, and **Clerk** for authentication. Users can sign up, create, edit, and delete blog posts with image uploads.

## 🚀 Features

- ✨ Next.js 14 (App Router)
- 🗃️ Prisma ORM with NeonDB (PostgreSQL)
- 📸 Image upload & hosting via Cloudinary
- 🔐 Authentication & User Management via Clerk
- 📝 Rich text blog creation/editing
- 🔎 SEO-friendly routing and pages
- 💻 Fully typed with TypeScript
- 🌐 Responsive and mobile-friendly UI

---

## 📦 Tech Stack

| Technology   | Purpose                      |
|--------------|------------------------------|
| Next.js      | Frontend + Backend Framework |
| Prisma       | ORM for PostgreSQL           |
| NeonDB       | Serverless PostgreSQL DB     |
| Cloudinary   | Image Hosting & CDN          |
| Clerk        | Authentication/AuthZ         |
| Tailwind CSS | Styling                      |

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekrajsingh25/ByteCode-Blog-App.git
cd ByteCode-Blog-App
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database (NeonDB)
DATABASE_URL="postgresql://<username>:<password>@<host>/<db>?sslmode=require"

# Clerk (Auth)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Set Up Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

## 🧪 Run the App Locally

```bash
npm run dev
```

---

## 🗃️ Folder Structure (Simplified)

```
/app            - App Router structure
/components     - Reusable components
/lib            - Utility functions
/actions        - Server actions
/prisma         - Prisma schema & client
/public         - Static assets
```

---

## ☁️ Deployment

You can deploy this app easily on:

* **Vercel** for frontend and serverless backend.
* **NeonDB** as your hosted Postgres database.
* **Clerk** for secure and scalable authentication.
* **Cloudinary** for image hosting.

---

## 👤 Authentication (Clerk)

* Sign in / Sign up pages powered by Clerk.
* Protect routes using Clerk’s middleware or server-side auth helpers.
* Access user data via `useUser()` or server-side via `auth()`.

---

## 🖼️ Image Upload (Cloudinary)

* Blog images are uploaded to Cloudinary via API routes.
* Cloudinary SDK handles secure upload signatures.
* Uploaded image URLs are stored in the database.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

---

Feel free to contribute, suggest features, or open issues.

---

Thank you for visiting. I hope you find my work interesting and valuable! To see the Website. 
- For Frontend, Click <a href="https://bytecode-blogapp-abhishekrajsingh.vercel.app/" >Here</a>.
