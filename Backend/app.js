const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize MQTT Client
require('./mqtt/mqttClient');

// Device Routes
const deviceRoutes = require('./routes/devices');
app.use('/api/devices', deviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
    origin: 'http://smart-homify.netlify.app', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
