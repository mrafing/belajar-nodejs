const mongoose = require('mongoose');
const Manifest = mongoose.model('Manifest', {
  senderName: {
    type: String,
    required: true,
  },
  senderPhone: {
    type: String,
    required: true,
  },
  senderAddress: {
    type: String,
    required: true,
  },
  recipientName: {
    type: String,
    required: true,
  },
  recipientPhone: {
    type: String,
    required: true,
  },
  recipientAddress: {
    type: String,
    required: true,
  },
});

module.exports = Manifest;
