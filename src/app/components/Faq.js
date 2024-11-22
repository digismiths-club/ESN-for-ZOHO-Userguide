import FaqQuestion from "./FaqQuestion";


export default function Faq(){
    return(
        <div className="flex w-4/5 mt-8 mb-8 m-auto gap-10">
            <div className="w-[43%] flex flex-col gap-2">
                <h1 className="text-3xl">Frequently asked question (FAQ) :-</h1>
                <p className="font-extralight">Can’t find the answer you’re looking for? Reach out to our  
                    <a href="#" className="text-blue-700" > customer support </a> 
                    team.</p>
            </div>
            <div className="flex flex-col w-[55%]">
                <FaqQuestion/>
            </div>
        </div>
    );
}