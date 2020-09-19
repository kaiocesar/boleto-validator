const app = require('./index');
const PORT = 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`🚀 Flying on port ${PORT} 🚀`)
});
