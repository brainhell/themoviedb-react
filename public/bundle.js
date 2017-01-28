webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactRouter = __webpack_require__(172);

	var _reactAddonsCssTransitionGroup = __webpack_require__(235);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _FrontPage = __webpack_require__(242);

	var _FrontPage2 = _interopRequireDefault(_FrontPage);

	var _Moviefullview = __webpack_require__(293);

	var _Moviefullview2 = _interopRequireDefault(_Moviefullview);

	var _Header = __webpack_require__(317);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(327);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _variables = __webpack_require__(331);

	var _variables2 = _interopRequireDefault(_variables);

	var _common = __webpack_require__(333);

	var _common2 = _interopRequireDefault(_common);

	var _layout = __webpack_require__(335);

	var _layout2 = _interopRequireDefault(_layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function About() {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    'This product uses the TMDb API but is not endorsed or certified by TMDb.'
	  );
	};
	var NotFound = function NotFound() {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    '404.. Whoops, page not found!'
	  );
	};

	var Container = function (_React$Component) {
	  _inherits(Container, _React$Component);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));
	  }

	  _createClass(Container, [{
	    key: 'render',
	    value: function render() {
	      var path = this.props.location.pathname;
	      var segment = path.split('/')[2] || 'root';
	      //console.log(this.context);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, { history: this.props.history }),
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          {
	            transitionName: segment === 'root' ? 'pageSlider' : 'pageSlider',
	            transitionEnterTimeout: 800,
	            transitionLeaveTimeout: 800 },
	          _react2.default.createElement(
	            'div',
	            { className: 'page-wrapper', key: this.props.location.pathname },
	            this.props.children
	          )
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }], [{
	    key: 'contextTypes',
	    value: function contextTypes() {
	      router: _react2.default.PropTypes.object.isRequired;
	    }
	  }]);

	  return Container;
	}(_react2.default.Component);

	;

	var App = function App() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: Container },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _FrontPage2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: About }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'movie/*', component: _Moviefullview2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
	    )
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('content'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _Hero = __webpack_require__(267);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _ResultList = __webpack_require__(290);

	var _ResultList2 = _interopRequireDefault(_ResultList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MovieList = function (_React$Component) {
	  _inherits(MovieList, _React$Component);

	  function MovieList() {
	    _classCallCheck(this, MovieList);

	    var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this));

	    _this.state = {
	      config: [],
	      data: []
	    };
	    return _this;
	  }

	  _createClass(MovieList, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _ApiConnect2.default.getConfig().then(function (config) {
	        _this2.setState({ config: config });
	      });
	      _ApiConnect2.default.getMovies().then(function (data) {
	        _this2.setState({ data: data });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page' },
	        this.state.config.images && this.state.data.results && _react2.default.createElement(_Hero2.default, { data: this.state.data, config: this.state.config }),
	        _react2.default.createElement(
	          'div',
	          { className: 'movies container' },
	          this.state.config.images && this.state.data.results && _react2.default.createElement(_ResultList2.default, { data: this.state.data, config: this.state.config })
	        )
	      );
	    }
	  }]);

	  return MovieList;
	}(_react2.default.Component);

	;

	exports.default = MovieList;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _axios = __webpack_require__(244);

	var _axios2 = _interopRequireDefault(_axios);

	var _Settings = __webpack_require__(266);

	var _Settings2 = _interopRequireDefault(_Settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getConfig: function getConfig() {
	    return _axios2.default.get(_Settings2.default.configUrl).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  getMovies: function getMovies() {
	    return _axios2.default.get(_Settings2.default.moviesUrl).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  getMovieFullview: function getMovieFullview(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  getReviews: function getReviews(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/reviews?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  getCredits: function getCredits(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/credits?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  getSimilar: function getSimilar(id) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'movie/' + id + '/similar?api_key=' + _Settings2.default.apiKey).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  },
	  Search: function Search(query) {
	    return _axios2.default.get(_Settings2.default.baseUrl + 'search/movie?api_key=' + _Settings2.default.apiKey + '&query=' + query).then(function (res) {
	      return res.data;
	    }).catch(function (error) {
	      return console.log(error);
	    });
	  }
	};

/***/ },
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';
	var baseUrl = 'https://api.themoviedb.org/3/';
	var configUrl = baseUrl + 'configuration?api_key=' + apiKey;
	var moviesUrl = baseUrl + 'discover/movie?primary_release_year=2016&sort_by=popularity.desc&api_key=' + apiKey;
	/*
	const MovieFullview
	const Reviews
	const Credits
	const Similar
	const Search = settings.baseUrl + 'search/movie?api_key=' + settings.apiKey + '&query=' + query
	*/
	exports.default = {
	  apiKey: apiKey,
	  baseUrl: baseUrl,
	  configUrl: configUrl,
	  moviesUrl: moviesUrl
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactTextTruncate = __webpack_require__(268);

	var _reactTextTruncate2 = _interopRequireDefault(_reactTextTruncate);

	var _reactRouter = __webpack_require__(172);

	var _movieHero = __webpack_require__(269);

	var _movieHero2 = _interopRequireDefault(_movieHero);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Slider = __webpack_require__(273);


	//var HeroPrevArrow = (props) => <i {...this.props} class="material-icons">chevron_left</i>  
	//var HeroNextArrow = (props) => <i {...this.props} class="material-icons">chevron_right</i>  

	var HeroNextArrow = _react2.default.createClass({
	  displayName: 'HeroNextArrow',

	  render: function render() {
	    console.log(this.props.className);
	    return _react2.default.createElement(
	      'i',
	      _extends({}, this.props, { className: 'slick-arrow slick-next material-icons' }),
	      'chevron_right'
	    );
	  }
	});

	var HeroPrevArrow = _react2.default.createClass({
	  displayName: 'HeroPrevArrow',

	  render: function render() {
	    return _react2.default.createElement(
	      'i',
	      _extends({}, this.props, { className: 'slick-arrow slick-prev material-icons' }),
	      'chevron_left'
	    );
	  }
	});

	var Hero = function (_React$Component) {
	  _inherits(Hero, _React$Component);

	  function Hero() {
	    _classCallCheck(this, Hero);

	    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this));
	  }

	  _createClass(Hero, [{
	    key: 'render',
	    value: function render() {
	      var sliderSettings = {
	        dots: true,
	        infinite: true,
	        speed: 500,
	        autoplay: true,
	        autoplaySpeed: 5000,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        nextArrow: _react2.default.createElement(HeroNextArrow, null),
	        prevArrow: _react2.default.createElement(HeroPrevArrow, null)
	      };

	      var imageBaseUrl = this.props.config.images.secure_base_url;
	      var fileSize = this.props.config.images.backdrop_sizes[3];
	      var NumSlides = 5;

	      var slides = this.props.data.results.slice(0, NumSlides).map(function (result) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'movie--hero', key: result.id },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'movie--hero__info' },
	              _react2.default.createElement(
	                'h2',
	                { className: 'movie--hero__title' },
	                result.title
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: 'movie--hero__overview' },
	                _react2.default.createElement(_reactTextTruncate2.default, { containerClassName: 'movie--hero__overview', line: 3, truncateText: '\u2026', text: result.overview })
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { className: 'movie--hero__link', to: '/movie/' + result.id },
	                'Read more'
	              )
	            )
	          ),
	          _react2.default.createElement('img', { className: 'movie--hero__image', src: imageBaseUrl + fileSize + result.backdrop_path })
	        );
	      });

	      return _react2.default.createElement(
	        Slider,
	        _extends({ className: 'hero' }, sliderSettings),
	        slides
	      );
	    }
	  }]);

	  return Hero;
	}(_react2.default.Component);

	exports.default = Hero;

