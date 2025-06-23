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
git clone https://github.com/your-username/blogapp.git
cd blogapp
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database (NeonDB)
DATABASE_URL="postgresql://<username>:<password>@<host>/<db>?sslmode=require"

# Clerk (Auth)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
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

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Folder Structure (Simplified)

```
/app            - App Router structure
/components     - Reusable components
/lib            - Utility functions
/prisma         - Prisma schema & client
/public         - Static assets
/styles         - Global styles
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

## 🧩 To-Do / Coming Soon

* 🔍 Search & Tag-based filtering
* 💬 Comments & likes system
* 📊 Admin dashboard & analytics
* 🧾 Markdown or rich text editor integration

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 🙌 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Prisma](https://www.prisma.io/)
* [NeonDB](https://neon.tech/)
* [Clerk](https://clerk.dev/)
* [Cloudinary](https://cloudinary.com/)

```

---

Let me know if you’d like a sample `.env`, schema, or deployment guide added!
