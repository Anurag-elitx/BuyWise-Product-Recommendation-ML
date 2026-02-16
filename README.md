# BuyWise - Intelligent Product Recommendation Platform

BuyWise is a modern e-commerce platform that combines a **Neo-Organic UI** design with an intelligent product recommendation engine. Built on the **MERN Stack** (MongoDB, Express, React, Node.js) and integrated with a **Flask-based Machine Learning** service, BuyWise delivers a premium shopping experience.

## ✨ Features

- **Neo-Organic Design:** A unique aesthetic featuring soft shadows, glassmorphism, and organic shapes with a "Warm Oatmeal & Forest Green" palette.
- **Smart Recommendations:** Machine learning algorithms suggest products based on user behavior and preferences.
- **Interactive UI:** Smooth animations, floating navigation, and magnetic hover effects.
- **Secure Authentication:** User signup and login functionality.
- **Dynamic Cart:** Real-time cart management with local storage persistence.

## 🛠️ Tech Stack

- **Frontend:** React.js, Context API, CSS3 (Variables, Animations)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ML Engine:** Python, Flask (for recommendations)
- **Deployment:** Vercel (Frontend), Heroku/Render (Backend)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (Running locally or Atlas URI)
- Python (v3.8+)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Anurag-elitx/BuyWise-Product-Recommendation-ML.git
    cd BuyWise-Product-Recommendation-ML
    ```

2.  **Install Frontend Dependencies**
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Install Backend Dependencies**
    ```bash
    cd backend
    npm install
    ```

4.  **Setup Machine Learning Engine**
    ```bash
    # Inside /backend directory
    # Create virtual environment (optional but recommended)
    python -m venv env
    .\env\Scripts\activate  # Windows
    # source env/bin/activate # Mac/Linux

    # Install Python dependencies
    pip install flask flask-cors pandas numpy scikit-learn
    ```

5.  **Environment Variables**
    Create a `.env` file in the `backend` directory with:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

To start both Frontend and Node.js Backend concurrently:
```bash
npm run dev
```
*Note: Ensure the Flask server is running separately if required for recommendations.*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License.
