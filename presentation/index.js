// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React Performance
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link> 1/2
            </Heading>
            <List>
              <Appear><ListItem>Development mode only - performance overhead</ListItem></Appear>
              <Appear><ListItem>Measure with <code>Perf.start()</code> and <code>Perf.stop()</code></ListItem></Appear>
              <Appear><ListItem>Get results with <code>Perf.getLastMeasurements()</code></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link> 2/2
            </Heading>
            <List>
              <Appear><ListItem><code>Perf.printInclusive(measurements)</code></ListItem></Appear>
              <Appear><ListItem><code>Perf.printExclusive(measurements)</code></ListItem></Appear>
              <Appear><ListItem><code><b>Perf.printWasted(measurements)</b></code></ListItem></Appear>
              <Appear><ListItem><code>Perf.printOperations(measurements)</code></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Chrome Tips
            </Heading>
            <List>
              <Appear><ListItem>Note the flashing at the <b>Elements</b> tab</ListItem></Appear>
              <Appear><ListItem>Keep an eye on the <b>Network</b> tab (latency)</ListItem></Appear>
              <Appear><ListItem>Take a memory snapshot and analyze at the <b>Profiles</b> tab</ListItem></Appear>
              <Appear><ListItem>Note different performance in development/production!</ListItem></Appear>
              <Appear><ListItem><Link href="https://developers.google.com/web/tools/chrome-devtools/profile/memory-problems/memory-diagnosis">Google tutorial</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              React Tips
            </Heading>
            <List>
              <Appear><ListItem>Remember to set <code>process.env.NODE_ENV</code> to <code>production</code> when building</ListItem></Appear>
              <Appear><ListItem>Consider using <Link href="https://www.npmjs.com/package/react-lite">react-lite</Link> or <Link href="https://www.npmjs.com/package/preact">preact</Link></ListItem></Appear>
              <Appear><ListItem>Leverage client caching (React, other deps) through vendor bundles (hash in name)</ListItem></Appear>
              <Appear><ListItem>Consider loading vendor dependencies through a CDN with a local fallback</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Profile the performance of your React application using <Link href="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link></ListItem></Appear>
              <Appear><ListItem>Profile the memory usage of your React application using Chrome utilities</ListItem></Appear>
              <Appear><ListItem>*Build your application in production mode and try again. Can you see a difference?</ListItem></Appear>
              <Appear><ListItem>**Build your application with <Link href="https://www.npmjs.com/package/react-lite">react-lite</Link> and try again. Can you see a difference?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
