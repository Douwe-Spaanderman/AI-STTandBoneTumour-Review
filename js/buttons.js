document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('Home').addEventListener('click', function() {
        Home()
    });

    document.getElementById('claim-visualization').addEventListener('click', function() {
        VisualButtonClick('data/CLAIM_interactive.html')
    });

    document.getElementById('claim-dataframe').addEventListener('click', function() {
        DataFrameButtonClick('data/CLAIM.csv')
    });

    document.getElementById('futureai-visualization').addEventListener('click', function() {
        VisualButtonClick('data/FutureAI_interactive.html')
    });

    document.getElementById('futureai-dataframe').addEventListener('click', function() {
        DataFrameButtonClick('data/FUTURE-AI.csv')
    });
});

function Home(){
    // Removing div showing Plotly if present
    var plotlyContainer = document.getElementById('plotly-container');
    if (plotlyContainer) {
        plotlyContainer.remove();
    }

    // Removing div showing DataFrame if present -> easier than filling data
    var DataFrameContainer = document.getElementById('dataframe-container');
    if (DataFrameContainer) {
        DataFrameContainer.remove();
    }

    const homeContainer = document.getElementById('home-container');
    //if (!homeContainer) {
     //   document.body.innerHTML += '<object type="text/html" data="home.html" ></object>';
    //}
    
}

function VisualButtonClick(data) {
    // Removing div showing DataFrame if present
    var DataFrameContainer = document.getElementById('dataframe-container');
    if (DataFrameContainer) {
        DataFrameContainer.remove();
    }
    // Remove home
    var homeContainer = document.getElementById('home-container');
    if (homeContainer) {
        homeContainer.remove();
    }

    // Get the plotly iframe
    const plotlyFrame = document.getElementById('plotly-frame');
    if (plotlyFrame) {
        // If present already (i.e. switching from CLAIM to FUTURE-AI visualization) just change the data
        plotlyFrame.src = data;
    } else {
        // Else create the complete div
        var newDiv = document.createElement('div');
        newDiv.className = 'container-fluid overflow-hidden';
        newDiv.id = 'plotly-container';

        var newIframe = document.createElement('iframe');
        newIframe.id = 'plotly-frame';
        newIframe.frameBorder = '0';
        newIframe.src = data;
        newDiv.appendChild(newIframe);

        // append to body
        document.body.appendChild(newDiv);
    }
}

function DataFrameButtonClick(data) {
    // Removing div showing Plotly if present
    var plotlyContainer = document.getElementById('plotly-container');
    if (plotlyContainer) {
        plotlyContainer.remove();
    }

    // Removing div showing DataFrame if present -> easier than filling data
    var DataFrameContainer = document.getElementById('dataframe-container');
    if (DataFrameContainer) {
        DataFrameContainer.remove();
    }
    // Remove home
    var homeContainer = document.getElementById('home-container');
    if (homeContainer) {
        homeContainer.remove();
    }

    // Create the complete div for table-container
    var newDiv = document.createElement('div');
    newDiv.className = 'container-fluid overflow-auto';
    newDiv.id = 'dataframe-container';

    var newTable = document.createElement('div');
    newTable.id = 'table-container';
    newDiv.appendChild(newTable);

    // append to body
    document.body.appendChild(newDiv);

    CsvToHtmlTable.init({
        csv_path: data,
        element: "table-container",
        allow_download: true,
        csv_options: {
            separator: ",",
            delimiter: '"'
        },
        datatables_options: {
            paging: false,
            responsive: true
        },
    });
}