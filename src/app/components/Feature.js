export default function Feature() {
    return (
    <div className="flex items-center justify-center w-[100%]">
        <div className="bg-slate-100 flex justify-evenly items-center mt-10 w-[90%] h-[20rem] rounded-md">
            <div className='min-h-60 w-1/4 h-[80%] hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/easy_to_use.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Easy To Use</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimolore magna aliqua. </div>
            </div>
            <div className='min-h-60 w-1/4 h-[80%] hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/plugin.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Free Extension</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
            </div>
            <div className='min-h-60 w-1/4 h-[80%] hover:bg-white cursor-pointer rounded-md flex flex-col p-5'>
                <img src="/productivity.png" alt="feature1"  height={80} width={80} className='h-14 w-14 xl:h-24 xl:w-24'/>
                <div className='text-lg xl:text-2xl mt-4'>Boost Productivity</div>
                <div className='font-light xl:text-sm text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
    </div>
    </div>
    );
  }