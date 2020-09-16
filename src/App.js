import React,{useState} from 'react';
import MemberForm from './MemberForm'
import MemberCard from './MemberCard'
const memberList = [
  { name: 'Member1'},
  { name: 'Member2'},
  { name: 'Member3'},
]
const initialFormValues = {
  name: '',
}
function App() {
  const [members, setMember] = useState(memberList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const change = (name, value) => {
      setFormValues({...formValues, [name]: value})
  }
  const submit = () => {
      const newMember = {
          name:formValues.name.trim()
      }
      setMember([members,newMember])
      setFormValues(initialFormValues)
  }
  return (
      <div>
        <MemberForm value = {formValues} update = {change} submit = {submit} />
          <h1>Team</h1>
          {
              members.map((member,index) => {
                 return (
                 <MemberCard key = {index} name = {member.name} />
                 )
              })
          }
      </div>
  )
}
export default App;
