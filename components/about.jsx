import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto flex justify-between items-center bg-blue-50 w-2/3">

            <div className="w-2/3 pb-4 justify-center">
                <p className="text-xl text-gray-700 p-8 leading-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iste sed dolore voluptate nisi necessitatibus sequi explicabo quidem nobis! Corporis assumenda, quos maiores laborum culpa dignissimos sed necessitatibus dicta recusandae?
                    Dolorum fugit consequuntur laborum rerum voluptates vero eaque labore laudantium, perspiciatis perferendis, consequatur sapiente atque! Ad necessitatibus eveniet inventore numquam odio, id provident accusamus atque incidunt enim hic sunt animi?
                    Rem expedita totam quibusdam sapiente sint temporibus, consequuntur alias distinctio nostrum corrupti quasi aut velit dicta dolore maxime delectus explicabo incidunt a nobis nihil, natus architecto blanditiis! Animi, magnam alias!
                </p>
                <p className="px-8 leading-8 font-semibold">
                    <a href="https://83nji.github.io/about" className='inline-block'>Learn more <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></a>
                </p>
                <div className="bg-white-300 p-8">
                    <p className="text-gray-600">Get the latest posts delivered right to your inbox</p>
                    <form className="flex items-center mt-4">
                        <input type="email" className="rounded-l bg-white-100 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-gray-100 px-2 py-2 w-3/4" placeholder="Subscribe to newsletter" />
                        <button className="px-4 bg-blue-500 text-white font-semibold p-2 rounded-r">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="w-1/3 h-4/4">
                <img src="https://source.unsplash.com/random" alt="random" />
            </div>
        </div>

    )
}

export default About