const cards= [
    {
      title: "Select a Project (or select an existing one, if you have one)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step2.png"
    },
    {
      title: "Create a New Project (or select an existing one, if you have one)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step3.png"
    },
    {
      title: "Give your project a name (perhaps based on your websites name)",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step4.png"
    },
    {
      title: "Select the Project you just created. You can do this by the notification at the top right:",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step5.png"
    },
    {
      title: "Create the API key. On the API Credentials page click the “CREATE CREDENTIALS” button, and then choose “API Key”",
      url: "https://cdn.digismiths.com/google-widgets-images/gmap_step6.png"
    },
  ]

  export default function GoogleApi() {
    return (
      <div className="w-[100%] px-28">
        {cards.map((val,idx)=>{
          return (
            <div key={idx} className="flex flex-col m-auto mb-10 w-[100%]">
            <div className="flex items-center gap-4 w-[100%] border">
              <div className="flex">
                <div className="text-center place-content-center text-3xl border text-white bg-slate-800 h-[4rem] w-[4rem]">{idx+1}</div>
              </div>
              <div className='text-lg'>
                  {val.title}
                </div>
            </div>
            <div className="p-8 flex items-center justify-center w-[100%] border">
               <img src={val.url} />
             </div>
          </div>
          )
        })}
      </div>
    );
  }