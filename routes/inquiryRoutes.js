const express = require('express');
const router = express.Router();
const { createInquiry, getAllInquiries, delfindById } = require('../controllers/inquiryController');

// Task 1: POST route for form submission
router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.delete('/:id',delfindById)

module.exports = router;