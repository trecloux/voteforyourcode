if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">/**\n */\npublic class FooBarQix {\n    public static String get(int i) {\n        String result = "";\n\n        //divisible par 3\n        if (i % 3 == 0) {\n            result += "Foo";\n        }\n        //contient 3\n        String s = String.valueOf(i);\n        if ( s.contains("3")){\n            result += "Foo";\n        }\n\n        if (result.length()==0)\n            result = s;\n\n        return result;\n    }\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/dbaeli/FooBarQix/blob/master/src/main/java/org/foobar/FooBarQix.java">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/dbaeli/FooBarQix/raw/master/src/main/java/org/foobar/FooBarQix.java">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/dbaeli/FooBarQix/blob/master/src/main/java/org/foobar/FooBarQix.java">FooBarQix.java</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );