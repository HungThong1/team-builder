
import React from 'react'

const MemberCard = props => {
    const { name } = props
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}
export default MemberCard