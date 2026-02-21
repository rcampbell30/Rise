const products = [
  { name: 'Rise Slate Walker', image: '/product-slate.jpg', description: 'Elegant frame with ergonomic support.' },
  { name: 'Rise Sage Walker', image: '/product-sage.jpg', description: 'Lightweight mobility with premium finish.' },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <img src="/product-hero.png" alt="Rise mobility" className="hero-image" />
        <div>
          <p className="eyebrow">Rise</p>
          <h1>Independence Without Compromise</h1>
          <p className="subtitle">
            Discover mobility products designed for confidence, comfort, and style.
          </p>
        </div>
      </header>

      <main>
        <section>
          <h2>Featured products</h2>
          <div className="grid">
            {products.map((product) => (
              <article key={product.name} className="card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>From our blog</h2>
          <div className="grid">
            <img src="/blog-1.jpg" alt="Lifestyle story" className="blog-image" />
            <img src="/blog-2.jpg" alt="Product story" className="blog-image" />
          </div>
        </section>
      </main>
    </div>
  );
}
