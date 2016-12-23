var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
        <p>This is a weather application built on React.</p>
        <p>Here are some of the tools I have used for this.</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="https://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name
          </li>
        </ul>
    </div>
  )
};

module.exports = About;
