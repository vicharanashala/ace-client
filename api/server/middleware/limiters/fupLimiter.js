const rateLimit = require('express-rate-limit');

const FUP_LIMIT = 30;
const FUP_WINDOW_MS = 24 * 60 * 60 * 1000; // 1 day

const fupLimiter = rateLimit({
  windowMs: FUP_WINDOW_MS,
  limit: FUP_LIMIT,
  legacyHeaders: false,        // ✅ stops X-RateLimit-* headers conflicting with SSE
  standardHeaders: 'draft-7',  // ✅ use modern RateLimit headers instead
  keyGenerator: (req) => req.user?.id || req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  handler: (_req, res) => {
    if (res.headersSent) return; // ✅ guard against double-send
    res.status(429).json({type: 'rate_limit',  message: `You’ve reached your daily query limit of ${FUP_LIMIT} queries. Please wait 24 hours before sending more queries.`}); // ✅ fixed message
  },
  skip: (req) => req.user?.role === 'ADMIN', // ✅ optional: admins bypass the limit
});

module.exports = fupLimiter;