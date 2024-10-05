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

const start = document.getElementById('start');
const stop= document.getElementById('stop');
const cancel = document.getElementById('cancel');

let loader = document.getElementById('loader');
let state = document.getElementById('state');

loader.style.display = 'none';

let onstate = document.getElementById('onstate');
let form = document.getElementById('form');

let uploadTask;


const uploadFile = () => {
    const files = image.files[0];

    // console.log(files);

    // validation
    if(files.size >= 1163561) {
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
                state.innerText = 'Submit Successfully!';
                onstate.innerText = 'Submit Successfully!';
            }
            else {
                state.innerText = 'Upload is ' + progress + '% done';
                loader.style.display = 'block';
            }

            console.log('Upload is ' + progress + '% done');
            onstate.innerText = 'Upload is ' + progress + '% done';

            switch (snapshot.state) {
                case 'paused':
                onstate.innerText = 'Upload is paused!';
                break;
                case 'running':
                onstate.innerText = 'Upload is running';
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            onstate.innerText = error;
            
            }, 
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                
                onstate.innerHTML = `<p>File available at, <a href='${downloadURL}' target='_blank'>here</a> </p>`;
            });
            }
        ); 
    }
}

image.addEventListener('change', uploadFile);

start.addEventListener('click', () => {
    console.log('start');
    onstate.innerText = 'start';
    uploadTask.resume();
    
});

stop.addEventListener('click', () => {
    console.log('stop');
    onstate.innerText = 'stop';
    uploadTask.pause();
});

cancel.addEventListener('click', () => {
    console.log('cancel');
    onstate.innerText = 'cancel';
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