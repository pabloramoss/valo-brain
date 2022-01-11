import {connectToDatabase} from '../../util/mongodb'

export default async function handler(req, res){
  const {db} = await connectToDatabase();
  const data = await db.collection("videos").aggregate([
    {
      $search: {
        search: {
          query: req.query.term,
          path: ["description", "title"]
        }
      }, {
        $limit: 50
      }
    }
  ])
}