if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">package org.hjf.foobarqix;\n\nimport static org.hjf.foobarqix.Odd.*;\n\n/**\n * Implementation of the specification defined\n * &lt;a href="http://www.code-story.net/2011/11/16/foobarqix.html"&gt;here&lt;/a&gt;.\n * \n * @author Henri Tremblay\n * @author Jean-Fran&#231;ois Larouche\n */\npublic final class FooBarQix {\n\n\t//Contains the string who are written depending on the ASCII code\n\t//Why the null? To eliminate the need of subtracting the \'0\' value from the number\n\tprivate static String[] contains = { null, null, null, null, null, null, null, null, null, null, null, null, null,\n\t\tnull, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,\n\t\tnull, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "", "",\n\t\t"", THREE.replacement, "", FIVE.replacement, "", SEVEN.replacement, "", "" };\n\n\t/**\n\t * Process numbers from the firstNumber to the lastNumber inclusively. Give the result\n\t * to the listener.\n\t * \n\t * @param firstNumber first number to process\n\t * @param lastNumber\n\t * @param listener\n\t */\n\tpublic void processNumbers(int firstNumber, int lastNumber, FooBarQixListener listener) {\n\t\tStringBuilder result = new StringBuilder(12); // 12 being the longest possible result\n\t\tfor (int i = firstNumber; i &lt;= lastNumber; i++) {\n\t\t\tconvertNumber(i, result);\n\t\t\tlistener.handleNumberResult(i, result.toString());\n\t\t\tresult.setLength(0);\n\t\t}\n\t}\n\n\t/**\n\t * Convert the number to its string equivalent\n\t * \n\t * @param num the number\n\t * @param result result buffer\n\t */\n\tvoid convertNumber(int num, StringBuilder result) {\n\t\t// check for division first\n\t\ttextIfDividing(num, THREE, result);\n\t\ttextIfDividing(num, FIVE, result);\n\t\ttextIfDividing(num, SEVEN, result);\n\n\t\t// then the content\n\t\tString iStr = Integer.toString(num);\n\t\tfor (int i = 0; i &lt; iStr.length(); i++) {\n\t\t\ttextForContent(iStr.charAt(i), result);\n\t\t}\n\n\t\t// when we don\'t find anything just write the number\n\t\tif (result.length() == 0) {\n\t\t\tresult.append(iStr);\n\t\t}\n\t}\n\n\n\n\t/**\n\t * Fill the result with the replacement string or nothing\n\t * \n\t * @param c the number to convert\n\t * @param result result buffer\n\t */\n\tvoid textForContent(char c, StringBuilder result) {\n\t\tresult.append(contains[c]);\n\t}\n\n\t/**\n\t * Checks the number can be divised by num. If yes, append the replacement string to the buffer\n\t * \n\t * @param number number to test\n\t * @param divider the dividing number\n\t * @param result result buffer\n\t */\n\tvoid textIfDividing(int number, Odd divider, StringBuilder result) {\n\t\tif (number % divider.number == 0) {\n\t\t\tresult.append(divider.replacement);\n\t\t}\n\t}\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/henri-tremblay/foobarqix/blob/master/src/main/java/org/hjf/foobarqix/FooBarQix.java">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/henri-tremblay/foobarqix/raw/master/src/main/java/org/hjf/foobarqix/FooBarQix.java">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/henri-tremblay/foobarqix/blob/master/src/main/java/org/hjf/foobarqix/FooBarQix.java">FooBarQix.java</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );