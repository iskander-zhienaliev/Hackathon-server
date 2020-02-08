import app from './src/server';

const SERVER_PORT = process.env.SERVER_PORT || 9990;

app.listen(SERVER_PORT, () => {
    console.log('Server started');
});
