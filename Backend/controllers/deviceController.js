const mqttClient = require('../mqtt/mqttClient');

exports.toggleDevice = (req, res) => {
    const { device, action } = req.body;
    const topic = `homify/${device}/set`;
    mqttClient.publish(topic, action, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to send command' });
        }
        res.status(200).json({ success: true, message: `Command sent to ${device}` });
    });
};
