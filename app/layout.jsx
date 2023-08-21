import '@styles/globals.css'

const metadata = {
  title: 'Home | 83NJI',
  description: 'My home page',
  keywords: 'Home, 83NJI, 83nji, 83nji.github.io, 83nji.github.io/home, 83nji.github.io/home/index.html',
}


const Rootlayout = ({ children }) => {
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
        <nav className="bg-white-800 py-12 w-2/3 mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-black text-2xl font-bold">83NJI</div>
            <ul className="flex space-x-4 w-1/2 justify-between">
              <li><a href="#" className="text-black hover:underline">About</a></li>
              <li><a href="#" className="text-black hover:underline">Publications</a></li>
              <li><a href="#" className="text-black hover:underline">Projects</a></li>
              <li><a href="#" className="text-black hover:underline">Courses</a></li>
              <li><a href="#" className="text-black hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

export default Rootlayout