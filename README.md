# 🎨 HobbyHub - Connect Through Hobbies

**HobbyHub** is a full-stack hobby group platform where users can explore, join, and create local hobby-based communities — like book clubs, hiking groups, painting circles, and more. It helps people connect through shared interests and build real-life communities.

---

## 🌐 Live Website

🔗 [Visit HobbyHub](https://hobbyhub-authentication.web.app/)

---

## 📸 Preview

![Banner Preview](https://your-banner-image-link.com)

---

## ✨ Key Features

- 🔐 **Authentication**
  - Email/password login & registration
  - Google login (optional)
  - Protected/private routes
  - Form validation with feedback
  - Toast & SweetAlert notifications

- 🏠 **Homepage**
  - Responsive banner/slider with 3+ slides
  - Featured Groups section (6 ongoing groups)
  - 2 additional static sections
  - Dark/Light theme toggle

- 📋 **All Groups Page**
  - Browse all groups in card or table format
  - “See More” → go to full group details

- 🧑‍🎨 **Create Group Page** (Private)
  - Fields: Group Name, Hobby Category (dropdown), Description, Location, Max Members, Start Date, Image URL
  - Auto-filled User Name & Email (read-only)
  - Submit → saves to database + success toast

- 📄 **Group Details Page** (Private)
  - Shows all group info
  - “Join Group” button (disabled if date passed)

- 👤 **My Groups Page** (Private)
  - Shows groups created by the logged-in user
  - “Update” (modal or page) and “Delete” buttons
  - Confirmation before deleting

- 🔁 **Update Group Page** (Private)
  - Same form as Create
  - Name/Email read-only
  - Shows toast after successful update

- 🚫 404 Not Found Page
- 🔄 Loading Spinners
- 🌗 Dark/Light Mode Toggle

---

## 🧰 Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Firebase Auth
- Tailwind CSS
- Axios, TanStack Query
- SweetAlert2, React Hot Toast
- Lottie React
- React Simple Typewriter
- React Awesome Reveal
- React Tooltip

**Backend:**
- Node.js + Express
- MongoDB (Native Driver)
- JWT Authentication
- CORS, dotenv

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/hobbyhub.git
cd hobbyhub

# Install frontend
cd client
npm install

# Start frontend
npm run dev

# Install backend
cd ../server
npm install

# Start backend
npm run dev

📃 License
Licensed under the MIT License

🙌 Thanks to
Firebase

MongoDB

React Awesome Reveal

LottieFiles

Tailwind CSS

React Community Libraries

“Built to connect people through passion.” ❤️



---

Let me know if you'd like me to **replace placeholders with your real links** (GitHub repo, portfolio, images, deployment link), or if you'd like to include GitHub shields (like live, license, stack badges) at the top.

