import { useState, useContext } from 'react'
import { IComment } from '../../../constants/typescript-types'
import { FirebaseContext } from '../../../firebase/FirebaseContext'


export function useCommentsLoading() {
   const firebase = useContext(FirebaseContext)
   const [comments, setComments] = useState<IComment[]>([])
   const [query, setQuery] = useState(firebase.commentsRef().orderBy('created').limit(50))
   const [loading, setLoading] = useState<boolean>(false)


   function loadComments() {
      if (loading) return
      setLoading(true)

      query.get().then((documentSnapshots) => {
         const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
         setQuery(firebase.commentsRef().orderBy('created').limit(50).startAfter(lastVisible))

         const loadedComments: IComment[] = []
         documentSnapshots.forEach((doc) => loadedComments.push(doc.data() as IComment))
         setComments([...comments, ...loadedComments])
         setLoading(false)
      })
   }


   if (!comments.length) loadComments()

   return {comments, loadComments}
}