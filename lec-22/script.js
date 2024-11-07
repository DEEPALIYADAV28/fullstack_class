function placeOrder() {
    function downloadBook() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("book downloaded");
                resolve();
            }, 5000);
        });
    }

    function unzipped() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("book unzipped");
                resolve();
            }, 2000);
        });
    }

    function parsed() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("book parsed");
                resolve();
            }, 3000);
        });
    }

    function analyzed() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("book read and analyzed properly");
                resolve();
            }, 2000);
        });
    }

    function uploaded() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("book uploaded successfully");
                resolve();
            }, 3000);
        });
    }

    downloadBook()
        .then(unzipped)
        .then(parsed)
        .then(analyzed)
        .then(uploaded)
        .catch((error) => console.error("Error processing order:", error));
}

placeOrder();
