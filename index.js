const vision = require("@google-cloud/vision")

/*
*
* @param {object} [GCKeyFile] - The Google Cloud API configuration object.
* @param {string} [projectId] - Google Cloud project ID.
* @param {string} [image] - Image URL
*
*/

const notHotDog = async (GCKeyFile, projectId, image) => {
  const labelList = []
  const client = new vision.ImageAnnotatorClient({
    keyFilename: GCKeyFile,
    projectId: projectId
  })

  // Label detection with Vision API
  const [result] = await client.labelDetection(image)
  const labels = result.labelAnnotations
  labels.forEach(label => {
    // Store the label list into object and replace spaces to underline
    labelList.push(label.description.replace(/ /g, "_").toLowerCase())
  })

  // Find the hot_dog word and return true/false
  return labelList.includes("hot_dog")
}

module.exports = {
  notHotDog
}
