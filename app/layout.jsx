import '@styles/globals.css'

const metadata = {
  title: 'Layout',
  description: 'Layout',
  keywords: 'Layout',
}


const layout = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <div id="root">Hello</div>
      </body>
    </html>
  )
}

export default layout