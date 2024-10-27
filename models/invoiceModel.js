import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const companyInfoSchema = new Schema({
  logo: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const invoiceSchema = new Schema(
  {
    items: [itemSchema],
    discount: {
      type: Number,
      default: 0,
    },
    shipping: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    balanceDue: {
      type: Number,
      default: 0,
    },
    companyInfo: companyInfoSchema,
    terms: {
      type: String,
    },
    footNote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;
