export function pageLoaderShow(color = "primary"){
    const div = document.createElement("div");
    div.classList.add("loader");
    div.innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center fixed-top">
        <div class="spinner-grow text-${color}" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`;
    document.body.append(div)
}

export function pageLoaderRemove(){
    const loader = document.querySelector('.loader');
    loader.remove()
}

export function progressShow(color='primary'){
    const div = document.createElement("div");
    div.classList.add("top-progress");
    div.innerHTML = `<div class="top-fixed">
        <div class="progress" style="height: 5px">
          <div class="progress-bar bg-${color} progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
    </div>`;
    document.body.append(div)

}

export function progressRemove(){
    const progress = document.querySelector('.top-progress');
    progress.remove()
}