const fetchAndConvertToBase64 = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return "";
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => reader.result;
}

export default fetchAndConvertToBase64;