import type { NextApiRequest, NextApiResponse } from 'next'
import  randomProverb  from 'utilities/randomProverb'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ proverb: randomProverb() })
  }

  