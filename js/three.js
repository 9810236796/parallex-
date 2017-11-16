




		function yscroll(){
					var upBtn = document.getElementById("upBtn");
					var yPos = window.pageYOffset;
						if(yPos > 500){
						upBtn.style.transition = "right 0.5s ease-in-out 0s";
						upBtn.style.right="0px";
					}else{
						upBtn.style.transition = "right 0.5s ease-in-out 0s";
						upBtn.style.right="-90px";
					}
				}


				window.onscroll=yscroll;