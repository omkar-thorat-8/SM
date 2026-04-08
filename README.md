# 🔐 SM Infotech - Backend API

This is the backend service for the SM Infotech project.
It provides authentication APIs including signup, login, email verification, and password reset.

---

## 🚀 Tech Stack

* Java (Spring Boot)
* Spring Security
* JWT Authentication
* MySQL Database
* Java Mail Sender

---

## 📂 Base URL

```
http://localhost:8080/api/auth
```

---

## 📌 Available APIs

### 1️⃣ Signup

**POST** `/signup`

```json
{
  "name": "Omkar",
  "email": "user@example.com",
  "password": "123456"
}
```

---

### 2️⃣ Login

**POST** `/login`

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

✅ Returns JWT Token

---

### 3️⃣ Verify Email

**GET** `/verify-email?token=YOUR_TOKEN`

---

### 4️⃣ Forgot Password

**POST** `/forgot-password`

```json
{
  "email": "user@example.com"
}
```

---

### 5️⃣ Reset Password

**POST** `/reset-password`

```json
{
  "token": "RESET_TOKEN",
  "newPassword": "new123"
}
```

---

## 🔐 JWT Usage

For protected APIs, send token in header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## ⚙️ Setup Instructions

1. Clone the repository
2. Switch to backend branch:

```
git checkout backend
```

3. Configure database in `application.properties`

4. Run the application:

```
mvn spring-boot:run
```

---

## ⚠️ Notes

* Email verification requires Gmail SMTP configuration
* Use App Password instead of Gmail password
* Do not expose sensitive credentials in code

---

## 👨‍💻 Developer

Omkar Thorat
