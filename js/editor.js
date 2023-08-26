document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fileUploadForm");
    const metadataContainer = document.getElementById("metadataContainer");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const input = document.querySelector('input[type="file"]');
        const file = input.files[0];

        const reader = new FileReader();

        reader.onload = async (event) => {
            const fileContent = event.target.result;

            try {
                const book = ePub(fileContent);

                await book.ready;

                const metadata = book.package.metadata;

                // Clear previous metadata content
                metadataContainer.innerHTML = "";

                // Create HTML elements to display metadata
                const titleInput = createInput(metadata.title);
                const authorInput = createInput(metadata.creator);
                const descriptionInput = createInput(metadata.description);
                const publisherInput = createInput(metadata.publisher);
                const publicationDateInput = createInput(metadata.date);

                metadataContainer.appendChild(titleInput);
                metadataContainer.appendChild(authorInput);
                metadataContainer.appendChild(descriptionInput);
                metadataContainer.appendChild(publisherInput);
                metadataContainer.appendChild(publicationDateInput);

                // Close the book
                book.destroy();
                form.reset();
            } catch (error) {
                console.error("Error:", error);
            }
        };

        reader.readAsArrayBuffer(file);
    });
});

function createInput(value) {
    const input = document.createElement("input");
    input.value = value;
    input.classList.add("metadata-input");
    // input.setAttribute("disabled", "true");
    input.addEventListener("click", toggleAnimationClass);
    console.log("hi");
    return input;
}

function updateFileName() {
    const uploadInput = document.getElementById("upload");
    const fileNameElement = document.getElementById("fileName");
    const fileName = uploadInput.files[0]?.name || "No file chosen";
    fileNameElement.textContent = fileName;
}

function toggleAnimationClass(event) {
    console.log("hi");
    event.target.classList.add("animated");
    setTimeout(() => {
        event.target.classList.remove("animated");
    }, 300);
}
