import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <main className="w-[1200px] h-[800px] bg-white shadow-md rounded-md flex">
  
        <div className="w-2/5 h-full bg-[#DC5B12] flex flex-col items-center justify-center relative">
          <h1 className="text-5xl font-bold text-white -mt-80">Welcome Back</h1>
          <p className="text-lg text-[#FFFFFFB2] absolute w-[362px] h-[48px] top-[314px] left-[76px] gap-0 opacity-100">
            Sign in with your credentials to enjoy our uninterrupted services
          </p>

          <p className="text-lg text-[#00000066] absolute w-[362px] h-[48px] top-[400px] left-[6px] gap-0 opacity-100 mt-0 flex items-center justify-center">
            Don't have an account yet?
          </p>

          <img 
            src="/images/image 4.png"
            alt="Sepet"
            className="absolute w-[150px] h-[150px] top-[490px] left-[50%] transform -translate-x-1/2"
          />

          <button className="absolute w-[392px] h-[60px] top-[690px] left-[55px] rounded-[50px_50px_50px_50px] opacity-100 bg-[#DC5B12] text-white border-2 border-[#ECECECC2]">
            CLICK HERE TO SIGN UP
          </button>
        </div>

        <div className="w-3/5 h-full bg-[#FFFFFFB2] flex flex-col items-start justify-start pl-16">
          <h2 className="text-[#000000CC] text-[70px] font-bold leading-[85.33px] text-left mt-24">
            SIGN IN TO SHEY
          </h2>
          <div className="flex items-center justify-center space-x-8 mt-8 ml-48">
            <img 
              src="/images/image2.png" 
              alt="Image 1"
              className="w-[50px] h-[50px]"
            />
            <img 
              src="/images/image6.png" 
              alt="Image 2"
              className="w-[50px] h-[50px]"
            />
            <img 
              src="/images/image5.png" 
              alt="Image 3"
              className="w-[50px] h-[50px]"
            />
          </div>

          <div className="flex items-center justify-center space-x-4 mt-6 ml-16">
            <div className="w-[200px] h-[1px] bg-black"></div>
            <span className="text-2xl font-bold text-black mx-4">OR</span>
            <div className="w-[200px] h-[1px] bg-black"></div>
          </div>

          <div className="mt-4 text-lg font-semibold text-center text-[#00000066] ml-40 text-2xl">
            use email and password
          </div>

          <div className="relative mt-10 ml-10">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-[542px] h-[66px] bg-[#ECECECC2] rounded-[50px_50px_50px_50px] opacity-100 px-4" 
            />
          </div>
          <div className="relative mt-10 ml-10">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-[542px] h-[66px] bg-[#ECECECC2] rounded-[50px_50px_50px_50px] opacity-100 px-4" 
            />
          </div>
          <div className="relative mt-8 ml-10">
          <button className="w-[542px] h-[66px] bg-[#DC5B12] rounded-[50px_50px_50px_50px] opacity-100 text-white px-4 text-3xl font-bold">
              LOGIN
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
