(function(){describe("Morris.Hover",function(){return describe("with dummy content",function(){return beforeEach(function(){var e;return e=$('<div style="width:200px;height:180px"></div>').appendTo($("#test")),this.hover=new Morris.Hover({parent:e}),this.element=$("#test .morris-hover")}),it("should initialise a hidden, empty popup",function(){return this.element.should.exist,this.element.should.be.hidden,this.element.should.be.empty}),describe("#show",function(){return it("should show the popup",function(){return this.hover.show(),this.element.should.be.visible})}),describe("#hide",function(){return it("should hide the popup",function(){return this.hover.show(),this.hover.hide(),this.element.should.be.hidden})}),describe("#html",function(){return it("should replace the contents of the element",function(){return this.hover.html("<div>Foobarbaz</div>"),this.element.should.have.html("<div>Foobarbaz</div>")})}),describe("#moveTo",function(){return beforeEach(function(){return this.hover.html('<div style="width:84px;height:84px"></div>')}),it("should place the popup directly above the given point",function(){return this.hover.moveTo(100,150),this.element.should.have.css("left","50px"),this.element.should.have.css("top","40px")}),it("should place the popup below the given point if it does not fit above",function(){return this.hover.moveTo(100,50),this.element.should.have.css("left","50px"),this.element.should.have.css("top","60px")}),it("should center the popup vertically if it will not fit above or below",function(){return this.hover.moveTo(100,100),this.element.should.have.css("left","50px"),this.element.should.have.css("top","40px")}),it("should center the popup vertically if no y value is supplied",function(){return this.hover.moveTo(100),this.element.should.have.css("left","50px"),this.element.should.have.css("top","40px")})})}),describe("#update",function(){return it("should update content, show and reposition the popup",function(){var e,t;return t="<div style='width:84px;height:84px'>Hello, Everyone!</div>",new Morris.Hover({parent:$("#test")}).update(t,150,200),(e=$("#test .morris-hover")).should.have.css("left","100px"),e.should.have.css("top","90px"),e.should.have.text("Hello, Everyone!")})})})}).call(this);