if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">/*----------------------------------------------------------------------------*\n * This file is part of FooBarQix.                                            *\n * Copyright (C) 2012 Osman KOCAK &lt;kocakosm@gmail.com&gt;                        *\n *                                                                            *\n * This program is free software: you can redistribute it and/or modify it    *\n * under the terms of the GNU Lesser General Public License as published by   *\n * the Free Software Foundation, either version 3 of the License, or (at your *\n * option) any later version.                                                 *\n * This program is distributed in the hope that it will be useful, but        *\n * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY *\n * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public     *\n * License for more details.                                                  *\n * You should have received a copy of the GNU Lesser General Public License   *\n * along with this program. If not, see &lt;http://www.gnu.org/licenses/&gt;.       *\n *----------------------------------------------------------------------------*/\n\npackage org.kocakosm.foobarqix;\n\n/**\n * A FooBarQix number.\n *\n * @author Osman KOCAK\n */\npublic final class FooBarQixNumber\n{\n\tprivate static final String FOO = "Foo";\n\tprivate static final String BAR = "Bar";\n\tprivate static final String QIX = "Qix";\n\n\t/**\n\t * Returns a {@code FooBarQixNumber} instance representing the\n\t * specified {@code int} value.\n\t *\n\t * @param value an {@code int} value.\n\t *\n\t * @return a {@code FooBarQixNumber} representing the given value.\n\t */\n\tpublic static FooBarQixNumber valueOf(int value)\n\t{\n\t\tif (value == 0) {\n\t\t\treturn new FooBarQixNumber(0, "0");\n\t\t}\n\t\tString number = Integer.toString(value);\n\t\tStringBuilder sb = new StringBuilder(number.length() * 3);\n\t\tif (value % 3 == 0) {\n\t\t\tsb.append(FOO);\n\t\t}\n\t\tif (value % 5 == 0) {\n\t\t\tsb.append(BAR);\n\t\t}\n\t\tif (value % 7 == 0) {\n\t\t\tsb.append(QIX);\n\t\t}\n\t\tfor (char c : number.toCharArray()) {\n\t\t\tif (c == \'3\') {\n\t\t\t\tsb.append(FOO);\n\t\t\t} else if (c == \'5\') {\n\t\t\t\tsb.append(BAR);\n\t\t\t} else if (c == \'7\') {\n\t\t\t\tsb.append(QIX);\n\t\t\t}\n\t\t}\n\t\treturn new FooBarQixNumber(\n\t\t\tvalue, sb.length() == 0 ? number : sb.toString());\n\t}\n\n\tprivate final int intValue;\n\tprivate final String strValue;\n\n\tprivate FooBarQixNumber(int intValue, String strValue)\n\t{\n\t\tthis.intValue = intValue;\n\t\tthis.strValue = strValue;\n\t}\n\n\t/**\n\t * Returns the value of this {@code FooBarQixNumber} as an {@code int}.\n\t *\n\t * @return the numeric value represented by this object.\n\t */\n\tpublic int intValue()\n\t{\n\t\treturn intValue;\n\t}\n\n\t@Override\n\tpublic String toString()\n\t{\n\t\treturn strValue;\n\t}\n\n\t@Override\n\tpublic boolean equals(Object o)\n\t{\n\t\tif (o == this) {\n\t\t\treturn true;\n\t\t}\n\t\tif (!(o instanceof FooBarQixNumber)) {\n\t\t\treturn false;\n\t\t}\n\t\tfinal FooBarQixNumber number = (FooBarQixNumber) o;\n\t\treturn intValue == number.intValue;\n\t}\n\n\t@Override\n\tpublic int hashCode()\n\t{\n\t\treturn intValue;\n\t}\n}\n</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/kocakosm/foobarqix/blob/master/src/org/kocakosm/foobarqix/FooBarQixNumber.java">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/kocakosm/foobarqix/raw/master/src/org/kocakosm/foobarqix/FooBarQixNumber.java">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/kocakosm/foobarqix/blob/master/src/org/kocakosm/foobarqix/FooBarQixNumber.java">FooBarQixNumber.java</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );