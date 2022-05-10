export const FileUp = async (file) => {
    const urlCloudinary = 'https://api.cloudinary.com/v1_1/dq3f5s2h1/upload'

    const formData = new FormData();
    formData.append('upload_preset', 'Amazonas-clone')
    formData.append('file', file )

    const res = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()

    return data.secure_url
}