import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListening = () => {
    console.info(`✅ Server listening on: http://localhost:${PORT}/`);
};

app.listen(PORT, handleListening);
