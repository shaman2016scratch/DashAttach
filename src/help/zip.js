import JSZip from "jszip"

const generateZip = () => {
    return new JSZip()
}

const loadZipFromURL = async (zip, url) => {
    const req = await fetch(url)
    const zipAR = await req.arrayBuffer()
    const zipBuffer = Buffer.from(zipAR)
    const zipBase64 = zipBuffer.toString("base64")
    zip.loadAsync(zipBase64, { base64: true })
    return zip
}

const loadZipFromBase64 = (zip, base64) => {
    zip.loadAsync(base64, { base64: true })
    return zip
}

const loadZipFromBuffer = (zip, zipBuffer) => {
    const zipBase64 = zipBuffer.toString("base64")
    zip.loadAsync(zipBase64, { base64: true })
    return zip
}

const getFileInZip = (zip, file) => {
    return zip.file(file)
}

const getFileInZipAsString = (zip, file) => {
    return zip.file(file).async("string")
}

const setFileInZip = (zip, file, value, options) => {
    if (options) zip.file(file, value, options)
    if (!options) zip.file(file, value)
}

const Zip = {
    generate: generateZip,
    loadFromURL: loadZipFromURL,
    loadFromBase64: loadZipFromBase64,
    loadFromBuffer: loadZipFromBuffer,
    getFile: getFileInZip,
    getFileAsString: getFileInZipAsString,
    setFile: setFileInZip
}

export default Zip
export { generateZip, loadZipFromURL, loadZipFromBase64, loadZipFromBuffer, getFileInZip, getFileInZipAsString, setFileInZip }