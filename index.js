const STYLE_EL_ID = "light-mode-reporter-styles"

function addStyleEL() {
  const styleEl = document.createElement("style")

  styleEl.id = STYLE_EL_ID
  styleEl.innerHTML = `

    .reporter {
      border-right: 1px solid #e1e3ed
    }

    .reporter,
    .reporter header,
    .reporter .container,
    .reporter .runnable-header,
    .reporter .commands-container,
    .reporter .runnable,
    .reporter .testing-preferences-header {
      background-color: #f8f9ff
    }

    .reporter .command-wrapper {
      background-color: #fff !important
    }

    .reporter header button:hover,
    .reporter .controls .testing-preferences-toggle.open {
      background-color: #e1e3ed
    }

    .reporter *:not(button):not([class*=command-state]):not(.runnable-err):not(.test-err-code-frame *) {
      color: #2e3247
    }

    .reporter .no-tests {
      background-color: #f3f4fa
    }

    .reporter .wrap {
      border-color: #e1e3ed !important
    }

    .reporter .runnable-title,
    .reporter strong,
    .reporter .stats li .num, {
      color: #434861 !important
    }

    .reporter .command-name-assert .command-state-passed .command-message strong {
      color: #00814d !important
    }

    .reporter .command-state-passed,
    .reporter .runnable.runnable-passed > div > .runnable-wrapper,
    .reporter .runnable.runnable-passed > div > .runnable-instruments {
      border-color: #00814d !important
    }

    .reporter .command-name-assert .command-state-failed .command-message strong {
      color: #c62b49 !important
    }
    .reporter .command-wrapper .command-alias.agent,
    .reporter .command-wrapper .command-alias.primitive,
    .reporter .command-wrapper .command-interceptions.agent,
    .reporter .command-wrapper .command-interceptions.primitive {
      background-color: #f0f1ff
    }

    .reporter .command-name-assert .command-state-pending .command-message strong {
      color: #9aa2fc !important
    }

    .reporter .runnable-header .icon-light {
      fill: #f3f4fa
    }

    .reporter .runnable-header .icon-dark {
      stroke: #bfc2d4
    }

    .reporter .runnable-header:before,
    .reporter .runnable-header:after {
      background-color: #e1e3ed !important
    }

    .reporter .command-name-assert .command-state-passed .command-method span {
      background-color: #c2f1de !important
    }

    .reporter .collapsible-content *:not(.test-err-code-frame *) {
      color: #434861 !important
    }

    .reporter .collapsible-content .runnable-err {
      background-color: #fbeff1 !important
    }

    .reporter .command-name-assert .command-state-failed .command-method span {
      background-color: #fad9df !important
    }

    .reporter .command-wrapper .command-alias.dom, .reporter .command-wrapper .command-interceptions.dom,
    .reporter .command-name-assert .command-state-pending .command-method span {
      background-color: #f0f1ff
  }

  .reporter .num-children, .reporter .num-elements {
    background-color: #f3f4fa
  }

  .reporter .command-wrapper.command-is-interactive:hover,
  .reporter button:hover,
  .reporter .collapsible-header-inner:hover,
  .reporter .hooks-container .hook-header:hover {
    background-color: #f3f4fa !important;
    cursor: pointer
  }

  .reporter .runnable-err .collapsible-header-inner:hover {
    background-color: #fad9df !important
  }

  .reporter .runnable-err-stack-expander .collapsible-header:hover .collapsible-indicator .icon-dark {
    stroke: #9f1331
  }

  .reporter .instruments-container .instrument-content {
    background-color: white
  }

  .reporter .command-pin {
    color: #e1e3ed !important
  }

  .reporter .no-commands {
    background-color: #f3f4fa
  }

  .reporter .stats,
  .reporter .controls,
  .reporter .controls button,
  .reporter .runnable-header .duration {
    border-color: #d0d2e0 !important
  }

  #unified-reporter .toggle-specs-wrapper * {
    color: #434861 !important
  }

  .reporter .runnable.suite > div > .runnable-wrapper .runnable-title {
    color: #434861 !important
  }

  .reporter .command-pin {
    position: relative;
    top: 3px
  }

  .reporter .command-pin path.icon-light {
    fill: #f3f4fa !important;
    position: relative;
    top: 3px
  }

  .reporter .test-err-code-frame {
    background-color: #f3f4fa
  }

  .reporter .test-err-code-frame .runnable-err-file-path {
    background-color: rgba(225, 227, 237, 0.5)
  }

  :not(pre) > code[class*=language-], pre[class*=language-] {
    background-color: #f3f4fa
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #747994;
    margin: 0;
    text-shadow: white 0px 1px
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #f3f4fa
  }

  .token.punctuation {
    color: #747994
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #9f1331
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #005f39
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.regex,
  .token.important,
  .token.variable {
    color: #963f00;
    background: #f3f4fa
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.function,
  .token.class-name {
    color: #3a46cc
  }

  .line-numbers-rows > span:before {
    color: #d0d2e0;
  }

  .line-highlight {
    background: linear-gradient(to right, rgba(46, 50, 71, .1) 100%, rgba(46, 50, 71, 0))
  }

  .runnable-err a {
    color: #4956e3
  }

  .runnable-err a:hover, .runnable-err a:active, .runnable-err a:focus {
    color: #2f3ab0
  }

  .runnable-err .runnable-err-file-path .icon-light {
    fill: #c5c9fd
  }

  .reporter .runnable .runnable-wrapper .collapsible-header:focus .collapsible-header-inner {
    background-color: #fff;
    outline: 1px solid #2f3ab0;  
    outline-offset: -1px;
  }

  #cypress-theme-toggle {
    border: 1px solid #d0d2e0;
    border-radius: 6px;
    height: 24px;
    padding: 0 6px;
    line-height: 0;
    color: #5a5f7a
  }



  [data-cy=specs-list-panel] .bg-gray-1000 {
    background-color: #f8f9ff !important
  }

  [data-cy=specs-list-panel] .text-gray-1000 {
    color: white !important
  }
  [data-cy=specs-list-panel] .text-gray-900 {
    color: #e1e3ed !important
  }
  [data-cy=specs-list-panel] .text-gray-800 {
    color: #d0d2e0 !important
  }
  [data-cy=specs-list-panel] .text-gray-700 {
    color: #5a5f7a !important
  }
  [data-cy=specs-list-panel] .text-gray-600 {
    color: #747994 !important
  }
  [data-cy=specs-list-panel] .text-gray-500 {
    color: #434861 !important
  }
  [data-cy=specs-list-panel] .text-gray-400 {
    color: #434861 !important
  }
  [data-cy=specs-list-panel] .text-gray-300 {
    color: #2e3247 !important
  }
  [data-cy=specs-list-panel] .text-gray-200 {
    color: #2e3247 !important
  }
  [data-cy=specs-list-panel] .text-gray-100 {
    color: #1b1e2e !important
  }
  [data-cy=specs-list-panel] .text-gray-50 {
    color: #1b1e2e !important
  }

  [data-cy=specs-list-panel] .text-white {
    color: black !important
  }
  [data-cy=specs-list-panel] .text-black {
    color: white !important
  }

  [data-cy=specs-list-panel] svg {
    filter: invert(100%) hue-rotate(180deg);
  }
  [data-cy=specs-list-panel] .bg-gradient-to-b {
    display: none;
  }
  [data-cy=specs-list-panel] .focus-visible\\:bg-gray-900:focus-visible {
    background-color: #e1e3ed !important
  }
  [data-cy=specs-list-panel] .border-gray-900 {
    border-color: #e1e3ed !important
  }
  [data-cy=specs-list-panel] .hocus\\:border-indigo-300:hover,
  [data-cy=specs-list-panel] .hocus\\:border-indigo-300:focus {
    border-color: #2f3ab0 !important
  }
  [data-cy=specs-list-panel] .force-dark,
  #unified-reporter.force-dark {
    color-scheme: light;
  }
  [data-cy=specs-list-panel] .group:hover .group-hover\\:text-indigo-300 {
    color: #2f3ab0!important
  }
  [data-cy=specs-list-panel] .group:focus .group-focus\\:text-indigo-300 {
    color: #2f3ab0!important
  }
  [data-cy=specs-list-panel] .before\\:border-r-indigo-300::before {
    border-color: #2f3ab0!important
  }
  [data-cy=specs-list-panel] .before\\:hover\\:border-r-indigo-300:hover::before {
    border-color: #2f3ab0!important
  }

  `

  top.document.querySelector("body").appendChild(styleEl)
}

export default function setLightTheme(isLight = undefined) {
  if (!top.document.getElementById("cypress-theme-toggle")) {
    const button = document.createElement("button")
    button.id = "cypress-theme-toggle"

    button.addEventListener("click", () =>
      setLightTheme(top.localStorage.getItem("theme") === "dark")
    )
    top.document.querySelector(".reporter .spacer").appendChild(button)
  }

  if (
    isLight ||
    (isLight === undefined && !top.localStorage.getItem("theme"))
  ) {
    top.localStorage.setItem("theme", "light")
  } else if (isLight === false) {
    top.localStorage.setItem("theme", "dark")
  }

  if (top.localStorage.getItem("theme") === "light") {
    addStyleEL()
    top.document.getElementById("cypress-theme-toggle").innerText = "Dark"
  } else if (top.document.getElementById(STYLE_EL_ID)) {
    top.document.getElementById(STYLE_EL_ID).remove()
    top.document.getElementById("cypress-theme-toggle").innerText = "Light"
  }
}
