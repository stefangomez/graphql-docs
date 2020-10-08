'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SchemaDocsView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _model = require('../model');

var _schemaWalker = require('../schemaWalker');

var _TypeDocsViews = require('./TypeDocsViews');

var _SchemaDocsView = require('./SchemaDocsView.css');

var StyleSheet = _interopRequireWildcard(_SchemaDocsView);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaDocsView = exports.SchemaDocsView = function (_React$Component) {
    _inherits(SchemaDocsView, _React$Component);

    function SchemaDocsView() {
        _classCallCheck(this, SchemaDocsView);

        return _possibleConstructorReturn(this, (SchemaDocsView.__proto__ || Object.getPrototypeOf(SchemaDocsView)).apply(this, arguments));
    }

    _createClass(SchemaDocsView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var types = (0, _schemaWalker.getReferencesInSchema)(this.props.schema).map(function (tn) {
                return _this2.props.schema.types[tn];
            });
            var components = [];

            types.forEach(function (t) {
                if (t instanceof _model.ObjectType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.ObjectDocsView, {
                        key: t.name,
                        type: t,
                        titleOverride: _this2.titleOverrideFor(t)
                    }));
                }
                if (t instanceof _model.UnionType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.UnionDocsView, {
                        key: t.name,
                        type: t
                    }));
                }
                if (t instanceof _model.InterfaceType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.InterfaceDocsView, {
                        key: t.name,
                        type: t
                    }));
                }
                if (t instanceof _model.EnumType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.EnumDocsView, {
                        key: t.name,
                        type: t
                    }));
                }
                if (t instanceof _model.InputObjectType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.InputObjectDocsView, {
                        key: t.name,
                        type: t
                    }));
                }
            });
            types.forEach(function (t) {
                if (t instanceof _model.ScalarType) {
                    components.push(_react2.default.createElement(_TypeDocsViews.ScalarDocsView, {
                        key: t.name,
                        type: t
                    }));
                }
            });

            return _react2.default.createElement(
                'div',
                { className: StyleSheet.wrapper },
                _react2.default.createElement(
                    'div',
                    { className: StyleSheet.container },
                    components
                )
            );
        }
    }, {
        key: 'titleOverrideFor',
        value: function titleOverrideFor(t) {
            if (t === this.props.schema.getQueryType()) {
                return 'Root query';
            }
            if (t === this.props.schema.getMutationType()) {
                return 'Mutations';
            }

            return null;
        }
    }]);

    return SchemaDocsView;
}(_react2.default.Component);