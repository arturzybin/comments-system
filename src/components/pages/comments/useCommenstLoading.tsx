import { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IComment, IStore } from '../../../constants/typescript-types'
import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { addComments, setCommentsOver } from '../../../redux/actions'


export function useCommentsLoading() {
   const dispatch = useDispatch()
   const {comments, isCommentsOver} = useSelector((state: IStore) => state.commentsStore)
   
   const firebase = useContext(FirebaseContext)

   const limit: number = 50
   const [query, setQuery] = useState(firebase.commentsRef().orderBy('created').limit(limit))
   const [loading, setLoading] = useState<boolean>(false)
   
   
   function loadComments() {
      if (loading) return
      setLoading(true)
      
      query.get().then((documentSnapshots) => {
         if (documentSnapshots.docs.length < limit) dispatch(setCommentsOver())
         if (!documentSnapshots.docs.length) return
         
         const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
         setQuery(firebase.commentsRef().orderBy('created').limit(limit).startAfter(lastVisible))
         
         const loadedComments = documentSnapshots.docs.map((doc) => doc.data() as IComment)
         dispatch(addComments(loadedComments))
         
         setLoading(false)
      })
   }
   

   useEffect(() => {
      if (!comments.length) loadComments()
      //eslint-disable-next-line
   }, [])

   return {comments, loadComments, isCommentsOver}
}