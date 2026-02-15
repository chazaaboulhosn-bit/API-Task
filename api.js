const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

app.post("/pdf-to-text", async (req, res) => {
    // conversion logic

    // step 1: handle the file upload from res.files.file, ensure it is in PDF format
    // step 2: store it in a variable
    // step 3: send it back to the frontend as json data
    // step 4: handle failure with the correct code
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
