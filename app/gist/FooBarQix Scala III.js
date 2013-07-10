if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">package org.courtine.foobarqix\n\n/**\n * Objet principal de calcul du r&#233;sultat du test.\n *\n * @author Beno&#238;t Courtine.\n * @since 2011-11-21.\n * @version 2011-11-21.\n */\nobject FooBarQix {\n\n  def main(args: Array[String]) {\n    List.range(1, 100) foreach {\n      n =&gt; println(process(n))\n    }\n  }\n\n  def process(n: Int): String = {\n    modulo3(n) + modulo5(n) + modulo7(n) + contains(n.toString.toList) match {\n      case "" =&gt; n.toString\n      case notEmpty =&gt; notEmpty\n    }\n  }\n\n  def modulo3(n: Int): String =\n    n % 3 match {\n      case 0 =&gt; "Foo"\n      case _ =&gt; ""\n    }\n\n  def modulo5(n: Int): String =\n    n % 5 match {\n      case 0 =&gt; "Bar"\n      case _ =&gt; ""\n    }\n\n  def modulo7(n: Int): String =\n    n % 7 match {\n      case 0 =&gt; "Qix"\n      case _ =&gt; ""\n    }\n\n  def contains(chars: List[Char]): String =\n    chars match {\n      case Nil =&gt; ""\n      case \'3\' :: tail =&gt; "Foo" + contains(tail)\n      case \'5\' :: tail =&gt; "Bar" + contains(tail)\n      case \'7\' :: tail =&gt; "Qix" + contains(tail)\n      case _ :: tail =&gt; contains(tail)\n    }\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/bcourtine/FooBarQix/blob/master/src/main/scala/org/courtine/foobarqix/FooBarQix.scala">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/bcourtine/FooBarQix/raw/master/src/main/scala/org/courtine/foobarqix/FooBarQix.scala">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/bcourtine/FooBarQix/blob/master/src/main/scala/org/courtine/foobarqix/FooBarQix.scala">FooBarQix.scala</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );