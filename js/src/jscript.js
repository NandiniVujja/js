     	function img1change(){
			document.getElementById("imgs").style.background="url('src/1.jpeg')";
			var i = document.getElementById("img1"); 
			i.style.border="2px solid red";
			i.style.borderRadius="30px";
			var h = document.getElementById("heading");
			h.style.background ="#ffffff";
			h.style.border="10px solid #ffffff"
		}

		function img2change(){
			document.getElementById("imgs").style.background="url('src/2.jpeg')";
			var i = document.getElementById("img2"); 
			i.style.border="2px solid red";
			i.style.borderRadius="30px";
			var h = document.getElementById("heading");
			h.style.background ="#ffffff";
			h.style.border="10px solid #ffffff"
		}

		function img3change(){
			document.getElementById("imgs").style.background="url('src/3.jpeg')";
			var i = document.getElementById("img3"); 
			i.style.border="2px solid red";
			i.style.borderRadius="30px";
			var h = document.getElementById("heading");
			h.style.background ="#ffffff";
			h.style.border="50px solid #ffffff"
		}

		function imgout(){
			document.getElementById("imgs").style.background="linear-gradient(#4d4dff,#b3b3ff)";
			var h = document.getElementById("heading");
			h.style.background="#4d4dff";
			h.style.border="50px solid #4d4dff"
		}

		function age(){
			var out=document.getElementById("birth");
			var DOB=document.getElementById("dobirth").value;
			var millisecsBtwDOB = Date.parse(DOB);
			var millisecsBtwNow = Date.now();
			var millisecs = millisecsBtwNow-millisecsBtwDOB;
			var day=1000*60*60*24;
			var days = Math.round(millisecs/day);
			out.innerHTML="==>You are "+days+" days old!!";
			out.style.color="#2809ed"
		}

		function myFunction(){
			var bgColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
			var tColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
			random.style.background=bgColor;
			random.style.color=tColor;
		}