function Input (ExtraClass,name,placeholder,type ) {
  return (
    <div>
      <input className= {`w-full py-[23px] pl-[20px] border-[1px] border-slate-500 rounded-p[6px] text-18px text-slate-500  outline-none  ${ExtraClass}`} name= {name}  placeholder= {placeholder} type= {type} />
    </div>
  )
}

export default Input
