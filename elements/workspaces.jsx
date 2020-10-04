import { element } from '../lib/style.js';

const render = ({ config, output, error, side, data }) => {
  var style = {
    ...element,
    ...config.style,
    float: side,
  }

  var iconStyle = {
    padding: '0 4px'
  }

  var spaceStyle = (position, space) => {
    var style = {
      height: "23px",
      display: 'inline-block',
      padding: '0 8px'
    }
    if (position == parseInt(space)) {
      style.borderBottom = '2px solid #5699af'
    }
    return style
  }

  let errorContent = (
    <span style={style}>!</span>
  )

  let workspaces = (
    <span style={style}>
      <span style={spaceStyle(1, data)}>
        <i className="fab fa-slack-hash" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(2, data)}>
        <i className="fa fa-envelope" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(3, data)}>
        <i className="fab fa-firefox" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(4, data)}>
        <i className="far fa-window-restore" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(5, data)}>
        <i className="far fa-code" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(6, data)}>
        <i className="fa fa-terminal" style={iconStyle}></i>
      </span>
      <span style={spaceStyle(7, data)}>
        <i className="fab fa-spotify" style={iconStyle}></i>
      </span>
    </span>
  )

  return workspaces
}

export default render
