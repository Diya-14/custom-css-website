import React from 'react';

const Product: React.FC = () => {
  return (
    <div className="product">
      <h1>Our Featured Makeup Collection</h1>
      <p>Explore our wide range of makeup products, from vibrant lipsticks to radiant  foundations.</p> 
      <ul>
        <li>
        <h2>Luxury Lipsticks</h2>
          <img src="https://i.pinimg.com/originals/3a/ed/e5/3aede5c1a4a79de934e2a2672ae29fbf.jpg" alt="Luxury Lipsticks" style={{ width: '300px', borderRadius: '30px' }} />      
        </li>
        <li>
        <h2>Flawless Foundations</h2>
          <img src="https://2.bp.blogspot.com/-Ih7pJQnF-HQ/W5691dBWXYI/AAAAAAAAH1c/1DbvrurzKps5GYIz6-JT8RMB779IiSIfQCLcBGAs/s1600/charlotte-tilbury-complexion-guide.jpg" alt="Flawless Foundations" style={{ width: '400px', borderRadius: '20px' }} />
        </li>
        <li>
        <h2>Shimmering Eyeshadows</h2>
          <img src="https://m.media-amazon.com/images/I/715ZUL-xNCL._SL1500_.jpg" alt="Shimmering Eyeshadows" style={{ width: '270px', borderRadius: '25px' }} />
        </li>
        <li>
        <h2>Long-lasting Mascaras</h2>
          <img src="https://www.eyemakeuplab.com/wp-content/uploads/2022/06/Untitled-design-1.png" alt="Long-lasting Mascaras" style={{ width: '360px', borderRadius: '30px' }} />
        </li>
      </ul>
    </div>
  );
};

export default Product;