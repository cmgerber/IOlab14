declare namespace html="http://www.w3.org/1999/xhtml";
declare namespace s = "http://www.ibiblio.org/xml/examples/shakespeare/";



 <html xmlns="http://www.w3.org/1999/xhtml">
 <head>
 <title>Plays</title>
 <link rel="stylesheet" type="text/css" href="/resources/site.css" />
 </head>
 <body>
 
 <div>
 <h1>A List of All of Shakespeare's Plays</h1>
 <h3>Click on a play to see its text.</h3>
 </div>
 
 <div id="plays">
 <ul>
 {
 for $li in /html:ul/html:li
    let $href := fn:string($li/html:a/@href),
                   $base := fn:substring-before($href,'.xml'),
                   $play := doc(resolve-uri($href,base-uri(/)))
    return <li><a href="{$base}/">{fn:string($play/s:PLAY/s:TITLE)}</a></li>
 }
 </ul>
 </div>
 </body>
 </html>