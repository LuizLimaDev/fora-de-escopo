import mongoose from "mongoose";

const tpSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    tp: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    cnpj: { type: String, required: true },
    phone: { type: String, required: true },
    services: [
      {
        product: { type: String },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
    config: {
      mobile: { type: Boolean },
      aa: { type: Boolean },
      shopClosed: { type: Boolean },
      numberOfPDV: { type: Number },
      receipt: { type: String },
      printer: { type: String },
      networkPrinter: { type: Boolean },
      pindpad: { type: String },
      equipments: [{ type: String }],
    },
  },
  { versionKey: false }
);

const cases = mongoose.model("tp", tpSchema);

export default cases;