/***/ },
/* 268 */,
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(270);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--hero.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--hero.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".hero {\n\tposition: relative;\n\tmargin-bottom: 4em;\n\tcolor: white;\n}\n\n.hero a {\n\tcolor: white;\n}\n\n.movie--hero {\n\tdisplay: inline-block;\n}\n\n.movie--hero__image {\n\n}\n\n.movie--hero__title {\n\tfont-size: 60px;\n}\n\n.movie--hero__overview {\n\tfont-size: 20px;\n\tmargin-bottom: 1em;\n}\n\n.movie--hero__link {\n\tfont-size: 20px;\n}\n\n.movie--hero__info {\n\t-webkit-transition: opacity 0.5s, -webkit-transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, -webkit-transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, transform 0.3s ease-in-out;\n\ttransition: opacity 0.5s, transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n\t-webkit-transition-delay: 0.5s;\n\t        transition-delay: 0.5s;\n\t-webkit-transform: translateX(-50px);\n\t        transform: translateX(-50px);\n\tposition: absolute;\n\topacity: 0;\n\ttop: 50%;\n\twidth: 30em;\n\tpadding: 2em;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n\n.slick-arrow {\n\tposition: absolute;\n\tz-index: 999;\n\ttop: 40%;\n\tcursor: pointer;\n\tfont-size: 80px\n}\n\n.slick-arrow.slick-prev {\n\tleft: 0;\n}\n\n.slick-arrow.slick-next {\n\tright: 0;\n}\n\n.slick-dots {\n\ttext-align: center;\n\tposition: absolute;\n\tbottom: 1em;\n\twidth: 100%;\n}\n\n.slick-dots li {\n\tdisplay: inline;\n}\n\n.slick-dots li button {\n\theight: 12px;\n\tcursor: pointer;\n\twidth: 12px;\n\tborder-radius: 12px;\n\tborder: none;\n\tfont-size: 0;\n\tmargin: 10px;\n\tbackground-color: white;\n}\n\n\n.movie--hero.slick-active .movie--hero__info {\n\t-webkit-transform: translateX(0);\n\t        transform: translateX(0);\n\topacity: 1;\n}\n\n", ""]);

	// exports


