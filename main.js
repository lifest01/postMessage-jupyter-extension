define(['base/js/namespace', 'base/js/events'],
    function (Jupyter) {
        function load_ipython_extension() {
            window.addEventListener("message", function (event) {
                if (event.data === 'run') {
                    document.getElementById('header').style.display = 'none'
                    document.getElementsByClassName('end_space')[0].style.display = 'none'
                    document.getElementById("notebook-container").style.width = '1500px';
                    let cells = Jupyter.notebook.get_cells();
                    for (let i=0; i < cells.length; i++) {
                        cells[i].element.find('div.input')[0].style.display = 'none'
                        cells[i].element.find('div.output')[0].style.height = fit-content
                        cells[i].execute();
                    }
                }
            }, false);
        }
        return {
            load_ipython_extension: load_ipython_extension
        };
    });
