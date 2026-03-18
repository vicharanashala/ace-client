const rateLimit = require('express-rate-limit');

const FUP_LIMIT = 2;
const FUP_WINDOW_MS = 24 * 60 * 60 * 1000; // 1 day

// ✅ Generate all restricted emails from dummyuser1 to dummyuser1000
const RESTRICTED_EMAILS = new Set(
  Array.from({ length: 1005 }, (_, i) => `dummyuser${i + 1}@gmail.com`)
);

const fupLimiter = rateLimit({
  windowMs: FUP_WINDOW_MS,
  limit: FUP_LIMIT,
  legacyHeaders: false,
  standardHeaders: 'draft-7',

  keyGenerator: (req) =>
    req.user?.email || req.user?.id || req.headers['x-forwarded-for'] || req.socket.remoteAddress,

  // ✅ only apply limit to dummyuser1 through dummyuser1000
  skip: (req) => {
    const email = req.user?.email;
    const role = req.user?.role;
    
    // ✅ add these logs
    console.log('[fupLimiter] user email:', email);
    console.log('[fupLimiter] user role:', role);
    console.log('[fupLimiter] email in set:', RESTRICTED_EMAILS.has(email));
  
   // if (role === 'ADMIN') return true;
    if (RESTRICTED_EMAILS.has(email)) return false;
    return true;
  },

  handler: (_req, res) => {
    if (res.headersSent) return;
    res.status(429).json({
      type: 'rate_limit',
      text: JSON.stringify({
        type: 'rate_limit',
        message: `You've reached your daily query limit of ${FUP_LIMIT} queries. Please wait 24 hours before sending more queries.`,
      }),
      message: `You've reached your daily query limit of ${FUP_LIMIT} queries. Please wait 24 hours before sending more queries.`,
    });
  },
});

module.exports = fupLimiter;