const axios = require('axios');
module.exports = async (req, res) => {
  const { paymentId } = req.body;
  try {
    await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {}, {
      headers: { 'Authorization': `Key ${process.env.PI_API_KEY}` }
    });
    res.status(200).json({ message: "Approved" });
  } catch (e) { res.status(500).json(e.response.data); }
};
