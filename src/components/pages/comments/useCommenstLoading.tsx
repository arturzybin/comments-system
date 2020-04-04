import { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IComment, IGlobalState } from '../../../constants/typescript-types'
import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { addComments } from '../../../redux/actions'


export function useCommentsLoading() {
   const dispatch = useDispatch()
   const comments = useSelector((state: IGlobalState) => state.comments)
   
   const firebase = useContext(FirebaseContext)

   const limit: number = 50
   const [query, setQuery] = useState(firebase.commentsRef().orderBy('created').limit(limit))
   const [loading, setLoading] = useState<boolean>(false)
   const [commentsOver, setCommenstOver] = useState<boolean>(false)
   
   
   function loadComments() {
      if (loading) return
      setLoading(true)
      
      query.get().then((documentSnapshots) => {
         if (documentSnapshots.docs.length < limit) setCommenstOver(true)
         if (!documentSnapshots.docs.length) return
         
         const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
         setQuery(firebase.commentsRef().orderBy('created').limit(limit).startAfter(lastVisible))
         
         const loadedComments = documentSnapshots.docs.map((doc) => doc.data() as IComment)
         dispatch(addComments(loadedComments))
         
         setLoading(false)
      })
   }
   

   useEffect(() => {
      loadComments()
      //eslint-disable-next-line
   }, [])

   return {comments, loadComments, isCommentsOver: commentsOver}
}