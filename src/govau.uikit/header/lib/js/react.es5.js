'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);require('../css/styles.css');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}/**
 * All theme options
 *
 * @type {Object}
 */var themes={light:'uikit-header--light',dark:'uikit-header--dark'};/**
 * DEFAULT
 * The header component
 *
 * @param  {string}  title    - The title of the header
 * @param  {string}  level    - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  subline  - An optional subline, optional
 * @param  {boolean} hero     - The hero option, optional
 * @param  {string}  theme    - Optional theme that can be either: light dark, optional
 * @param  {node}    children - The inside of this section
 */// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
/*! @gov.au/header v1.2.0 *//***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/var Header=function Header(_ref){var title=_ref.title,level=_ref.level,subline=_ref.subline,hero=_ref.hero,theme=_ref.theme,children=_ref.children;var HeadingTag='h'+level;return _react2.default.createElement('div',{className:'uikit-header'+(hero?' uikit-header--hero':'')+(theme?' '+themes[theme]:''),role:'banner'},_react2.default.createElement(HeadingTag,{className:'uikit-header-heading'},title),subline&&_react2.default.createElement('span',{className:'uikit-header-subline'},subline),children)};Header.propTypes={title:_propTypes2.default.node.isRequired,level:_propTypes2.default.oneOf(['1','2','3','4','5','6']).isRequired,subline:_propTypes2.default.node,hero:_propTypes2.default.bool,theme:_propTypes2.default.oneOf(['light','dark']),children:_propTypes2.default.node};Header.defaultProps={level:'1'};exports.default=Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJsaWdodCIsImRhcmsiLCJIZWFkZXIiLCJ0aXRsZSIsImxldmVsIiwic3VibGluZSIsImhlcm8iLCJ0aGVtZSIsImNoaWxkcmVuIiwiSGVhZGluZ1RhZyIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoic0VBU0EsNEIsMkNBQ0EscUMsbURBTUEsNkIsa0ZBRUE7Ozs7R0FLQSxHQUFNQSxRQUFTLENBQ2RDLE1BQU8scUJBRE8sQ0FFZEMsS0FBTSxvQkFGUSxDQUFmLENBS0E7Ozs7Ozs7Ozs7R0FmQTtBQUNBO0FBQ0E7QUFmQSw0QkFDQTs7Ozs7O2dLQXNDQSxHQUFNQyxRQUFTLFFBQVRBLE9BQVMsTUFBc0QsSUFBbkRDLE1BQW1ELE1BQW5EQSxLQUFtRCxDQUE1Q0MsS0FBNEMsTUFBNUNBLEtBQTRDLENBQXJDQyxPQUFxQyxNQUFyQ0EsT0FBcUMsQ0FBNUJDLElBQTRCLE1BQTVCQSxJQUE0QixDQUF0QkMsS0FBc0IsTUFBdEJBLEtBQXNCLENBQWZDLFFBQWUsTUFBZkEsUUFBZSxDQUNwRSxHQUFNQyxnQkFBa0JMLEtBQXhCLENBRUEsTUFDQyxzQ0FBSywwQkFBMkJFLEtBQU8scUJBQVAsQ0FBK0IsRUFBMUQsR0FBaUVDLFVBQWFSLE9BQVFRLEtBQVIsQ0FBYixDQUFrQyxFQUFuRyxDQUFMLENBQStHLEtBQUssUUFBcEgsRUFDQyw4QkFBQyxVQUFELEVBQVksVUFBVSxzQkFBdEIsRUFBK0NKLEtBQS9DLENBREQsQ0FFR0UsU0FBVyxzQ0FBTSxVQUFVLHNCQUFoQixFQUF5Q0EsT0FBekMsQ0FGZCxDQUdHRyxRQUhILENBTUQsQ0FWRCxDQVlBTixPQUFPUSxTQUFQLENBQW1CLENBQ2xCUCxNQUFPLG9CQUFVUSxJQUFWLENBQWVDLFVBREosQ0FFbEJSLE1BQU8sb0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBRSxHQUFGLENBQU8sR0FBUCxDQUFZLEdBQVosQ0FBaUIsR0FBakIsQ0FBc0IsR0FBdEIsQ0FBMkIsR0FBM0IsQ0FBaEIsRUFBa0RELFVBRnZDLENBR2xCUCxRQUFTLG9CQUFVTSxJQUhELENBSWxCTCxLQUFNLG9CQUFVUSxJQUpFLENBS2xCUCxNQUFPLG9CQUFVTSxLQUFWLENBQWdCLENBQUUsT0FBRixDQUFXLE1BQVgsQ0FBaEIsQ0FMVyxDQU1sQkwsU0FBVSxvQkFBVUcsSUFORixDQUFuQixDQVNBVCxPQUFPYSxZQUFQLENBQXNCLENBQ3JCWCxNQUFPLEdBRGMsQ0FBdEIsQyxnQkFJZUYsTSIsImZpbGUiOiJyZWFjdC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvdi5hdS9oZWFkZXIgdjEuMi4wICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKlxuICogaGVhZGVyIGZ1bmN0aW9uXG4gKlxuICogSGVhZGVycyBwcm92aWRlIGEgY29uc2lzdGVudCBzdGFydCB0byBwYWdlcy5cbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbi8vIFRoZSBmb2xsb3dpbmcgbGluZSB3aWxsIGJlIHJlcGxhY2VkIGF1dG9tYXRpY2FsbHkgd2l0aCBnZW5lcmljIGltcG9ydHMgZm9yIHRoZSBFUzUgcGlwZWxpbmUuXG4vLyBZb3UgY2FuIHNhZmVseSBpZ25vcmUgdGhpcyBiaXQgaWYgeW91IHVzZSB0aGlzIG1vZHVsZSB3aXRoIHBhbmNha2Vcbi8vXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBBbGwgdGhlbWUgb3B0aW9uc1xuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRoZW1lcyA9IHtcblx0bGlnaHQ6ICd1aWtpdC1oZWFkZXItLWxpZ2h0Jyxcblx0ZGFyazogJ3Vpa2l0LWhlYWRlci0tZGFyaycsXG59O1xuXG4vKipcbiAqIERFRkFVTFRcbiAqIFRoZSBoZWFkZXIgY29tcG9uZW50XG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdGl0bGUgICAgLSBUaGUgdGl0bGUgb2YgdGhlIGhlYWRlclxuICogQHBhcmFtICB7c3RyaW5nfSAgbGV2ZWwgICAgLSBUaGUgdGFnIGxldmVsICg8aDEvPiA8aDIvPiBldGMpLCBkZWZhdWx0OiAnMSdcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN1YmxpbmUgIC0gQW4gb3B0aW9uYWwgc3VibGluZSwgb3B0aW9uYWxcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGhlcm8gICAgIC0gVGhlIGhlcm8gb3B0aW9uLCBvcHRpb25hbFxuICogQHBhcmFtICB7c3RyaW5nfSAgdGhlbWUgICAgLSBPcHRpb25hbCB0aGVtZSB0aGF0IGNhbiBiZSBlaXRoZXI6IGxpZ2h0IGRhcmssIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtub2RlfSAgICBjaGlsZHJlbiAtIFRoZSBpbnNpZGUgb2YgdGhpcyBzZWN0aW9uXG4gKi9cbmNvbnN0IEhlYWRlciA9ICh7IHRpdGxlLCBsZXZlbCwgc3VibGluZSwgaGVybywgdGhlbWUsIGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgSGVhZGluZ1RhZyA9IGBoJHsgbGV2ZWwgfWA7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YHVpa2l0LWhlYWRlciR7IGhlcm8gPyAnIHVpa2l0LWhlYWRlci0taGVybycgOiAnJyB9JHsgdGhlbWUgPyBgICR7IHRoZW1lc1sgdGhlbWUgXSB9YCA6ICcnIH1gfSByb2xlPVwiYmFubmVyXCI+XG5cdFx0XHQ8SGVhZGluZ1RhZyBjbGFzc05hbWU9XCJ1aWtpdC1oZWFkZXItaGVhZGluZ1wiPnsgdGl0bGUgfTwvSGVhZGluZ1RhZz5cblx0XHRcdHsgc3VibGluZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJ1aWtpdC1oZWFkZXItc3VibGluZVwiPnsgc3VibGluZSB9PC9zcGFuPiB9XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXHRsZXZlbDogUHJvcFR5cGVzLm9uZU9mKFsgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JyBdKS5pc1JlcXVpcmVkLFxuXHRzdWJsaW5lOiBQcm9wVHlwZXMubm9kZSxcblx0aGVybzogUHJvcFR5cGVzLmJvb2wsXG5cdHRoZW1lOiBQcm9wVHlwZXMub25lT2YoWyAnbGlnaHQnLCAnZGFyaycgXSksXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGxldmVsOiAnMScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=