/***/ },
/* 271 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(274);

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _innerSlider = __webpack_require__(275);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _json2mq = __webpack_require__(285);

	var _json2mq2 = _interopRequireDefault(_json2mq);

	var _reactResponsiveMixin = __webpack_require__(287);

	var _reactResponsiveMixin2 = _interopRequireDefault(_reactResponsiveMixin);

	var _defaultProps = __webpack_require__(280);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = _react2.default.createClass({
	  displayName: 'Slider',

	  mixins: [_reactResponsiveMixin2.default],
	  innerSlider: null,
	  innerSliderRefHandler: function innerSliderRefHandler(ref) {
	    this.innerSlider = ref;
	  },
	  getInitialState: function getInitialState() {
	    return {
	      breakpoint: null
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });

	      breakpoints.forEach(function (breakpoint, index) {
	        var bQuery;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
	        }
	        _this.media(bQuery, function () {
	          _this.setState({ breakpoint: breakpoint });
	        });
	      });

	      // Register media query for full screen. Need to support resize from small to large
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

	      this.media(query, function () {
	        _this.setState({ breakpoint: null });
	      });
	    }
	  },

	  slickPrev: function slickPrev() {
	    this.innerSlider.slickPrev();
	  },

	  slickNext: function slickNext() {
	    this.innerSlider.slickNext();
	  },

	  slickGoTo: function slickGoTo(slide) {
	    this.innerSlider.slickGoTo(slide);
	  },

	  render: function render() {
	    var _this2 = this;

	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this2.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }

	    var children = this.props.children;
	    if (!Array.isArray(children)) {
	      children = [children];
	    }

	    // Children may contain false or null, so we should filter them
	    children = children.filter(function (child) {
	      return !!child;
	    });

	    if (settings === 'unslick') {
	      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
	      return _react2.default.createElement(
	        'div',
	        null,
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        _innerSlider.InnerSlider,
	        _extends({ ref: this.innerSliderRefHandler }, settings),
	        children
	      );
	    }
	  }
	});

	module.exports = Slider;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.InnerSlider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eventHandlers = __webpack_require__(276);

	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

	var _helpers = __webpack_require__(278);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _initialState = __webpack_require__(279);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _defaultProps = __webpack_require__(280);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _classnames = __webpack_require__(281);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _track = __webpack_require__(282);

	var _dots = __webpack_require__(283);

	var _arrows = __webpack_require__(284);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InnerSlider = exports.InnerSlider = _react2.default.createClass({
	  displayName: 'InnerSlider',

	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null,
	  track: null,
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return _defaultProps2.default;
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    this.setState({
	      mounted: true
	    });
	    var lazyLoadedList = [];
	    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
	      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
	        lazyLoadedList.push(i);
	      }
	    }

	    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
	      this.setState({
	        lazyLoadedList: lazyLoadedList
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    // Hack for autoplay -- Inspect Later
	    this.initialize(this.props);
	    this.adaptHeight();

	    // To support server-side rendering
	    if (!window) {
	      return;
	    }
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.onWindowResized);
	    } else {
	      window.attachEvent('onresize', this.onWindowResized);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationEndCallback) {
	      clearTimeout(this.animationEndCallback);
	    }
	    if (window.addEventListener) {
	      window.removeEventListener('resize', this.onWindowResized);
	    } else {
	      window.detachEvent('onresize', this.onWindowResized);
	    }
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.slickGoTo != nextProps.slickGoTo) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
	      }
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.slickGoTo,
	        currentSlide: this.state.currentSlide
	      });
	    } else if (this.state.currentSlide >= nextProps.children.length) {
	      this.update(nextProps);
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.children.length - nextProps.slidesToShow,
	        currentSlide: this.state.currentSlide
	      });
	    } else {
	      this.update(nextProps);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    this.changeSlide({ message: 'previous' });
	  },
	  slickNext: function slickNext() {
	    this.changeSlide({ message: 'next' });
	  },
	  slickGoTo: function slickGoTo(slide) {
	    typeof slide === 'number' && this.changeSlide({
	      message: 'index',
	      index: slide,
	      currentSlide: this.state.currentSlide
	    });
	  },
	  render: function render() {
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });

	    var trackProps = {
	      fade: this.props.fade,
	      cssEase: this.props.cssEase,
	      speed: this.props.speed,
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
	      currentSlide: this.state.currentSlide,
	      lazyLoad: this.props.lazyLoad,
	      lazyLoadedList: this.state.lazyLoadedList,
	      rtl: this.props.rtl,
	      slideWidth: this.state.slideWidth,
	      slidesToShow: this.props.slidesToShow,
	      slidesToScroll: this.props.slidesToScroll,
	      slideCount: this.state.slideCount,
	      trackStyle: this.state.trackStyle,
	      variableWidth: this.props.variableWidth
	    };

	    var dots;

	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = {
	        dotsClass: this.props.dotsClass,
	        slideCount: this.state.slideCount,
	        slidesToShow: this.props.slidesToShow,
	        currentSlide: this.state.currentSlide,
	        slidesToScroll: this.props.slidesToScroll,
	        clickHandler: this.changeSlide,
	        children: this.props.children,
	        customPaging: this.props.customPaging
	      };

	      dots = _react2.default.createElement(_dots.Dots, dotProps);
	    }

	    var prevArrow, nextArrow;

	    var arrowProps = {
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      currentSlide: this.state.currentSlide,
	      slideCount: this.state.slideCount,
	      slidesToShow: this.props.slidesToShow,
	      prevArrow: this.props.prevArrow,
	      nextArrow: this.props.nextArrow,
	      clickHandler: this.changeSlide
	    };

	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }

	    var verticalHeightStyle = null;

	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }

	    var centerPaddingStyle = null;

	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }

	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);

	    return _react2.default.createElement(
	      'div',
	      { className: className, onMouseEnter: this.onInnerSliderEnter, onMouseLeave: this.onInnerSliderLeave },
	      prevArrow,
	      _react2.default.createElement(
	        'div',
	        {
	          ref: this.listRefHandler,
	          className: 'slick-list',
	          style: listStyle,
	          onMouseDown: this.swipeStart,
	          onMouseMove: this.state.dragging ? this.swipeMove : null,
	          onMouseUp: this.swipeEnd,
	          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	          onTouchStart: this.swipeStart,
	          onTouchMove: this.state.dragging ? this.swipeMove : null,
	          onTouchEnd: this.swipeEnd,
	          onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	          onKeyDown: this.props.accessibility ? this.keyHandler : null },
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      nextArrow,
	      dots
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _trackHelper = __webpack_require__(277);

	var _helpers = __webpack_require__(278);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventHandlers = {
	  // Event handler for previous and next
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props;
	    var slidesToScroll = _props.slidesToScroll;
	    var slidesToShow = _props.slidesToShow;
	    var _state = this.state;
	    var slideCount = _state.slideCount;
	    var currentSlide = _state.currentSlide;

	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots' || options.message === 'children') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    } else if (options.message === 'index') {
	      targetSlide = parseInt(options.index);
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    }

	    this.slideHandler(targetSlide);
	  },

	  // Accessiblity handler for previous and next
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
	  swipeStart: function swipeStart(e) {
	    var touches, posX, posY;

	    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
	      return;
	    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
	      return;
	    }
	    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.setState({
	      dragging: true,
	      touchObject: {
	        startX: posX,
	        startY: posY,
	        curX: posX,
	        curY: posY
	      }
	    });
	  },
	  swipeMove: function swipeMove(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    if (this.state.animating) {
	      return;
	    }
	    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
	      e.preventDefault();
	    }
	    var swipeLeft;
	    var curLeft, positionOffset;
	    var touchObject = this.state.touchObject;

	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

	    if (this.props.verticalSwiping) {
	      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
	    }

	    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

	    if (this.props.verticalSwiping) {
	      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	    }

	    var currentSlide = this.state.currentSlide;
	    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
	    var swipeDirection = this.swipeDirection(this.state.touchObject);
	    var touchSwipeLength = touchObject.swipeLength;

	    if (this.props.infinite === false) {
	      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

	        if (this.state.edgeDragged === false && this.props.edgeEvent) {
	          this.props.edgeEvent(swipeDirection);
	          this.setState({ edgeDragged: true });
	        }
	      }
	    }

	    if (this.state.swiped === false && this.props.swipeEvent) {
	      this.props.swipeEvent(swipeDirection);
	      this.setState({ swiped: true });
	    }

	    if (!this.props.vertical) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }

	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }

	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });

	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 4) {
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];

	    if (!this.props.infinite) {
	      max = this.state.slideCount;
	    } else {
	      breakPoint = this.props.slidesToShow * -1;
	      counter = this.props.slidesToShow * -1;
	      max = this.state.slideCount * 2;
	    }

	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + this.props.slidesToScroll;

	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }

	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;

	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }

	        prevNavigable = navigables[n];
	      }
	    }

	    return index;
	  },
	  getSlideCount: function getSlideCount() {
	    var _this = this;

	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;

	      var slickList = _reactDom2.default.findDOMNode(this.list);

	      var slides = slickList.querySelectorAll('.slick-slide');

	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }

	        return true;
	      });

	      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },

	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = this.swipeDirection(touchObject);

	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
	    }

	    // reset the state of touch related state variables.
	    this.setState({
	      dragging: false,
	      edgeDragged: false,
	      swiped: false,
	      swipeLeft: null,
	      touchObject: {}
	    });
	    // Fix for #13
	    if (!touchObject.swipeLength) {
	      return;
	    }
	    if (touchObject.swipeLength > minSwipe) {
	      e.preventDefault();

	      var slideCount = void 0,
	          newSlide = void 0;

	      switch (swipeDirection) {

	        case 'left':
	        case 'down':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 0;
	          break;

	        case 'right':
	        case 'up':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 1;
	          break;

	        default:
	          slideCount = this.state.currentSlide;

	      }

	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));

	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};

	exports.default = EventHandlers;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	  var trackWidth, trackHeight;

	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

	  if (!spec.vertical) {
	    if (spec.variableWidth) {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    } else if (spec.centerMode) {
	      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
	    } else {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    }
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };

	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }

	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }

	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }

	  return style;
	};

	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};

	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (spec.fade) {
	    return 0;
	  }

	  if (spec.infinite) {
	    if (spec.slideCount >= spec.slidesToShow) {
	      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
	    }
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        if (spec.slideIndex > spec.slideCount) {
	          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
	        } else {
	          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
	        }
	      }
	    }
	  } else {

	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
	        slideOffset = slidesToOffset * spec.slideWidth;
	      }
	    }
	  }

	  if (spec.centerMode) {
	    if (spec.infinite) {
	      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    } else {
	      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    }
	  }

	  if (!spec.vertical) {
	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
	  }

	  if (spec.variableWidth === true) {
	    var targetSlideIndex;
	    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
	    } else {
	      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
	    }
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (spec.centerMode === true) {
	      if (spec.infinite === false) {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
	      } else {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
	      }

	      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	      targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
	    }
	  }

	  return targetLeft;
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackHelper = __webpack_require__(277);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helpers = {
	  initialize: function initialize(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);

	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      currentSlide: currentSlide,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });

	      this.autoPlay(); // once we're set up, trigger the initial autoplay.
	    });
	  },
	  update: function update(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    // This method has mostly same code as initialize method.
	    // Refactor it
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    // pause slider if autoplay is set to false
	    if (!props.autoplay) this.pause();

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  getWidth: function getWidth(elem) {
	    return elem.getBoundingClientRect().width || elem.offsetWidth;
	  },
	  getHeight: function getHeight(elem) {
	    return elem.getBoundingClientRect().height || elem.offsetHeight;
	  },

	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
	      }
	    }
	  },
	  canGoNext: function canGoNext(opts) {
	    var canGo = true;
	    if (!opts.infinite) {
	      if (opts.centerMode) {
	        // check if current slide is last slide
	        if (opts.currentSlide >= opts.slideCount - 1) {
	          canGo = false;
	        }
	      } else {
	        // check if all slides are shown in slider
	        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
	          canGo = false;
	        }
	      }
	    }
	    return canGo;
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;

	    // Functionality of animateSlide and postSlide is merged into this function
	    // console.log('slideHandler', index);
	    var targetSlide, currentSlide;
	    var targetLeft, currentLeft;
	    var callback;

	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }

	    if (this.props.fade) {
	      currentSlide = this.state.currentSlide;

	      // Don't change slide if it's not infite and current slide is the first or last slide.
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }

	      //  Shifting targetSlide back into the range
	      if (index < 0) {
	        targetSlide = index + this.state.slideCount;
	      } else if (index >= this.state.slideCount) {
	        targetSlide = index - this.state.slideCount;
	      } else {
	        targetSlide = index;
	      }

	      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
	        });
	      }

	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(targetSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: targetSlide
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });

	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, targetSlide);
	      }

	      this.autoPlay();
	      return;
	    }

	    targetSlide = index;
	    if (targetSlide < 0) {
	      if (this.props.infinite === false) {
	        currentSlide = 0;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
	      } else {
	        currentSlide = this.state.slideCount + targetSlide;
	      }
	    } else if (targetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        currentSlide = this.state.slideCount - this.props.slidesToShow;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = 0;
	      } else {
	        currentSlide = targetSlide - this.state.slideCount;
	      }
	    } else {
	      currentSlide = targetSlide;
	    }

	    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: targetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    if (this.props.infinite === false) {
	      targetLeft = currentLeft;
	    }

	    if (this.props.beforeChange) {
	      this.props.beforeChange(this.state.currentSlide, currentSlide);
	    }

	    if (this.props.lazyLoad) {
	      var loaded = true;
	      var slidesToLoad = [];
	      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
	        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
	        if (!loaded) {
	          slidesToLoad.push(i);
	        }
	      }
	      if (!loaded) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
	        });
	      }
	    }

	    // Slide Transition happens here.
	    // animated transition happens to target Slide and
	    // non - animated transition happens to current Slide
	    // If CSS transitions are false, directly go the current slide.

	    if (this.props.useCSS === false) {

	      this.setState({
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(currentSlide);
	        }
	      });
	    } else {

	      var nextStateChanges = {
	        animating: false,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
	        swipeLeft: null
	      };

	      callback = function callback() {
	        _this.setState(nextStateChanges);
	        if (_this.props.afterChange) {
	          _this.props.afterChange(currentSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });
	    }

	    this.autoPlay();
	  },
	  swipeDirection: function swipeDirection(touchObject) {
	    var xDist, yDist, r, swipeAngle;

	    xDist = touchObject.startX - touchObject.curX;
	    yDist = touchObject.startY - touchObject.curY;
	    r = Math.atan2(yDist, xDist);

	    swipeAngle = Math.round(r * 180 / Math.PI);
	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }
	    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	      return this.props.rtl === false ? 'left' : 'right';
	    }
	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return this.props.rtl === false ? 'right' : 'left';
	    }
	    if (this.props.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }

	    return 'vertical';
	  },
	  play: function play() {
	    var nextIndex;

	    if (!this.state.mounted) {
	      return false;
	    }

	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if (this.canGoNext(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }

	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    if (this.state.autoPlayTimer) {
	      return;
	    }
	    if (this.props.autoplay) {
	      this.setState({
	        autoPlayTimer: setInterval(this.play, this.props.autoplaySpeed)
	      });
	    }
	  },
	  pause: function pause() {
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	      this.setState({
	        autoPlayTimer: null
	      });
	    }
	  }
	};

	exports.default = helpers;

/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";

	var initialState = {
	    animating: false,
	    dragging: false,
	    autoPlayTimer: null,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },

	    lazyLoadedList: [],

	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0

	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};

	module.exports = initialState;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow are react componets
	    nextArrow: null,
	    prevArrow: null
	};

	module.exports = defaultProps;

/***/ },
/* 281 */,
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Track = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(281);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }

	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned
	  });
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }

	  if (spec.fade) {
	    style.position = 'relative';
	    style.left = -spec.index * spec.slideWidth;
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  // key could be a zero
	  return child.key === null || child.key === undefined ? fallbackKey : child.key;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var count = _react2.default.Children.count(spec.children);

	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };

	    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slickClasses = getSlideClasses((0, _objectAssign2.default)({ index: index }, spec));
	    var cssClasses;

	    if (child.props.className) {
	      cssClasses = (0, _classnames2.default)(slickClasses, child.props.className);
	    } else {
	      cssClasses = slickClasses;
	    }

	    var onClick = function onClick(e) {
	      child.props && child.props.onClick && child.props.onClick(e);
	      if (spec.focusOnSelect) {
	        spec.focusOnSelect(childOnClickOptions);
	      }
	    };

	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: cssClasses,
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: onClick
	    }));

	    // variableWidth doesn't wrap properly.
	    if (spec.infinite && spec.fade === false) {
	      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

	      if (index >= count - infiniteCount) {
	        key = -(count - index);
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }

	      if (index < infiniteCount) {
	        key = count + index;
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track = exports.Track = _react2.default.createClass({
	  displayName: 'Track',

	  render: function render() {
	    var slides = renderSlides.call(this, this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  }
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Dots = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(281);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getDotCount = function getDotCount(spec) {
	  var dots;
	  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  return dots;
	};

	var Dots = exports.Dots = _react2.default.createClass({
	  displayName: 'Dots',


	  clickHandler: function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  },
	  render: function render() {
	    var _this = this;

	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll
	    });

	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

	      var leftBound = i * _this.props.slidesToScroll;
	      var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
	      });

	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this.props.slidesToScroll,
	        currentSlide: _this.props.currentSlide
	      };

	      var onClick = _this.clickHandler.bind(_this, dotOptions);

	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this.props.customPaging(i), { onClick: onClick })
	      );
	    });

	    return _react2.default.createElement(
	      'ul',
	      { className: this.props.dotsClass, style: { display: 'block' } },
	      dots
	    );
	  }
	});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(281);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _helpers = __webpack_require__(278);

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PrevArrow = exports.PrevArrow = _react2.default.createClass({
	  displayName: 'PrevArrow',


	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }

	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var prevArrow;

	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, prevArrowProps);
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }

	    return prevArrow;
	  }
	});

	var NextArrow = exports.NextArrow = _react2.default.createClass({
	  displayName: 'NextArrow',

	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

	    if (!_helpers2.default.canGoNext(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }

	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };

	    var nextArrow;

	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, nextArrowProps);
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }

	    return nextArrow;
	  }
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(286);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ },
/* 286 */
/***/ function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(288);
	var enquire = canUseDOM && __webpack_require__(289);
	var json2mq = __webpack_require__(285);

	var ResponsiveMixin = {
	  media: function (query, handler) {
	    query = json2mq(query);
	    if (typeof handler === 'function') {
	      handler = {
	        match: handler
	      };
	    }
	    canUseDOM && enquire.register(query, handler);

	    // Queue the handlers to unregister them at unmount  
	    if (! this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers = [];
	    }
	    this._responsiveMediaHandlers.push({query: query, handler: handler});
	  },
	  componentWillUnmount: function () {
	    if (this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers.forEach(function(obj) {
	        canUseDOM && enquire.unregister(obj.query, obj.handler);
	      });
	    }
	  }
	};

	module.exports = ResponsiveMixin;


