if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">package diodfr.codeStory;\n\n/**\n * JE SUIS VRAIMENT PAS UN ARTISTE :(\n * @author broca\n *\n */\npublic class FooBarQix {\n\n\t/**\n\t * Encode nb with the FooBarQix algorithm\n\t * &lt;a href="http://www.code-story.net/2011/11/16/foobarqix.html"&gt;FooBarQix algorithm description&lt;/a&gt;\n\t * @param nb\n\t * @return\n\t */\n\tpublic String encode(int nb) {\n\t\tStringBuilder result = new StringBuilder();\n\n\t\t// {{{{ TESTS DE MULTIPLICITE\n\t\tif (nb%3 == 0) {\n\t\t\tresult.append("Foo");\n\t\t}\n\n\t\tif (nb%5 == 0) {\n\t\t\tresult.append("Bar");\n\t\t}\n\n\t\tif (nb%7 == 0) {\n\t\t\tresult.append("Qix");\n\t\t}\n\t\t// }}}}\n\n\t\tStringBuilder builder = new StringBuilder();\n\n\t\tbuilder.append(nb);\n\n\t\t// {{{{ Tests d\'apparition des symboles\n\t\tfor(int i = 0; i &lt; builder.length(); i++) {\n\t\t\tswitch(builder.charAt(i)) {\n\t\t\tcase \'3\' :\n\t\t\t\tresult.append("Foo");\n\t\t\t\tbreak;\n\t\t\tcase \'5\' :\n\t\t\t\tresult.append("Bar");\n\t\t\t\tbreak;\n\t\t\tcase \'7\' :\n\t\t\t\tresult.append("Qix");\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\t// si je n\'ai pas de diviseur ou de symbole\n\t\tif (result.length() == 0) {\n\t\t\tresult.append(nb); // je met le nombre\n\t\t}\n\n\t\treturn result.toString();\n\t}\n\n\tprivate void encode1to100() {\n\t\tfor (int i = 1; i &lt; 100; i++) {\n\t\t\tString result = encode(i);\n\n\t\t\tSystem.out.println(result);\n\t\t}\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tFooBarQix fooBarQix = new FooBarQix();\n\n\t\tfooBarQix.encode1to100();\n\t}\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/diodfr/code-story/blob/master/diodfr/codeStory/FooBarQix.java">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/diodfr/code-story/raw/master/diodfr/codeStory/FooBarQix.java">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/diodfr/code-story/blob/master/diodfr/codeStory/FooBarQix.java">FooBarQix.java</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );