import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const services = [
  { id: 'documents', title: 'Document services', description: 'A sample category for certificates and records.', href: '#documents' },
  { id: 'education', title: 'Education services', description: 'A sample category for education-related information.', href: '#education' },
  { id: 'employment', title: 'Employment services', description: 'A sample category for jobs and career information.', href: '#employment' },
];

app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
app.get('/api/services', (_request, response) => response.json({ services }));

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

export { app };
