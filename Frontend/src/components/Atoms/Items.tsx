import { isURL } from '@/utils'
import React from 'react'

interface ItemProps {
  title: string
  value: any
  Extra?: React.JSXElementConstructor<any>
}

export const ItemView = ({ title, value }: ItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="w-fit text-2xl border-b-4 border-blue-600">{title}</p>
      {isURL(value) ? (
        <img
          src={value}
          alt="game cover"
          className="w-32 aspect-square object-cover object-top"
        />
      ) : (
        <p className="text-left text-lg break-all">{value}</p>
      )}
    </div>
  )
}

export const ItemListView = ({ title, value, Extra }: ItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="pr-0.5 w-fit text-2xl font-medium border-b-4 border-blue-600">
        {title}
      </p>
      <div className="grow flex items-center flex-wrap gap-2">
        {value.map((item: any) => {
          return item.IdRent ? (
            Extra && <Extra key={item.IdRent} id={item.IdVideoGamesRental} />
          ) : (
            <p key={item} className="py-0.5 px-2 text-lg bg-blue-600 rounded">
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}
