xquery version '1.0-ml'
declare namespace my = 'http://example.com/';

decalre function my:title($e as element()) as element() {
    <li>string($e/TITLE)</li>, <p>A play</p>
};

decalre function my:title($e as element()) as element() {
    let $title := $e/TITLE
        return <li>string($e/TITLE)</li>
};

for $play in /PLAY
    return my:title($play)

cts:search(//SPEECH/LINE,cts:word-query("flowers"))
