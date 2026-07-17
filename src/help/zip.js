import JSZip from "jszip"

const generateZip = () => {
    return new JSZip()
}

const loadZipFromURL = (zip, url) => {
    const req = await fetch(url)
    const zipAR = await req.arrayBuffer()
    const zipBuffer = Buffer.from(zipAR)
    const zipBase64 = zipBuffer.toString("base64")
    zip.loadAsync(zipBase64, { base64: true })
    return zip
}

const Zip = {
    generate: generateZip,
    loadFromURL: loadZipFromURL
}

export default Zip
export { generateZip, loadZipFromURL }