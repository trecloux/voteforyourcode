if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">import scala.collection.mutable.ListBuffer\n\nobject FooBarQix{\n\t\n\tval foobarqix=List(\n\t\t("Foo",3),\n\t\t("Bar",5),\n\t\t("Qix",7)\n\t)\n\t\n\tdef main(args:Array[String]){\n\t\t(1 to 100)\n\t\t\t.map(map) \t\t// For each element, map a list with the element followed by the foo-bar-qix items, if applicable\n\t\t\t.map(reduce) \t// Next, remove first element if we have foo-bar-qix\n\t\t\t.foreach(print)\t// Finally, just print it\n\t}\n\t\n\tdef map(num:Int)={\n\t\tvar list=new ListBuffer[String]()\n\t\tlist+=num.toString \n\t\tfoobarqix.foreach(test=&gt;if(num%test._2==0) list+=test._1) // Multiples\n\t\tnum.toString.foreach(c=&gt;foobarqix.foreach(test=&gt;if(c==test._2.toString.head) list+=test._1)) // Content\n\t\tlist.toList\n\t}\n\n\tdef reduce(list:List[String]):List[String]={if(list.size&gt;1) list.drop(1) else list}\n\t\n\tdef print(list:List[String])={println(list.mkString)}\n\t\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/adetante/FooBarQix/blob/master/FooBarQix.scala">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/adetante/FooBarQix/raw/master/FooBarQix.scala">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/adetante/FooBarQix/blob/master/FooBarQix.scala">FooBarQix.scala</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );