import React from 'react';
const NewMember = props =>{
    const {value, update, submit } = props
    const change = evt => {
        const { name, value } = evt.target
    
        update(name, value)
      }
    
      const oSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    return(
    <form onSubmit={oSubmit}>
    <input name='Name' type="text" value={value.name} onChange={change} />
    <button disabled={!value.name} >submit</button>
    </form>
    )
}
export default NewMember