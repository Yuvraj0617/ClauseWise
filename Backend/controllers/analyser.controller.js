
import pdf from "pdf-parse-new";
import analyzeLegalDocument from "../services/aiModel.service.js";
import preprocessLegalText from "../services/parser.service.js";

const analyserController = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }


    const data = await pdf(file.buffer);

    const cleanedText = preprocessLegalText(data.text);
   


    const analysisResult = await analyzeLegalDocument(cleanedText);
 

    res.json({
      success: true,
      data: analysisResult,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to process PDF",
    });
  }
};

export default analyserController;