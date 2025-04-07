

// function FarmerLogin() {

//   return (
//     <div id="FarmerRegister" className=" flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-xl  bg-white  w-[350px] ">
//             <span className="text-[#3F7D58] font-medium text-2xl  ">Fasal to Factory</span>
//             <h3 className="my-4 font-semibold">Login to your Farmer Account</h3>
//             <form  action="#" className="flex flex-col gap-2">
//                 <div>
//                     <label htmlFor="email">Email </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1" type="email" name="" id="email" placeholder="example@company.com" required/>
//                 </div>
//                 <div>
//                     <label htmlFor="pass"> Password </label><br />
//                     <input className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0  focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1" type="password" name="" id="pass" placeholder="password here" required/>
//                 </div>
               
               
//                 <button className="border-2 border-[#3F7D58] w-[240px] py-2 text-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">Login</button>
//             </form>
//         </div>
   
//   )
// }
// export default FarmerLogin;


// function FarmerLogin({ setEmail, setPassword, handleLogin }) {
//     return (
//       <div id="FarmerRegister" className="flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-xl bg-white w-[350px]">
//         <span className="text-[#3F7D58] font-medium text-2xl">Fasal to Factory</span>
//         <h3 className="my-4 font-semibold">Login to your Farmer Account</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}
//           className="flex flex-col gap-2"
//         >
//           <div>
//             <label htmlFor="email">Email</label>
//             <br />
//             <input
//               className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1"
//               type="email"
//               id="email"
//               placeholder="example@company.com"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="pass">Password</label>
//             <br />
//             <input
//               className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1"
//               type="password"
//               id="pass"
//               placeholder="password here"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="border-2 border-[#3F7D58] w-[240px] py-2 text-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
  
//   export default FarmerLogin;
  

function FarmerLogin({ setEmail, setPassword, handleLogin, loading }) {
  return (
    <div id="FarmerRegister" className="flex flex-col items-center justify-center px-12 py-4 rounded-lg shadow-xl bg-white w-[350px]">
      <span className="text-[#3F7D58] font-medium text-2xl">Fasal to Factory</span>
      <h3 className="my-4 font-semibold">Login to your Farmer Account</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="flex flex-col gap-2"
      >
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1"
            type="email"
            id="email"
            placeholder="example@company.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <br />
          <input
            className="w-[240px] px-2 py-1 border border-slate-400 focus:shadow-sm focus:border-0 focus:shadow-[#3F7D58] outline-none rounded-md text-md text-[#3F7D58] transition-all duration-300 my-1"
            type="password"
            id="pass"
            placeholder="password here"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="border-2 border-[#3F7D58] w-[240px] py-2 text-[#3F7D58] font-medium hover:bg-[#3F7D58] hover:text-white rounded-md transition-all duration-300 my-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default FarmerLogin;
