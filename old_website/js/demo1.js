(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}


	intro = document.getElementById('intro');
	intro.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('0').offsetTop);
		toggleOverlay();
	});
	edu = document.getElementById('edu');
	edu.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('3').offsetTop);
		toggleOverlay();
	});
	wid = document.getElementById('wid');
	wid.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('5').offsetTop);
		toggleOverlay();
	});
	wiv = document.getElementById('wiv');
	wiv.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('1').offsetTop);
		toggleOverlay();
	});
	sah = document.getElementById('sah');
	sah.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('6').offsetTop);
		toggleOverlay();
	});

	next = document.getElementById('next');
	next.addEventListener('click', function() {
		window.scrollTo(0, document.getElementById('2').offsetTop);
	});

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();