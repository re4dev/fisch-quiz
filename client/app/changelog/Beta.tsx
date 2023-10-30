'use client'

import { Card, CardBody, Divider } from '@nextui-org/react'
import React from 'react'



export default function Beta(props: { version: string }) {
  var changes = changesBeta;
  switch (props.version) {
    case "beta":
      changes = changesBeta;
      break;
    case "v1":
      changes = changesV1;
    default:
      break;
  }
  return (
    <div>
      <Card className='bg-slate-100 w-11/12 sm:w-4/6 mx-auto' shadow='md'>
        <CardBody>
          {changes.map((change) => {
            return (
              <div key={change.date} className='px-5 py-2 mt-2'>
                <p className='flex justify-end sm:pr-8 font-semibold text-sm sm:text-base'>Datum: {change.date}</p>
                {change.items.map((item) => {
                  return (
                    <div key={item.title} className='mt-4 mx-auto pl-1 sm:pl-2 py-1'>
                      <p className='font-semibold text-sm sm:text-base'>- {item.title}</p>
                      <p className='text-xs font-thin pl-3'>{item.description}</p>
                    </div>
                  );
                })}
                <Divider className='mt-2'></Divider>
              </div>
            );
          })}
        </CardBody>
      </Card>
    </div>
  )
}

const changesV1 = [
  {
    date: "XX.XX.2024",
    items: [
      {
        title: "COMING SOON",
        description: ""
      },
    ]
  },
]

const changesBeta = [
  {
    date: "29.10.2023",
    items: [
      {
        title: "Add navigation to the page",
        description: "You will now find a navigation bar on each page."
      },
    ]
  },
  {
    date: "30.10.2023",
    items: [
      {
        title: "Add changelog page",
        description: "Now you can find all the changes on the changelog page."
      },
    ]
  },
]