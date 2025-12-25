const axios = require('axios');

module.exports = async (req, res) => {
  // 关键：允许跨域的响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理浏览器的预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { paymentId } = req.body;
  try {
    const response = await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {}, {
      headers: { 'Authorization': `Key ${process.env.PI_API_KEY}` }
    });
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json(e.response?.data || e.message);
  }
};
