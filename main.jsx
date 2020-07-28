
var myDoc = app.activeDocument;

var myStory = myDoc.xmlElements[0].xmlElements;

var frameProperties = {
    geometricBounds : [0,0,26,62],
    }

// Loop through the XML and replace with artwork

var location = Folder.selectDialog()

for(i=0; i < myStory.length; i++){
    
    if(myStory[i].markupTag.name == "artwork"){
        
        //$.write(myStory[i].xmlContent + "\u000D");
        var urn = myStory[i].contents;
        var where = File(location.absoluteURI + "/" + urn + ".eps");
        var myInsertionPoint = myStory[i].insertionPoints[0];
        var artworkFrame = myInsertionPoint.textFrames.add(undefined,undefined,undefined,frameProperties);
        
        //Check to see if Artwork exists
        
        if(where.exists){
            
            artworkFrame.place(where);
            artworkFrame.fit(FitOptions.FRAME_TO_CONTENT);
            //$.write(myStory[i].characters.length + "\u000D");
            myStory[i].characters[1].remove();
            myStory[i].characters[1].remove();
            
        } else {
            
            continue;
            
        }
    }
}
