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

const getTpById = async (req, res) => {
  try {
    const tpId = req.params.id;

    const foundedTp = await tp.findById(tpId);

    res.status(200).json(foundedTp);
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha ao buscar TP.` });
  }
};

const getTpByTpCNPJ = async (req, res) => {
  try {
    const cnpj = req.params.tpCnpj;
    const foundedTp = await tp.findOne({ "company.cnpj": cnpj });

    console.log("cnpj informado: ", cnpj, "tp encontrada: ", foundedTp);

    res.status(200).json(foundedTp);
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha ao buscar TP.` });
  }
};

const postTp = async (req, res) => {
  try {
    const newTp = req.body;

    if (newTp && newTp.company.cnpj) {
      newTp.company.cnpj = newTp.company.cnpj.replace(/[./-]/g, "");
    }

    await tp.create(newTp);

    res.status(201).json({ message: "Criada com sucesso", tp: newTp });
  } catch (error) {
    res
      .status(500)
      .json({ message: `${error.message} - falha ao cadastrar TP.` });
  }
};

const deleteTp = async (req, res) => {
  try {
    const tpId = req.params.tpId;
    const foundedTP = await tp.findOne({ _id: tpId });

    const id = foundedTP._id;
    await tp.findByIdAndDelete(id);

    res.status(200).json({ message: "TP deletada com sucesso", tp: foundedTP });
  } catch (error) {
    res.status(500).json({ message: `${error.message} - falha na exclusão.` });
  }
};

export { deleteTp, getAllTp, getTpById, getTpByTpCNPJ, postTp };
