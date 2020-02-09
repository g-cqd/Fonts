# Sometype Mono

---

## Short Story
[Sometype Mono](https://github.com/dharmatype/Sometype-Mono) is a free monospaced font family for coding and tabular layout which licensed under [the SIL OFL1.1](http://scripts.sil.org/OFL). Designed by  [Ryoichi Tsunekawa](http://dharmatype.com).  Consists of 6 styles so far.

---

## Long Story  

### About
Sometype Mono is a free monospaced font family for coding and tabular layout which can be used for commercial purpose for free.  

### Download
You can download the font files(.eot, .otf, .ttf, .woff and .woff2) and its source file(.glyphs) from  
[https://github.com/dharmatype/Sometype-Mono](https://github.com/dharmatype/Sometype-Mono)  

### Styles
So far, Sometype Mono consists of 6 style.  
Regular, _Italic_, (Medium, Medium Italic,) **Bold**, ***Bold Italic***.

### License
Sometype Mono is licensed under [the SIL Open Font License v1.1](http://scripts.sil.org/OFL)  
To view the copyright and specific terms and conditions please refer to [OFL.txt](https://github.com/dharmatype/Sometype-Mono/blob/master/OFL.txt)


### Designer
[Ryoichi Tsunekawa](http://dharmatype.com)  


### Support
Please support our free font project.  
Our free fonts are free even for commercial use. You can use them without any purchases.
But we welcome your support for free font project.  
Please visit [http://dharmatype.com/support](http://dharmatype.com/support)

---

## Sample
### Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget auctor dolor. **This is Bold** Vivamus scelerisque gravida lorem, ut viverra nisi. Aliquam fermentum nunc eget lectus mattis, nec fringilla quam interdum. Curabitur ligula mi, suscipit sit amet auctor vitae, accumsan sit amet neque. Ut turpis orci, euismod at nulla sed, pharetra porta eros. (_This is Italic_) Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec feugiat aliquam ipsum, eget elementum ante euismod vitae. ***This is BoldItalic*** Ut vitae placerat ante.

### Distinguishability
O o 0  I i L l ! 1 |  2 Z 5 S 6 b 8 B  # * ^ ~  ( { [  . , : ; " ' ’ `  

### Nice-Figures
0 1 2 3 4 5 6 7 8 9

### Syntax
```js
describe('somtype server', function() {
    //  listening for connections    
    var SometypeServer;
    before(function(done) {
        sometypeServer = new SometypeServer();
        sometypeServer.listen(1234, function() {
            done();
        });
    });
    it('should respond correctly', function(done) {
        var dummy = new Dummy(false, 1234, '127.0.0.1', '\n', function() {
            dummy.send('hey\n', 'you sent : hey', function(expected, data) {
                expected.should.equal.true;
                dummy.send('haha\n', 'you sent : haha', function(expected, data) {
                    expected.should.equal.true;
                    done();
                });
            });
        });
    });
});
```

```ruby
# Ruby code
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```css
#sidebar {
    float: left;
    width: 200px;
    background: #D2B48C;
    padding: 15px 10px 15px 20px;
}
@font-face {
  font-family: "Fira Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Fira Sans"),
    local("FiraSans-Regular"),
    url("http://mozilla.github.io/Fira/woff/FiraSans-Regular.woff") format("woff");
}
```

```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<link rel="stylesheet" href="css/mui.min.css">
		<style>
			html,
			body {
				background-color: #efeff4;
			}
		</style>
	</head>
```



### Italic for quote and captions  
> This is a blockquote following a header. This is a blockquote following a header.
> This is a blockquote following a header. This is a blockquote following a header.
> This is a blockquote following a header. This is a blockquote following a header.


### Markdown Table  

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |


### Plain Text Table  
```
+--------------------------------------+-----------------+  
| Zero and Oh                          | 0 O o           |  
+--------------------------------------+-----------------+  
| Ai and El and One and Exclam and Bar | I i L l 1 ! |   |  
+--------------------------------------+-----------------+  
| Two and Ze                           | 2 Z z           |  
+--------------------------------------+-----------------+  
| Five and Es                          | 5 S s           |  
+--------------------------------------+-----------------+  
| Six and be and Eight and Be          | 6 b 8 B         |  
+--------------------------------------+-----------------+  
| parenthesis and brackets             | ( { [ ] } )     |  
+--------------------------------------+-----------------+  
| Signs and Marks                      | # * ^ ~         |  
+--------------------------------------+-----------------+  
| Punctuations                         | . , : ; " ' ’ ` |  
+--------------------------------------+-----------------+  
```

### Unordered list:

*   Item foo abcdef
*   Item bar ghijkl
*   Item baz mnopqr
*   Item zip stuvwx

### Ordered list:

1.  Item 2018 123 one
1.  Item 2019 456 two
1.  Item 2020 789 three
1.  Item 2021 012 four

### Nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item

### Images
![/assets/img/SometypeMono_002.png](/assets/img/SometypeMono_002.png)   
![/assets/img/SometypeMono_003.png](/assets/img/SometypeMono_003.png)  
![/assets/img/SometypeMono_004.png](/assets/img/SometypeMono_004.png)  
![/assets/img/SometypeMono_007.png](/assets/img/SometypeMono_007.png)  
