if ( 'prettyPrint' in window ) {} else {
    document.write( '<script type="text/javascript" src="http://gist-it.appspot.com/assets/prettify/prettify.js"></script>' );
}


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css"/>' );


document.write( '<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"/>' );

document.write( '<div class="gist-it-gist">\n<div class="gist-file">\n    <div class="gist-data">\n        \n        <pre class="prettyprint">use("ispec")\n\nlabels = {3 =&gt; "Foo", 5 =&gt; "Bar", 7 =&gt; "Qix"}\n\ntextForMultiples = method(number,\n  [3, 5, 7] map(n, if(number % n == 0, labels[n], "")) join\n)\n\ntextForDigits = method(number,\n  number asText chars map(toRational) map(n, if(labels[n] nil?, "", labels[n])) join\n)\n\nfooBarQix = method(number,\n  result = textForMultiples(number) + textForDigits(number)\n\n  if(result empty?, number asText, result)\n)\n\nfooBarQixUpTo = method(number,\n  (1..number) map(n, fooBarQix(n)) join("\\n")\n)\n\nfooBarQixUpTo(100) println\n\ndescribe("fooBarQix",\n  it("should return the number by default",\n  \tfooBarQix(1) should == "1"\n  \tfooBarQix(2) should == "2"\n  )\n  it("should return Foo for multiples of 3",\n    fooBarQix(6) should == "Foo"\n    fooBarQix(9) should == "Foo"\n  )\n  it("should return Bar for multiples of 5",\n    fooBarQix(10) should == "Bar"\n    fooBarQix(20) should == "Bar"\n  )\n  it("should return Qix for multiples of 7",\n    fooBarQix(14) should == "Qix"\n    fooBarQix(28) should == "Qix"\n  )\n  it("should combine words for multiples of 3, 5 and 7",\n    fooBarQix(210) should == "FooBarQix"\n  )\n  it("should return Foo each time the number contains the digit 3",\n    fooBarQix(13) should == "Foo"\n    fooBarQix(31) should == "Foo"\n    fooBarQix(233) should == "FooFoo"\n  )\n  it("should return Bar each time the number contains the digit 5",\n    fooBarQix(52) should == "Bar"\n    fooBarQix(551) should == "BarBar"\n  )\n  it("should return Qix each time the number contains the digit 7",\n    fooBarQix(17) should == "Qix"\n    fooBarQix(71) should == "Qix"\n    fooBarQix(277) should == "QixQix"\n  )\n  it("should combine words for each digits 3, 5, and 7 it contains",\n    fooBarQix(53) should == "BarFoo"\n    fooBarQix(73) should == "QixFoo"\n    fooBarQix(1751) should == "QixBar"\n    fooBarQix(253) should == "BarFoo"\n    fooBarQix(173) should == "QixFoo"\n  )\n  it("should combined words for multiples and digits of 3, 5, and 7",\n    fooBarQix(33) should == "FooFooFoo"\n    fooBarQix(35) should == "BarQixFooBar"\n  )\n)\n\ndescribe("fooBarQixUpTo",\n  it("should return the numbers separated by carriage returns",\n    fooBarQixUpTo(1) should == "1"\n    fooBarQixUpTo(2) should == "1\\n2"\n    fooBarQixUpTo(3) should == "1\\n2\\nFooFoo"\n  )\n)</pre>\n        \n    </div>\n    \n    <div class="gist-meta">\n        \n        <span><a href="https://github.com/elefevre/FooBarQix/blob/master/FooBarQixIoke/FooBarQix.ik">This Gist</a> brought to you by <a href="http://gist-it.appspot.com">gist-it</a>.</span>\n        \n        <span style="float: right; color: #369;"><a href="https://github.com/elefevre/FooBarQix/raw/master/FooBarQixIoke/FooBarQix.ik">view raw</a></span>\n        <span style="float: right; margin-right: 8px;">\n            <a style="color: rgb(102, 102, 102);" href="https://github.com/elefevre/FooBarQix/blob/master/FooBarQixIoke/FooBarQix.ik">FooBarQix.ik</a></span>\n            <!-- Generated by: http://gist-it.appspot.com -->\n    </div>\n    \n</div>\n</div>' );

document.write( '<script type="text/javascript">prettyPrint();</script>' );