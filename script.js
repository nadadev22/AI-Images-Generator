document.getElementById('generateBtn').addEventListener('click', async () => {
    const description = document.getElementById('description').value;

    if (description.trim() === "") {
        alert("Please enter a description!");
        return;
    }

    try {
        const apiKey = '-0WMxDEn22bEs3ELvELxDInC-rA_WrgTudaE-VcRUHU'; // استبدليها بمفتاح API الخاص بك
        const apiUrl = `https://api.unsplash.com/photos/random?query=${description}&client_id=${apiKey}&count=3`; // جلب 3 صور فقط
        const response = await fetch(apiUrl);
        const data = await response.json();

        const imagesContainer = document.querySelector('.images');
        imagesContainer.innerHTML = ''; // مسح الصور القديمة

        data.forEach(photo => {
            const imgDiv = document.createElement('div');
            const imgElement = document.createElement('img');
            imgElement.src = photo.urls.regular; // استخدمي الرابط المناسب للصورة
            imgDiv.appendChild(imgElement);
            imagesContainer.appendChild(imgDiv); // إضافة الصورة إلى الحاوية
        });

    } catch (error) {
        console.error("Error generating image:", error);
        alert("Failed to generate images.");
    }
});
