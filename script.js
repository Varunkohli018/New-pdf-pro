function selectFeature(feature) {
  const container = document.getElementById("featureContainer");

  switch (feature) {
    case "textToPDF":
      container.innerHTML = '<p><strong>Text to PDF</strong>: Upload or write text and export as PDF.</p>';
      break;

    case "imageToPDF":
      container.innerHTML = '<p><strong>Image to PDF</strong>: Upload images and combine into a single PDF.</p>';
      break;

    case "mergePDF":
      container.innerHTML = '<p><strong>Merge PDFs</strong>: Select two or more PDF files and merge them.</p>';
      break;

    case "editPDF":
      container.innerHTML = '<p><strong>Edit PDF</strong>: Add/remove text, rename, or delete PDF pages.</p>';
      break;

    case "createPDF":
      container.innerHTML = '<p><strong>Create PDF</strong>: Design and generate a custom PDF.</p>';
      break;

    default:
      container.innerHTML = '<p>Select a feature to begin.</p>';
  }
}
