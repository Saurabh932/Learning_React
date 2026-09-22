import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex item-center gap-10 justify-between h-[90vh] px-18'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
