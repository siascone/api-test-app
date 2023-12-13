document.addEventListener('DOMContentLoaded', () => {
    const apiForm = document.getElementById('api-form');
    const apiUrlInput = document.getElementById('api-url-input');
    const optionsInput = document.getElementById('options-input');

    const testFetch = async (url) => {
        let optionsJSON = optionsInput.value;
        let options = await JSON.parse(optionsJSON);

        if (options.headers) {
            options.headers["Accept"] = "application/json";
        }
        
        try {
            let res = await fetch(url, options);
            if (res.ok) {
                let resBody = await res.json();
                console.log(resBody);
            } else {
                let errorBody = await res.json();
                console.log(errorBody);
                throw new Error(res);

            };

        } catch (err) {
            console.error(err);
        };

    };

    const handleTestFetch = e => {
        e.preventDefault();

        testFetch(apiUrlInput.value);
    }
    
    apiForm.addEventListener('submit', handleTestFetch);

})