/***/ },
/* 288 */
/***/ function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
	 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	;(function (name, context, factory) {
		var matchMedia = window.matchMedia;

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = factory(matchMedia);
		}
		else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return (context[name] = factory(matchMedia));
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else {
			context[name] = factory(matchMedia);
		}
	}('enquire', this, function (matchMedia) {

		'use strict';

	    /*jshint unused:false */
	    /**
	     * Helper function for iterating over a collection
	     *
	     * @param collection
	     * @param fn
	     */
	    function each(collection, fn) {
	        var i      = 0,
	            length = collection.length,
	            cont;

	        for(i; i < length; i++) {
	            cont = fn(collection[i], i);
	            if(cont === false) {
	                break; //allow early exit
	            }
	        }
	    }

	    /**
	     * Helper function for determining whether target object is an array
	     *
	     * @param target the object under test
	     * @return {Boolean} true if array, false otherwise
	     */
	    function isArray(target) {
	        return Object.prototype.toString.apply(target) === '[object Array]';
	    }

	    /**
	     * Helper function for determining whether target object is a function
	     *
	     * @param target the object under test
	     * @return {Boolean} true if function, false otherwise
	     */
	    function isFunction(target) {
	        return typeof target === 'function';
	    }

	    /**
	     * Delegate to handle a media query being matched and unmatched.
	     *
	     * @param {object} options
	     * @param {function} options.match callback for when the media query is matched
	     * @param {function} [options.unmatch] callback for when the media query is unmatched
	     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	     * @constructor
	     */
	    function QueryHandler(options) {
	        this.options = options;
	        !options.deferSetup && this.setup();
	    }
	    QueryHandler.prototype = {

	        /**
	         * coordinates setup of the handler
	         *
	         * @function
	         */
	        setup : function() {
	            if(this.options.setup) {
	                this.options.setup();
	            }
	            this.initialised = true;
	        },

	        /**
	         * coordinates setup and triggering of the handler
	         *
	         * @function
	         */
	        on : function() {
	            !this.initialised && this.setup();
	            this.options.match && this.options.match();
	        },

	        /**
	         * coordinates the unmatch event for the handler
	         *
	         * @function
	         */
	        off : function() {
	            this.options.unmatch && this.options.unmatch();
	        },

	        /**
	         * called when a handler is to be destroyed.
	         * delegates to the destroy or unmatch callbacks, depending on availability.
	         *
	         * @function
	         */
	        destroy : function() {
	            this.options.destroy ? this.options.destroy() : this.off();
	        },

	        /**
	         * determines equality by reference.
	         * if object is supplied compare options, if function, compare match callback
	         *
	         * @function
	         * @param {object || function} [target] the target for comparison
	         */
	        equals : function(target) {
	            return this.options === target || this.options.match === target;
	        }

	    };
	    /**
	     * Represents a single media query, manages it's state and registered handlers for this query
	     *
	     * @constructor
	     * @param {string} query the media query string
	     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	     */
	    function MediaQuery(query, isUnconditional) {
	        this.query = query;
	        this.isUnconditional = isUnconditional;
	        this.handlers = [];
	        this.mql = matchMedia(query);

	        var self = this;
	        this.listener = function(mql) {
	            self.mql = mql;
	            self.assess();
	        };
	        this.mql.addListener(this.listener);
	    }
	    MediaQuery.prototype = {

	        /**
	         * add a handler for this query, triggering if already active
	         *
	         * @param {object} handler
	         * @param {function} handler.match callback for when query is activated
	         * @param {function} [handler.unmatch] callback for when query is deactivated
	         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	         */
	        addHandler : function(handler) {
	            var qh = new QueryHandler(handler);
	            this.handlers.push(qh);

	            this.matches() && qh.on();
	        },

	        /**
	         * removes the given handler from the collection, and calls it's destroy methods
	         * 
	         * @param {object || function} handler the handler to remove
	         */
	        removeHandler : function(handler) {
	            var handlers = this.handlers;
	            each(handlers, function(h, i) {
	                if(h.equals(handler)) {
	                    h.destroy();
	                    return !handlers.splice(i,1); //remove from array and exit each early
	                }
	            });
	        },

	        /**
	         * Determine whether the media query should be considered a match
	         * 
	         * @return {Boolean} true if media query can be considered a match, false otherwise
	         */
	        matches : function() {
	            return this.mql.matches || this.isUnconditional;
	        },

	        /**
	         * Clears all handlers and unbinds events
	         */
	        clear : function() {
	            each(this.handlers, function(handler) {
	                handler.destroy();
	            });
	            this.mql.removeListener(this.listener);
	            this.handlers.length = 0; //clear array
	        },

	        /*
	         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	         */
	        assess : function() {
	            var action = this.matches() ? 'on' : 'off';

	            each(this.handlers, function(handler) {
	                handler[action]();
	            });
	        }
	    };
	    /**
	     * Allows for registration of query handlers.
	     * Manages the query handler's state and is responsible for wiring up browser events
	     *
	     * @constructor
	     */
	    function MediaQueryDispatch () {
	        if(!matchMedia) {
	            throw new Error('matchMedia not present, legacy browsers require a polyfill');
	        }

	        this.queries = {};
	        this.browserIsIncapable = !matchMedia('only all').matches;
	    }

	    MediaQueryDispatch.prototype = {

	        /**
	         * Registers a handler for the given media query
	         *
	         * @param {string} q the media query
	         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	         * @param {function} options.match fired when query matched
	         * @param {function} [options.unmatch] fired when a query is no longer matched
	         * @param {function} [options.setup] fired when handler first triggered
	         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	         */
	        register : function(q, options, shouldDegrade) {
	            var queries         = this.queries,
	                isUnconditional = shouldDegrade && this.browserIsIncapable;

	            if(!queries[q]) {
	                queries[q] = new MediaQuery(q, isUnconditional);
	            }

	            //normalise to object in an array
	            if(isFunction(options)) {
	                options = { match : options };
	            }
	            if(!isArray(options)) {
	                options = [options];
	            }
	            each(options, function(handler) {
	                queries[q].addHandler(handler);
	            });

	            return this;
	        },

	        /**
	         * unregisters a query and all it's handlers, or a specific handler for a query
	         *
	         * @param {string} q the media query to target
	         * @param {object || function} [handler] specific handler to unregister
	         */
	        unregister : function(q, handler) {
	            var query = this.queries[q];

	            if(query) {
	                if(handler) {
	                    query.removeHandler(handler);
	                }
	                else {
	                    query.clear();
	                    delete this.queries[q];
	                }
	            }

	            return this;
	        }
	    };

		return new MediaQueryDispatch();

	}));

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(172);

	var _movieList = __webpack_require__(291);

	var _movieList2 = _interopRequireDefault(_movieList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ResultList = function ResultList(props) {
	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = props.config.images.backdrop_sizes[0];

	  var resultNodes = props.data.results.map(function (result) {
	    var path = '/movie/' + result.id;
	    return _react2.default.createElement(
	      'div',
	      { className: 'movie', key: result.id },
	      _react2.default.createElement('img', { className: 'movie--image', src: imageBaseUrl + fileSize + result.poster_path }),
	      _react2.default.createElement(
	        'div',
	        { className: 'movie--info' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'movie--title' },
	          result.title
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { className: 'movie--link', to: path },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'arrow_forward'
	          )
	        )
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'resultList' },
	    resultNodes
	  );
	};

	exports.default = ResultList;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--list.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--list.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".resultList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.movie {\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  position: relative;\n  overflow: hidden;\n  color: $fontcolor;\n  overflow: hidden\n}\n\n.movie:hover .movie--info {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.movie--info {\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1), -webkit-transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  background: rgba(255,255,255, 0.8);\n  position: absolute;\n  bottom: 0;\n  padding: 18px;\n  width: 100%;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n}\n\n.movie--link {\n  font-size: 25px;\n}\n\nh2.movie--title {\n  font-size: 25px;\n  margin: 0;\n}\n", ""]);

	// exports


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _FullView = __webpack_require__(294);

	var _FullView2 = _interopRequireDefault(_FullView);

	var _Reviews = __webpack_require__(310);

	var _Reviews2 = _interopRequireDefault(_Reviews);

	var _Credits = __webpack_require__(313);

	var _Credits2 = _interopRequireDefault(_Credits);

	var _Similar = __webpack_require__(316);

	var _Similar2 = _interopRequireDefault(_Similar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MovieFullView = function (_React$Component) {
	  _inherits(MovieFullView, _React$Component);

	  function MovieFullView() {
	    _classCallCheck(this, MovieFullView);

	    var _this = _possibleConstructorReturn(this, (MovieFullView.__proto__ || Object.getPrototypeOf(MovieFullView)).call(this));

	    _this.state = {
	      config: [],
	      data: [],
	      credits: [],
	      reviews: [],
	      similar: []
	    };
	    return _this;
	  }

	  _createClass(MovieFullView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      _ApiConnect2.default.getConfig().then(function (config) {
	        _this2.setState({ config: config });
	      });
	      _ApiConnect2.default.getMovieFullview(this.props.params.splat).then(function (data) {
	        _this2.setState({ data: data });
	      });
	      _ApiConnect2.default.getReviews(this.props.params.splat).then(function (reviews) {
	        _this2.setState({ reviews: reviews });
	      });
	      _ApiConnect2.default.getCredits(this.props.params.splat).then(function (credits) {
	        _this2.setState({ credits: credits });
	      });
	      _ApiConnect2.default.getSimilar(this.props.params.splat).then(function (similar) {
	        _this2.setState({ similar: similar });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page movie__full' },
	        this.state.config.images && this.state.data.id && _react2.default.createElement(_FullView2.default, { data: this.state.data, config: this.state.config }),
	        this.state.credits.id && _react2.default.createElement(_Credits2.default, { data: this.state.credits, config: this.state.config }),
	        this.state.reviews.total_results > 0 && _react2.default.createElement(_Reviews2.default, { data: this.state.reviews }),
	        this.state.similar.total_results > 0 && _react2.default.createElement(_Similar2.default, { data: this.state.similar, config: this.state.config })
	      );
	    }
	  }]);

	  return MovieFullView;
	}(_react2.default.Component);

	;

	exports.default = MovieFullView;

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(281);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _materialIcons = __webpack_require__(295);

	var _materialIcons2 = _interopRequireDefault(_materialIcons);

	var _loader = __webpack_require__(300);

	var _loader2 = _interopRequireDefault(_loader);

	var _movieFull = __webpack_require__(302);

	var _movieFull2 = _interopRequireDefault(_movieFull);

	var _GenreList = __webpack_require__(304);

	var _GenreList2 = _interopRequireDefault(_GenreList);

	var _Details = __webpack_require__(307);

	var _Details2 = _interopRequireDefault(_Details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FullView = function (_React$Component) {
	  _inherits(FullView, _React$Component);

	  function FullView() {
	    _classCallCheck(this, FullView);

	    var _this = _possibleConstructorReturn(this, (FullView.__proto__ || Object.getPrototypeOf(FullView)).call(this));

	    _this.state = {
	      img_loaded: false
	    };
	    return _this;
	  }

	  _createClass(FullView, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var imageBaseUrl = this.props.config.images.secure_base_url;
	      var fileSize = this.props.config.images.backdrop_sizes[3];
	      var _props$data = this.props.data,
	          title = _props$data.title,
	          tagline = _props$data.tagline,
	          overview = _props$data.overview,
	          backdrop_path = _props$data.backdrop_path,
	          genres = _props$data.genres,
	          vote_average = _props$data.vote_average;


	      var classes = (0, _classnames2.default)({
	        'movie--image__full': true,
	        'img__loaded': this.state.img_loaded
	      });

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'image-load-container' },
	          !this.state.img_loaded && _react2.default.createElement('div', { className: 'loader' }),
	          _react2.default.createElement('img', { onLoad: function onLoad(e) {
	              return _this2.setState({ img_loaded: true });
	            },
	            onError: function onError(e) {
	              return _this2.setState({ img_loaded: true });
	            },
	            className: classes,
	            src: imageBaseUrl + fileSize + backdrop_path
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'h1',
	            { className: 'movie--title__full' },
	            title
	          ),
	          _react2.default.createElement(
	            'h2',
	            { className: 'movie--tagline__full' },
	            tagline
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'movie--info__full' },
	            _react2.default.createElement(_GenreList2.default, { genres: genres }),
	            _react2.default.createElement(
	              'div',
	              { className: 'movie--overview__full' },
	              _react2.default.createElement(
	                'p',
	                null,
	                overview
	              )
	            ),
	            _react2.default.createElement(_Details2.default, { details: this.props.data }),
	            _react2.default.createElement(
	              'div',
	              { className: 'movie--score__full' },
	              _react2.default.createElement(
	                'span',
	                { className: 'score' },
	                vote_average
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return FullView;
	}(_react2.default.Component);

	;

	exports.default = FullView;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(296);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./material-icons.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./material-icons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Material Icons'),\n    local('MaterialIcons-Regular'),\n    url(" + __webpack_require__(297) + ") format('woff2'),\n    url(" + __webpack_require__(298) + ") format('woff'),\n    url(" + __webpack_require__(299) + ") format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n", ""]);

	// exports


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.woff2";

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.woff";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/MaterialIcons-Regular.ttf";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./loader.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./loader.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".loader, .loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 8px;\n  position: absolute;\n  left: 47%;\n  top: 35%;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(303);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--full.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./movie--full.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".image-load-container {\n  position: absolute;\n  background-color: #ccc;\n}\n\n.movie--image__full {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  max-width: 100%;\n  opacity: 0\n}\n\n.movie--image__full.img__loaded {\n  opacity: 1;\n}\n\n.movie--title__full {\n  font-size: 80px;\n  margin-top: 170px;\n  text-shadow: 0 0 15px #000;\n  position: relative;\n  color: #fff;\n}\n\n.movie--tagline__full {\n  position: relative;\n  color: #fff;\n  text-shadow: 0 0 15px #000;\n  text-align: center;\n}\n\n.movie--info__full {\n  background: rgba(255,255,255, 1);\n  position: relative;\n  padding: 2em;\n  margin-top: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.movie--genres {\n  width: 100%;\n}\n\n.movie--details {\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  padding-right: 1.5em;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.movie--overview__full {\n  font-size: 20px;\n  padding-right: 1.5em;\n  -ms-flex-preferred-size: 60%;\n      flex-basis: 60%;\n}\n\n.movie--overview__full p {\n  line-height: 30px;\n  margin-top: 1em;\n}\n\n.movie--score__full {\n  -ms-flex-preferred-size: 14%;\n      flex-basis: 14%;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.movie--score__full .score {\n  background: #000;\n  text-align: center;\n  display: block;\n  padding: 30px;\n  border-radius: 50%;\n  font-weight: 400;\n  color: #fff;\n  font-size: 50px;\n}\n", ""]);

	// exports


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _genres = __webpack_require__(305);

	var _genres2 = _interopRequireDefault(_genres);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GenreList = function GenreList(props) {

	  var genres = props.genres.map(function (genre) {
	    return _react2.default.createElement(
	      'div',
	      { className: 'genre genre-' + genre.id, key: genre.id },
	      genre.name
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'movie--genres' },
	    genres
	  );
	};

	exports.default = GenreList;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(306);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./genres.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./genres.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, "/* TODO:\n  Maybe fetch genrelist from https://api.themoviedb.org/3/genre/movie/list?api_key=\n  and add the colors to them in js?\n*/\n\n.genre {\n  background: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 0.5em 1em;\n  line-height: 1em;\n  font-weight: 400;\n  margin: 0 0.5em 0.5em 0;\n  border-radius: 20px\n}\n\n.genre-28 {\n  background-color: #F34336\n}\n\n.genre-12 {\n  background-color: #E81E63\n}\n\n.genre-16 {\n  background-color: #9B27AF\n}\n\n.genre-35 {\n  background-color: #673AB7\n}\n\n.genre-80 {\n  background-color: #3F51B4\n}\n\n.genre-99 {\n  background-color: #4CAE50\n}\n\n.genre-18 {\n  background-color: #FE9700\n}\n\n.genre-10751 {\n  background-color: #2195F2\n}\n\n.genre-14 {\n  background-color: #8AC24A\n}\n\n.genre-36 {\n  background-color: #FE5722\n}\n\n.genre-27 {\n  background-color: #03A8F3\n}\n\n.genre-10402 {\n  background-color: #CCDB39\n}\n\n.genre-9648 {\n  background-color: #00BBD3\n}\n\n.genre-10749 {\n  background-color: #FEEA3B\n}\n\n.genre-878 {\n  background-color: #9D9D9D\n}\n\n.genre-10770 {\n  background-color: #FEC007\n}\n\n.genre-53 {\n  background-color: #607C8A\n}\n\n.genre-10752 {\n  background-color: #9D9D9D\n}\n\n.genre-37 {\n  background-color: #785548\n}\n", ""]);

	// exports


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _details = __webpack_require__(308);

	var _details2 = _interopRequireDefault(_details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Details = function Details(props) {
	  var _props$details = props.details,
	      release_date = _props$details.release_date,
	      revenue = _props$details.revenue,
	      budget = _props$details.budget,
	      runtime = _props$details.runtime;


	  return _react2.default.createElement(
	    'div',
	    { className: 'movie--details' },
	    _react2.default.createElement(
	      'div',
	      { className: 'details--item' },
	      _react2.default.createElement(
	        'label',
	        { className: 'details--label' },
	        'Release Date:'
	      ),
	      release_date
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'details--item' },
	      _react2.default.createElement(
	        'label',
	        { className: 'details--label' },
	        'Revenue:'
	      ),
	      revenue
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'details--item' },
	      _react2.default.createElement(
	        'label',
	        { className: 'details--label' },
	        'Budget:'
	      ),
	      budget
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'details--item' },
	      _react2.default.createElement(
	        'label',
	        { className: 'details--label' },
	        'Runtime:'
	      ),
	      runtime
	    )
	  );
	};

	exports.default = Details;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(309);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./details.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./details.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".details--item {\n  padding-bottom:0.5em;\n}\n\n.details--label {\n  font-weight: 400;\n  margin-right: 1em;\n}\n", ""]);

	// exports


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactTextTruncate = __webpack_require__(268);

	var _reactTextTruncate2 = _interopRequireDefault(_reactTextTruncate);

	var _reviews = __webpack_require__(311);

	var _reviews2 = _interopRequireDefault(_reviews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Reviews = function Reviews(props) {
	  var NumReviews = 3;
	  var reviews = props.data.results.slice(0, NumReviews).map(function (review) {
	    return _react2.default.createElement(
	      'div',
	      { className: 'review', key: review.id },
	      _react2.default.createElement(
	        'h3',
	        { className: 'review--author' },
	        review.author
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(_reactTextTruncate2.default, { containerClassName: 'review--content', line: 10, truncateText: '\u2026', text: review.content })
	      )
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__dark' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'section--title' },
	        'Reviews'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'reviews' },
	        reviews
	      )
	    )
	  );
	};

	exports.default = Reviews;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(312);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./reviews.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./reviews.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".reviews {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.review {\n  -ms-flex-preferred-size: 28%;\n      flex-basis: 28%;\n}\n\n.review--author {\n  text-align: center;\n  margin-bottom: 0.5em;\n  font-size: 25px;\n}\n\n.review--content {\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _cast = __webpack_require__(314);

	var _cast2 = _interopRequireDefault(_cast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Credits = function Credits(props) {
	  var castSize = 6;
	  var imageBaseUrl = props.config.images.secure_base_url;
	  var fileSize = 'w264_and_h264_bestv2';

	  var cast = props.data.cast.slice(0, castSize).map(function (castMember) {
	    return _react2.default.createElement(
	      'div',
	      { className: 'cast-member', key: castMember.id },
	      _react2.default.createElement('img', { className: 'cast-member--image', src: imageBaseUrl + fileSize + castMember.profile_path }),
	      _react2.default.createElement(
	        'div',
	        { className: 'cast-member--name' },
	        castMember.name
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'cast-member--character' },
	        castMember.character
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__light' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'section--title' },
	        'Cast'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'cast' },
	        cast
	      )
	    )
	  );
	};

	exports.default = Credits;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(315);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./cast.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./cast.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".cast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 2em 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n\n.cast-member {\n  -ms-flex-preferred-size: 13%;\n      flex-basis: 13%;\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.cast-member--name {\n  font-weight: 400;\n  margin: 0.5em 0;\n}\n\n.cast-member--character {\n  font-size: 14px;\n}\n\n.cast-member--image {\n  border-radius: 50%;\n  border: 3px solid #fff;\n}\n", ""]);

	// exports


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ResultList = __webpack_require__(290);

	var _ResultList2 = _interopRequireDefault(_ResultList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Similar = function Similar(props) {
	  var NumResults = 4;
	  props.data.results = props.data.results.slice(0, NumResults);

	  return _react2.default.createElement(
	    'div',
	    { className: 'section section__light' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'section--title' },
	        'You might also like'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'similar' },
	        props.config.images && _react2.default.createElement(_ResultList2.default, { data: props.data, config: props.config })
	      )
	    )
	  );
	};

	exports.default = Similar;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(172);

	var _BackButton = __webpack_require__(318);

	var _BackButton2 = _interopRequireDefault(_BackButton);

	var _Search = __webpack_require__(319);

	var _Search2 = _interopRequireDefault(_Search);

	var _SearchBox = __webpack_require__(320);

	var _SearchBox2 = _interopRequireDefault(_SearchBox);

	var _header = __webpack_require__(325);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

	    _this.toggleSearchBox = _this.toggleSearchBox.bind(_this);
	    _this.state = {
	      toggleSearchBox: false
	    };
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'toggleSearchBox',
	    value: function toggleSearchBox() {
	      this.setState({ toggleSearchBox: this.state.toggleSearchBox ? false : true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'div',
	        { className: 'header-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container navigation' },
	            _react2.default.createElement(_BackButton2.default, { goBack: this.props.history.goBack }),
	            _react2.default.createElement(
	              'ul',
	              { className: 'menu' },
	              _react2.default.createElement(
	                'li',
	                { className: 'menu--link' },
	                _react2.default.createElement(
	                  _reactRouter.IndexLink,
	                  { activeClassName: 'active', to: '/' },
	                  'Home'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'menu--link' },
	                _react2.default.createElement(
	                  _reactRouter.IndexLink,
	                  { activeClassName: 'active', to: '/about' },
	                  'About'
	                )
	              )
	            ),
	            _react2.default.createElement(_Search2.default, { toggleSearchBox: this.toggleSearchBox })
	          )
	        ),
	        _react2.default.createElement(_SearchBox2.default, { collapsed: this.state.toggleSearchBox })
	      );
	    }
	  }]);

	  return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialIcons = __webpack_require__(295);

	var _materialIcons2 = _interopRequireDefault(_materialIcons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackButton = function BackButton(props) {
	  return _react2.default.createElement(
	    'i',
	    { className: 'material-icons back-button', onClick: props.goBack },
	    'arrow_back'
	  );
	};

	exports.default = BackButton;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialIcons = __webpack_require__(295);

	var _materialIcons2 = _interopRequireDefault(_materialIcons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function Search(props) {
	  return _react2.default.createElement(
	    'i',
	    { className: 'material-icons search', onClick: props.toggleSearchBox.bind(undefined) },
	    'search'
	  );
	};

	exports.default = Search;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Classnames = __webpack_require__(321);

	var _Classnames2 = _interopRequireDefault(_Classnames);

	var _ApiConnect = __webpack_require__(243);

	var _ApiConnect2 = _interopRequireDefault(_ApiConnect);

	var _SearchResults = __webpack_require__(322);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _search = __webpack_require__(323);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_React$Component) {
	  _inherits(SearchBox, _React$Component);

	  function SearchBox() {
	    _classCallCheck(this, SearchBox);

	    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

	    _this.query = _this.query.bind(_this);
	    _this.state = {
	      searchResults: ''
	    };
	    return _this;
	  }

	  _createClass(SearchBox, [{
	    key: 'query',
	    value: function query(e) {
	      var _this2 = this;

	      _ApiConnect2.default.Search(e.target.value).then(function (searchResults) {
	        _this2.setState({
	          searchResults: searchResults
	        });
	      });
	    }
	  }, {
	    key: 'submit',
	    value: function submit(e) {
	      console.log('submit');
	      console.log(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var searchBoxClasses = (0, _Classnames2.default)({
	        'searchbox': true,
	        'collapsed': this.props.collapsed
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: searchBoxClasses },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.submit },
	            _react2.default.createElement('input', { className: 'searchbox--input', type: 'text', onChange: this.query })
	          ),
	          this.state.searchResults && _react2.default.createElement(_SearchResults2.default, { results: this.state.searchResults })
	        )
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react2.default.Component);

	exports.default = SearchBox;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(235);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _reactRouter = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchResults = function SearchResults(props) {

	  var results = props.results.results.map(function (results) {
	    var path = '/movie/' + results.id;
	    return _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      { transitionName: 'search--result', transitionEnterTimeout: 300, transitionLeaveTimeout: 300 },
	      _react2.default.createElement(
	        'div',
	        { className: 'search--result', key: results.id },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: path },
	          _react2.default.createElement(
	            'span',
	            { className: 'search-result--title' },
	            results.title
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'search-result--date' },
	            results.release_date
	          )
	        )
	      )
	    );
	  });

	  return _react2.default.createElement(
	    _reactAddonsCssTransitionGroup2.default,
	    { transitionName: 'search--results', transitionEnterTimeout: 30000, transitionLeaveTimeout: 30000 },
	    _react2.default.createElement(
	      'div',
	      { className: 'search--results container' },
	      results
	    )
	  );
	};

	exports.default = SearchResults;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(324);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./search.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./search.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".searchbox {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  transition: transform 0.3s cubic-bezier(0.15, 1, 0.33, 1), -webkit-transform 0.3s cubic-bezier(0.15, 1, 0.33, 1);\n  background: red;\n  padding: 1em\n}\n\n.searchbox.collapsed {\n  -webkit-transform: translateY(0);\n          transform: translateY(0)\n}\n\n.searchbox--input {\n  width: 100%;\n  padding: 1em;\n  font-size: 20px;\n}\n\n.search--results {\n  background: #fff;\n  position: absolute;\n}\n\n.search--result {\n  border-bottom: 1px solid #eee;\n  padding: 1em;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.search--result-enter {\n  padding: 0 1em;\n  opacity: 0;\n}\n\n.search--result-enter-active {\n  padding: 1em;\n  opacity: 1;\n}\n\n.search--result-leave {\n  padding: 1em;\n  opacity: 1;\n}\n\n.search--result-leave-active {\n  padding: 0 1em;\n  opacity: 0;\n}\n\n.search--results-enter {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.search--results-enter-active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.search--results-leave {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.search--results-leave-active {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n", ""]);

	// exports


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(326);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./header.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".header {\n  position: relative;\n  background: #515151;\n  z-index: 100;\n}\n\n.navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 60px;\n  color: #fff;\n}\n\n.menu {\n  font-size: 30px;\n  text-align: center;\n  margin: 0;\n}\n\n.menu .menu--link {\n  display: inline;\n}\n\n.menu .menu--link a {\n  padding: 0 15px;\n  display: inline-block;\n  font-weight: 700;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #fff\n}\n\n.menu .menu--link a.active {\n  background: #fff;\n  color: #000;\n}\n\n.back-button {\n  cursor: pointer;\n  color: #fff;\n  font-size: 36px;\n}\n\n.search {\n  font-size: 30px;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _footer = __webpack_require__(328);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tmdbLogo = __webpack_require__(330);
	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'footer section section__dark' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement('img', { className: 'footer--logo', src: tmdbLogo }),
	      _react2.default.createElement(
	        'a',
	        { href: 'https://github.com/lviit/themoviedb-react/' },
	        'https://github.com/lviit/themoviedb-react/'
	      )
	    )
	  );
	};

	exports.default = Footer;

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(329);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./footer.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./footer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, ".footer--logo {\n  display: block;\n  margin: 0 auto 2em auto;\n  width: 150px;\n}\n", ""]);

	// exports


