const videoInput = document.getElementById('video-input');
const videoPreview = document.getElementById('video-preview');
const previewContainer = document.getElementById('video-preview-container');
const generateBtn = document.getElementById('generate-btn');
const loading = document.getElementById('loading');
const resultBox = document.getElementById('result-box');
const outputText = document.getElementById('output-text');

videoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        videoPreview.src = url;
        previewContainer.classList.remove('hidden');
        resultBox.classList.add('hidden');
    }
});

generateBtn.addEventListener('click', async () => {
    loading.classList.remove('hidden');
    generateBtn.disabled = true;
    resultBox.classList.add('hidden');

    try {
        setTimeout(() => {
            loading.classList.add('hidden');
            generateBtn.disabled = false;
            resultBox.classList.remove('hidden');
            outputText.innerHTML = "<p><strong>Option 1:</strong> Exploring new vibes! ✨ #Trending #AI</p><p><strong>Option 2:</strong> Content creation mode ON 🎬</p>";
        }, 3000);
    } catch (error) {
        alert("Error occurred!");
        loading.classList.add('hidden');
        generateBtn.disabled = false;
    }
});

