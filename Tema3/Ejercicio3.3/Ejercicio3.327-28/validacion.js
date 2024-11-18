document.addEventListener('DOMContentLoaded', function () {
    /* Ejercicio 27 */
    const form = document.getElementById('basicForm');
    const fileInput = document.getElementById('basicFileInput');
    const errorDiv = document.getElementById('basicError');
    const successDiv = document.getElementById('basicSuccess');
    const imagePreview = document.getElementById('imagePreview');
    const maxFileSize = 1 * 1024 * 1024; // 1MB

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        errorDiv.textContent = '';
        successDiv.textContent = '';
        imagePreview.src = '';

        const file = fileInput.files[0];
        if (!file) {
            errorDiv.textContent = 'No se ha seleccionado ningún archivo';
            return;
        }

        if (!file.type.startsWith('image/')) {
            errorDiv.textContent = 'El archivo no es una imagen';
            return;
        }

        if (file.size > maxFileSize) {
            errorDiv.textContent = 'El archivo supera el tamaño máximo de 1MB';
            return;
        }

        //Mostrar vista previa de la imagen
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);

        successDiv.textContent = 'El archivo es válido y se ha enviado con éxito';
    });

    /* Ejercicio 28 */
    const dropZone = document.getElementById('dropZone');
    const advancedFileInput = document.getElementById('advancedFileInput');
    const fileList = document.getElementById('fileList');
    const advancedErrorDiv = document.getElementById('advancedError');
    const advancedSuccessDiv = document.getElementById('advancedSuccess');
    const uploadProgress = document.getElementById('uploadProgress');
    const maxAdvancedFileSize = 5 * 1024 * 1024; // 5MB
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropZone.classList.add('dragging');
    });

    dropZone.addEventListener('dragleave', function (e) {
        dropZone.classList.remove('dragging');
    });

    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropZone.classList.remove('dragging');
        handleFiles(e.dataTransfer.files);
    });

    dropZone.addEventListener('click', function () {
        advancedFileInput.click();
    });

    advancedFileInput.addEventListener('change', function () {
        handleFiles(advancedFileInput.files);
    });

    function handleFiles(files) {
        advancedErrorDiv.textContent = '';
        advancedSuccessDiv.textContent = '';
        fileList.innerHTML = '';
        uploadProgress.style.display = 'none';

        let validFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileDiv = document.createElement('div');
            fileDiv.classList.add('file-info');
            fileDiv.textContent = `Nombre: ${file.name}, Tamaño: ${formatBytes(file.size)}, Tipo: ${file.type}`;

            if (!allowedFileTypes.includes(file.type)) {
                const error = document.createElement('div');
                error.classList.add('error');
                error.textContent = 'Tipo de archivo no permitido';
                fileDiv.appendChild(error);
            } else if (file.size > maxAdvancedFileSize) {
                const error = document.createElement('div');
                error.classList.add('error');
                error.textContent = 'El archivo supera el tamaño máximo de 5MB';
                fileDiv.appendChild(error);
            } else {
                validFiles.push(file);
            }

            fileList.appendChild(fileDiv);
        }

        if (validFiles.length > 0) {
            uploadFiles(validFiles);
        }
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
    }
})