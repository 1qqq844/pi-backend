const axios = require('axios');
module.exports = async (req, res) => {
  const { paymentId, txid } = req.body;
  try {
    await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/complete`, { txid }, {
      headers: { 'Authorization': `Key ${process.env.PI_API_KEY}` }
    });
    res.status(200).json({ message: "Completed" });
  } catch (e) { res.status(500).json(e.response.data); }
};
