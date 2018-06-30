
$(document).ready(function(){ // When size is submitted by the user, call makeGrid()

    $('#sizePicker').submit(function(e){

        e.preventDefault()
        makeGrid(e);
    });

    $('#pixelCanvas').on("click","td", function(){ // Select color input

        const color = $('#colorPicker').val();
        
        if($(this)[0].bgColor == color){
            $(this)[0].bgColor = "";
        }else{
            $(this)[0].bgColor = color;
        }
    }); 
});

function makeGrid() {

    // Your code goes here!
    const height = $('#inputHeight').val(); //get canvas height
    const width = $('#inputWeight').val(); //get canvas width
    const table = $('#pixelCanvas'); //canvas table

    $('#pixelCanvas').html(""); // initiliaze the canvas

    for(let i = 0; i < height; i++){ //  create the table

        let trBody = "<tr>"; 
        for (let j = 0; j < width; j++){
            trBody += "<td></td>"; 
        }    
        trBody += "</tr>";

        table.append(trBody); 
    }
}
