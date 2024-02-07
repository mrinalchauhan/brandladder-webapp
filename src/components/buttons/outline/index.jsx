import React from 'react'

const OutlineButton = ({ text, onclickFun }) => {
  return (
    <button
      onClick={onclickFun}
      className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
      {text}
    </button>
  )
}

export default OutlineButton
