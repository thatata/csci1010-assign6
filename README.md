# Hello World

This is a starter application based off of the Hello World Sample (https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/hello-world). 

This application creates a window using a basic HTML page, index.html, as the source. 
It contains a drop down with IDs. When an ID is selected the text and icon will update. 
However, it will only work for IDs that have a corresponding JSON document and icon.

## Resource Files
The JSON document and the icon file should be named the same as the ID with the correct extension and placed in the /resources folder.

So for example, for the ID: G00000000, the JSON document would be named "G00000000.json" and the icon would be named "G00000000.png" and both files will be placed in the /resources folder

### JSON file
The .json file should contain the following (replace the values marked with * * with the real values)
<pre>
*id* = '[{"name" : "*name*", "icon" : "*icon_path*"}]';
</pre>

So for example, for the ID:G00000000 and name:Krista
<pre>
G00000000 = '[{"name" : "Krista", "icon" : "resources/G00000000.png"}]';
</pre>


