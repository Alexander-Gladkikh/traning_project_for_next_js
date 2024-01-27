// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = BockType[]

const bocksDB = [
  {id: 1, title: 'name'},
  {id: 2, title: 'name1'},
  {id: 3, title: 'title'},
  {id: 4, title: 'Name'},
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === 'GET') {
    let books = bocksDB

    const term = req.query.term as string

    if(term) {
      books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
    }

    res.status(200).json(books)
  }

}

// type

type BockType = {
  id: number;
  title: string;
}
