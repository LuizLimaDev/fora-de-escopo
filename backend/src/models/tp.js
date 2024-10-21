import mongoose from "mongoose";

const tpSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    tp: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    company: {
      cnpj: { type: String, required: true },
      company: { type: String, required: true },
      companyName: { type: String, required: true },
      adress: { type: String, required: true },
    },
    services: [
      {
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    config: {
      mobile: { type: Boolean, required: true },
      aa: { type: Boolean, required: true },
      shopClosed: { type: Boolean, required: true },
      numberOfPdv: { type: Number, required: true },
      pdvNumber: { type: Number },
      fiscalType: { type: String, required: true },
      satCode: { type: Number },
      fiscalPrinter: { type: String, required: true },
      remotePrinter: { type: Boolean, required: true },
      pindpad: { type: String, required: true },
      extraEquipment: [{ type: String }],
    },
  },
  { versionKey: false }
);

const cases = mongoose.model("tp", tpSchema);

export default cases;
