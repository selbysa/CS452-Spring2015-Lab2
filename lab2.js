/*
	Sarah Selby
	CS 452
	Lab 2
	2/17/15
*/



var gl;

	var vertX = 0;
	var vertY = 0;
	

window.onload = function init()
{
var canvas = document.getElementById( "gl-canvas" );
gl = WebGLUtils.setupWebGL( canvas );
if ( !gl ) { alert( "WebGL isn't available" ); }

	//Four Vertices
		
	var vertices = new Float32Array([
        (vertX+ 0.05), (vertY+ 0.3), 0.4, 0.9, 0.1, //green
        (vertX+ -0.2), (vertY+ -0.15), 0.25, 0.5, 1.0, //blue
        (vertX+ 0.15), (vertY+ 0.2), 1.0, 0.0, 0.0, //red
        (vertX+ 0.2), (vertY+ -0.15), 1.0, 1.0, 0.0, //yellow
    ]);
	

//
// Configure WebGL
//
gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
// Load shaders and initialize attribute buffers
var program = initShaders( gl, "vertex-shader", "fragment-shader" );
gl.useProgram( program );
		
		gl.program = program;
		
// Load the data into the GPU

	 var bufferID = gl.createBuffer();
	 gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
	 gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
		
		var FSIZE = vertices.BYTES_PER_ELEMENT; 
		
// Associate our shader variables with our data buffer

	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, FSIZE * 5, 0);
	gl.enableVertexAttribArray(vPosition);
	
	// Get the storage location of fColor, assign buffer and enable 
 var fColor = gl.getAttribLocation(gl.program, 'fColor'); 
 gl.vertexAttribPointer(fColor, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2); 
 gl.enableVertexAttribArray(fColor); 
 gl.bindBuffer(gl.ARRAY_BUFFER, null); 

render();
};

function render() {
gl.clear( gl.COLOR_BUFFER_BIT );

	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}


//Movement of the shape by the keys
window.onkeypress = function(event) {
	var key = String.fromCharCode(event.keyCode);
	
	switch(key){
		case 'a':
		if(vertX>-1.0)vertX = vertX-0.1;
		break;
		case 'w':
		if(vertY<1.0)vertY = vertY+0.1;
		break;
		case 's':
		if(vertY>-1.0)vertY = vertY-0.1;
		break;
		case 'd':
		if(vertX<1.0)vertX = vertX+0.1;
		break;
		case '1':
			vertX = 0; vertY = 0;
		break;	
	}
		 var vertices = new Float32Array([
        	(vertX+ 0.05), (vertY+ 0.3),
    	    (vertX+ -0.2), (vertY+ -0.15),
        	(vertX+ 0.15), (vertY+ 0.2),
    	    (vertX+ 0.2), (vertY+ -0.15),
	    ]);
		
		
		var program = initShaders( gl, "vertex-shader", "fragment-shader" );
		gl.useProgram( program );
		gl.program = program;
		var bufferID = gl.createBuffer();
	 	gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
	 	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
		var vPosition = gl.getAttribLocation(program, "vPosition");
		gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(vPosition); 
				
	
	render();
	}; 
