import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [active, setActive] = useState('Dashboard');

  const products = new Array(7).fill({
    title: 'Camera',
    price: '$14',
    category: 'Entertainment',
    image: 'https://icon-library.com/images/black-camera-icon/black-camera-icon-8.jpg',
  });

  return (
    <div className="dashboard">
      
      <aside className="sidebar">
        <h2>entity</h2>
        <nav>
          {['Dashboard', 'Products', 'Purchase', 'Inventory', 'Settings'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActive(item)}
              className={active === item ? 'active' : ''}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="logout"> Logout</button>
      </aside>

      
      <main className="main">
        
        <header className="header">
          <h2>Welcome Shijira!</h2>
          <p>View all insights for today</p>
  <div className="user-profile">
  <img
    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
    alt="profile"
    className="profile-icon"
  />
  <span>Shijira</span>
</div>


        </header>

      
        <section className="cards">
          <div className="card"><h3>135</h3><p>Total Products</p></div>
          <div className="card"><h3>13</h3><p>Total Categories</p></div>
          <div className="card"><h3>135</h3><p>Total Products</p></div>
        </section>

    
        <section className="table">
          <h3>Products List</h3>
          <table>
            <thead>
              <tr>
                <th>Image</th><th>Title</th><th>Unit Price</th><th>Category</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i}>
                  <td><img src={p.image} alt="product" height={40} width={40} /></td>
                  <td>{p.title}</td><td>{p.price}</td><td>{p.category}</td><td>🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
