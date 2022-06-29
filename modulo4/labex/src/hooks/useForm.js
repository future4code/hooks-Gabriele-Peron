import { useState } from "react"

export const useForm = (inititalState)=>{
const [form, setForm] = useState(inititalState)

const onChange =(Event)=>{
  const {name, value} = Event.target
  setForm({...form, [name]: value})
}

const cleanFields = ()=>{
  setForm(inititalState)
}

return {form, onChange, cleanFields}
}