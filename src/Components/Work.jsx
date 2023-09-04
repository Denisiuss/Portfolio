import React from 'react'
import MTracker from '../Assets/moneyTracker.png'
import WeatherApp from '../Assets/WeatherApp.png'
import GoogleTranslate from '../Assets/GoogleTranslate.png'
import Website from '../Assets/WebsitePortfolio.png'
import ToDoApp from '../Assets/ToDoApp.png'
import Wordle from '../Assets/Wordle.png'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${MTracker})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Money Tracker App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Denisiuss/moneyTrackerFront">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://moneytackerapp.onrender.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${GoogleTranslate})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Google Translate Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Denisiuss/google-translate-app/tree/main/google-translate-clone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://google-translate-app.onrender.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${WeatherApp})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Denisiuss/weather-react-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://reactweatherapp-q0ge.onrender.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Website})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Website Portfolio 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ToDoApp})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ToDo List App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Denisiuss/toDoListApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://todoapp-yyd0.onrender.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Wordle})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wordle Game Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Denisiuss/wordleClone.github.io">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href="https://denisiuss.github.io/wordleClone.github.io/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work