
 const imgArr =[
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Sign in and install our extension from zoho marketplace."
      },
      {
        "url": "https://cdn.digismiths.com/google-widgets-images/gmap_step2.png",
        "title": "Create and enter your google maps API key."
      },
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Our widget works on following modules: Leads, Accounts, Contacts, Quotes, Invoices, Sales Orders, Purchase Orders. Create/Edit on these modules, click on Google Autocomplete button to start the widget."
      },
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Enter partial address & suggestions would be displayed."
      },
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Select a Mailing Address, Other Address or both on Contact module. The address will map accordingly."
      },
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Select a Shiping Address, Billing Address or both on Account, Quotes, Invoices, Sales Orders, Purchase Orders module. The address will map accordingly."
      },
      {
        "url": "https://digismiths-club.github.io/zoho-widget-user-guide/1.jpg",
        "title": "Changes would be reflected after setting the location."
      }
    ]

    export default function Steps() {
      return (
        <div className="w-[100%] px-28">
          {imgArr.map((val,idx)=>{
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