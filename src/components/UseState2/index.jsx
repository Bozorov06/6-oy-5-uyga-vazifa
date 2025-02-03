import React, {useState} from "react";

import "./index.module.css"

function UseState2(){
     const [form, setForm] = useState({
       name: "",
       price: "",
       category: "",
     });

     function handleSubmitUniver(event) {
       event.preventDefault();
       console.log(form);

       setForm({
         name: '',
         price: '',
         category: '',
       });
     }

     return (
       <>
       <strong>UseStateni 2-masalasi</strong>
         <div>
           <form onSubmit={handleSubmitUniver}>
             <input
               value={form.name}
               onChange={(e) => {
                 setForm({ ...form, name: e.target.value });
               }}
               type="text"
               placeholder="Mahsulot nomini kiriting"
             />
             <input
               value={form.price}
               onChange={(e) => {
                 setForm({ ...form, price: e.target.value });
               }}
               type="number"
               placeholder="Mahsulot narxini kiriting"
             />
             <select
               value={form.category}
               onChange={(e) => {
                 setForm({ ...form, category: e.target.value });
               }}
             >
               <option>Kategoriyalar...</option>
               <option value="Kiyimlar">Kiyimlar</option>
               <option value="O'yinchoqlar">O'yinchoqlar</option>
               <option value="Kitoblar">Kitoblar</option>
               <option value="Texnikalar">Texnikalar</option>
             </select>
             <button>Save</button>
           </form>
         </div>
       </>
     );
}


export default UseState2;