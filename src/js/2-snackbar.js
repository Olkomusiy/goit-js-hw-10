import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = event.target.elements.delay.value;
    const delayNumber = Number(delay);
    const state = event.target.elements.state.value;

    console.log(delay, state);


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delayNumber);
            } else {
                reject(delayNumber);
            }

        }, delayNumber);

    });
    promise.then((value) => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${value}ms`,
            timeout: 5000
        });
    })
    promise.catch((error) => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${error}ms`,
            timeout: 5000
        });
    });

});