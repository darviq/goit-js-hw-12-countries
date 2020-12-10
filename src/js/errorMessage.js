import { error } from '@pnotify/core';

const errorMessage = () => error({
    text: `Too many matches found. Please enter a more specific query!`,
    delay: 3000
});

export default errorMessage;