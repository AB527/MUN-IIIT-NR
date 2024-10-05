const fetchAPI = (apiCode,cb) => {
    fetch(`https://mun-iiitnr-server.vercel.app/api/${apiCode}`, {method: "post"})
        .then(res=> {
            return res.json();
        })
        .then(data => {
            cb(data);
        });
}

export default fetchAPI;