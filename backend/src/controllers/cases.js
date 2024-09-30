import tp from "../models/tp.js";

const getAllTp = async (req, res) => {
  try {
    const tps = await tp.find({});

    res.status(200).json(tps);
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error.message} - falha ao buscar as TPs.` });
  }
};

const getTpByTpNumber = async (req, res) => {
  try {
    const tpNumber = req.params.tpNumber;
    const foundedTp = await tp.findOne({ tp: tpNumber });

    res.status(200).json(foundedTp);
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha ao buscar TP.` });
  }
};

const getTpByTpCNPJ = async (req, res) => {
  try {
    const cnpj = req.params.tpCnpj;
    const foundedTp = await tp.findOne({ cnpj: cnpj });

    res.status(200).json(foundedTp);
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha ao buscar TP.` });
  }
};

const postTp = async (req, res) => {
  try {
    const newTp = await tp.create(req.body);
    res.status(201).json({ message: "Criada com sucesso", tp: newTp });
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error.message} - falha ao cadastrar TP.` });
  }
};

const deleteTp = async (req, res) => {
  try {
    const tpNumber = req.params.tpNumber;
    const foundedTP = await tp.findOne({ tp: tpNumber });

    const id = foundedTP._id;
    await tp.findByIdAndDelete(id);

    res.status(200).json({ message: "TP deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha na exclusão.` });
  }
};

export { deleteTp, getAllTp, getTpByTpCNPJ, getTpByTpNumber, postTp };
