import app from './src/server';

const SERVER_PORT = process.env.SERVER_PORT || 8080;

app.listen(SERVER_PORT, () => {
    console.log('Server started');
});