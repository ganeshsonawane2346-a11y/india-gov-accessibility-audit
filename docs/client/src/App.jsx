import { useEffect, useState } from 'react';

export default function App() {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState('Loading services…');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/services')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load services');
        return response.json();
      })
      .then((data) => {
        setServices(data.services);
        setStatus(`${data.services.length} sample services available`);
      })
      .catch(() => setStatus('Services could not be loaded. Please try again later.'));
  }, []);

  const filtered = services.filter((service) =>
    `${service.title} ${service.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <div className="container">
          <p className="eyebrow">Accessibility-first project foundation</p>
          <h1>Public Service Directory</h1>
          <p>A demonstration of a clear, keyboard-friendly public-service interface.</p>
        </div>
      </header>
      <main id="main" className="container">
        <section aria-labelledby="services-heading">
          <h2 id="services-heading">Find a service</h2>
          <label htmlFor="service-search">Search services</label>
          <input
            id="service-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="For example, documents"
          />
          <p className="status" role="status" aria-live="polite">{status}</p>
          <ul className="service-list">
            {filtered.map((service) => (
              <li key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href}>{`Learn about ${service.title}`}</a>
              </li>
            ))}
          </ul>
          {filtered.length === 0 && services.length > 0 && <p>No matching services found.</p>}
        </section>
      </main>
      <footer className="site-footer">
        <div className="container"><p>Independent educational demonstration. Not an official government service.</p></div>
      </footer>
    </>
  );
}
