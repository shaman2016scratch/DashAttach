import JSZip from "jszip"

const generateZip = () => {
    return new JSZip()
}

const loadZipFromURL = async (zip, url) => {
    const archive = zip || new JSZip()
    const req = await fetch(url)
    const zipAR = await req.arrayBuffer()
    const zipBuffer = Buffer.from(zipAR)
    const zipBase64 = zipBuffer.toString("base64")
    archive.loadAsync(zipBase64, { base64: true })
    return archive
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

const getFileInZipAsString = async (zip, file) => {
    const file2 = zip.file(file)
    const stringFromFile = await file2.async("string")
    return stringFromFile
}

const setFileInZip = (zip, file, value, options) => {
    if (options) zip.file(file, value, options)
    if (!options) zip.file(file, value)
    return zip
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