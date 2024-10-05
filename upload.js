// import { storage, ref, uploadBytes } from "./firebase.js";


/*
let image = document.getElementById('image');
const upload = document.getElementById('upload');

const uploadFile = () => {
    const files = image.files[0];

    // without folder
    // const imagesRefWithoutFolder = ref(storage, files.name);

    // with folder
    const imagesRefWithFolder = ref(storage, `images/${files.name}`);

    uploadBytes(imagesRefWithFolder, files).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
    });    
}

image.addEventListener('change', uploadFile);
*/

// upload.addEventListener('click', () => {
//     console.log(storage);
    
// })






/*
import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "./firebase.js";


let image = document.getElementById('image');
const upload = document.getElementById('upload');

const uploadFile = () => {
    const files = image.files[0];

    // with folder
    // const imagesRefWithFolder = ref(storage, `images/${files.name}`);

    const imagesRefWithFolder = ref(storage, `products/${files.name}`);

    const uploadTask = uploadBytesResumable(imagesRefWithFolder, files);

    uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
    );  
}

image.addEventListener('change', uploadFile);
*/










/*
import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "./firebase.js";


let image = document.getElementById('image');
const upload = document.getElementById('upload');

const uploadFile = () => {
    const files = image.files[0];

    console.log(files);

    // validation
    if(files.size >= 1163561) {
        console.log('file is too big!');
        
    } 
    else {
        // with folder
        // const imagesRefWithFolder = ref(storage, `images/${files.name}`);

        const imagesRefWithFolder = ref(storage, `products/${files.name}`);

        const uploadTask = uploadBytesResumable(imagesRefWithFolder, files);

        uploadTask.on('state_changed', 
            (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            
            }, 
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
            }
        ); 
    }
}

image.addEventListener('change', uploadFile);
*/








/*
import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "./firebase.js";


let image = document.getElementById('image');
const upload = document.getElementById('upload');

const start = document.getElementById('start');
const stop= document.getElementById('stop');
const cancel = document.getElementById('cancel');

let uploadTask;


const uploadFile = () => {
    const files = image.files[0];

    console.log(files);

    // validation
    if(files.size >= 1163561) {
        console.log('file is too big!');
        
    } 
    else {
        // with folder
        // const imagesRefWithFolder = ref(storage, `images/${files.name}`);

        const imagesRefWithFolder = ref(storage, `products/${files.name}`);

        uploadTask = uploadBytesResumable(imagesRefWithFolder, files);

        uploadTask.on('state_changed', 
            (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            
            }, 
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
            }
        ); 
    }
}

image.addEventListener('change', uploadFile);

start.addEventListener('click', () => {
    console.log('start');
    uploadTask.resume();
    
});

stop.addEventListener('click', () => {
    console.log('stop');
    uploadTask.pause();

});

cancel.addEventListener('click', () => {
    console.log('cancel');
    uploadTask.cancel();

});
*/

















import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "./firebase.js";


let image = document.getElementById('image');
const upload = document.getElementById('upload');

let start = document.getElementById('start');
let stop= document.getElementById('stop');
let cancel = document.getElementById('cancel');

let loader = document.getElementById('loader');
let state = document.getElementById('state');

loader.style.display = 'none';

let onstate = document.getElementById('onstate');

let uploadTask;


const uploadFile = () => {
    event.preventDefault();
    const files = image.files[0];

    start.removeAttribute('disabled');
    stop.removeAttribute('disabled');
    cancel.removeAttribute('disabled');

    // console.log(files);

    // validation
    if(files.size >= 1163561) {
        onstate.style.color = '#bb2124';
        onstate.innerText = 'file is too big!';
        
    } 
    else {
        // with folder
        // const imagesRefWithFolder = ref(storage, `images/${files.name}`);

        const imagesRefWithFolder = ref(storage, `products/${files.name}`);

        uploadTask = uploadBytesResumable(imagesRefWithFolder, files);

        uploadTask.on('state_changed', 
            (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            
            if(progress === 100) {
                loader.style.display = 'none';
                state.style.color = '#22bb33';
                state.innerText = 'Submit Successfully!';
                
                onstate.style.color = '#22bb33';
                onstate.innerText = 'Submit Successfully!';
            }
            else {
                state.style.color = '#2A343E';
                state.innerText = 'Upload is ' + progress + '% done';
                loader.style.display = 'block';
            }

            console.log('Upload is ' + progress + '% done');
            // onstate.innerText = 'Upload is ' + progress + '% done';

            switch (snapshot.state) {
                case 'paused':
                    loader.style.display = 'none';
                    onstate.style.color = '#bb2124';
                    onstate.innerText = 'Upload is paused!';
                break;
                case 'running':
                    loader.style.display = 'block';
                    onstate.style.color = '#22bb33';
                    onstate.innerText = 'Uploading...';
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            onstate.style.color = '#bb2124';
            onstate.innerText = error;
            
            }, 
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                
                onstate.style.color = '#2A343E';
                onstate.innerHTML = `File available at, <a href='${downloadURL}' target='_blank' class='anchor'>here</a>`;
            });
            loader.style.display = 'none';

            start.setAttribute('disabled', '');
            stop.setAttribute('disabled', '');
            cancel.setAttribute('disabled', '');

            }
        ); 
    }
}

image.addEventListener('change', uploadFile);

start.addEventListener('click', () => {
    event.preventDefault();

    console.log('start');
    loader.style.display = 'none';
    onstate.innerText = 'Uploading...';
    uploadTask.resume();
    
});

stop.addEventListener('click', () => {
    event.preventDefault();

    console.log('stop');
    loader.style.display = 'none';
    onstate.style.color = '#bb2124';
    onstate.innerText = 'paused!';
    uploadTask.pause();
});

cancel.addEventListener('click', () => {
    event.preventDefault();

    console.log('cancel');
    loader.style.display = 'none';
    onstate.style.color = '#bb2124';
    onstate.innerText = 'cancel!';
    uploadTask.cancel();
});























/*
import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "./firebase.js";


let image = document.getElementById('image');
const upload = document.getElementById('upload');

const start = document.getElementById('start');
const stop= document.getElementById('stop');
const cancel = document.getElementById('cancel');

let loader = document.getElementById('loader');
let state = document.getElementById('state');

let imageUrl;

loader.style.display = 'none';

let uploadTask;


const uploadFile = () => {
    const files = image.files[0];

    console.log(files);

    // validation
    if(files.size >= 1163561) {
        console.log('file is too big!');
        
    } 
    else {
        // with folder
        // const imagesRefWithFolder = ref(storage, `images/${files.name}`);

        const imagesRefWithFolder = ref(storage, `products/${files.name}`);

        uploadTask = uploadBytesResumable(imagesRefWithFolder, files);

        uploadTask.on('state_changed', 
            (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            
            if(progress === 100) {
                loader.style.display = 'none';
                state.innerText = '';
            }
            else {
                state.innerText = 'Upload is ' + progress + '% done';
                loader.style.display = 'block';
            }

            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            
            }, 
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                imageUrl = downloadURL;
                console.log('File available at', downloadURL);
            });
            }
        ); 
    }
}

image.addEventListener('change', uploadFile);

start.addEventListener('click', () => {
    console.log('start');
    uploadTask.resume();
    
});

stop.addEventListener('click', () => {
    console.log('stop');
    uploadTask.pause();

});

cancel.addEventListener('click', () => {
    console.log('cancel');
    uploadTask.cancel();

});



const uploadData = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          fullName: "Alan",
          image: imageUrl
        });
      
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
*/