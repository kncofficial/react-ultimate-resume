"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    paper: {
      backgroundColor: [palette.dark[50], '!important']
    },
    content: {
      display: 'flex',
      padding: [[spacing * 2, spacing * 3, 0], '!important']
    },
    actions: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    palettesList: function palettesList(_ref) {
      var onlyShowPalettesList = _ref.onlyShowPalettesList;
      return _objectSpread({}, onlyShowPalettesList && {
        flex: 1
      });
    },
    dividerContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    divider: {
      height: 0,
      width: 0,
      backgroundColor: palette.dark[100],
      margin: [0, spacing * 6]
    },
    cardsOrderer: {
      flex: 1
    }
  };
};

exports.styles = styles;