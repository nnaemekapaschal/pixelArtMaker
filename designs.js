
$(document).ready(function(){ // When size is submitted by the user, call makeGrid()

    $('#sizePicker').submit(function(e){

        e.preventDefault()
        makeGrid(e);
    });

    $('#pixelCanvas').on("click","td", function(){ // Select color input

        var color = $('#colorPicker').val();
        
        if($(this)[0].bgColor == color){
            $(this)[0].bgColor = "";
        }else{
            $(this)[0].bgColor = color;
        }
    }); 
});

const function makeGrid() {

    // Your code goes here!
    var height = $('#inputHeight').val(); //get canvas height
    var width = $('#inputWeight').val(); //get canvas width
    var table = $('#pixelCanvas'); //canvas table

    $('#pixelCanvas').html(""); // initiliaze the canvas

    for(var i = 0; i < height; i++){ //  create the table

        var trBody = "<tr>"; 
        for (var j = 0; j < width; j++){
            trBody += "<td></td>"; 
        }    
        trBody += "</tr>";

        table.append(trBody); 
    }
}
