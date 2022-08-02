const STYLE_EL_ID = 'light-mode-reporter-styles'

function addStyleEL () {
  const styleEl = document.createElement('style')

  styleEl.id = STYLE_EL_ID
  styleEl.innerHTML = `
    
    .reporter {
      border-right: 1px solid #ddd;
    }
  
    .reporter header,
    .reporter .container, 
    .reporter .runnable-header,
    .reporter .commands-container,
    .reporter .command-wrapper,
    .reporter .runnable {
      background-color: #fbfbfb
    }
  
    .reporter *:not(button):not([class*=command-state]):not(.runnable-err):not(.test-err-code-frame *) {
      color: #444
    }
  
    .reporter .no-tests {
      background-color: #efefef
    }
    
    .reporter .wrap {
      border-color: #e1e3ed !important
    }
  
    .reporter .runnable-title,
    .reporter strong,
     .reporter .stats li .num, {
      color: #555 !important
    }
  
    .reporter .command-name-assert .command-state-passed .command-message strong {
      color: #047b4a !important;
    }

    .reporter .command-state-passed,
    .reporter .runnable.runnable-passed > div > .runnable-wrapper, 
    .reporter .runnable.runnable-passed > div > .runnable-instruments {
      border-color: #047b4a !important;
    }
  
    .reporter .command-name-assert .command-state-failed .command-message strong {
      color: #cf0000 !important
    }
    .reporter .command-wrapper .command-alias.agent, 
    .reporter .command-wrapper .command-alias.primitive, 
    .reporter .command-wrapper .command-interceptions.agent, 
    .reporter .command-wrapper .command-interceptions.primitive {
      background-color: #ddf1ff;
    }
    
    .reporter .command-name-assert .command-state-pending .command-message strong {
      color: #8490f6 !important
    }
  
    .reporter .runnable-header .icon-light {
      fill: #fcfcfc
    }
  
    .reporter .runnable-header .icon-dark {
      stroke: #bbb
    }
  
    .reporter .runnable-header:before,
    .reporter .runnable-header:after {
      background-color: #e1e3ed !important
    }
  
    .reporter .command-name-assert .command-state-passed .command-method span {
      background-color: #d5edd6 !important
    }
  
    .reporter .collapsible-content *:not(.test-err-code-frame *) {
      color: #555555 !important
    }
  
    .reporter .collapsible-content .runnable-err {
      background-color: #fff4f4 !important
    }
  
    .reporter .command-name-assert .command-state-failed .command-method span {
      background-color: #f7d3d3 !important
    }
  
    .reporter .command-wrapper .command-alias.dom, .reporter .command-wrapper .command-interceptions.dom,
    .reporter .command-name-assert .command-state-pending .command-method span  {
      background-color: #e3e6ff;
  }
  
  .reporter .num-children, .reporter .num-elements {
    background-color: #efefef
  }
  
  .reporter .command-wrapper.command-is-interactive:hover,
  .reporter button:hover,
  .reporter .collapsible-header-inner:hover,
  .reporter .hooks-container .hook-header:hover {
    background-color: #eeeeee !important;
    cursor: pointer;
  }
  
  .reporter .instruments-container .instrument-content {
    background-color: white
  }
  
  .reporter .command-pin {
    color: #ddd !important
  }
  
  .reporter .no-commands {
    background-color: #eee
  }
  
  .reporter .stats,
  .reporter .controls,
  .reporter .controls button,
  .reporter .runnable-header .duration {
   border-color: #ccc !important
  }
  
  #unified-reporter .toggle-specs-wrapper * {
    color: #434861 !important
  }
  
  .reporter .runnable.suite > div > .runnable-wrapper .runnable-title {
    color: #434861 !important
  }
  
  .reporter .command-pin {
    position: relative;
    top: 3px;
  }
  
  .reporter .command-pin path.icon-light {
    fill: #eee !important;
    position: relative;
    top: 3px;
  }

  #cypress-theme-toggle {
    border: 1px solid #ccc;
    border-radius: 6px;
    height: 24px;
    padding: 0 6px;
    line-height: 0;
    color: #666
  }

  
   
  [data-cy=specs-list-panel] .bg-gray-1000 {
      background-color: #fbfbfb!important;
    }
  
  [data-cy=specs-list-panel] .text-gray-1000 {
      color: white!important;
    }
  [data-cy=specs-list-panel] .text-gray-900 {
      color: #e1e3ed!important;
    }
  [data-cy=specs-list-panel] .text-gray-800 {
      color: #d0d2e0!important;
    }
  [data-cy=specs-list-panel] .text-gray-700 {
      color: #5a5f7a!important;
    }
  [data-cy=specs-list-panel] .text-gray-600 {
      color: #747994!important;
    }
  [data-cy=specs-list-panel] .text-gray-500 {
      color: #434861!important;
    }
  [data-cy=specs-list-panel] .text-gray-400 {
      color: #434861!important;
    }
  [data-cy=specs-list-panel] .text-gray-300 {
      color: #2e3247!important;
    }
  [data-cy=specs-list-panel] .text-gray-200 {
      color: #2e3247!important;
    }
  [data-cy=specs-list-panel] .text-gray-100 {
      color: #1b1e2e!important;
    }
  [data-cy=specs-list-panel] .text-gray-50 {
      color: #1b1e2e!important;
    }
  
  [data-cy=specs-list-panel] .text-white {
      color: black!important;
    }
  [data-cy=specs-list-panel] .text-black {
      color: white!important;
    }
  
  [data-cy=specs-list-panel] svg {
      filter: invert(100%) hue-rotate(180deg);
    }
  [data-cy=specs-list-panel] .bg-gradient-to-b {
      display: none;
    }
  [data-cy=specs-list-panel] .focus-visible\\:bg-gray-900:focus-visible {
      background-color: #e1e3ed !important;
    }
  [data-cy=specs-list-panel] .border-gray-900 {
      border-color: #e1e3ed!important;
    }
  [data-cy=specs-list-panel] .force-dark {
      color-scheme: light;
    }
  [data-cy=specs-list-panel] .group:hover .group-hover\\:text-indigo-300 {
      color: #2f3ab0!important;
    }
  [data-cy=specs-list-panel] .group:focus .group-focus\\:text-indigo-300 {
      color: #2f3ab0!important;
    }
  [data-cy=specs-list-panel] .before\\:border-r-indigo-300::before {
      border-color: #2f3ab0!important;
    }
  [data-cy=specs-list-panel] .before\\:hover\\:border-r-indigo-300:hover::before {
      border-color: #2f3ab0!important;
    }
  
  `

  top.document.querySelector('body').appendChild(styleEl)
}

export default function setLightTheme (isLight = undefined) {
  if (!top.document.getElementById('cypress-theme-toggle')) {
    const button = document.createElement('button')
    button.id = "cypress-theme-toggle"

    button.addEventListener('click', () => setLightTheme(top.localStorage.getItem('theme') === 'dark'))
    top.document.querySelector('.reporter .spacer').appendChild(button)
  }

  if (isLight || (isLight === undefined && !top?.localStorage.getItem('theme'))) {
    top.localStorage.setItem('theme', 'light')
  } else if (isLight === false) {
    top.localStorage.setItem('theme', 'dark')
  }

  if (top.localStorage.getItem('theme') === 'light') {
    addStyleEL()
    top.document.getElementById('cypress-theme-toggle').innerText = 'Dark'
  } else if (top.document.getElementById(STYLE_EL_ID)) {
    top.document.getElementById(STYLE_EL_ID).remove()
    top.document.getElementById('cypress-theme-toggle').innerText = 'Light'
  }
}