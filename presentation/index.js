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
  lifecycle: require("../images/lifecycle.png"),
  progressBarStopped: require("../images/progress-bar-stopped.gif"),
  progressBar: require("../images/progress-bar.gif"),
  redPanda: require("../images/red-panda.jpg"),
  squirrel: require("../images/squirrel.jpg"),
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
              Performance - What is it?
            </Heading>
            <List>
              <Appear><ListItem>Perceived performance</ListItem></Appear>
              <Appear><ListItem>Actual performance</ListItem></Appear>
              <Appear><ListItem>Examples: loading an application or site, performing an operation</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.progressBarStopped} bgDarken={0.25}>
            <Heading size={1} caps textColor="primary">
              No action
            </Heading>
            <Layout>
              <Text>
                <Link href="http://www.techzim.co.zw/wp-content/uploads/2015/08/progress-bar1.gif">Techzim</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.progressBar} bgDarken={0.25}>
            <Heading size={1} caps textColor="primary">
              Action (better)
            </Heading>
            <Layout>
              <Text>
                <Link href="http://www.techzim.co.zw/wp-content/uploads/2015/08/progress-bar1.gif">Techzim</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.squirrel} bgDarken={0.55}>
            <Heading size={1} caps textColor="primary">
              Caching
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/squirrel-attention-ears-cute-619968/">Pixabay / Oldiefan</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.redPanda} bgDarken={0.55}>
            <Heading size={1} caps textColor="primary">
              Avoiding Work
            </Heading>
            <Layout>
              <Text>
                <Link href="https://pixabay.com/en/red-panda-panda-less-pander-958118/">Pixabay / 1447441</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Premature optimization is the root of all evil - Donald Knuth</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Performance Tooling
            </Heading>
            <List>
              <Appear><ListItem><code>console.time('foo')</code>, <code>console.timeEnd('foo')</code></ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/RamonGebben/react-perf-tool">RamonGebben/react-perf-tool</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/garbles/why-did-you-update">garbles/why-did-you-update</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://facebook.github.io/react/docs/perf.html">React Performance Tools</Link> 1/2
            </Heading>
            <List>
              <Appear><ListItem>Development mode only - performance overhead</ListItem></Appear>
              <Appear><ListItem>Measure with <code>Perf.start()</code> and <code>Perf.stop()</code></ListItem></Appear>
              <Appear><ListItem><code>Perf.getLastMeasurements()</code></ListItem></Appear>
              <Appear><ListItem><Link href="http://survivejs.com/webpack/advanced-techniques/configuring-react/#exposing-react-performance-utilities-to-browser">Webpack setup</Link></ListItem></Appear>
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

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Lifecycle Methods
            </Heading>
            <Image src={images.lifecycle} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Demo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/demo.jsx")}
              margin="20px auto"
            />
            <Layout>
              <Text>
                <Link href="https://jsbin.com/nicuyo/17/edit?html,js,output">jsbin</Link>
              </Text>
            </Layout>
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
              <Appear><ListItem>Remember to set <code>process.env.NODE_ENV</code> to <code>production</code> when building to <b>avoid work</b></ListItem></Appear>
              <Appear><ListItem>Implement <code>shouldComponentUpdate</code> for critical parts (shallow vs. deep equal) to <b>avoid work</b></ListItem></Appear>
              <Appear><ListItem>Consider using <Link href="https://www.npmjs.com/package/react-lite">react-lite</Link> or <Link href="https://www.npmjs.com/package/preact">preact</Link> to <b>load faster</b></ListItem></Appear>
              <Appear><ListItem><Link href="http://reactabular.js.org/#/features/virtualization">Virtualize</Link> and do <b>less work</b></ListItem></Appear>
              <Appear><ListItem>Let browser carry the burden, do <Link href="http://reactabular.js.org/#/features/resizing-columns"><b>less work</b> again</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              General Tips
            </Heading>
            <List>
              <Appear><ListItem>Keep your dependencies up to date to <b>avoid work</b></ListItem></Appear>
              <Appear><ListItem>Leverage client <b>caching</b> (React, other deps) through vendor bundles (hash in name)</ListItem></Appear>
              <Appear><ListItem>Load vendor dependencies through a CDN with a local fallback to benefit from <b>caching</b></ListItem></Appear>
              <Appear><ListItem>Enable gzip on your server to <b>avoid work</b></ListItem></Appear>
              <Appear><ListItem>Check <b>caching</b> settings of your server</ListItem></Appear>
              <Appear><ListItem>Benchmark and spend most of the time on biggest wins to <b>avoid work</b></ListItem></Appear>
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
            <Heading size={1}>
              More Reading
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://speakerdeck.com/vjeux/react-rally-animated-react-performance-toolbox">Slides - Animated! by @vjeux</Link></ListItem></Appear>
              <Appear><ListItem><Link href="http://benchling.engineering/performance-engineering-with-react/">Performance Engineering with React (two parts) by Saif Hakim</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc">Component Rendering Performance in React by Grgur Grisogono</Link></ListItem></Appear>
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
