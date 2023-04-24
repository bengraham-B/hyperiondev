import React from 'react'

export default function HeaderStyle() {
  return (
    <div>
         <style global jsx>
            {`
                h1 : {
                    background: red;
                    margin: 100px;
                    color: blue;
                }
            `}
        </style>
    </div>
  )
}
