const btnAddPhotos = document.getElementById('add-photos');
const divPhotosGrid = document.getElementById('photos-grid');

//expiremental
const btnAddPages = document.getElementById('add-pages');
const theGrid = document.getElementById('the-grid');
const thePage = document.getElementById('page');

btnAddPages.addEventListener('click', () => {
    console.log('page added');
    const heading = document.createElement('h1');
    heading.innerText = "hello"
    theGrid.appendChild(heading);
})




//end of expirement


btnAddPhotos.addEventListener('click', () => {
    //Initiate a new 'input' open file dialog and set it's properties
    const openFileDialog = document.createElement('input');
    openFileDialog.type = 'file';
    openFileDialog.accept = 'image/*';
    openFileDialog.multiple = true;

    openFileDialog.addEventListener('change', (userSelection) => {
        const selectedFiles = userSelection.target.files;
        
        for (let i = 0; i < selectedFiles.length; i++){
            //grab the first file and store it in 'file'
            const file = selectedFiles[i];

            //initialize a new FileReader
            const fileReader = new FileReader();

            fileReader.onload = function(e) {
                //create an HTML element to hold the loaded image
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100px';

                //add the loaded image to the grid
                divPhotosGrid.appendChild(img);
            };

            fileReader.readAsDataURL(file);

        }
    });
    openFileDialog.click();
})

