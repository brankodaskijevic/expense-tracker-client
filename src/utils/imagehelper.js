export async function loadFile (file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      const base64data = reader.result
      resolve(base64data)
    }
    reader.onerror = () => {
      reject()
    }
  })
}