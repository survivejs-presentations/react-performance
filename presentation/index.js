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
            <Heading caps fit size={1}>
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* 2016 - 73.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Appear fid="1">
              <Heading size={2} caps fit>
                Inline JavaScript
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                AJAX (async)
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>
                Single Page Applications
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Universal JavaScript
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Java is to JavaScript as car is to carpet</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Build Tools
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem>1st Gen.</TableHeaderItem>
                    <TableHeaderItem>2nd Gen.</TableHeaderItem>
                    <TableHeaderItem>3rd Gen.</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>Make</TableItem>
                    <TableItem>Grunt</TableItem>
                    <TableItem>Browserify</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem></TableItem>
                    <TableItem>Gulp</TableItem>
                    <TableItem>Webpack</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem></TableItem>
                    <TableItem>Broccoli</TableItem>
                    <TableItem>JSPM</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              The Problem of Template
            </Heading>
            <List>
              <Appear><ListItem>Problem 1</ListItem></Appear>
              <Appear><ListItem>Problem 2</ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Image src={images.survivejs} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              Solution
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Minimal Demo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/demo.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Exercise 1</ListItem></Appear>
              <Appear><ListItem>*Exercise 2</ListItem></Appear>
              <Appear><ListItem>**Exercise 3</ListItem></Appear>
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