/***/ },
/* 330 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./variables.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./variables.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(334);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./common.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

	// module
	exports.push([module.id, "html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nembed, img, object, video {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n}\n\na {\n  color: #000;\n}\n\nh1, h2, h3 {\n  font-weight: 700;\n  line-height: 1em;\n  margin: 0;\n}\n\nh1 {\n  margin: 0.5em;\n  text-align: center;\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 30px;\n  margin: 0 0 0.5em 0;\n}\n\np {\n  line-height: 25px;\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(336);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(272)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./layout.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./layout.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(271)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: #edeae1;\n  margin: 0;\n}\n\n.container {\n  width: 60em;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.section {\n  position: relative;\n  padding: 3em;\n}\n\n.section .section--title {\n  text-align: center;\n  margin-bottom: 1em;\n  font-size: 50px;\n}\n\n.section__dark {\n  background-color: #515151;\n  color: #fff;\n}\n\n.section__dark a {\n  color: #fff;\n}\n\n.section__light {\n  background-color: #edeae1;\n}\n\n.footer {\n  text-align: center;\n  margin-top: 2em;\n}\n\n/*\n.page-wrapper {\n  transition: transform 0.5s cubic-bezier(0.15, 1, 0.33, 1);\n  position: absolute;\n  top: 55px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n}\n*/\n\n.pageSlider-enter {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.pageSlider-enter.pageSlider-enter-active {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n\n.pageSlider-leave {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n\n.pageSlider-leave.pageSlider-leave-active {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n", ""]);

	// exports


/***/ }
]);