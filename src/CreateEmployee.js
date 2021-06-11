// generate HTML for page sections
renderPageTop() {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./src/assets/style.css">
    <script src="https://kit.fontawesome.com/1223513c02.js" crossorigin="anonymous"></script>
    <title>Hogwarts Team Directory</title>
</head>

<body>
    <header class="bg-secondary text-warning text-center">
        <h1><i class="fas fa-hat-wizard text-light"></i> Hogwarts School of Witchcraft and Wizardry <i class="fas fa-quidditch text-light"></i></h1>
        <h2>Team Directory</h2>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 justify-content-center space-between d-flex">
    `
}

renderManager(array) {
    const {
        name,
        id,
        email,
        phone,
    } = array[0];
    return `
    <div class="card col-sm-3 bg-warning m-4" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title">Manager</h3>
                            <h4 class="card-title">${name}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
                            <p class="card-text">Email: <a href="mailto:${email}"></a>${email}</p>
                            <p class="card-text">${phone}</p>
                        </div>
                    </div>
    `
};

renderEngineer(arra) {
    
}