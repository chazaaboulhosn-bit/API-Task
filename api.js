const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

app.post("/pdf-to-text", async (req, res) => {
   const pdfParse = require("pdf-parse");

app.post("/pdf-to-text", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({
        ok: false,
        error: "No file uploaded",
      });
    }

    const file = req.files.file;

    if (file.mimetype !== "application/pdf") {
      return res.status(415).json({
        ok: false,
        error: "Only PDF files are allowed",
      });
    }

    const pdfBuffer = file.data;

    const result = await pdfParse(pdfBuffer);

    return res.status(200).json({
      ok: true,
      text: result.text,
    });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Server error",
    });
  }
});
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

