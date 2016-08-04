import React from 'react'
import cards from 'reactcards'
import App from '../src/App'
import * as appTests from '../test/App'

const demo = cards('demo')

demo.card(
    `## markdown doc
  you can use markdown for card documentation
  - foo
  - bar`,
    <App message="hello foo"/>
)

demo.card(<App message="hello world"/>)

demo.markdown(`
# a markdown card
this is a simple markdown card
- lorem
- ipsum
`)

demo.test(appTests, {title:'simple tests'})

demo.test(
    `## component tests
  Here you can see the results of some component tests.`,
    appTests
)
