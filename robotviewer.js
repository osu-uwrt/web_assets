function initViewer(modelUrls) {
    // get the parent element of the viewer
    let parentDiv = document.getElementById ('viewer');

    // initialize the viewer with the parent element and some parameters
    let viewer = new OV.EmbeddedViewer (parentDiv, {
        backgroundColor : new OV.RGBAColor (0x24, 0x24, 0x24, 0),  // Note this matches the background color set in the CSS
        onModelLoaded: () => {
            const loadingScreen = document.getElementById( 'loading-screen' );
            loadingScreen.classList.add( 'fade-out' );

            // optional: remove loader from DOM via event listener
            loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
        }
    });

    // load a model providing model urls
    viewer.LoadModelFromUrlList (modelUrls);
}

function onTransitionEnd( event ) {
    event.target.remove();
}