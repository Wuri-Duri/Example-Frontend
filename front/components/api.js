import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'http://52.79.115.87:3000'
});


/*
const baseURL = 'http://52.79.115.87:3000';

// Passing configuration object to axios
axios({
    method: 'get',
    url: `${baseURL}/fairytale/create/first`,
}).then((response) => {
    console.log(response.data);
});

axios.get(`${baseURL}/fairytale/create/first`).then((response) => {
    console.log(response.data);
});
*/