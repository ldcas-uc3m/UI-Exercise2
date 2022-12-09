// File Upload Logic JavaScript 

const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function() {
  const file_reader = new FileReader();
  file_reader.addEventListener("load", () => {
    const uploaded_image = file_reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  file_reader.readAsDataURL(this.files[0]);
});