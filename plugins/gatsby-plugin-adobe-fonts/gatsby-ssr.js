import React from 'react'

const knownOptions = {
  id: `string`,
}

const revealDuration = 300

export const onRenderBody = (
  {setHeadComponents, setPostBodyComponents},
  pluginOptions,
) => {
  setHeadComponents([
    <script
      key={`gatsby-plugin-adobe-fonts-html-js`}
      dangerouslySetInnerHTML={{__html: `
        document.documentElement.classList.add('js')
      `}} />,
    <style
      key={`gatsby-plugin-adobe-fonts-hide-body`}
      dangerouslySetInnerHTML={{__html: `
        html.js body {
          opacity: 0;
          transition: opacity ${revealDuration / 1000}s;
        }
        html.js body.reveal {
          opacity: 1;
        }
      `}} />,
  ])
  setPostBodyComponents([
    <div
      key={`gatsby-plugin-adobe-fonts-hide-bodyx`}
      style={{display: 'none'}}
      dangerouslySetInnerHTML={{__html: `
      <script src="https://use.typekit.net/${pluginOptions.id}.js"></script>
      <script>
        ;(function() {
          function reveal() {
            setTimeout(function() {
              document.body.classList.add('reveal')
            }, 1)
          }
          try {
            // https://helpx.adobe.com/typekit/using/font-events.html
            Typekit.load({
              async: true,
              active: reveal,
              inactive: reveal,
            })
          } catch(e) {
            reveal()
          }
        })()
      </script>
    `}} />,
  ])
}
