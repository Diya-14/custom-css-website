import React from 'react';
import '../styles/Features.css';  // Import the CSS file for styling

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <h1>Why Choose Beauty Bliss?</h1>
      <ul className="features-list">
        <li className="feature-item">
          <h2>High-Quality Ingredients</h2>
          <img src="https://edit.sundayriley.com/wp-content/uploads/2022/05/skincare-ingredients-the-sunday-edit.jpg" alt="High-Quality Ingredients" />
        </li>
        <li className="feature-item">
          <h2>Long-lasting Wear</h2>
          <img src="https://www.theeyelineredit.com/wp-content/uploads/2018/01/Long-lasting-makeup-featured.jpg" alt="Long-lasting Wear" />
        </li>
        <li className="feature-item">
          <h2>Cruelty-Free Products</h2>
          <img src="https://stylebyemilyhenderson.com/wp-content/uploads/2019/05/Emily-Henderson_Cruelty-Free-Makeup-Skincare_Opener.jpg" alt="Cruelty-Free Products" />
        </li>
        <li className="feature-item">
          <h2>Vibrant, Rich Pigments</h2>
          <img src="https://th.bing.com/th/id/OIP._CaPs5ap3rYNfy2hVUWklAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Vibrant, Rich Pigments" />
        </li>
      </ul>
    </div>
  );
};

export default Features;
