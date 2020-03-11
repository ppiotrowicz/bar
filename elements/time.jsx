import strftime from '../lib/strftime.js';
import { element, theme } from '../lib/style.js';

const render = ({ config, output, error, side, theme }) => {
  let now = new Date();
  let date = strftime(config.date_format, now);
  let time = strftime(config.time_format, now);
  var style = {
    ...element,
    ...config.style,
    float: side,
  }

  return error ? (
    <span style={style}>!</span>
  ) : (
    <span style={style}>
      <i className="far fa-calendar" style={{padding: '0 10px'}}></i>
      {date}
      <i className="far fa-clock" style={{padding: '0 10px'}}></i>
      {time}
    </span>
  )
}

export default render
